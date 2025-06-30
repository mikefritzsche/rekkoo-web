const DataDeletion = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Data Deletion Instructions</h1>
      <p className="mb-4">
        To delete your data from our service, please follow these instructions. This process will permanently remove your account and all associated data.
      </p>
      <h2 className="text-2xl font-bold mb-2">Steps to Delete Your Data</h2>
      <ol className="list-decimal list-inside mb-4">
        <li className="mb-2">Log in to your account.</li>
        <li className="mb-2">Navigate to your account settings page.</li>
        <li className="mb-2">Find the &quot;Delete Account&quot; section.</li>
        <li className="mb-2">Click the &quot;Delete My Account&quot; button and confirm the action.</li>
      </ol>
      <h2 className="text-2xl font-bold mb-2">Data Deletion via Facebook</h2>
      <p className="mb-4">
        If you signed up using Facebook, you can also request data deletion through the Facebook platform. Go to your Facebook profile&apos;s &quot;Apps and Websites&quot; settings, find our app, and choose the &quot;Remove&quot; option. This will trigger our system to delete your associated data.
      </p>
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any trouble with this process, please contact our support team at <a href="mailto:support@rekkoo.com" className="text-blue-400 hover:text-blue-300">support@rekkoo.com</a> for assistance.
      </p>
    </div>
  );
};

export default DataDeletion;
