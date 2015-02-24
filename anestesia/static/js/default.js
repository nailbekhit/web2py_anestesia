/**
 * Created by Mohamed on 24/02/2015.
 */
/**
 * Created by Mohamed on 24/02/2015.
 */
$(document).ready(function(){
});

/*Mostra a Div de carregando conteúdo*/
function prepara_formulario(){
    $('#divLoading').dialog({
        modal : true,
        width:500,
        height:150,
        title:"Carregando",
        resizable:false
    });
    $('.ui-dialog-titlebar-close').hide();


}