const express = require('express');

const route = require('./routes/index');

const port = 1245;
const app = express();

app.listen(port);
app.use('/', route);
app.use('/students', route);
app.use('/students/:major', route);

export default app;
