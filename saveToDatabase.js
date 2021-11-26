const fs = require('fs');

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

module.exports = saveToDatabase;
