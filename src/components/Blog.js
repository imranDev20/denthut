import React from "react";

const Blog = () => {
  return (
    <main className="container mx-auto px-10 my-10">
      <div>
        <div className="my-5">
          <h2 className="text-3xl text-neutral-600 font-medium my-2">
            Difference between Authentication and Authorization?
          </h2>
          <p className="text-neutral-500">
            Authentication is the act of validating that users are whom they
            claim to be. This is the first step in any security process.
          </p>
          <p className="text-neutral-500">
            Authentication, in the form of a key. The lock on the door only
            grants access to someone with the correct key in much the same way
            that a system only grants access to users who have the correct
            credentials. Verifies credentials .Through passwords, biometrics,
            one-time pins, or apps
          </p>

          <p className="text-neutral-500">
            Authorization in system security is the process of giving the user
            permission to access a specific resource or function. This term is
            often used interchangeably with access control or client privilege.
          </p>
          <p className="text-neutral-500">
            Authorization, in the form of permissions. Once inside, the person
            has the authorization to access the kitchen and open the cupboard
            that holds the pet food. The person may not have permission to go
            into the bedroom for a quick nap. Grants or denies permissions
            Through settings maintained by security teams
          </p>
        </div>

        <div className="my-5">
          <h2 className="text-3xl text-neutral-600 font-medium my-2">
            Why are using firebase ?
          </h2>
          <p className="text-neutral-500">
            Firebase is a less technical and time-saving alternative to writing
            full-fledged backend code for dynamic apps. You might also want to
            consider leveraging this tool if you eventually wish to host and
            manage your app in the cloud. Being serverless, Firebase removes the
            need to worry about the technicalities of cloud server
            configuration. As a Google Cloud service, it also gives you access
            to other Google products and features, like Google Drive and Sheets.
            For instance, you can import dummy data from Google Sheets and use
            it temporarily to serve your app.
          </p>
          <p className="text-neutral-500">
            What other options do you have to implement authentication? Other
            ways to authenticate can be through cards, retina scans, voice
            recognition, and fingerprints and react firebase hooks
          </p>
        </div>

        <div className="my-5">
          <h2 className="text-3xl text-neutral-600 font-medium my-2">
            What other services does firebase provide other than authentication
            ?
          </h2>
          <p className="text-neutral-500">
            Cloud Firestore Cloud Functions, Authentication, Hosting Cloud
            Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic
            Links, Remote Config
          </p>
        </div>
      </div>
    </main>
  );
};

export default Blog;
