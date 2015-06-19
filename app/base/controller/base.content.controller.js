define([], function()
{
    var BaseContentController = ['$scope','$rootScope',
    function($scope,$rootScope){
        
        $scope.livros =[];
        $scope.abaAtual = -1;
        
        $rootScope.$on('addLivro',function(event,data){
            $scope.livros.push(data.item);
            $scope.abaAtual = $scope.livros.length -1;
        });
        
        $rootScope.$on('limpar',function(event,data){
            $scope.livros = [];
        });
        
        $scope.openTab = function(index){
            $scope.abaAtual = index;
        };
        
        
        $scope.removeTab = function(index){
            $scope.abaAtual = index-1;
            $scope.livros.splice(index,1);
        }

    }];
    
    return BaseContentController;
});
