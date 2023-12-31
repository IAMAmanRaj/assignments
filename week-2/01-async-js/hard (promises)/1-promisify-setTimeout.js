/*
    Write a function that returns a promise that resolves after n seconds have passed,
    // where n is passed as an argument to the function.
*/

function wait(n) {
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("this message is from resolve after 4 seconds");
    }, n * 1000);
  }); //asynchronous task , takes n/1000 seconds to return p

  return p;
}

module.exports = wait;
