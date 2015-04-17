/* 
Problem to solve the chess exercise:
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
*/

// This one is more readable the the tiny one
var size = 8;
var chess = "";
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
      if ( ((j + i) % 2) == 0) {
          chess += "#";
      } else {
          chess += " ";
        }  
     }
  chess += "\n";
}
console.log(chess);

// The small one
var size = 8;
var chess = "";
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    chess += ((j + i) % 2) == 0 ? "#" : " ";
  }
  chess += "\n";
}
console.log(chess);