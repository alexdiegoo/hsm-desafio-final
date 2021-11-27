const fs = require('fs');
const readline = require('readline-sync');

function deleteCourse() {
  console.log(`
  -------------------------------------------
  DELETAR CURSO
  `);

  const id = Number(readline.question('Digite o id do curso que deseja apagar: '));

  try {
    const db = JSON.parse(fs.readFileSync('./database.json'));
    const found = db.courses.find(courseArray => courseArray.id === id);

    if (found === undefined) return console.log(`Curso com id:${id} não encontrado!`);

    db.courses = db.courses.filter(courseArray => courseArray.id != id);

    fs.writeFileSync('./database.json', JSON.stringify(db, null, 2));
  } catch(err) {
    console.log(`Houve um erro: ${err}`);
  }

  console.log("Curso deletado!")
}

module.exports = deleteCourse;
