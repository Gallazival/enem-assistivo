import { enem2017 } from './enem2017.js';

$(document).ready(function () {
  let numero = 136;
  questao(numero);
  $('.questao-anterior').click(() => {
    if (numero === 136) return;
    questao(--numero);
  });
  $('.questao-seguinte').click(() => {
    if (numero === 180) return;
    questao(++numero);
  });
  $('.enviar-resposta').click(() => alert(enem2017.corrige(numero, $('input:checked').val()) ? 'Correta' : 'Errada'));
  $('.enviar-resposta').click(() => $('.alert').alert());
  function questao(numero) {
    $('.titulo-questao').text(`Questão ${numero} do segundo dia do caderno laranja do ENEM 2017`);
    $('.numero-questao').text(`Questão ${numero}`);
    $('.questao-content').html(enem2017.questao(numero).enunciados.map((enunciado) => `<p>${enunciado}</p>`));
    $('.alternativas-wrapper').empty();
    for (let i = 0; i < 5; i++) {
      let key = ['A', 'B', 'C', 'D', 'E'][i];
      $('.alternativas-wrapper').append(
        `<div class="form-check">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="alternativa" id="" value="${key}" required />
            ${key}) ${enem2017.questao(numero).alternativas[key]}
          </label>
        </div>`
      );
    }
  }
});
