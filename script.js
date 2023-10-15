// Crie um vetor para armazenar as informações dos equipamentos
let equipamentos = [];
let somaTotal = 0; // Variável para rastrear a soma total

// Função para limpar os campos de entrada no contêiner
function limparCampos() {
    document.getElementById('equipamento').value = ''; // Limpa o campo de descrição do equipamento
    document.getElementById('potencia').value = ''; // Limpa o campo de potência
    document.getElementById('quantidade_equip').value = ''; // Limpa o campo de quantidade de equipamento
    document.getElementById('hdia').value = ''; // Limpa o campo de horas de uso diário
}

// Função para calcular e adicionar o equipamento
function multiplicarCampos() {
    let equip = document.getElementById('equipamento').value; // Obtém o valor do campo de descrição do equipamento
    let potencia = document.getElementById('potencia').value; // Obtém o valor do campo de potência
    let qtd_equip = document.getElementById('quantidade_equip').value; // Obtém o valor do campo de quantidade de equipamento
    let hdia = document.getElementById('hdia').value; // Obtém o valor do campo de horas de uso diário
    let res = document.getElementById('res'); // Elemento HTML para exibir o resultado

    // Verifica se algum campo está vazio
    if (equip.length <= 0 || potencia.length <= 0 || qtd_equip.length <= 0 || hdia.length <= 0) {
        window.alert('[ERRO] Faltam dados!');
    } else {
        // Converte os valores para números
        potencia = Number(potencia);
        qtd_equip = Number(qtd_equip);
        hdia = Number(hdia);

        // Verifica se os valores são maiores ou iguais a zero
        if (potencia >= 0 && qtd_equip >= 0 && hdia >= 0) {
            let resultado = potencia * qtd_equip * hdia; // Calcula o consumo diário do equipamento
            res.innerHTML = resultado + ' Wh/dia'; // Exibe o resultado no HTML

            // Crie um objeto para representar o equipamento
            let equipamento = {
                descricao: equip, // Descrição do equipamento
                potencia: potencia, // Potência do equipamento
                quantidade: qtd_equip, // Quantidade de equipamento
                horasDeUso: hdia, // Horas de uso diário
                consumoDiario: resultado // Consumo diário do equipamento
            };

            // Adicione o objeto ao vetor de equipamentos
            equipamentos.push(equipamento);

            // Atualize a soma total
            somaTotal += resultado;

            // Atualize a lista de equipamentos e a soma total no HTML
            atualizarListaEquipamentos();
            atualizarSomaTotal();

            // Limpe os campos de entrada no contêiner
            limparCampos();
        } else {
            window.alert('Os valores de potência, quantidade e horas de uso devem ser maiores que 1.');
        }
    }
}

// Função para atualizar a lista de equipamentos no HTML
function atualizarListaEquipamentos() {
    let listaEquip = document.querySelector('.lista_equip');
    listaEquip.innerHTML = '<h2>Lista de Equipamentos</h2>';

    // Itere sobre o vetor de equipamentos e adicione cada equipamento à lista
    equipamentos.forEach(function (equipamento) {
        let equipamentoInfo = `${equipamento.descricao} - ${equipamento.consumoDiario} Wh/dia`;
        let p = document.createElement('p'); // Cria um elemento de parágrafo
        p.textContent = equipamentoInfo; // Define o texto do parágrafo
        listaEquip.appendChild(p); // Adiciona o parágrafo à lista de equipamentos
    });
}

// Função para atualizar a soma total no HTML
function atualizarSomaTotal() {
    let res = document.getElementById('res');
    res.innerHTML = somaTotal + ' Wh/dia';
}
