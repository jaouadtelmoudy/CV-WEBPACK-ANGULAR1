'use strict';
require("./langues.services");
function LanguesControllerFct(LanguesFactory){
    var LgCtrl=this;
    LanguesFactory.getListe().then(function(res){
        LgCtrl.listeLg=res.data.listeLg;
        LgCtrl.titleLangues=res.data.title;
    },function (err) {
        console.log(err);
    });
}
LanguesControllerFct.$inject=['LanguesFactory'];
angular.module('myApp').controller('LanguesController',LanguesControllerFct );
