import angular from 'angular';
import ngCookies from 'angular-cookies';
import welcomeComponent from 'components/welcome/index';
import contactComponent from 'components/contact-list/index';
import formComponent from 'components/contact-form/index';
import config from './config';
import errorHandling from './error-handling';
import applicationState from './application-state';
import httpProvider from './http-provider';

const dependencies = [
    'ngCookies',
    welcomeComponent.name,
    formComponent.name,
    contactComponent.name
];

export default angular
    .module('Application', dependencies)
    .config(config)
    .config(applicationState)
    .provider('http', httpProvider)
    .run(errorHandling);

