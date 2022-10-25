import { enem2017 } from './provas/enem2017.js';

$(document).ready(function () {
  'use strict';

  let numeroQuestao = 136;

  function imprimeEnunciados(numero) {
    $('.enunciados').empty();
    const enunciados = enem2017.questao(numero).enunciados;
    for (let enunciado of enunciados) {
      $('.enunciados').append(`
        <p>${enunciado}</p>
      `);
    }
  }

  function imrpimeAlternativas(numero) {
    $('.alternativas').empty();
    const alternativas = enem2017.questao(numero).alternativas;
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

  imprimeEnunciados(numeroQuestao);
  imrpimeAlternativas(numeroQuestao);
});
