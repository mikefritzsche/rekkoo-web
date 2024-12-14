const { execSync } = require('child_process');
const fs = require('fs');

// Get the current Git branch and commit hash
const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
const commitHash = execSync('git rev-parse --short HEAD').toString().trim();

// Write to the .env file
fs.writeFileSync(
  '.env',
  `VITE_GIT_BRANCH=${branch}\nVITE_GIT_COMMIT_HASH=${commitHash}\n`
);

console.log('Git info written to .env');
