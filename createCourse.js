const fs = require('fs');
const readline = require('readline-sync');

function saveToDatabase(course) {
  fs.readFile('./database.json', (err, data) => {
    if(err) console.log("Houve um erro: " + err);

    else {
      const db = JSON.parse(data);
      db.courses.push(course);

      const json = JSON.stringify(db, null, 2);
      fs.writeFile('./database.json', json, 'utf-8', (err) => {
        if(err) console.log("Houve um erro ao gravar: " + err);
      });
    }
  })
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
