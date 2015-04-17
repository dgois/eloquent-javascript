function range(test1, test2) {
  var rangeArray = [];
  for (i = test1; i <= test2; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
}

function sum(rangeArray) {
  var total = 0;
  for (i = 0; i < rangeArray.length; i++) {
    total += rangeArray[i];
  }
  return total;
}
console.log(sum(range(1, 10)));