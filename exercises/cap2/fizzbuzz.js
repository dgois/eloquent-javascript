// Resolve the fizz buzz problem

var result = "";
for (var i = 1; i <= 100; i++) {
  result = "";
  if ( (i % 3) == 0) {
    result = "Fizz";
  } 
  if ( (i % 5) == 0 ) {
    result += "Buzz";
  }
  if (result == "") {
    console.log(i);
  } else {
    console.log(result);
  }
}