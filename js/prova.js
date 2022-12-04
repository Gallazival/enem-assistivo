$(document).ready(function () {
  const buscar = new Worker('js/filtrar.js', {
    type: 'module',
  });

  const filtros = JSON.parse(sessionStorage.getItem('filtros'));
  let busca;

  buscar.onmessage = (msg) => {
    busca = msg.data;
    render();
  };

  buscar.postMessage(filtros);

  function render() {

  }
});
