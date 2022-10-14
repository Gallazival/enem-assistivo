import { enem2017 } from './enem2017.js';

$(document).ready(function () {
  $('.questao-content').html(enem2017.questao(136).enunciados.map((enunciado) => `<p>${enunciado}</p>`));
});
