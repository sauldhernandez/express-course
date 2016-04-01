'use strict';

var Q = require('q');

module.exports = (promise, timeout) => {
  const deferred = Q.defer();
  const timeoutId = setTimeout( () => {
    deferred.reject('Timed out');
  }, timeout);

  promise.then( r => {
    clearTimeout(timeoutId);
    deferred.fulfill(r);
  });

  return deferred.promise;
}
