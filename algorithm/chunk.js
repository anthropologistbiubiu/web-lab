var chunk = function (arr, size) {
  if (arr.length == 0) {
    return arr;
  } else if (arr.length <= size) {
    return [arr];
  }
  var result = [];
  var lastIndex = 0;
  for (var i = 0; i < arr.length; i++) {
    if ((i + 1) % size === 0) {
      result.push(arr.slice(i + 1 - size, i + 1));
      lastIndex = i;
    }
  }
  if (lastIndex < arr.length - 1) {
    result.push(arr.slice(lastIndex + 1, arr.length));
  }
  return result;
};
