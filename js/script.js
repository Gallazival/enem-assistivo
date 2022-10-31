import enem2017 from './json/enem2017.json' assert { type: 'json' };

$(document).ready(function () {
  'use strict';

  let numeroQuestao = 136;
  imprimeEnunciados(numeroQuestao);
  imprimeAlternativas(numeroQuestao);

  $('.proxima-questao').click(() => {
    numeroQuestao++;
    imprimeEnunciados(numeroQuestao);
    imprimeAlternativas(numeroQuestao);
    $('.titulo-questao').focus();
  });

  $('.questao-anterior').click(() => {
    numeroQuestao--;
    imprimeEnunciados(numeroQuestao);
    imprimeAlternativas(numeroQuestao);
    $('.titulo-questao').focus();
  });

  $('.repetir-enunciados').click(() => {
    $('.enunciados').focus();
  });

  $('.enviar-resposta').click(() => {
    verificaQuestao(numeroQuestao);
  });

  $('[data-dismiss]').click(() => {
    $('.collapse').removeClass('show');
  });

  function imprimeEnunciados(numero) {
    $('.numero-questao').text(numero);
    $('.enunciados').empty();
    const enunciados = enem2017[numero].enunciados;
    for (let enunciado of enunciados) {
      $('.enunciados').append(`
        <p>${enunciado}</p>
      `);
    }
  }

  function imprimeAlternativas(numero) {
    $('.alternativas').empty();
    const alternativas = enem2017[numero].alternativas;
    for (let letra in alternativas) {
      let alternativa = alternativas[letra];
      $('.alternativas').append(`
        <div>
          <input class="form-check-input" type="radio" name="alternativa" id="${letra}" value="${letra}" />
          <label class="form-check-label" for="${letra}">${alternativa}</label>
        </div>
      `);
    }
  }

  function verificaQuestao(numero) {
    const gabarito = enem2017[numero]._gabarito;
    const gabaritoResposta = enem2017[numero].alternativas[gabarito];
    let opcao = document.alternativas.alternativa.value;
    opcao ? opcao : (opcao = 'não selecionada');
    let resposta = opcao === gabarito;
    $('.alternativa-questao').text(opcao);
    $('.corrige-questao').toggleClass('alert-success', resposta);
    $('.corrige-questao').toggleClass('alert-danger', !resposta);
    $('.corrige-questao').html(`<b>Resposta ${resposta ? 'correta' : 'incorreta'}</b>`);
    $('.resposta-certa').text(`${gabarito}) ${gabaritoResposta}`);
  }
});
