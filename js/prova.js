import enem2017 from './json/enem2017.json' assert { type: 'json' };

$(document).ready(function () {

  const questoes = [];

  Object.keys(enem2017).forEach((key) => {
    if (enem2017[key].filtros.ano === '2017') {
      questoes.push(enem2017[key]);
    }
  });

  console.table(questoes);
  console.table(Object.entries(enem2017));

  // const questoes = enem2017.map((n) => {
  //   if (n.filtros.questao === "2017") {
  //     return n;
  //   }
  // });

  // let prova = enem2017;
  // let questao = 136;

  // renderizarQuestao(prova, questao);

  // $(document).keydown((e) => {
  //   if (e.key === 'Enter' && $(':focus').hasClass('input-group')) {
  //     $(':focus').find('input').click();
  //   }
  // })

  // $('#enviarResposta').click(() => {
  //   corrigirQuestao(prova, questao, $('input:checked').val());
  // });

  // $('#exibirRespostaCerta').click(() => {
  //   $('#respostaCorreta').toggle();
  //   if ($('#respostaCorreta').is(':visible')) {
  //     $('#respostaCorreta').focus();
  //   }
  // });

  // $('[data-dismiss]').click(() => {
  //   $('#respostaCorreta').hide();
  // })

  // $('.proximaQuestao').click(() => {
  //   renderizarQuestao(prova, ++questao);
  // });

  // $('#questaoAnterior').click(() => {
  //   renderizarQuestao(prova, --questao);
  // });

  // function renderizarQuestao(prova, questao) {
  //   const enunciados = prova[questao].enunciados;
  //   const alternativas = prova[questao].alternativas;
  //   $('#enunciadosQuestao').empty();
  //   $('#alternativasQuestao').empty();
  //   $('#tituloQuestao').text(`Questão ${questao} do ENEM 2017`);
  //   for (const enunciado of enunciados) {
  //     $('#enunciadosQuestao').append(`<p>${enunciado}</p>`);
  //   }
  //   for (const letra in alternativas) {
  //     const alternativa = alternativas[letra];
  //     $('#alternativasQuestao').append(`
  //       <label class="form-group input-group">
  //         <div class="input-group-prepend">
  //           <span class="input-group-text text-monospace">${letra})</span>
  //         </div>
  //         <span id="${letra}" class="form-control h-100">${alternativa}</span>
  //         <div class="input-group-append">
  //           <div class="input-group-text">
  //             <input type="radio" name="alternativa" value="${letra}" aria-describedby="${letra}" required />
  //           </div>
  //         </div>
  //       </label>
  //     `);
  //   }
  //   const gabarito = prova[questao]._gabarito;
  //   const resposta = prova[questao].alternativas[gabarito];
  //   $('#respostaCorreta').text(`Respota correta: ${gabarito}) ${resposta}`);
  // }

  // function corrigirQuestao(prova, questao, alternativa) {
  //   if (!alternativa) {
  //     alternativa = 'não escolhida';
  //   }
  //   $('#respostaCorrigidaTitulo').text(`Questão ${questao} alternativa ${alternativa}`);
  //   if (prova[questao]._gabarito === alternativa) {
  //     return $('#resultadoAlternativaEscolhida').text('Resposta correta!');
  //   }
  //   return $('#resultadoAlternativaEscolhida').text('Resposta incorreta!');
  // }
});
