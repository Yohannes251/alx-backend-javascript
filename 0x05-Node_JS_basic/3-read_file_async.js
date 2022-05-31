const fs = require('fs');

async function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw Error('Cannot load the database');
  }

  const content = await fs.promises.readFile(path, 'utf8');
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

  returnValue = ''
  returnValue += `Number of students: ${fields.length}\n`
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
      returnValue += `Number of students in ${field}: ${nameList.length}. List: ${nameList.join(', ')}\n`
      console.log(`Number of students in ${field}: ${nameList.length}. List: ${nameList.join(', ')}`);
    }
  }
  return returnValue.slice(0, -1)
}

module.exports = countStudents;
