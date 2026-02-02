/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  const len = Object.keys(obj).length;
  if (obj === null || obj === undefined || len === 0) {
    return true;
  }
  return false;
};

console.log(isEmpty({ a: 1 }));
console.log(isEmpty({}));
