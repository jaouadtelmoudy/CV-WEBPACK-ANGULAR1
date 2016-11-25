'use strict';
require("./loisirs.services");
function LoisirsControllerFct(LoisirsFactory){

    var ContCtrl=this;
    LanguesFactory.getListe().then(function(res){
        ContCtrl.listeLg=res.data.listeLg;
    },function (err) {
        console.log(err);
    });

}
LoisirsControllerFct.$inject=['LoisirsFactory'];
angular.module('myApp').controller('LoisirsController',LoisirsControllerFct );
