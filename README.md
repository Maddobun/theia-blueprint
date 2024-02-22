

### Interview question

The question can be found inside of `theia-extensions/product/src/browser/interview_question.tsx`. All tasks specified inside can be done by modifying this file only. However, reading code and definitions outside of this file will likely be needed to complete the task.

### Build Requirements

Please check Theia's [prerequisites](https://github.com/eclipse-theia/theia/blob/master/doc/Developing.md#prerequisites), and keep node versions aligned between Theia IDE and that of the referenced Theia version.

### Repository Structure
The repo is based on the Theia IDE and the interview question makes minor modifications to it.

- Root level configures mono-repo build with lerna
- `applications` groups the different app targets
  - `browser` contains a browser based version of Eclipse Theia IDE that may be packaged as a Docker image
  - `electron` contains the electron app to package, packaging configuration, and E2E tests for the electron target.
- `theia-extensions` groups the various custom theia extensions for the Eclipse Theia IDE
  - `product` contains a Theia extension contributing the product branding (about dialogue and welcome page).
  - `updater` contains a Theia extension contributing the update mechanism and corresponding UI elements (based on the electron updater).
  - `launcher` contains a Theia extension contributing, for AppImage applications, the option to create a script that allows to start the Eclipse Theia IDE from the command line by calling the 'theia' command.

### Build

```sh
# Build "dev" version of the app. Its quicker, uses less resources, 
# but the front end app is not "minified"
yarn && yarn build:dev && yarn download:plugins
```

### Starting the application

```sh
yarn election start
```