'use strict';

module.exports.greet = name => `Hello ${name}!!!`;
/*This is the same as the following ES5 code
module.exports.greet = function(name) {
  return "Hello " + name + "!!!";
}
*/

module.exports.defaultName = 'Tutorial User';
