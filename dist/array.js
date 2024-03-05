"use strict";

// Array de objetos
var alunos = [{
  nome: 'Alice',
  nota: 7
}, {
  nome: 'Bob',
  nota: 5
}, {
  nome: 'Charlie',
  nota: 8
}, {
  nome: 'Davi',
  nota: 3
}, {
  nome: 'Eva',
  nota: 9
}];

// Criar uma função que retorna apenas os alunos com nota maior ou igual a 6
var alunosAprovados = function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};

// Chamar a função
var aprovados = alunosAprovados(alunos);

// Imprimir o resultado
console.log('Alunos aprovados:');
console.log(aprovados);