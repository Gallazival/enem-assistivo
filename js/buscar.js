$(document).ready(function () {
  const buscar = new Worker('js/filtrar.js', {
    type: 'module',
  });

  const filtros = JSON.parse(sessionStorage.getItem('filtros'));

  buscar.onmessage = (msg) => {
    // alert(msg.data);
  };

  buscar.postMessage(filtros);
});
