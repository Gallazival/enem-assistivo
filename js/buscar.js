import enem2017 from './json/enem2017.json' assert { type: 'json' };

onmessage = (msg) => {
  const ano = msg.data.ano;
  const area = msg.data.area;
  const materia = msg.data.materia;
  const conteudo = msg.data.conteudo;
  postMessage(enem2017['136']._gabarito);
};

function buscarAno(ano) {

}
