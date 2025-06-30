#!/bin/bash

# This script builds and deploys the application to the specified environment.
# It replicates the logic from the .circleci/config.yml file.

# Exit immediately if a command exits with a non-zero status.
set -e

# --- Configuration ---
# Configuration - update these values for your setup
HETZNER_DEPLOY_USER="root"  # Update with your server user
HETZNER_VPS_HOST="5.78.127.128"  # Update with your server address
VITE_API_URL="https://api.rekkoo.com/api/v1.0"

# The environment to deploy to (e.g., prod, staging, dev).
ENVIRONMENT=$1

# The SSH user and host for the deployment server.
# Replace with your actual values.
: "${HETZNER_DEPLOY_USER:?HETZNER_DEPLOY_USER is not set}"
: "${HETZNER_VPS_HOST:?HETZNER_VPS_HOST is not set}"
: "${VITE_API_URL:?VITE_API_URL is not set}"


# --- Script ---

# 1. Set environment-specific variables.
if [ -z "$ENVIRONMENT" ]; then
  echo "Usage: ./deploy.sh <environment>"
  echo "Available environments: prod, staging, dev"
  exit 1
fi

echo "Starting deployment to $ENVIRONMENT..."

# Sanitize branch name
SAFE_BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD | tr '/' '-' | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9-]/-/g')
echo "Current branch: $(git rev-parse --abbrev-ref HEAD)"
echo "Sanitized branch name: $SAFE_BRANCH_NAME"

# Use appropriate Dockerfile based on environment
DOCKERFILE="Dockerfile"
if [ "$ENVIRONMENT" = "staging" ]; then
  DOCKERFILE="Dockerfile.staging"
elif [ "$ENVIRONMENT" = "dev" ]; then
  DOCKERFILE="Dockerfile.dev"
fi
echo "Using $DOCKERFILE for build..."

# 2. Build the Docker image.
echo "Building Docker image..."
docker build --platform linux/amd64 -t "rekkoo-app:$(git rev-parse HEAD)" \
  --build-arg VITE_API_URL=${VITE_API_URL} \
  -f ${DOCKERFILE} .
docker tag "rekkoo-app:$(git rev-parse HEAD)" "rekkoo-app-${ENVIRONMENT}-${SAFE_BRANCH_NAME}:latest"

# 3. Save the Docker image to a tarball.
echo "Saving Docker image to a tarball..."
mkdir -p /tmp/docker-images
docker save "rekkoo-app-${ENVIRONMENT}-${SAFE_BRANCH_NAME}:latest" | gzip > /tmp/docker-images/rekkoo-app.tar.gz

# 4. Deploy to the remote server.
echo "Deploying to the remote server..."

# Set base directory
BASE_DIR="/home/rekkoo/web"
if [ "$ENVIRONMENT" = "prod" ]; then
  DEPLOY_DIR="${BASE_DIR}/prod"
  COMPOSE_FILES="docker-compose.yml docker-compose.prod.yml"
else
  DEPLOY_DIR="${BASE_DIR}/${ENVIRONMENT}/${SAFE_BRANCH_NAME}"
  COMPOSE_FILES="docker-compose.yml docker-compose.${ENVIRONMENT}.yml"
fi

echo "Starting deployment to ${DEPLOY_DIR}..."
echo "Environment: ${ENVIRONMENT}"
echo "Branch: ${SAFE_BRANCH_NAME}"

# Create deployment directory
ssh -o StrictHostKeyChecking=no ${HETZNER_DEPLOY_USER}@${HETZNER_VPS_HOST} "
  mkdir -p ${DEPLOY_DIR}
"

# Copy necessary files
for file in $COMPOSE_FILES nginx.conf; do
  scp -o StrictHostKeyChecking=no \
    $file \
    ${HETZNER_DEPLOY_USER}@${HETZNER_VPS_HOST}:${DEPLOY_DIR}/
done

# Copy docker image
scp -o StrictHostKeyChecking=no \
  /tmp/docker-images/rekkoo-app.tar.gz \
  ${HETZNER_DEPLOY_USER}@${HETZNER_VPS_HOST}:${DEPLOY_DIR}/

# Deploy
ssh -o StrictHostKeyChecking=no ${HETZNER_DEPLOY_USER}@${HETZNER_VPS_HOST} "
  cd ${DEPLOY_DIR} && \
  echo 'Loading Docker image...' && \
  gunzip -c rekkoo-app.tar.gz | docker load && \
  echo 'Creating .env file...' && \
  echo 'VITE_API_URL=${VITE_API_URL}' > .env && \
  echo 'Starting containers...' && \
  SAFE_BRANCH_NAME=${SAFE_BRANCH_NAME} \
  DEPLOY_ENV=${ENVIRONMENT} \
  docker compose -f docker-compose.yml -f docker-compose.${ENVIRONMENT}.yml up -d && \
  echo 'Cleaning up...' && \
  rm rekkoo-app.tar.gz && \
  echo 'Deployment completed for ${SAFE_BRANCH_NAME} to ${ENVIRONMENT}'
"

echo "Deployment to $ENVIRONMENT finished successfully."
