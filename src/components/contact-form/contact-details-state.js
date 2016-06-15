import template from './contact-form.html';

function contactFormRoute($stateProvider) {
    return $stateProvider
        .state('app.contact-details', {
            url: 'contact-details/:name/:surname',
            views: {
                main: {
                    template: template,
                    controller:"ContactFormController as ctrl"
                }
            }
        });
}

export default [
    '$stateProvider',
    contactFormRoute
];
