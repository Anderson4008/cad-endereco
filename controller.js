'use strict'; //Modo restrito
//Consumo de API da ViaCEP
// www.viacep.com.br

//Funcao para limpar o formulario (do CEP para baixo)

const limparFormulario = (endereco) => {
    document .getElementById('rua').value = '';
    document .getElementById('bairro').value = '';
    document .getElementById('cidade').value = '';
    document .getElementById('estado').value = '';
}