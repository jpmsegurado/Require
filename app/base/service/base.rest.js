define([], function(){
    
  var BaseRestService = ['$http',function($http){
      return {
        carregaLivros:function(){
            return $http({
            url:"php/retorna_livros.php"

            }).then(function(response){
                return response.data;
            },function(response){
                return response.data;
            });
        }
      };
  }];
    
  return BaseRestService;
    
});
