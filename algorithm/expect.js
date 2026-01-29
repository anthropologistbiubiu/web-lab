var expect = function (val) {
  let origin = val;
  return (A = {
    toBe(arg) {
      if (arg !== null && arg === origin) {
        return true;
      } else {
        throw "Not Equal";
      }
    },
    notToBe(arg) {
      if (arg === null || arg !== origin) {
        return true;
      } else {
        throw "Equal";
      }
    },
  });
};
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

console.log(expect(5).notToBe(6));

c = { a: 1, b: "a" };
console.log(c);

