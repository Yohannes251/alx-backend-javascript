const fs = require('fs');

async function readDatabase(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
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

  const returnValue = {};

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
      returnValue[field] = nameList;
    }
  }
  return returnValue;
}

module.exports = readDatabase;
