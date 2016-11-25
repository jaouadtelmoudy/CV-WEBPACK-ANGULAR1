'use strict';
require("./formation.services");
function FormationControllerFct(FormationFactory){

    var FrmCtrl=this;
    FormationFactory.getListe().then(function(res){
        FrmCtrl.listeFormations=res.data.listeFrm;
        FrmCtrl.titleFormation=res.data.title;
    },function (err) {
        console.log(err);
    });

}
FormationControllerFct.$inject=['FormationFactory'];
angular.module('myApp').controller('FormationController', FormationControllerFct);
