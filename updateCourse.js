const fs = require('fs');
const readline = require('readline-sync');
const saveToDatabase = require('./saveToDatabase');

function updateCourse() {
  console.log(`
  -------------------------------------------
  ATUALIZAR CURSO
  `);

  const id = Number(readline.question('Digite o id do curso: '));
  const db = JSON.parse(fs.readFileSync('./database.json'));

  const findCourse = db.courses.find(course => course.id === id);
  if(findCourse === undefined) return console.log(`Curso com id ${id} nao encontrado!`);

  const title = readline.question('Titulo do curso: ');
  const description = readline.question('Descricao do curso: ');
  const image = readline.question('Caminho da imagem: ');
  const teacherName = readline.question('Nome do professor: ');
  const classes = [];
  const updateDate = Date.now();

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
    creationDate: findCourse.creationDate,
    updateDate
  }

  // Para atualizar, passar um segundo parametro como true
  saveToDatabase(course, true);
}

module.exports = updateCourse;
