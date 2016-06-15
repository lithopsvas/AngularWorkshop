
import roboHashDirective from 'components/directive/robo-directive';
import RoboHashController from 'components/directive/robo-directive-controller';

const dependencies = [

];

export default angular
    .module('directives', dependencies)
    .directive('roboHash', roboHashDirective)
    .controller('RoboHashController', RoboHashController);
