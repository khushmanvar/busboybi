var express = require('express');
var app = express();
const bodyParser = require('body-parser')
const { signup, login, del, uploadImage } = require('./handlers/users')
const { register, events } = require('./handlers/events')
const PORT = process.env.PORT || 5000

//express middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// user routes
app.post('/signup', signup);
app.post('/login', login);
app.delete('/delete', del);
app.post('/image', uploadImage)

// event routes
app.post('/register', register);
app.get('/events', events);

app.get('/', (req, res) => {
  res.send('Hello to the CSI Backend!')
})

app.listen(PORT, function () {
  console.log(`CSI Backend app is listening on port: ${PORT}!`); });