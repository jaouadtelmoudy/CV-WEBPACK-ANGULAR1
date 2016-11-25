'use strict';
function menuFct(){
    function ProfilController(){
        var PrfCtrl=this;
        PrfCtrl.text = "Jaouad TELMOUDY ";
    }
    return {
        restrict: 'E',
        templateUrl: 'comun/profil/liste.html',
        controller:ProfilController,
        controllerAs:'PrfCtrl',
    		link:function(scope, element,param){
    			scope.text = scope.text + "Deuxième";
    		}
    };
}
angular.module('myApp').directive('profilDirective', menuFct);
