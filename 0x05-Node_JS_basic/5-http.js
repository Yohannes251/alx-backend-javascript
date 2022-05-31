const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2]).then((data) => {
      res.write(data);
      res.end();
    }).catch((err) => res.end(err.message));
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
