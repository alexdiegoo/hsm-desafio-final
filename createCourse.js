const fs = require('fs');
const readline = require('readline-sync');

function saveToDatabase(course) {
  try {
    const data = fs.readFileSync('./database.json');
    const db = JSON.parse(data);
    db.courses.push(course);

    const json = JSON.stringify(db, null, 2);
    fs.writeFileSync('./database.json', json);
  } catch(err) {
    console.log("Houve um erro ao criar o curso. " + err);
  }

}

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
    classes
  }

  saveToDatabase(course);

}

module.exports = createCourse;
