'use strict';
function ProfilFactoryFct($http,$q) {

    var service = {};
    service.getListe = function () {
        var deferred = $q.defer();
        return $http({
            method : 'GET',
            url : 'comun/profil/data.json',
        }).success(function(result){
            return deferred.resolve(result);
        }).error(function(data){
            return  deferred.reject(data);
        });
    }
    return service;
}
ProfilFactoryFct.$inject=['$http','$q'];
angular.module('myApp').factory('ProfilFactory',ProfilFactoryFct);

