define(['base/controller/base.home.controller'],
    function(BaseHomeController)
    {
        var MainModuleConfig = ['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) 
        {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('home', {
                    url: "/",
                    templateUrl: "app/base/template/base.home.html",
                    controller:BaseHomeController
                });
            
        }];
        return MainModuleConfig;
    }
);
