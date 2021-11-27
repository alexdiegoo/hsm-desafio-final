const readline = require('readline-sync');
const saveToDatabase = require('./saveToDatabase');

function createCourse() {
  console.log(`
  -------------------------------------------
  CRIAR CURSO
  `);

  const id = Number(readline.question("Digite o id: "));
  const title = readline.question("Digite o titulo: ");
  const description = readline.question("Digite a descricao: ");
  const image = readline.question("Digite o caminho da imagem: ");
  const teacherName = readline.question("Digite o nome do professor: ");
  const classes = [];
  const creationDate = Date.now();

  while(true) {
    let classLink = readline.question("Digite o link da aula para adicionar ( Digite 'q' para encerrar)");

    if(classLink === 'q') break;

    classes.push(classLink);
  }

  const course = {
    id,
    title,
    description,
    image,
    teacherName,
    classes,
    creationDate
  }

  saveToDatabase(course);

}

module.exports = createCourse;
