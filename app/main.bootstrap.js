define(['main.config','uiRouter','base/base.module'],
    function(MainModuleConfig)
    {
        var mainModuleDeps = ['ui.router','BaseModule','ngFx','ui.utils','fiestah.money'];
        var CentiApp = angular.module('CentiApp', mainModuleDeps);

        //Seta callback de configuracao
        CentiApp.config(MainModuleConfig);
        //Seta callback de execucao
        //CentiApp.run(MainModuleRun);

        //Inicia a aplicacao Angular
        angular.bootstrap(document, ['CentiApp']);
    
    
    }
);
