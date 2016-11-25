'use strict';
require("./accueil.service");

function AccCtrlFunction(AccueilFactory){
    var AccCtrl=this;


    AccCtrl.formation=AccueilFactory.formation.then(function(res){
        AccCtrl.formation=res.data.listeFrm;
        AccCtrl.titleFormation=res.data.title;
        console.log(res.data.title);
    },function (err) {
        console.log(err);
    });

    AccCtrl.experiences=AccueilFactory.experiences.then(function(res){
        AccCtrl.experiences=res.data.listeExp;
    },function (err) {
        console.log(err);
    });

    AccCtrl.contact=AccueilFactory.contact.then(function(res){
        AccCtrl.contact=res.data.listeCont;
    },function (err) {
        console.log(err);
    });

    AccCtrl.langues=AccueilFactory.langues.then(function(res){
        AccCtrl.langues=res.data.listeLg;
    },function (err) {
        console.log(err);
    });

    AccCtrl.loisirs=AccueilFactory.loisirs.then(function(res){
        AccCtrl.loisirs=res.data.listeLoisir;
    },function (err) {
        console.log(err);
    });

    AccCtrl.projets=AccueilFactory.projets.then(function(res){
        AccCtrl.projets=res.data.listeProjets;
        console.log(res.data.listeProjets);
    },function (err) {
        console.log(err);
    });

}

AccCtrlFunction.$inject = ['AccueilFactory'];
angular.module('myApp').controller('AccueilController', AccCtrlFunction);