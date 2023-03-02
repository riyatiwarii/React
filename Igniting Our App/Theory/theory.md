# _Chapter 02 - Igniting our App_

## Q: What is `NPM`?
`NPM` doesn't stand for Node Package Manager but everything else i.e. Namaste Package Manager, Nhi Pta Mujhe.
`npm` is a lot of things by supporting the largest developer ecosystem in the world. 

* `npm` is the package manager for Node.js to help JavaScript developers easily share packaged modules of code.
* `npm` is the command line client that allows developers to install and publish those packages.

## Q: What is `Parcel/Webpack`? Why do we need it?
`Parcel`, `Webpack` and `Vite` are bundler alternatives.
### What is a Bundler?
A `bundler` takes all your separate JavaScript files and bundles them together in a single file that is ready to be deployed.

### Why do we need Bundler?
* `Too many script tags`: Earlier when frontend Javascript did not have a module system, every Javascript file had to be included with a script tag, and in the right order... this was tedious. So, the JS bundlers take several javascript files and "bundle" them into one file includes a script tag with the help of `browserify`.
* `More Complex Build Process`:
Now it's not a matter of just bundling but taking the code through serveral build steps.
1. `Transpiling the Code`: A lot of JavaScript is not simple JavaScript; it’s written in languages such as TypeScript or PureScript, Elm, CoffeeScript and then compiled to JavaScript. This code-to-code compilation is called transpilation.
2. `Code minification`: While building the application, as a developer you should write the code by giving meaningful names to variables, indenting the code and leaving comments for other developers. However, this adds nothing to the interpretor and minification comes into the picture which cleans the code by removing everything that has no impact on the application and reduces the payload size.
3. `Downgrade for older browsers`: When the language receives new features, the developers want to already use it but not all browsers support it. Luckily, `babel` allows us to use the latest update in language as it transpiles the code for the older browser to understand it.
4. `Bundle Size`: The JS libraries provides all sorts of useful utilities but to use just a few of them, we end up including the entire library size in our bundle which affects performance and is not a optimized thing. This is where `rollup` hits the scene with a cool new feature called `Tree Shaking` that allows us to only bundle what we used. So, if we used only one function from React library, only that function will be included in our bundle, not the whole library.
5: `Cache Optimization`: 

There are many things present for `image optimization`: development branch removal, image optimization that you can read on the internet and `cache optimization`: content hashing.

## Q: What is `.parcel-cache`?
The `.parcel-cache` folder stores information about your project when parcel builds it, so when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason for parcel being fast in development mode.
### Important Note
Be sure to add .cache and dist to your .gitignore file to prevent committing these folders to Git because parcel-cache is the space taken by parcel during production and it can get created in the server again.

## Q: What is `npx`?
`npx` is a tool used to execute packages.

| npm | npx |
|---|---|
| If you wish to run package through npm then you have to specify that package in your package.json and install it locally. | A package can be executable without installing the package. It is an npm package manager so if any packages aren't already installed it will install them automatically. |
| To use `create-react-app` in npm the commands are `npm install create-react-app` then `create-react-app myApp` (Installation required). | In npx you can create a react app without installing the package `npx create-react-app myApp` This command is required in every app’s life cycle only once.|
| Packages used by npm are installed globally. You have to care about pollution in the long term. | Packages used by npx are not installed globally. You don’t have to worry about for pollution in the long term.|

## Q: What is difference between `dependencies` vs `devDependencies`?

| dependencies | devDependencies |
|---|---|
| The libraries under dependencies are those that your project really needs to be able to work in production. | The libraries under devDependencies are those that you need during development.|
| The libraries you can find under dependencies include utility libraries such as lodash, classnames etc and also the "main" libraries of your project.| The libraries you can find under devDependencies include such as: (formatting libraries: eslint, prettier, ... ), (bundlers: webpack, gulp, parceljs, ...), (babel and all its plugins), (everything related to tests: enzyme, jest, ...)|
|Dependencies can be added to your project by running : `npm install <package_name>`| Dev dependencies can be added to your project by running : `npm install <package_name> --save-dev`

## Q: What is `Tree Shaking`?
Tree shaking is the process of eliminating unwanted code from the final bundle. It is important for preparing code that is production ready, for example with clean structures and minimal file size.

## Q: What is `Hot Module Replacement`?
Hot Module Replacement (HMR) is a feature that allows you to update parts of your application "on the fly" while an application is running, without a full reload.

## Q: List down your favorite `5 superpowers of Parcel` and describe any 3 of them in your own words.
My favorite `5 superpowers of Parcel`
* Zero Config
* Code Splitting
* Hot Module Replacement
* Code Transpilation
* Cache Optimization
### Any 3 of these:
* Zero Config - The lovely thing is that Parcel doesn't need any configuration with a one stop solution by providing a server, compilation and transpilation of code and other multicore processings.
* Code Splitting - Parcel allows you to split your application code into separate bundles which can be loaded on demand, which means smaller initial bundle sizes and faster load times. 
* Hot Module Replacement - (HMR) improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things. Parcel's HMR implementation supports both JavaScript and CSS assets.
## Q: What is `.gitignore`? What should we `add and not add` into it?
`.gitignore` is the file that you want the git to ignore during commit to the repository. 
### To add to the `.gitignore`
Ignored files are usually build artifacts and machine-generated files that can be derived from your repository source and shouldn't be commited.
* sensitive information, such as  passwords or API keys
* dependency caches, such as the contents of `/node_modules` or `/packages`
* build artifacts, such as `.parcel-cache` while using build tool like Parcel
* files generated at runtime, such as `.log`, `.lock`, or `.tmp`
* personal IDE config files, such as `.idea/workspace.xml`
### To not add to the `.gitignore`
* project configuration files that have dependencies and build settings for project, such as `package.json`, `.babelrc`.
* source code directories
* documentation of the project

## Q: What is the difference between `package.json` and `package-lock.json`?

### `packag.json` 
* The `packag.json` file is mandatory for every project that contains the basic information about the project such as name, description, author, script, and dependencies.

* It is typically created and modified manually by the developer to manage the project's dependencies and configuration.
### `package-lock.json` 
* The `package-lock.json` file gets automatically generated by npm upon installing any package/dependency for the project and it is a lockfile that provides an exact, deterministic list of all the installed packages and their dependencies, including their exact version numbers. 

* It is automatically generated by npm and updated whenever you install or update packages.
## Q: Why should not I modify `package-lock.json`?
Do not touch the `package-lock.json` file to modify it since it automatically gets updated using `npm update` command instead of manually primming the nodes which can make you run into unnecessary errors in the project.
## Q: What is `node_modules` ? Is it a good idea to push that on git?
`node_modules` is a directory that is created when you install packages in your project using a package manager like npm or yarn. The directory contains the packages and their dependencies, as well as any other files that are needed by the packages.

For example, if you install a package called my-package in your project using npm, it will be placed in the node_modules directory, along with any other dependencies that my-package requires. The directory structure might look something like this:

node_modules</br>
├── my-package</br>
│ ├── package.json</br>
│ ├── index.js</br>
│ ├── ...</br>
├── dep1</br>
│ ├── package.json</br>
│ ├── index.js</br>
│ ├── ...</br>
├── dep2</br>
│ ├── package.json</br>
│ ├── index.js</br>
│ ├── ...</br>
└── ...</br>

Here, the `node_modules` directory contains the my-package package, as well as its dependencies dep1 and dep2. Each package has its own package.json file and other necessary files.

Also do not forget to add `node-modules` to your `gitignore` files, otherwise it will make your repository heavier than a small planet. It can be safely generated on the server with the help of sufficent information in `package-lock.json` file, and it is never to be modified.

## Q: What is the `dist` folder?
`/dist` means "distributable", the compiled code/library. The `dist` folder contains the minified version of the source code which can be hosted on the server for an optimized production ready web application.
## Q: What is `browserslist`?
That's a React configuration option to know which browsers the build process should target to. The browserslist configuration controls the outputted JavaScript so that the emitted code will be compatible with the browsers specified.