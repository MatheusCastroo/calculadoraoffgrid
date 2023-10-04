function multiplicarCampos() {
    let equip = document.getElementById('equipamento').value;
    let potencia = document.getElementById('potencia').value;
    let qtd_equip = document.getElementById('quantidade_equip').value;
    let hdia = document.getElementById('hdia').value;
    let res = document.getElementById('res');

    if (equip.length <= 0 || potencia.length <= 0 || qtd_equip.length <= 0 || hdia.length <= 0) {
        window.alert('[ERRO] Faltam dados!');
    } else {
        potencia = Number(potencia);
        qtd_equip = Number(qtd_equip);
        hdia = Number(hdia);
    
        if (potencia >= 0 && qtd_equip >= 0 && hdia >= 0) {
            let resultado = potencia * qtd_equip * hdia;
            res.innerHTML = resultado + ' Wh/dia';
        } else {
            window.alert('Os valores de potência, quantidade e horas de uso devem ser maiores que 1.');
        }
    }
}
