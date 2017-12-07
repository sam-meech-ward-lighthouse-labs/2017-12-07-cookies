let users = {
  1: {
    userID: 1,
    username: "sam",
    password: "$2a$12$L1OgoWvOjGr/eeonsSIP8.henJt9FYdRAxQBSaUgPyeR5e4EVrvge",
    admin: false
  },
  2: {
    userID: 2,
    username: "don",
    password: "$2a$12$8ZCMJ0RUKIrtbjlFU5ME7.eJSuw9gpVRGNi.EHKvN3FdM7jpFMI02",
    admin: true
  }
};

let facts = {
  1: {
    quirkyFact: "I have a keyboard shortcut for jazz hands 🤗",
    userID: 1
  },
  2: {
    quirkyFact: "I have a different 👔 for every day of the year",
    userID: 2
  }
};

exports.users = users;
exports.facts = facts;