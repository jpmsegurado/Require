define([], function()
{
    var BaseTabContentDirective = function()
    {
        return {
            restrict: 'AEC',
            replace: true,
            scope: {
                array: '=',
                index: '='
            },
            controller:'BaseTabContentController',
            templateUrl: 'app/base/template/base.tab.content.html'
        };
    };

    return BaseTabContentDirective;
}
);
