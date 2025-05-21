"use strict";

var alunos = [{
  nome: 'Eduardo',
  nota: 8
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Adriano',
  nota: 7
}, {
  nome: 'Josiane',
  nota: 9
}, {
  nome: 'Carlos',
  nota: 4
}];
function getAlunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = getAlunosAprovados(alunos);
console.log(aprovados);