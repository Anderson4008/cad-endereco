'use strict';

// Função para limpar formulário
const limparFormulario = () => {

    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';

}

// Função para preencher formulário
const preencherFormulario = (endereco) => {

    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;

}

// Verifica se é número
const eNumero = (numero) => /^[0-9]+$/.test(numero);

// Verifica CEP válido
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Função principal
const pesquisaCep = async () => {
    limparFormulario();
    const cep = document.getElementById('cep');
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    if (cepValido(cep.value)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')) {
            alert('CEP não encontrado!');
        } else {
            preencherFormulario(endereco);
        }
    } else {
        alert('Digite um CEP válido!');
    }

}

// Evento ao sair do input
document.getElementById('cep').addEventListener('focusout', pesquisaCep);