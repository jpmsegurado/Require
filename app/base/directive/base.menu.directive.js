define([], function()
{
    var BaseMenuDirective = function()
    {
        return {
            templateUrl: 'app/base/template/base.menu.html',
            restrict: 'AEC',
            replace: true,
            controller: 'BaseMenuController',
            link:function(){
                $('.collapsible').collapsible({
                  accordion : false
                });
            }
        };
    };

    return BaseMenuDirective;
}
);
