require.config({
        paths: {
            angular:        'vendors/angular/angular',
            ngFx:        'vendors/angular/ngFx.min',
            uiRouter:       'vendors/angular/angular-ui-router.min',
            moneyDirective:       'vendors/angular/angular-money-directive',
            uiUtils:       'vendors/angular/ui-utils',
        },
        shim: {
            'angular': {
                exports: 'angular'
            },'ngFx':{
                deps:['angular'],
                exports:'ngFx'
            },'moneyDirective':{
                deps:['angular'],
                exports:'moneyDirective'
            },'uiUtils':{
                deps:['ngFx'],
                exports:'uiUtils'
            },'uiRouter':{
                deps:['uiUtils','moneyDirective'],
                exports:'uiRouter'
            }
        }
    }
);

require(['main.bootstrap']);