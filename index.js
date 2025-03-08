// Receives a function and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function!");
    };
  }
  
  // Returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("I am an anonymous function!");
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  