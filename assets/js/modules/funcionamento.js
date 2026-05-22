export default function initFuncionamento() {

  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horariioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;

  const horarioAberto = (horarioAgora >= horariioSemana[0] && horarioAgora < horariioSemana[1]);


  if (semanaAberta && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
  console.log(horarioAberto);
}