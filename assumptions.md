# Assumptions

This file outlines the assumptions made during the development of this technical challenge.

---

- I assumed Next.js 15.5.0 was acceptable, as it is the current stable version at the time of development.

- I assumed the App Router (app/) was acceptable instead of the legacy Pages Router.

- I assumed it was acceptable to expose the API URL via the NEXT_PUBLIC_API_BASE_URL environment variable.

- I assumed it was acceptable not to use any UI component library or collection, such as MUI or ShadCN, since the UI requirements are quite simple.

- I assumed the evaluation team will access the deployed app via the Vercel domain (https://technical-challenge-joaquin.vercel.app/) or run a local dev instance:

```bash
  npm install
  npm run dev
```

- Vercel automatically configures itself to deploy pull requests when a project is imported and connected to a Git repository. This feature is known as "Preview Deployments." We can access the preview either from Vercel or from GitHub in the pull request page in the Checks tab.

However [we can explicitly configure it](https://vercel.com/docs/project-configuration/git-configuration#git.deploymentenabled) at the project's root in a file named vercel.json:

```
// vercel.json
{
  "git": {
    "deploymentEnabled": {
      "main": true,
      "preview": true
    }
  }
}
```

- SWR default behavior is to automatically [revalidate after regaining connection](https://swr.vercel.app/docs/revalidation#revalidate-on-reconnect) or [after an error](https://swr.vercel.app/docs/error-handling#error-retry), both of these can be disabled if needed, or overriden.
