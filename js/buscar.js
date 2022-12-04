onmessage = async (msg) => {
  const ano = msg.data.ano;
  const area = msg.data.area;
  const materia = msg.data.materia;
  const conteudo = msg.data.conteudo;
  postMessage(ano);
};
