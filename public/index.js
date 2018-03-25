(function(){
    angular.module('app', ['ngRoute'])
      .config(function($routeProvider){
        $routeProvider
          .when('/', {
            template: '<welcome></welcome>'
          })
          .when('/app', {
            template: '<task-form></task-form>'
          })
          .otherwise({
            template: '<welcome></welcome>'
          });

        
      });
})();