# NyTimes-UI-APP
FrontEnd Angular App for simulating showing Top News and Searching for articles by using "api.nytimes.com" DEV API's.

## Prerequisite:-

### 1- Install NodeJS server:-
- Install NodeJS >= v16.10.0 from [here](https://nodejs.org/en/).


### 2- Install Angular CLI by running the following command:-
```sh
npm install -g  @angular/cli@13.3.1
```

### 3- Download the source code for the following projects:-
- Download `NyTimes-UI-APP` project from [here](https://github.com/elsayedellabad/nyt-ui).
- Download `Fake-API-JWT-JSON-SERVER` project from [here](https://github.com/techiediaries/fake-api-jwt-json-server).



## Steps to run downloaded server project `Fake-API-JWT-JSON-SERVER`:-
1. Open command prompt in `Fake-API-JWT-JSON-SERVER` project folder to run the node APIs for fake jwt token, login and register functionality.
2. Execute `npm i` in server folder to install the required packages.
3. Then execute command `npm run start-auth` to run backend webserver.

## Steps to run downloaded UI project `NyTimes-UI-APP`:-
1. Open command prompt in `NyTimes-UI-APP` project folder and execute `npm i` to install required packages.
2. Execute `npm run start`  to start angular application.
3. Now you can browse application through the following `http://localhost:4200/`


## Important Note (For Cors Error):-
If you face CORS error in the chrome browser, You just need to disable security of the browser by following the next steps:-

- Open RUN from your programs.
- Add The following command `chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security`
- It will open up a security disabled chrome browser window, now just hit the url: `localhost:4200`


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running coverage reports

Run `npm run test:coverage:ci` to generate coverage reports that will be stored in the `coverage/` directory.

## Running lint

Run `ng lint` to execute the lint rules for (Typescript and SCSS) via [krema](https://www.npmjs.com/package/@krema/angular-eslint-stylelint-builder).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
