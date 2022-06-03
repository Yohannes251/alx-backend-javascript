const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    res.statusCode = 200;
    readDatabase(process.argv[2]).then((data) => {
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
    if (!(['CS', 'SWE'].includes(req.params.major))) {
      res.statusCode = 500;
      res.end('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2]).then((data) => {
      res.statusCode = 200;
      res.write(`List: ${data[req.params.major].join(', ')}`);
      res.end();
    }).catch((err) => res.send(err.message));
  }
}

export default StudentsController;
