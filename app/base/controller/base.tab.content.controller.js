define([], function()
{
    
    var BaseTabContentController = ['$scope',
    function($scope){
        
        
        $scope.models = [];
        $scope.camposVazios = false;
        $scope.salvando = false;
        
        $scope.showDanger = function(){
            $scope.camposVazios = true;
            setTimeout(function(){
                $scope.camposVazios = false;
                $scope.$apply();
            },3000);
        }
        
        $scope.focus = -1;
        
        $scope.changeFocus = function(index){
            $scope.focus = index;
        }
        
        $scope.printModels = function(showDanger){
            
            if($scope.salvando == true){
                return;
            }
            
            if($scope.models == [] || $scope.array.form.length > $scope.models.length){
                showDanger();
            }else{
                $scope.data = [];
                for(var i=0; i<$scope.models.length; i++){
                    var nome = $scope.array.form[i].nome;
                    var valor = $scope.models[i];
                    var obj = {valor:valor,nome:nome};
                    if(valor == undefined){
                        showDanger();
                        return;
                    }
                    console.log(obj);
                    $scope.data.push(obj);
                }
            }
            
        };
        
        $scope.clear = function(){
            $scope.models = [];
        };

    }];
    
    return BaseTabContentController;
    
});
