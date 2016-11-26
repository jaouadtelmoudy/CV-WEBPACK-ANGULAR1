'use strict';
require("./projets.services");

function ProjetsControllerFct(ProjetsFactory){

    var PrjCtrl=this;
    ProjetsFactory.getListe().then(function(res){
        PrjCtrl.listeProjets=res.data.listeProjets;
        PrjCtrl.titleProjets=res.data.title;
    },function (err) {
        console.log(err);
    });

}
ProjetsControllerFct.$inject=['ProjetsFactory'];
angular.module('myApp').controller('ProjetsController', ProjetsControllerFct);
