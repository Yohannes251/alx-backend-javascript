const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const port = 1245;
const hostname = 'localhost';

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2]).then((data) => {
    res.write(data);
    res.end();
  }).catch((err) => res.end(err.message));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
