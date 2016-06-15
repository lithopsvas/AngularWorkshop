import template from './contactList.html';

function contactListRoute($stateProvider) {
    return $stateProvider
        .state('app.contactList', {
            url: 'contactList',
            views: {
                main: {
                    template: template,
                    controller:"ContactListController as ctrl"
                }
            }
        });
}

export default [
    '$stateProvider',
    contactListRoute
];
