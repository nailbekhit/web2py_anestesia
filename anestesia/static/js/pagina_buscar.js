/**
 * Created by Mohamed on 10/12/2014.
 */
$(document).ready(function(){

    //$('#divResultado').hide();
    $("#campo_hidden_escolha_busca").val('');
    //document.getElementById('nome_busca').disabled = true;
    $("#nome_busca").attr("disabled","true");
    //document.getElementById('nr_registro_busca').disabled = true;
    $("#nr_registro_busca").attr("disabled","true");
    //document.getElementById('chk_busca_1').checked = true;
    $("#chk_busca_1").attr("checked","true");
    //document.getElementById('chk_busca_2').checked = true;
    $("#chk_busca_2").attr("checked","true");
    $("input:radio").attr("checked", false);
    $("#div_alteracao").hide();
    $("#campo_hidden_id_busca").val("");



    $("#chk_busca_1").click(function () {
        document.getElementById('nome_busca').disabled = false;
        document.getElementById('nr_registro_busca').disabled = true;
        $("#nr_registro_busca").val("");
        $("#campo_hidden_escolha_busca").val('1');
    })

    $("#chk_busca_2").click(function () {
        document.getElementById('nome_busca').disabled = true;
        $("#nome_busca").val("");
        document.getElementById('nr_registro_busca').disabled = false;
        $("#campo_hidden_escolha_busca").val('2');
    })

    //function fn_alterar_dados(){
        //$("#div_alteracao").dialog();
    //}

});

function chama_segundo(){
    $("#div_segundo_agente").show();
    $("#carregar_agente2_controle").val("1");
    $("#carregar_btn_inclui_agente1").hide();
}

function esconde_segundo(){
    $("#div_segundo_agente").hide();
    $("#carregar_agente2_controle").val("");
    $("#carregar_btn_inclui_agente1").show();
}

function chama_terceiro(){
    $("#div_terceiro_agente").show();
    $("#carregar_agente3_controle").val("1");
    $("#carregar_btn_esconder_agente2").hide();
    $("#carregar_btn_inclui_agente2").hide();
}

function esconde_terceiro(){
    $("#div_terceiro_agente").hide();
    $("#carregar_agente3_controle").val("");
    $("#carregar_btn_esconder_agente2").show();
    $("#carregar_btn_inclui_agente2").show();
}

function chama_quarto(){
    $("#div_quarto_agente").show();
    $("#carregar_agente4_controle").val("1");
    $("#carregar_btn_esconder_agente3").hide();
    $("#carregar_btn_inclui_agente3").hide();
}

function esconde_quarto(){
    $("#div_quarto_agente").hide();
    $("#carregar_agente4_controle").val("");
    $("#carregar_btn_esconder_agente3").show();
    $("#carregar_btn_inclui_agente3").show();
}

function chama_quinto(){
    $("#div_quinto_agente").show();
    $("#carregar_agente5_controle").val("1");
    $("#carregar_btn_esconder_agente4").hide();
    $("#carregar_btn_inclui_agente4").hide();
}

function esconde_quinto(){
    $("#div_quinto_agente").hide();
    $("#carregar_agente5_controle").val("");
    $("#carregar_btn_esconder_agente4").show();
    $("#carregar_btn_inclui_agente4").show();
}

function chama_sexto(){
    $("#div_sexto_agente").show();
    $("#carregar_agente6_controle").val("1");
    $("#carregar_btn_esconder_agente5").hide();
    $("#carregar_btn_inclui_agente5").hide();
}

function esconde_sexto(){
    $("#div_sexto_agente").hide();
    $("#carregar_agente5_controle").val("");
    $("#carregar_btn_esconder_agente5").show();
    $("#carregar_btn_inclui_agente5").show();
}

function chama_setimo(){
    $("#div_setimo_agente").show();
    $("#carregar_agente7_controle").val("1");
    $("#carregar_btn_esconder_agente6").hide();
    $("#carregar_btn_inclui_agente6").hide();
}

function esconde_setimo(){
    $("#div_setimo_agente").hide();
    $("#carregar_agente7_controle").val("");
    $("#carregar_btn_esconder_agente6").show();
    $("#carregar_btn_inclui_agente6").show();
}

function chama_oitavo(){
    $("#div_oitavo_agente").show();
    $("#carregar_agente8_controle").val("1");
    $("#carregar_btn_esconder_agente7").hide();
    $("#carregar_btn_inclui_agente7").hide();
}

function esconde_oitavo(){
    $("#div_oitavo_agente").hide();
    $("#carregar_agente7_controle").val("");
    $("#carregar_btn_esconder_agente7").show();
    $("#carregar_btn_inclui_agente7").show();
}

function chama_nono(){
    $("#div_nono_agente").show();
    $("#carregar_agente9_controle").val("1");
    $("#carregar_btn_esconder_agente8").hide();
    $("#carregar_btn_inclui_agente8").hide();
}

function esconde_nono(){
    $("#div_nono_agente").hide();
    $("#carregar_agente8_controle").val("");
    $("#carregar_btn_esconder_agente8").show();
    $("#carregar_btn_inclui_agente8").show();
}

function chama_decimo(){
    $("#div_decimo_agente").show();
    $("#carregar_agente10_controle").val("1");
    $("#carregar_btn_esconder_agente9").hide();
    $("#carregar_btn_inclui_agente9").hide();
}

function esconde_decimo(){
    $("#div_decimo_agente").hide();
    $("#carregar_agente10_controle").val("");
    $("#carregar_btn_esconder_agente9").show();
    $("#carregar_btn_inclui_agente9").show();
}

function preencher_campos(){
    var sexo = $("#carregar_hidden_sexo").val();
    if (sexo == 'M') {
        $("#carregar_radio_sexo_m").attr("checked", "true");
    }else if(sexo == 'F'){
        $("#carregar_radio_sexo_f").attr("checked", "true");
    }
    var e = $("#carregar_hidden_e").val();
    if (e != '') {
        $("#carregar_radio_dados_cadastrais_e_sim").attr("checked", "true");
    }else if(e == ''){
        $("#carregar_radio_dados_cadastrais_e_nao").attr("checked", "true");
    }
    var tabagismo = $("#carregar_hidden_tabagismo").val();
    if (tabagismo != '') {
        $("#carregar_radio_tabag_sim").attr("checked", "true");
    }else if(tabagismo == ''){
        $("#carregar_radio_tabag_nao").attr("checked", "true");
    }
    var asma = $("#carregar_hidden_asma").val();
    if (asma == 'value') {
        $("#carregar_radio_asma_sim").attr("checked", "true");
    }else if(asma == ''){
        $("#carregar_radio_asma_nao").attr("checked", "true");
    }
    var tosse = $("#carregar_hidden_tosse").val();
    if (tosse == 'value') {
        $("#carregar_radio_tosse_sim").attr("checked", "true");
    }else if(tosse == ''){
        $("#carregar_radio_tosse_nao").attr("checked", "true");
    }
    var dpoc = $("#carregar_hidden_dpoc").val();
    if (dpoc == 'value') {
        $("#carregar_radio_dpoc_sim").attr("checked", "true");
    }else if(dpoc == ''){
        $("#carregar_radio_dpoc_nao").attr("checked", "true");
    }
    var bk_insuficiencia = $("#carregar_hidden_bk_insuficiencia").val();
    if (bk_insuficiencia == 'value') {
        $("#carregar_radio_bk_sim").attr("checked", "true");
    }else if(bk_insuficiencia == ''){
        $("#carregar_radio_bk_nao").attr("checked", "true");
    }
    var derrame_pleural = $("#carregar_hidden_derrame_pleural").val();
    if (derrame_pleural == 'value') {
        $("#carregar_radio_der_pleural_sim").attr("checked", "true");
    }else if(derrame_pleural == ''){
        $("#carregar_radio_der_pleural_nao").attr("checked", "true");
    }
    var circunferencia_toraxica = $("#carregar_hidden_circunferencia_toraxica").val();
    if (circunferencia_toraxica == 'value') {
        $("#carregar_radio_circ_tor_sim").attr("checked", "true");
    }else if(circunferencia_toraxica == ''){
        $("#carregar_radio_circ_tor_nao").attr("checked", "true");
    }
    var has = $("#carregar_hidden_has").val();
    if (has == 'value') {
        $("#carregar_radio_has_sim").attr("checked", "true");
    }else if(has == ''){
        $("#carregar_radio_has_nao").attr("checked", "true");
    }
    var icc = $("#carregar_hidden_icc").val();
    if (icc == 'value') {
        $("#carregar_radio_icc_sim").attr("checked", "true");
    }else if(icc == ''){
        $("#carregar_radio_icc_nao").attr("checked", "true");
    }
    var anglina = $("#carregar_hidden_anglina").val();
    if (anglina == 'value') {
        $("#carregar_radio_anglina_sim").attr("checked", "true");
    }else if(anglina == ''){
        $("#carregar_radio_anglina_nao").attr("checked", "true");
    }
    var iam = $("#carregar_hidden_iam").val();
    if (iam == 'value') {
        $("#carregar_radio_iam_sim").attr("checked", "true");
    }else if(iam == ''){
        $("#carregar_radio_iam_nao").attr("checked", "true");
    }
    var valvulopalla = $("#carregar_hidden_valvulopalla").val();
    if (valvulopalla == 'value') {
        $("#carregar_radio_valvulopalla_sim").attr("checked", "true");
    }else if(valvulopalla == ''){
        $("#carregar_radio_valvulopalla_nao").attr("checked", "true");
    }
    var marcapasso = $("#carregar_hidden_marcapasso").val();
    if (marcapasso == 'value') {
        $("#carregar_radio_marcapasso_sim").attr("checked", "true");
    }else if(marcapasso == ''){
        $("#carregar_radio_marcapasso_nao").attr("checked", "true");
    }
    var arritmias = $("#carregar_hidden_arritmias").val();
    if (arritmias == 'value') {
        $("#carregar_radio_arritmias_sim").attr("checked", "true");
    }else if(arritmias == ''){
        $("#carregar_radio_arritmias_nao").attr("checked", "true");
    }
    var insuf_venosa = $("#carregar_hidden_insuf_venosa").val();
    if (insuf_venosa == 'value') {
        $("#carregar_radio_insuf_venosa_sim").attr("checked", "true");
    }else if(insuf_venosa == ''){
        $("#carregar_radio_insuf_venosa_nao").attr("checked", "true");
    }

    var diabetes = $("#carregar_hidden_diabetes").val();
    if (diabetes == 'value') {
        $("#carregar_radio_diabetes_sim").attr("checked", "true");
    }else if(diabetes == ''){
        $("#carregar_radio_diabetes_nao").attr("checked", "true");
    }
    var hipertireoidismo = $("#carregar_hidden_hipertireoidismo").val();
    if (hipertireoidismo == 'value') {
        $("#carregar_radio_hipertireoidismo_sim").attr("checked", "true");
    }else if(hipertireoidismo == ''){
        $("#carregar_radio_hipertireoidismo_nao").attr("checked", "true");
    }
    var endocrinopalias = $("#carregar_hidden_endocrinopalias").val();
    if (endocrinopalias == 'value') {
        $("#carregar_radio_endocrinopalias_sim").attr("checked", "true");
    }else if(endocrinopalias == ''){
        $("#carregar_radio_endocrinopalias_nao").attr("checked", "true");
    }
    var cirrose = $("#carregar_hidden_cirrose").val();
    if (cirrose == 'value') {
        $("#carregar_radio_cirrose_sim").attr("checked", "true");
    }else if(cirrose == ''){
        $("#carregar_radio_cirrose_nao").attr("checked", "true");
    }
    var hepatite_a = $("#carregar_hidden_hepatite_a").val();
    if (hepatite_a == 'value') {
        $("#carregar_radio_hepa_sim").attr("checked", "true");
    }else if(hepatite_a == ''){
        $("#carregar_radio_hepa_nao").attr("checked", "true");
    }
    var hepatite_b = $("#carregar_hidden_hepatite_b").val();
    if (hepatite_b == 'value') {
        $("#carregar_radio_hepb_sim").attr("checked", "true");
    }else if(hepatite_b == ''){
        $("#carregar_radio_hepb_nao").attr("checked", "true");
    }
    var hepatite_c = $("#carregar_hidden_hepatite_c").val();
    if (hepatite_c == 'value') {
        $("#carregar_radio_hepc_sim").attr("checked", "true");
    }else if(hepatite_c == ''){
        $("#carregar_radio_hepc_nao").attr("checked", "true");
    }
    var elilismo = $("#carregar_hidden_elilismo").val();
    if (elilismo == 'value') {
        $("#carregar_radio_elilismo_nao").attr("checked", "true");
    }else if(elilismo == ''){
        $("#carregar_radio_elilismo_nao").attr("checked", "true");
    }
    var hiv = $("#carregar_hidden_hiv").val();
    if (hiv == 'value') {
        $("#carregar_radio_hiv_sim").attr("checked", "true");
    }else if(hiv == ''){
        $("#carregar_radio_hiv_nao").attr("checked", "true");
    }
    var infeccoes_oportunistas = $("#carregar_hidden_infeccoes_oportunistas").val();
    if (infeccoes_oportunistas == 'value') {
        $("#carregar_radio_inf_opor_sim").attr("checked", "true");
    }else if(infeccoes_oportunistas == ''){
        $("#carregar_radio_inf_opor_nao").attr("checked", "true");
    }

    var insuf_renal = $("#carregar_hidden_insuf_renal").val();
    if (insuf_renal == 'value') {
        $("#carregar_radio_insuf_renal_sim").attr("checked", "true");
    }else if(insuf_renal == ''){
        $("#carregar_radio_insuf_renal_nao").attr("checked", "true");
    }
    var hemodialise_peritoneal = $("#carregar_hidden_hemodialise_peritoneal").val();
    if (hemodialise_peritoneal == 'value') {
        $("#carregar_radio_hemod_sim").attr("checked", "true");
    }else if(hemodialise_peritoneal == ''){
        $("#carregar_radio_hemod_nao").attr("checked", "true");
    }
    var disturbios_hemorragicos = $("#carregar_hidden_disturbios_hemorragicos").val();
    if (disturbios_hemorragicos == 'value') {
        $("#carregar_radio_dist_hemo_sim").attr("checked", "true");
    }else if(disturbios_hemorragicos == ''){
        $("#carregar_radio_dist_hemo_nao").attr("checked", "true");
    }
    var avc_previo = $("#carregar_hidden_avc_previo").val();
    if (avc_previo == 'value') {
        $("#carregar_radio_avc_previo_sim").attr("checked", "true");
    }else if(avc_previo == ''){
        $("#carregar_radio_avc_previo_nao").attr("checked", "true");
    }
    var doencas_psiquiatricas = $("#carregar_hidden_doencas_psiquiatricas").val();
    if (doencas_psiquiatricas == 'value') {
        $("#carregar_radio_d_psi_sim").attr("checked", "true");
    }else if(doencas_psiquiatricas == ''){
        $("#carregar_radio_d_psi_nao").attr("checked", "true");
    }
    var doencas_neuromuscular = $("#carregar_hidden_doencas_neuromuscular").val();
    if (doencas_neuromuscular == 'value') {
        $("#carregar_radio_d_neuro_musc_sim").attr("checked", "true");
    }else if(doencas_neuromuscular == ''){
        $("#carregar_radio_d_neuro_musc_nao").attr("checked", "true");
    }
    var doencas_reumaticas = $("#carregar_hidden_doencas_reumaticas").val();
    if (doencas_reumaticas == 'value') {
        $("#carregar_radio_d_reuma_sim").attr("checked", "true");
    }else if(doencas_reumaticas == ''){
        $("#carregar_radio_d_reuma_nao").attr("checked", "true");
    }
    var alteracao_neurologica = $("#carregar_hidden_alteracao_neurologica").val();
    if (alteracao_neurologica == 'value') {
        $("#carregar_radio_alt_neuro_sim").attr("checked", "true");
    }else if(alteracao_neurologica == ''){
        $("#carregar_radio_alt_neuro_nao").attr("checked", "true");
    }
    var hemotransfusao_previa = $("#carregar_hidden_hemotransfusao_previa").val();
    if (hemotransfusao_previa == 'value') {
        $("#carregar_radio_hemo_prev_sim").attr("checked", "true");
    }else if(hemotransfusao_previa == ''){
        $("#carregar_radio_hemo_prev_nao").attr("checked", "true");
    }

    $("#carregar_obs_gerais").val($("#carregar_hidden_obs_gerais").val());

    var abertura_boca = $("#carregar_hidden_abertura_boca").val();
    if (abertura_boca == 'value') {
        $("#carregar_radio_aber_boca_sim").attr("checked", "true");
    }else if(abertura_boca == ''){
        $("#carregar_radio_aber_boca_nao").attr("checked", "true");
    }
    var dentes_falhos = $("#carregar_hidden_dentes_falhos").val();
    if (dentes_falhos == 'value') {
        $("#carregar_radio_dentes_falhos_sim").attr("checked", "true");
    }else if(dentes_falhos == ''){
        $("#carregar_radio_dentes_falhos_nao").attr("checked", "true");
    }
    var protese = $("#carregar_hidden_protese").val();
    if (dentes_falhos == 'value') {
        $("#carregar_radio_protese_sim").attr("checked", "true");
    }else if(dentes_falhos == ''){
        $("#carregar_radio_protese_nao").attr("checked", "true");
    }
    var macroglossia = $("#carregar_hidden_macroglossia").val();
    if (macroglossia == 'value') {
        $("#carregar_radio_macroglossia_sim").attr("checked", "true");
    }else if(macroglossia == ''){
        $("#carregar_radio_macroglossia_nao").attr("checked", "true");
    }

    var massa_cervical = $("#carregar_hidden_massa_cervical").val();
    if (massa_cervical == 'value') {
        $("#carregar_radio_massa_cervical_sim").attr("checked", "true");
    }else if(massa_cervical == ''){
        $("#carregar_radio_massa_cervical_nao").attr("checked", "true");
    }
    var desvio_traqueia = $("#carregar_hidden_desvio_traqueia").val();
    if (desvio_traqueia == 'value') {
        $("#carregar_radio_desvio_traqueia_sim").attr("checked", "true");
    }else if(desvio_traqueia == ''){
        $("#carregar_radio_desvio_traqueia_nao").attr("checked", "true");
    }

    var dificuldade_intubacao = $("#carregar_hidden_dificuldade_intubacao").val();
    if (dificuldade_intubacao == 'value') {
        $("#carregar_chk_hist").attr("checked", "true");
    }else if(dificuldade_intubacao == ''){
        $("#carregar_chk_hist").attr("checked", "false");
    }
    var via_aerea_dificil = $("#carregar_hidden_via_aerea_dificil").val();
    if (via_aerea_dificil == 'value') {
        $("#carregar_chk_via_aerea_dif").attr("checked", "true");
    }else if(via_aerea_dificil == ''){
        $("#carregar_chk_via_aerea_dif").attr("checked", "false");
    }
    var historia_de_anafilaxia = $("#carregar_hidden_historia_de_anafilaxia").val();
    if (historia_de_anafilaxia == 'value') {
        $("#carregar_anafilaxia").attr("checked", "false");
    }else if(historia_de_anafilaxia == ''){
        $("#carregar_anafilaxia").attr("checked", "false");
    }
    var estomago_cheio = $("#carregar_hidden_estomago_cheio").val();
    if (estomago_cheio == 'value') {
        $("#carregar_chk_estomago_cheio").attr("checked", "true");
    }else if(estomago_cheio == ''){
        $("#carregar_chk_estomago_cheio").attr("checked", "false");
    }
    var corticoide = $("#carregar_corticoide").val();
    if (corticoide == 'value') {
        $("#carregar_chk_corticoide").attr("checked", "true");
    }else if(corticoide == ''){
        $("#carregar_chk_corticoide").attr("checked", "false");
    }
    var endocardite_bacteriana = $("#carregar_hidden_endocardite_bacteriana").val();
    if (endocardite_bacteriana == 'value') {
        $("#carregar_profilaxia").attr("checked", "true");
    }else if(endocardite_bacteriana == ''){
        $("#carregar_profilaxia").attr("checked", "false");
    }

    var cardioscopio = $("#carregar_hidden_cardioscopio").val();
    if (cardioscopio == 'value') {
        $("#carregar_radio_cardioscopio_sim").attr("checked", "true");
    }else if(cardioscopio == ''){
        $("#carregar_radio_cardioscopio_nao").attr("checked", "false");
    }
    var ox_digital = $("#carregar_hidden_ox_digital").val();
    if (ox_digital == 'value') {
        $("#carregar_radio_ox_digital_sim").attr("checked", "true");
    }else if(ox_digital == ''){
        $("#carregar_radio_ox_digital_nao").attr("checked", "false");
    }
    var pni = $("#carregar_hidden_pni").val();
    if (pni == 'value') {
        $("#carregar_radio_pni_sim").attr("checked", "true");
    }else if(pni == ''){
        $("#carregar_radio_pni_nao").attr("checked", "false");
    }
    var painv = $("#carregar_hidden_painv").val();
    if (painv == 'value') {
        $("#carregar_radio_painv_sim").attr("checked", "true");
    }else if(painv == ''){
        $("#carregar_radio_painv_nao").attr("checked", "false");
    }
    var capnografo = $("#carregar_hidden_capnografo").val();
    if (capnografo == 'value') {
        $("#carregar_radio_capnografo_sim").attr("checked", "true");
    }else if(capnografo == ''){
        $("#carregar_radio_capnografo_nao").attr("checked", "false");
    }
    var an_gases = $("#carregar_hidden_an_gases").val();
    if (an_gases == 'value') {
        $("#carregar_radio_an_gases_sim").attr("checked", "true");
    }else if(an_gases == ''){
        $("#carregar_radio_an_gases_nao").attr("checked", "false");
    }

    var tec_geral = $("#carregar_hidden_tec_geral").val();
    if (tec_geral == 'value') {
        $("#carregar_radio_tec_geral_sim").attr("checked", "true");
    }else if(tec_geral == ''){
        $("#carregar_radio_tec_geral_nao").attr("checked", "false");
    }
    var plexo = $("#carregar_hidden_plexo").val();
    if (plexo == 'value') {
        $("#carregar_radio_plexo_sim").attr("checked", "true");
    }else if(plexo == ''){
        $("#carregar_radio_plexo_nao").attr("checked", "false");
    }
    var bloqueio_neuroeixo = $("#carregar_hidden_neuroeixo").val();
    if (bloqueio_neuroeixo == 'value') {
        $("#carregar_radio_neuroeixo_sim").attr("checked", "true");
    }else if(bloqueio_neuroeixo == ''){
        $("#carregar_radio_neuroeixo_nao").attr("checked", "false");
    }
    var combinada = $("#carregar_hidden_combinada").val();
    if (combinada == 'value') {
        $("#carregar_radio_combinada_sim").attr("checked", "true");
    }else if(combinada == ''){
        $("#carregar_radio_combinada_nao").attr("checked", "false");
    }
    var sedacao = $("#carregar_hidden_sedacao").val();
    if (sedacao == 'value') {
        $("#carregar_radio_sedacao_sim").attr("checked", "true");
    }else if(sedacao == ''){
        $("#carregar_radio_sedacao_nao").attr("checked", "false");
    }

    var agentes = [$("#carregar_agente1_controle").val(), $("#carregar_agente2_controle").val(),
                    $("#carregar_agente2_controle").val(), $("#carregar_agente3_controle").val(),
                    $("#carregar_agente4_controle").val(), $("#carregar_agente5_controle").val(),
                    $("#carregar_agente6_controle").val(), $("#carregar_agente7_controle").val(),
                    $("#carregar_agente8_controle").val(), $("#carregar_agente9_controle").val(),
                    $("#carregar_agente10_controle").val()];

    for(i=0;i<10;i++){
        if (agentes[i] !=''){
            
        }
    }

    if(agentes[0] != ''){
        $("#div_primero_agente").show();
    }
    if(agentes[1] != ''){
        $("#div_segundo_agente").show();
    }
    if(agentes[2] != ''){
        $("#div_terceiro_agente").show();
    }
    if(agentes[3] != ''){
        $("#div_quarto_agente").show();
    }
    if(agentes[4] != ''){
        $("#div_quinto_agente").show();
    }
    if(agentes[5] != ''){
        $("#div_sexto_agente").show();
    }
    if(agentes[6] != ''){
        $("#div_setimo_agente").show();
    }
    if(agentes[7] != ''){
        $("#div_oitavo_agente").show();
    }
    if(agentes[8] != ''){
        $("#div_nono_agente").show();
    }
    if(agentes[9] != ''){
        $("#div_decimo_agente").show();
    }

}

function fn_alterar_dados(id){
    $('#campo_hidden_id_busca').val(id);
    //ajax('carrega_dados', ['campo_hidden_id_busca'], 'div_alteracao');
    $.ajax({
        type: "POST",
        url: "carrega_dados",
        async: true,
        data: {id: id},
        success: function(msg){
            $("#div_alteracao").html(msg);
            preencher_campos();
            $('#div_alteracao').dialog({
                modal : true,
                width:1100,
                height:1100,
                title:"Alteração"
            });
        }
    });
}
function fn_fechar_div_alteracao(){
    $('#div_alteracao').dialog("close");
}


