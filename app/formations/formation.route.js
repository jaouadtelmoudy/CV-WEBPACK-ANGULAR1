var angularui=require("../../node_modules/angular-ui-router/release/angular-ui-router");
angular.module("myApp",[angularui]).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('formation', {
            url: '/formation',
            templateUrl: 'formations/liste.html',
            controller:'FormationController',
            controllerAs:'FrmCtrl'
        });

});