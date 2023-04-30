# vite-react-template
This is a template using `vite` that will spin up a development environment that can be used to build React-based web applications. It allows for:

* **TypeScript** support
* Web app development using **React 18**.
* Unit testing using **jest**
* E2E testing using **Playwright** 

The intention of the template is to allow an easy experience in spinning up a new React project where modern tools can be used. 

`vite` is the build tool of choice as it is fast, and easy to configure.



## How to Use

First clone this repository and modify `package.json` to your project name.

Then perform the following steps to get development environment working:

```
npm install
npm run dev
```

Navigate to `http://localhost:5173` to see the Sample App working.



## How to Test

```powershell
# Unit test
npm test

# E2E test
npm run test:e2e
```



## Directory Structure

Everything is in `src` . You can add unit tests the same directory as source files. `App.tsx` is the default entry point to the web app and is included in a `script` tag in `index.html`. 



Playwright tests are found in `src/playwright-tests` and use `.spec.ts` naming structure.



## Finally

Enjoy! 🎉



## Contact

urbanspr1nter [at] gmail.com
