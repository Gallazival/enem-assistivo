import enem2017 from './json/enem2017.json' assert { type: 'json' };

$(document).ready(function () {
  'use strict';

  let numeroQuestao = 136;

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
    $('.numero-questao').empty();

  }

  $('.proxima-questao').click(() => {
    numeroQuestao++;
    imprimeEnunciados(numeroQuestao);
    imprimeAlternativas(numeroQuestao);
  });

  $('.questao-anterior').click(() => {
    numeroQuestao--;
    imprimeEnunciados(numeroQuestao);
    imprimeAlternativas(numeroQuestao);
  });

  $('.repetir-enunciados').click(() => {
    $('.enunciados').focus();
  });
});
