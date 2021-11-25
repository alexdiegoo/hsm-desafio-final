const fs = require('fs');
const readline = require('readline-sync');

function readCourse() {
  const db = JSON.parse(fs.readFileSync('./database.json', 'utf-8'));
  const courses = db.courses;

  console.log(`
  -------------------------------------------
  VER CURSO
  `);

  const id = Number(readline.question("Digite o id do curso desejado: "));
  const findCourse = courses.find(course => course.id === id);

  if(findCourse === undefined) return console.log(`Curso com id ${id} não encontrado!`);

  console.log(`
  CURSO ID: ${id}:
  TITULO: ${findCourse.title}
  DESCRICAO: ${findCourse.description}
  IMAGEM: ${findCourse.image}
  PROFESSOR: ${findCourse.teacherName}
  LINK DE AULA(S): ${findCourse.classes}
  `);
}

module.exports = readCourse;
