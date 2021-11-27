const fs = require('fs');

function listCourse() {
  console.log(`
  -------------------------------------------
  LISTAR CURSOS
  `);

  const db = JSON.parse(fs.readFileSync('./database.json', 'utf-8'));
  const courses = db.courses;

  for(let i = 0; i < courses.length; i++) {
    const course = courses[i];
    console.log(`
    ID: ${course.id}
    TITULO: ${course.title}
    DESCRICAO: ${course.description}
    IMAGEM: ${course.image}
    PROFESSOR: ${course.teacherName}
    LINK DE AULA(S): ${course.classes}
    DATA DE CRIACAO: ${new Date(course.creationDate).toString()}
    ${course.updateDate ? `DATA DE MODIFICACAO: ${new Date(course.updateDate).toString()}` : ''}
    \n`);
  }
}

module.exports = listCourse;
