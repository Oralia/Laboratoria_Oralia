/*Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
executor after a delay of 300ms, using setTimeout.

Then, print the contents of the promise after it has been fulfilled by passing
console.log to then.*/

var promise = new Promise(function (fulfill, reject) {
  // After the timeout reaches 300ms, fulfill the promise with value
  // 'FULFILLED!'.

  setTimeout(function () {
    fulfill("FULFILLED!");
  }, 300);
});

// Add a handler to the promise’s fulfillment. `console.log` will be called
// with the value passed to `fulfill`, which is `'FULFILLED!'`.
// Note that this statement will ALWAYS be executed before `fulfill` is
// called (we'll talk about this in depth in the lessons to come).

promise.then(console.log);
