const fs = require('fs');

function saveToDatabase(course, update = false) {
  const db = JSON.parse(fs.readFileSync('./database.json'));

  if(update) {
    const updateCourses = db.courses.map(courseArray => courseArray.id === course.id ? course : courseArray);
    db.courses = updateCourses;
  }
  else db.courses.push(course);

  try {
    const json = JSON.stringify(db, null, 2);
    fs.writeFileSync('./database.json', json);
  } catch(err) {
    console.log("Houve um erro ao gravar os dados. " + err);
  }
}

module.exports = saveToDatabase;
