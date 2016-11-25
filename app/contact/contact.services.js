'use strict';
function ContactFactoryFct($http,$q) {

    var service = {};
    service.getListe = function () {
        var deferred = $q.defer();
        return $http({
            method : 'GET',
            url : 'contact/data.json',
            // params : {"login"  :login,    "password":pass            }
        }).success(function(result){
            return deferred.resolve(result);
        }).error(function(data){
            return  deferred.reject(data);
        });
    }
    return service;
}
ContactFactoryFct.$inject=['$http','$q'];
angular.module('myApp').factory('ContactFactory',ContactFactoryFct );

