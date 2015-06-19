define(['angular',
        'base/service/base.rest',
        'base/controller/base.home.controller',
        'base/controller/base.menu.controller',
        'base/controller/base.content.controller',
        'base/controller/base.tab.content.controller',
        'base/directive/base.menu.directive',
        'base/directive/base.content.directive',
        'base/directive/base.tab.content.directive',
        'base/directive/base.animate.directive'
       ],
function( angular,
          BaseRestService,
          BaseHomeController,
          BaseMenuController,
          BaseContentController,
          BaseTabContentController,
          BaseMenuDirective,
          BaseContentDirective,
          BaseTabContentDirective,
          BaseAnimateDirective
          )
  {
      var BaseModule = angular.module('BaseModule',[]);

      BaseModule.service('$BaseRestService',BaseRestService);
      BaseModule.controller('BaseHomeController',BaseHomeController);
      BaseModule.controller('BaseMenuController',BaseMenuController);
      BaseModule.controller('BaseContentController',BaseContentController);
      BaseModule.controller('BaseTabContentController',BaseTabContentController);
      BaseModule.directive('baseMenuDirective',BaseMenuDirective);
      BaseModule.directive('baseContentDirective',BaseContentDirective);
      BaseModule.directive('baseTabContent',BaseTabContentDirective);
      BaseModule.directive('animate',BaseAnimateDirective);

      return BaseModule;
  }
);
