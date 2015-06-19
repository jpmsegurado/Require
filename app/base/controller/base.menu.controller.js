define([], function()
{
    var BaseMenuController = ['$scope','$rootScope',function($scope,$rootScope){
        
        var form1 = [
            {nome:"Nome",tipo:"text"},
            {nome:"CPF",tipo:"text",mask:"999.999.999-99"},
            {nome:"Endereço",tipo:"text"},
            {nome:"Idade",tipo:"number"},
        ];
        
        var form2 = [
            {nome:"Empresa",tipo:"text"},
            {nome:"CNPJ",tipo:"text",mask:"99.999.999/9999-99"},
            {nome:"Endereço",tipo:"text"}
        ];
        
        var form3 = [
            {nome:"Data",tipo:"text"},
            {nome:"Valor",tipo:"text",moneymask:"2"}
        ];
        
        $scope.menu = [
            {titulo:"Pessoa",form:form1},
            {titulo:"Empresa",form:form2},
            {titulo:"Folha de pagamento",
             submenu:[
                 {titulo:"Entrada",form:form3},
                 {titulo:"Saída",form:form3}
            ]},
            {titulo:"Folha de pagamento",
             submenu:[
                 {titulo:"Entrada",form:form3},
                 {titulo:"Saída",form:form3}
            ]}
        ];
        
        $scope.index = -1;
        $scope.showIndex = [];
        
        $scope.addLivro = function(index){
            $rootScope.$broadcast('addLivro',{item:$scope.menu[index]});
            $scope.index = -1;
        };
        
        $scope.changeIndex = function(index){
            
            if($scope.index == index){
                $scope.index = -1;
            }else if($scope.index == -1){
                $scope.index = index;
            }else{
                $scope.index = -1;
                setTimeout(function(){
                    $scope.index = index;
                    $scope.$apply();
                },150);
            }
            
        };
        
        $scope.addLivroSub = function(index,parentIndex){
            $rootScope.$broadcast('addLivro',{item:$scope.menu[parentIndex].submenu[index]});
        };
        
        $scope.limpar = function(){
            $rootScope.$broadcast('limpar');
        }

    }];
    
    
    
    return BaseMenuController;
});
