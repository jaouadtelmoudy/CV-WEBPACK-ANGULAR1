var angularui=require("../../node_modules/angular-ui-router/release/angular-ui-router");
angular.module("myApp",[angularui]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/accueil');
    $stateProvider
        .state('accueil', {
            url: '/accueil',
            templateUrl: 'accueil/liste.html',
            controller:'AccueilController',
            controllerAs:'AccCtrl'
        });

});