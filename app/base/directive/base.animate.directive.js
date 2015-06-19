define([], function()
{
    var BaseAnimateDirective = function($animate,$compile)
    {
        return {
            restrict: 'A',
            link:function(scope,elem){ 
                console.log("bla");
                
            }
        };
    };

    return BaseAnimateDirective;
}
);
