import template from './contact-form.html';

function contactFormRoute($stateProvider) {
    return $stateProvider
        .state('app.contact-form', {
            url: 'contact-form',
            views: {
                main: {
                    template: template
                }
            }
        });
}

export default [
    '$stateProvider',
    contactFormRoute
];
