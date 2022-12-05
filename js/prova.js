$(document).ready(function () {
  const buscar = new Worker('js/filtrar.js', {
    type: 'module',
  });

  const filtros = JSON.parse(sessionStorage.getItem('filtros'));
  let questoes;
  let numero = 0;

  buscar.onmessage = (msg) => {
    questoes = msg.data;
    render();
    buscar.terminate();
  };

  buscar.postMessage(filtros);

  function render() {
    questao(questoes[numero]);
  }

  function questao(questao) {
    $('#ano').text(questao.filtros.ano);
    $('#questao').text(questao.filtros.questao);
    $('#area').text(questao.filtros.area);

    $('#enunciados').empty();
    $('#alternativas').empty();

    questao.enunciados.forEach((en) => {
      $('#enunciados').append(`
        <p>${en}</p>
      `);
    });

    for (const letra in questao.alternativas) {
      const alternativa = questao.alternativas[letra];
      $('#alternativas').append(`
        <div class="input-group mb-3">
          <span class="input-group-text font-monospace">${letra}</span>
          <label for="${letra}" class="form-control">${alternativa}</label>
          <div class="input-group-text">
            <input name="alternativas" id="${letra}" class="form-check-input mt-0" type="radio" />
          </div>
        </div>
      `);
    }
  }

  // const modal = $('#modal');
  // modal.on('show.bs.modal', (e) => {
  //   const button = e.relatedTarget;
  //   const content = button.getAttribute('data-bs-content');
  //   console.log(button, content);
  // });
});
