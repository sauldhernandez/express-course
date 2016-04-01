'use strict';

const Q = require('q');

module.exports = (obj, timeout) => {
  const deferred = Q.defer();

  setTimeout( () => {
    deferred.fulfill(obj);
  }, timeout);

  return deferred.promise;
}
