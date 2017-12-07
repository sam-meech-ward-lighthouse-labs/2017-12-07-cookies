const bcrypt = require('bcrypt');


const password = "👔";

const hashed = bcrypt.hashSync(password, 12);

console.log(hashed);

console.log(bcrypt.compareSync(password, hashed));