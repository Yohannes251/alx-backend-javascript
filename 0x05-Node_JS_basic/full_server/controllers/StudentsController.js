const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    res.statusCode = 200;
    readDatabase('./database.csv').then((data) => {
      let writeData = 'This is the list of our students\n';
      for (const datum of Object.keys(data)) {
        writeData += (`Number of students in ${datum}: ${data[datum].length}. List: ${data[datum].join(', ')}\n`);
      }
      res.write(writeData.slice(0, -1));
      res.end();
    }).catch((err) => res.write(err.message))
      .finally(() => {
        res.end();
      });
  }

  static getAllStudentsByMajor(req, res) {
    res.statusCode = 200;
    if (!(['CS', 'SWE'].includes(req.params.major))) {
      res.statusCode = 500;
      res.end('Major parameter must be CS or SWE');
    }

    readDatabase('./database.csv').then((data) => {
      res.write(`List: ${data[req.params.major].join(', ')}`);
      res.end();
    }).catch((err) => res.send(err.message));
  }
}

export default StudentsController;
