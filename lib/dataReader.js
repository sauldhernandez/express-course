'use strict';

const fs = require('fs');

module.exports.printUserData = filename => {
  fs.readFile(filename, (err, data) => {
    if(err) {
      console.log(`An error occurred while reading the file ${filename}`, err);
    }
    else {
      const userData = JSON.parse(data);
      console.log(`User name is ${userData.name}`);
      console.log(`Age is ${userData.age}`);
      console.log(`Description is ${userData.description}`);
    }
  });
}
