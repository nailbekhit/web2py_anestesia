/**
 * Created by Mohamed on 08/12/2014.
 */
$(document).ready(function(){

    //$("#nr_registro").click(function() {
        //$("#enf").hide();
    //});

    prepara_campos();

    /*$("#btn_enviar_form").click(function(){
        var qualquer = "";
        qualquer += $("#form_geral").serialize();
        var aqui=$("#nr_registro").val();
        alert(qualquer);
        alert(aqui);
    });*/

    $("#radio_masc_laringea_sim").click(function(){
        $("#div_masc_laringea").show();
    });

    $("#radio_masc_laringea_nao").click(function(){
        $("#div_masc_laringea").hide();
    });

    $("#radio_int_oro_traqueal_sim").click(function(){
        $("#div_int_oro_traqueal").show();
    });

    $("#radio_int_oro_traqueal_nao").click(function(){
        $("#div_int_oro_traqueal").hide();
    })

    $("#nome").click(function() {
        $("#nome__error").hide();
    })

});

function prepara_campos(){
    /*Limpa os campos do formulário e marca as opções como não. Adicionado em 24/02/2015*/
    /*Dados Gerais*/
    $("#nr_registro").val("Nail");
    $("#matricula_hugg").val("");
    $("#nome").val("");
    $("#data").val("");
    $("#ficha_nr").val("");
    $("#enfermaria").val("");
    $("#leito").val("");
    $("#idade").val("");
    $("#asa").val("");
    $("#clinica").val("");
    $("#so").val("");
    $("#altura").val("");
    $("#peso").val("");
    $("#temperatura").val("");
    $("#pulso").val("");
    $("#respiracao").val("");
    $("#pa").val("");
    $("#diagnostico").val("");
    $("#dados_cirurgia_anterior").val("");
    /*Abaixo é a linha que marca inicialmente todos os radios como não.*/
    $("input:radio").attr("checked","true");
}

function chama_segundo_incluir(){
    $("#div_segundo_agente_incluir").show();
    $("#agente2_controle_incluir").val("1");
    $("#btn_inclui_agente1_pgincluir").hide();
}

function esconde_segundo_incluir(){
    $("#div_segundo_agente_incluir").hide();
    $("#agente2_controle_incluir").val("");
    $("#btn_inclui_agente1_pgincluir").show();
    $("#agente2").val("");
}

function chama_terceiro_incluir(){
    $("#div_terceiro_agente_incluir").show();
    $("#agente3_controle_incluir_incluir").val("1");
    $("#btn_esconder_agente2_incluir").hide();
    $("#btn_inclui_agente2_incluir").hide();
}

function esconde_terceiro_incluir(){
    $("#div_terceiro_agente_incluir").hide();
    $("#agente3_controle_incluir").val("");
    $("#btn_esconder_agente2_incluir").show();
    $("#btn_inclui_agente2_incluir").show();
    $("#agente3").val("");
}

function chama_quarto_incluir(){
    $("#div_quarto_agente_incluir").show();
    $("#agente4_controle_incluir").val("1");
    $("#btn_esconder_agente3_incluir").hide();
    $("#btn_inclui_agente3_incluir").hide();
}

function esconde_quarto_incluir(){
    $("#div_quarto_agente_incluir").hide();
    $("#agente4_controle_incluir").val("");
    $("#btn_esconder_agente3_incluir").show();
    $("#btn_inclui_agente3_incluir").show();
    $("#agente4").val("");
}

function chama_quinto_incluir(){
    $("#div_quinto_agente_incluir").show();
    $("#agente5_controle_incluir").val("1");
    $("#btn_esconder_agente4_incluir").hide();
    $("#btn_inclui_agente4_incluir").hide();
}

function esconde_quinto_incluir(){
    $("#div_quinto_agente_incluir").hide();
    $("#agente5_controle_incluir").val("");
    $("#btn_esconder_agente4_incluir").show();
    $("#btn_inclui_agente4_incluir").show();
    $("#agente5").val("");
}

function chama_sexto_incluir(){
    $("#div_sexto_agente_incluir").show();
    $("#agente6_controle_incluir").val("1");
    $("#btn_esconder_agente5_incluir").hide();
    $("#btn_inclui_agente5_incluir").hide();
}

function esconde_sexto_incluir(){
    $("#div_sexto_agente_incluir").hide();
    $("#agente5_controle_incluir").val("");
    $("#btn_esconder_agente5_incluir").show();
    $("#btn_inclui_agente5_incluir").show();
    $("#agente6").val("");
}

function chama_setimo_incluir(){
    $("#div_setimo_agente_incluir").show();
    $("#agente7_controle_incluir").val("1");
    $("#btn_esconder_agente6_incluir").hide();
    $("#btn_inclui_agente6_incluir").hide();
}

function esconde_setimo_incluir(){
    $("#div_setimo_agente_incluir").hide();
    $("#agente7_controle_incluir").val("");
    $("#btn_esconder_agente6_incluir").show();
    $("#btn_inclui_agente6_incluir").show();
    $("#agente7").val("");
}

function chama_oitavo_incluir(){
    $("#div_oitavo_agente_incluir").show();
    $("#agente8_controle_incluir").val("1");
    $("#btn_esconder_agente7_incluir").hide();
    $("#btn_inclui_agente7_incluir").hide();
}

function esconde_oitavo_incluir(){
    $("#div_oitavo_agente_incluir").hide();
    $("#agente7_controle_incluir").val("");
    $("#btn_esconder_agente7_incluir").show();
    $("#btn_inclui_agente7_incluir").show();
    $("#agente8").val("");
}

function chama_nono_incluir(){
    $("#div_nono_agente_incluir").show();
    $("#agente9_controle_incluir").val("1");
    $("#btn_esconder_agente8_incluir").hide();
    $("#btn_inclui_agente8_incluir").hide();
}

function esconde_nono_incluir(){
    $("#div_nono_agente_incluir").hide();
    $("#agente8_controle_incluir").val("");
    $("#btn_esconder_agente8_incluir").show();
    $("#btn_inclui_agente8_incluir").show();
    $("#agente9").val("");
}

function chama_decimo_incluir(){
    $("#div_decimo_agente_incluir").show();
    $("#agente10_controle_incluir").val("1");
    $("#btn_esconder_agente9_incluir").hide();
    $("#btn_inclui_agente9_incluir").hide();
}

function esconde_decimo_incluir(){
    $("#div_decimo_agente_incluir").hide();
    $("#agente10_controle_incluir").val("");
    $("#btn_esconder_agente9_incluir").show();
    $("#btn_inclui_agente9_incluir").show();
    $("#agente10").val("");
}

$("#agente1").val("");

function mostra_dados(){
    alert("Aqui");
    agente = $("#agente1").val();
    alert(agente);
}