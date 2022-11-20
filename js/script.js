import enem2017 from './json/enem2017.json' assert { type: 'json' };

$(document).ready(function () {
  let prova = enem2017;
  let questao = 136;

  renderizarQuestao(prova, questao);

  $(document).keydown((e) => {
    if (e.key === 'Enter' && $(':focus').hasClass('input-group')) {
      $(':focus').find('input').click();
    }
  })

  $('#enviarResposta').click(() => {
    corrigirQuestao(prova, questao, $('input:checked').val());
  });

  $('#exibirRespostaCerta').click(() => {
    $('#respostaCorreta').toggle();
    if ($('#respostaCorreta').is(':visible')) {
      $('#respostaCorreta').focus();
    }
  });

  $('[data-dismiss]').click(() => {
    $('#respostaCorreta').hide();
  })

  $('.proximaQuestao').click(() => {
    renderizarQuestao(prova, ++questao);
  });

  $('#questaoAnterior').click(() => {
    renderizarQuestao(prova, --questao);
  });

  function renderizarQuestao(prova, questao) {
    const enunciados = prova[questao].enunciados;
    const alternativas = prova[questao].alternativas;
    $('#enunciadosQuestao').empty();
    $('#alternativasQuestao').empty();
    $('#tituloQuestao').text(`Questão ${questao} do ENEM 2017`);
    for (const enunciado of enunciados) {
      $('#enunciadosQuestao').append(`<p>${enunciado}</p>`);
    }
    for (const letra in alternativas) {
      const alternativa = alternativas[letra];
      $('#alternativasQuestao').append(`
        <div class="form-group input-group" tabindex="0">
          <div class="input-group-prepend">
            <label for="${letra}" class="input-group-text text-monospace">${letra})</span>
          </div>
          <label class="form-control h-100" for="${letra}" aria-label="">${alternativa}</label>
          <div class="input-group-append">
            <div class="input-group-text">
              <input type="radio" name="alternativa" id="${letra}" value="${letra}" aria-label="" required tabindex="-1" />
            </div>
          </div>
        </div>
      `);
    }
    const gabarito = prova[questao]._gabarito;
    const resposta = prova[questao].alternativas[gabarito];
    $('#respostaCorreta').text(`Respota correta: ${gabarito}) ${resposta}`);
  }

  function corrigirQuestao(prova, questao, alternativa) {
    if (!alternativa) {
      alternativa = 'não escolhida';
    }
    $('#respostaCorrigidaTitulo').text(`Questão ${questao} alternativa ${alternativa}`);
    if (prova[questao]._gabarito === alternativa) {
      return $('#resultadoAlternativaEscolhida').text('Resposta correta!');
    }
    return $('#resultadoAlternativaEscolhida').text('Resposta incorreta!');
  }
});
