
angular.module('appRoutes', ['ngRoute'])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
      $locationProvider.hashPrefix('');
    $routeProvider
    .when('/',{
        templateUrl :'app/views/pages/home.html'
    })
    .when('/about',{
        templateUrl :'app/views/pages/about.html'
    })
    .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({
        enabled:true,
        requireBase:false
    });
    
}]);


// appModule.config(['$locationProvider', function($locationProvider) {
//   $locationProvider.hashPrefix('');
// }]);