# Instructions

- Fork the repo from https://github.com/empathyco/whoiam
- Add USERNAME and EMAIL as secrets in https://github.com/*USERNAME*/whoiam/settings/secrets
- Enable Actions in https://github.com/*USERNAME*/whoiam/actions
- Clone the repository forked as 'git clone https://github.com/*USERNAME*/whoiam.git'
- Add two different pictures under *src/assets/img/* path
- Change variables, add/delete social networks and change images as 'assets/img/*FILE_NAME*.*EXTENSION*' to point to the images added in the previous step in *app.component.ts* file
- Push the changes to launch the pipeline
- A gh-pages branch will be created and after some minutes the whoiam app will be deployed under https://*USERNAME*.github.io/whoiam
- If the app is not deployed, check if you have enabled the GitHub Pages section under https://github.com/*USERNAME*/whoiam settings with Source as gh-pages branch. If necessary, change to None and then select again gh-pages branch

# About this repository

The app is built with [Angular 9](https://angular.io). This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

[Angular Material](https://material.angular.io/) is used for the grid and the card component. [Font Awesome](https://fontawesome.com/) is used for the icons.

[angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) helps to build and deploy the app from `master` branch to `gh-pages` branch in order to deploy the app as GitHub Pages.

## Local launch

Run the following commands to launch the app locally:

```sh
npm install
ng serve -o
```

The app will automatically run in this link `http://localhost:4200/`. If you change any of the source files, the app will automatically reload with the changes applied.
\n ## hello-moon
