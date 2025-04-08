const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router/router');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const count = 0;

app.post("/", router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
