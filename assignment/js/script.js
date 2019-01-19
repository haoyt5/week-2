/*Assignment 1
https://stackoverflow.com/questions/43742077/find-largest-value-in-a-string-of-numbers-without-math-max
*/
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

/*Assignment 3
Complete the function below to calculate the average price of all the products.
*/

function avg(data){
	let sum = 0,
		productCount = 0,
		i;
	for (i=0; i < data.length; i++){
		if (data[i].name ='Product'){
			sum +=data[i].price;
			++productCount;
		}
	}return sum / productCount;
}
var products = [
	{
		name:"Product 1",
		price:100
	 },
	 {
	 	name:"Product 2",
		price:700
	 },
	{
		name:"Product 3",
		price:250
	 }
];
console.log("Average price of all products is: "+avg(products));// show the average price of all products
