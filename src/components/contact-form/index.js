import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactFormState from './contact-details-state';
import myCtrl from './contactFormController.js';
const dependencies = [
    uiRouter
];

export default angular
    .module('contact-form-component', dependencies)
    .config(contactFormState)
    .controller('ContactFormController', myCtrl);
