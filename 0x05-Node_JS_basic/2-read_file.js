const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw Error('Cannot load the database');
  }

  const content = fs.readFileSync(path, 'utf8');
  const contentArray = content.split('\n');

  let iteration = 0;
  const fields = [];
  for (const line of contentArray) {
    if (iteration > 0) {
      if (line) {
        fields.push(line.split(',')[3]);
      }
    }
    iteration = 1;
  }

  console.log(`Number of students: ${fields.length}`);

  const checked = [];
  for (const field of fields) {
    if (!checked.includes(field)) {
      const nameList = [];
      for (const line of contentArray) {
        const data = line.split(',');
        if (data[3] === field) {
          nameList.push(data[0]);
        }
      }
      checked.push(field);
      console.log(`Number of students in ${field}: ${nameList.length}. List: ${nameList.join(', ')}`);
    }
  }
}

module.exports = countStudents;
