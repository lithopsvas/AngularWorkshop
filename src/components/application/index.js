import angular from 'angular';
import ngCookies from 'angular-cookies';
import welcomeComponent from 'components/welcome/index';
import config from './config';
import errorHandling from './error-handling';
import applicationState from './application-state';
import httpProvider from './http-provider';
import serviceContacts from 'components/service/service';
import contactListComponent from 'components/contact-list/index';
import contactDetailComponent from 'components/contact-detail/index';
import directivesComponent from 'components/directive/index';


const dependencies = [
    'ngCookies',
    welcomeComponent.name,
    contactListComponent.name,
    contactDetailComponent.name,
    directivesComponent.name
];

export default angular
    .module('Application', dependencies)
    .config(config)
    .config(applicationState)
    .provider('http', httpProvider)
    .constant('contactsUrl', 'http://localhost:3000/api/Contacts')
    .service('contactsService', serviceContacts)
    .run(errorHandling);

