const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2]).then((data) => {
      let writeData = 'This is the list of our students\n';
      for (const datum of Object.keys(data)) {
        writeData += (`Number of students in ${datum}: ${data[datum].length}. List: ${data[datum].join(', ')}\n`);
      }
      res.statusCode = 200;
      res.write(writeData.slice(0, -1));
      res.end();
    }).catch((err) => res.status(500).end(err.message));
  }

  static getAllStudentsByMajor(req, res) {
    readDatabase(process.argv[2]).then((data) => {
      if (!(['CS', 'SWE'].includes(req.params.major))) {
        res.status(500).end('Major parameter must be CS or SWE');
        return;
      }
      res.statusCode = 200;
      res.write(`List: ${data[req.params.major].join(', ')}`);
      res.end();
    }).catch((err) => { res.statusCode = 500; res.end(err.message); });
  }
}

export default StudentsController;
