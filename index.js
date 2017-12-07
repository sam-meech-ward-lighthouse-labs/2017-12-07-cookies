import { join } from '../../Library/Caches/typescript/2.6/node_modules/@types/ejs';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'Christmas Sweater',
  keys: [process.env.SESSION_SECRET_KEY || "some secret key"]
}));

const bcrypt = require('bcrypt');

const database = require('./database');
const users = database.users;
const facts = database.facts;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const userID = req.session.userID;
  const user = users[userID];

  for (factID in facts) {
    if (facts[factID].userID === userID) {
      // Add that face
      user.quirkyFact = facts[factID];
    }
  }

  res.render('index', { user });
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let user;
  for (userID in users) {
    if (users[userID].username === username && bcrypt.compareSync(password, users[userID].password)) {
      // Log the user in
      user = users[userID];
      break;
    }
  }

  if (user) {
    req.session.userID = user.userID;
    res.redirect('/');
  } else {
    res.send("Username of password is incorrect. Can you guess which one?");
  }
});

app.listen(8080);