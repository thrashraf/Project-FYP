const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000;

const app = express();

//enable cors
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, console.log(`server running on port ${port}`))