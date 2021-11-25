const readline = require('readline-sync');
const createCourse = require('./createCourse');
const readCourse = require('./readCourse');

while(true) {
  console.log(`
  -------------------------------------------
  DIGITE O NUMERO DA OPCAO DESEJADA:

  1 -- Criar Curso
  2 -- Atualizar Curso
  3 -- Ver Curso
  4 -- Deletar Curso

  0 -- Sair do Programa
  `);
  const option = Number(readline.question("Escolha uma opcao: "));

  if(option === 0) break;
  else if(option === 1) createCourse();
  else if(option === 3) readCourse();
  else console.log("Digite um opcao valida!");
}
