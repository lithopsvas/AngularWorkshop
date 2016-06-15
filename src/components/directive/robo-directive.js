import template from './robo-directive.html';

function RoboDirective(){
    return{
        restrict: 'E',
        replace: true,
        scope: {
            email: '='
        },
        template: template,
        controller: 'RoboHashController as ctrl',
        bindToController: true
    }
}
export default [RoboDirective];
