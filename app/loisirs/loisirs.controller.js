'use strict';
require("./loisirs.services");
function LoisirsControllerFct(LoisirsFactory){
    var LoiCtrl=this;
    LoisirsFactory.getListe().then(function(res){
        LoiCtrl.listeLoisir=res.data.listeLoisir;
        LoiCtrl.titleLoisirs=res.data.title;
    },function (err) {
        console.log(err);
    });
}
LoisirsControllerFct.$inject=['LoisirsFactory'];
angular.module('myApp').controller('LoisirsController', LoisirsControllerFct);
