'use strict';
require("./accueil.service");

function AccCtrlFunction(AccueilFactory){
    var AccCtrl=this;


    AccCtrl.formation=AccueilFactory.formation.then(function(res){
        AccCtrl.formation=res.data.listeFrm;
        AccCtrl.titleFormation=res.data.title;
        AccCtrl.descriptionGenFor=res.data.descriptionGen;
    },function (err) {
        console.log(err);
    });

    AccCtrl.experiences=AccueilFactory.experiences.then(function(res){
        AccCtrl.experiences=res.data.listeExp;
        AccCtrl.titleExperiences=res.data.title;
        AccCtrl.descriptionGenExp=res.data.descriptionGen;
    },function (err) {
        console.log(err);
    });

    AccCtrl.contact=AccueilFactory.contact.then(function(res){
        AccCtrl.contact=res.data.listeCont;
        AccCtrl.titleContact=res.data.title;
        AccCtrl.descriptionGenCtc=res.data.descriptionGen;
    },function (err) {
        console.log(err);
    });

    AccCtrl.langues=AccueilFactory.langues.then(function(res){
        AccCtrl.langues=res.data.listeLg;
        AccCtrl.titleLangues=res.data.title;
        AccCtrl.descriptionGenLg=res.data.descriptionGen;
    },function (err) {
        console.log(err);
    });

    AccCtrl.loisirs=AccueilFactory.loisirs.then(function(res){
        AccCtrl.loisirs=res.data.listeLoisir;
        AccCtrl.titleLoisirs=res.data.title;
          AccCtrl.descriptionGenLois=res.data.descriptionGen;
    },function (err) {
        console.log(err);
    });

    AccCtrl.projets=AccueilFactory.projets.then(function(res){
        AccCtrl.projets=res.data.listeProjets;
        AccCtrl.titleProjets=res.data.title;
        AccCtrl.descriptionGenPrj=res.data.descriptionGen;

    },function (err) {
        console.log(err);
    });

}

AccCtrlFunction.$inject = ['AccueilFactory'];
angular.module('myApp').controller('AccueilController', AccCtrlFunction);
