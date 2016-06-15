import template from './contact-detail.html';

function detailRoute($stateProvider) {
    return $stateProvider
        .state('app.contactDetail', {
            url: 'detail/:id?',
            views: {
                main: {
                    template: template,
                    controller: 'ContactDetailController as contactDetailController',
                    resolve: {
                        contact: ['contactsService', '$stateParams', function(contactsService, $stateParams) {
                            return $stateParams.id?contactsService.getUser($stateParams.id):{};
                        }]
                    }
                }
            }
        });
}

export default [
    '$stateProvider',
    detailRoute
];
