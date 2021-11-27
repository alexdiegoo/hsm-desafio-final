const readline = require('readline-sync');
const createCourse = require('./createCourse');
const readCourse = require('./readCourse');
const updateCourse = require('./updateCourse');
const deleteCourse = require('./deleteCourse');
const listCourses = require('./listCourses');

while(true) {
  console.log(`
  -------------------------------------------
  DIGITE O NUMERO DA OPCAO DESEJADA:

  1 -- Criar Curso
  2 -- Atualizar Curso
  3 -- Ver Curso
  4 -- Deletar Curso
  5 -- Listar todos os cursos

  0 -- Sair do Programa
  `);
  const option = Number(readline.question("Escolha uma opcao: "));

  if(option === 0) break;
  else if(option === 1) createCourse();
  else if(option === 2) updateCourse();
  else if(option === 3) readCourse();
  else if(option === 4) deleteCourse();
  else if(option === 5) listCourses();
  else console.log("Digite um opcao valida!");
}
