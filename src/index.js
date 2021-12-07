const express = require('express')
const app = express();
require('./database');

app.listen(3000);
console.log('servidor corriendo en puerto',3000);