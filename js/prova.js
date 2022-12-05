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

    $('#ano').text(questao.filtros.ano);
    $('#questao').text(questao.filtros.questao);
    $('#area').text(questao.filtros.area);
    $('.materia.conteudo').empty();
    questao.filtros.materia.forEach((ma) => {
      $('.materia.conteudo').append(`
        <span class="badge bg-primary fs-6">${ma}</span>
      `);
    });
    questao.filtros.conteudo.forEach((co) => {
      $('.materia.conteudo').append(`
        <span class="badge rounded-pill text-bg-info fs-6">${co}</span>
      `);
    });
  }

  const modal = $('#modal');
  modal.on('show.bs.modal', (e) => {
    const button = e.relatedTarget;
    const content = button.getAttribute('data-bs-content');
    switch (content) {
      case 'ajuda':
        $('.modal-title').text('Menu de ajuda');
        $('.modal-body').html(`
          <h2 class="fs-5">Controles:</h2>
          <ul>
            <li>Use <kbd>&uarr;</kbd>, <kbd>&darr;</kbd>, <kbd>&larr;</kbd> e <kbd>&rarr;</kbd> para navegar nos elementos da página.</li>
            <li>Use <kbd>Enter</kbd> ou <kbd>Espaço</kbd> para interagir com botões e formulários.</li>
            <li>Use <kbd>h</kbd> para pular para o próximo cabeçalho e <kbd>Shift</kbd> + <kbd>h</kbd> para voltar ao cabeçalho anterior.</li>
            <li>Use <kbd>b</kbd> para pular para o próximo botão e <kbd>Shift</kbd> + <kbd>b</kbd> para voltar ao botão anterior.</li>
            <li>Use <kbd>f</kbd> para pular para o próximo formulário e <kbd>Shift</kbd> + <kbd>f</kbd> para voltar ao formulário anterior.</li>
          </ul>
        `);
        $('.modal-footer').html(`
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        `);
        break;
      default:
    }
  });
});
