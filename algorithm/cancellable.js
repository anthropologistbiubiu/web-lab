var cancelfn = function (fn, args, t) {
  return function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        var result = fn(args);
        resolve(result);
      }, t);
    });
  };
};

var f = cancelfn(
  (x) => {
    return x;
  },
  5,
  5000,
);

f().then((result) => {
  console.log(result);
});

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  const tid = setTimeout(() => {
    fn(...args);
  }, t);
  return function () {
    clearTimeout(tid);
  };
};
