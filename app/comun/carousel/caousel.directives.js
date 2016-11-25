'use strict';
function menuFct(){
    return {
        restrict: 'E',
        templateUrl: 'comun/carousel/liste.html'
    };
}
angular.module('myApp').directive('carouselDirective', menuFct);
