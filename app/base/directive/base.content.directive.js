define([], function()
{
    var BaseContentDirective = function()
    {
        return {
            templateUrl: 'app/base/template/base.content.html',
            restrict: 'AEC',
            replace: true,
            controller: 'BaseContentController'
        };
    };

    return BaseContentDirective;
}
);
