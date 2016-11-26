'use strict';
require("./profil.css");
require("./profil.service");
function menuFct(){
    function ProfilController(ProfilFactory){
        var PrfCtrl=this;
        PrfCtrl.text = "Jaouad TELMOUDY ";
        ProfilFactory.getListe().then(function (res) {
            PrfCtrl.profil=res.data;
        },function (err) {
            console.log(err);
        });
    }
    ProfilController.$inject=['ProfilFactory'];
    return {
        restrict: 'E',
        templateUrl: 'comun/profil/liste.html',
        controller:ProfilController,
        controllerAs:'PrfCtrl',
    		link:function(scope, element,param){
    			//scope.text = scope.text + "Deuxième";
    		}
    };
}
angular.module('myApp').directive('profilDirective', menuFct);
