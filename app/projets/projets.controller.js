'use strict';
require("./projets.services");

function ProjetsControllerFct(ProjetsFactory){

    var PrjCtrl=this;
    ExperienceFactory.getListe().then(function(res){
        PrjCtrl.listeProjets=res.data.listeProjets;
    },function (err) {
        console.log(err);
    });

}
ProjetsControllerFct.$inject=['ProjetsFactory'];
angular.module('myApp').controller('ProjetsController', ProjetsControllerFct);
