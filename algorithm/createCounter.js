/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter1 = function (n) {
  return n++;
};

var createCounter2 = function (init) {
  var count = init;
  return {
    increment: function () {
      return ++count;
    },
    reset: function () {
      count = init;
      return count;
    },
    decrement: function () {
      return --count;
    },
  };
};
