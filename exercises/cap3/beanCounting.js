
function countBs(text) {
  var count = 0;
  for (i = 0; i < text.length; i++) {
    if (text.charAt(i) == "B") {
      count++;
    }
  }
  return count;
}

function countChar(text, charToCount) {
  var count = 0;
  for (i = 0; i < text.length; i++) {
    if (text.charAt(i) == charToCount) {
      count++;
    }
  }
  return count;
}
