'use strict';
require("../formations/formation.services");
require("../experiences/experiences.services");
require("../contact/contact.services");
require("../langues/langues.services");
require("../loisirs/loisirs.services");
require("../projets/projets.services");
function AccueilFactoryFct($http,FormationFactory,ExperienceFactory,ContactFactory,LanguesFactory,LoisirsFactory,ProjetsFactory) {
    var service = {};
    service.formation=FormationFactory.getListe();
    service.experiences=ExperienceFactory.getListe();
    service.contact=ContactFactory.getListe();
    service.langues=LanguesFactory.getListe();
    service.loisirs=LoisirsFactory.getListe();
    service.projets=ProjetsFactory.getListe();
    return service;
}
AccueilFactoryFct.$inject = ['$http','FormationFactory','ExperienceFactory','ContactFactory','LanguesFactory','LoisirsFactory','ProjetsFactory'];
angular.module('myApp').factory('AccueilFactory',AccueilFactoryFct);



