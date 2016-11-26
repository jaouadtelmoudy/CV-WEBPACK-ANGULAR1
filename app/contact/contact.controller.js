'use strict';
require("./contact.css");
require("./contact.services");
function ContactControllerFct(ContactFactory){

    var ContCtrl=this;
    ContactFactory.getListe().then(function(res){
        ContCtrl.listeContact=res.data.listeCont;
        ContCtrl.titleContact=res.data.title;
    },function (err) {
        console.log(err);
    });
}
ContactControllerFct.$inject=['ContactFactory'];
angular.module('myApp').controller('ContactController',ContactControllerFct);
