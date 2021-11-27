const fs = require('fs');

function listCourse() {
  console.log(`
  -------------------------------------------
  LISTAR CURSOS
  `);

  const db = JSON.parse(fs.readFileSync('./database.json', 'utf-8'));
  const courses = db.courses;

  for(let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
  }
}

module.exports = listCourse;
