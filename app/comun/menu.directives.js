'use strict';
function menuFct(){
    return {
        restrict: 'E',
        templateUrl: 'comun/menu.html'
    };
}
angular.module('myApp').directive('menu', menuFct);

