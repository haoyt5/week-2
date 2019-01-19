
//Assignment 1
//https://stackoverflow.com/questions/43742077/find-largest-value-in-a-string-of-numbers-without-math-max

function maxNumber(numbers) {
  var arr = numbers.split(" ").map(Number);
  var largest = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log("1.The max number is: " + maxNumber("1 2 4 5"));
console.log("2.The max number is: " + maxNumber("5 2 7 1 6"));