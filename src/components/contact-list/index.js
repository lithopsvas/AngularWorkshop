import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactState from './contact-state';
import myCtrl from './contactListController.js';
import myFilter from './capitaliseFilter.js';

const dependencies = [
    uiRouter
];

export default angular
    .module('contact-state-component', dependencies)
    .config(contactState)
    .controller('ContactListController', myCtrl)
    .filter('capFilt', myFilter);

