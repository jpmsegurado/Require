define([], function(){
    
  var BaseAlertService = ['$http',function($http){
      return {
          showDeletingAlert:function(fnSim,fnNao){
              $('#alerta1').remove();
              
              var code = 
                  '<div id="alerta1">'+
                  '    <div class="card alerta fast-animated fadeInDown z-depth-4">'+
                  '        <div class="card-content">'+
                  '            <span class="card-title red-text">Aviso</span>'+
                  '            <p><br>'+
                  '                Tem certeza que deseja deletar?'+
                  '            </p>'+
                  '        </div>'+
                  '        <div class="card-action">'+
                  '            <a class="blue-text modal-action modal-close waves-effect waves-green btn-flat" href="#!" id="sim">Sim</a>'+
                  '            <a class="blue-text modal-action modal-close waves-effect waves-red btn-flat" href="#!" id="nao">Não</a>'+
                  '        </div>'+
                  '    </div>'+
                  '    <div class="sombra" id="sombra"></div>'+
                  '</div>';

              var html = $(code);
              html.appendTo('body');
              $('#sombra').click(function(){
                  $('#sombra').attr('onclick',function(){
                      $('#alerta1').remove();
                  });
              });
              $('#sim').click(fnSim);
              $('#nao').click(fnNao);
              $('#sim').focus();
          },showLoadingAlert:function(){
              $('#alerta2').remove();
              var code = '<div id="alerta2">'+
                         '    <div class="card alerta carregando fast-animated fadeInDown z-depth-4">'+
                         '        <div class="card-content">'+
                         '            <br>'+
                         '            <br>'+
                         '            <div class="row">'+
                         '                <div class="col s4">'+
                         '                    <div class="preloader-wrapper small active">'+
                         '                      <div class="spinner-layer spinner-blue-only">'+
                         '                        <div class="circle-clipper left">'+
                         '                          <div class="circle"></div>'+
                         '                        </div><div class="gap-patch">'+
                         '                          <div class="circle"></div>'+
                         '                        </div><div class="circle-clipper right">'+
                         '                          <div class="circle"></div>'+
                         '                        </div>'+
                         '                      </div>'+
                         '                    </div>'+
                         '                </div>'+
                         '                <div class="col s8">'+
                         '                    <p class="card-title blue-text">Carregando...</p>'+
                         '                </div>'+
                         '            </div>'+
                         '        </div>'+
                         '    </div>'+
                         '    <div class="sombra" id="sombra"></div>'+
                         '</div>';

              var html = $(code);
              html.appendTo('body');
          },showEmptyFieldAlert:function(){
              $('#alerta3').remove();
              var code = 
                  '<div id="alerta3">'+
                  '    <div class="card alerta fast-animated fadeInDown z-depth-4">'+
                  '        <div class="card-content">'+
                  '            <span class="card-title red-text">Aviso</span>'+
                  '            <p><br>'+
                  '                Por favor, preencha os campos vazios no formulário.'+
                  '            </p>'+
                  '        </div>'+
                  '        <div class="card-action">'+
                  '            <a class="blue-text modal-action modal-close waves-effect waves-green btn-flat" href="#!" id="sim">Ok</a>'+
                  '        </div>'+
                  '    </div>'+
                  '    <div class="sombra" id="sombra"></div>'+
                  '</div>';

              var html = $(code);
              html.appendTo('body');
              $('#sombra').click(function(){
                  $('#sombra').attr('onclick',function(){
                      $('#alerta3').remove();
                  });
              });
              $('#sim').click(function(){
                  $('#sim').attr('onclick',function(){
                      setTimeout(function(){
                          $('#alerta3').remove();
                      },200);
                  });
              });
              $('#sim').focus();
          },showSuccessAlert:function(fnOk){
              $('#alerta4').remove();
              var code = 
                  '<div id="alerta4">'+
                  '    <div class="card alerta sucesso fast-animated fadeInDown z-depth-4">'+
                  '        <div class="card-content">'+
                  '            <span class="card-title green-text">Salvo com sucesso</span>'+
                  '        </div>'+
                  '        <div class="card-action">'+
                  '            <a class="blue-text modal-action modal-close waves-effect waves-green btn-flat" href="#!" id="sim">Ok</a>'+
                  '        </div>'+
                  '    </div>'+
                  '    <div class="sombra" id="sombra"></div>'+
                  '</div>';

              var html = $(code);
              html.appendTo('body');
              $('#sombra').click(function(){
                  $('#sombra').attr('onclick',function(){
                      $('#alerta4').remove();
                  });
              });
              $('#sim').click(fnOk);
              $('#sim').focus();
          },remove:function(){
              setTimeout(function(){
                  $('#alerta1').remove();
                  $('#alerta2').remove();
                  $('#alerta3').remove();
                  $('#alerta4').remove();
              },200);
          }
      };
  }];
    
  return BaseAlertService;
    
});
