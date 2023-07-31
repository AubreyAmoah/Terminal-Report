const express = require('express');
const path = require('path');


const app = express();



const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

//Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

//Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.set('view engine', 'hbs');

app.get('*', (req, res) => {
  res.render('index');
})

app.listen(80, () => {
  console.log('App listening on port 80!');
});
 