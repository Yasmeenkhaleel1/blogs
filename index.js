import express from 'express'
import { initApp } from './src/initApp.js'
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
});
initApp(app,express);

app.listen(3000)