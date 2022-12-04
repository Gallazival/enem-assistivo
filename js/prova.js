$(document).ready(function () {
  const buscar = new Worker('js/buscar.js');
  const filtros = JSON.parse(sessionStorage.getItem('filtros'));

  buscar.postMessage(filtros);
  buscar.onmessage = (msg) => {
    alert(msg.data);
  }
});
