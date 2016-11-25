'use strict';
require("./contact.services");
function ContactControllerFct(ContactFactory){
    var ContCtrl=this;
    ContactFactory.getListe().then(function(res){
        ContCtrl.listeContact=res.data.listeCont;
    },function (err) {
        console.log(err);
    });
}
ContactControllerFct.$inject=['ContactFactory'];
angular.module('myApp').controller('ContactController',ContactControllerFct);
