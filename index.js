window.jQuery = window.$ =require("./node_modules/jquery/dist/jquery");
require('./node_modules/bootstrap/dist/js/bootstrap.js')
require("./node_modules/bootstrap/dist/css/bootstrap.css");
require('./app/css/style.css');

var angular=require("./node_modules/angular");
var angularui=require("./node_modules/angular-ui-router/release/angular-ui-router");
var myApp=angular.module("myApp",[angularui]);
myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/accueil');
    $stateProvider
        .state('accueil', {
            url: '/accueil',
            templateUrl: 'accueil/liste.html',
            controller:'AccueilController',
            controllerAs:'AccCtrl'
        })
        .state('formation', {
            url: '/formation',
            templateUrl: 'formations/liste.html',
            controller:'FormationController',
            controllerAs:'FrmCtrl'
        })
        .state('experiences', {
            url: '/experiences',
            templateUrl: 'experiences/liste.html',
            controller:'ExperiencesController',
            controllerAs:'ExpCtrl'
        })
        .state('projets', {
            url: '/projets',
            templateUrl: 'projets/liste.html',
            controller:'ProjetsController',
            controllerAs:'PrjCtrl'
         })
        .state('loisirs', {
            url: '/loisirs',
            templateUrl: 'loisirs/liste.html',
            controller:'LoisirsController',
            controllerAs:'LoiCtrl'
        }).state('langues', {
            url: '/langues',
            templateUrl: 'langues/liste.html',
            controller:'LanguesController',
            controllerAs:'LgCtrl'
        }).state('contact', {
            url: '/contact',
            templateUrl: 'contact/liste.html',
            controller:'ContactController',
            controllerAs:'ContCtrl'
        });


});

require("./app/comun/carousel/caousel.directives");
require("./app/comun/profil/profil.directives");
require("./app/comun/menu.directives");
require("./app/accueil/accueil.controller");
require("./app/formations/formation.controller");
require("./app/experiences/experiences.controller");
require("./app/projets/projets.controller");
require("./app/loisirs/loisirs.controller");
require("./app/langues/langues.controller");
require("./app/contact/contact.controller");
