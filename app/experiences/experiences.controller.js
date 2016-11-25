'use strict';
require("./experiences.services");

function ExperiencesControllerFct(ExperienceFactory){

    var ExpCtrl=this;
    ExperienceFactory.getListe().then(function(res){
        ExpCtrl.listeExperiences=res.data.listeExp;
        ExpCtrl.titleExperiences=res.data.title;
    },function (err) {
        console.log(err);
    });

}
ExperiencesControllerFct.$inject=['ExperienceFactory'];
angular.module('myApp').controller('ExperiencesController', ExperiencesControllerFct);
