/*  Assignment 1:Function and Array
	Complete the function below to find the ​max number​ of passing numbers. 
	You may refer to this ​MDN document​ about rest parameters of the function.
	Reminder:​ you ​cannot​ use Math.max() to complete this assignment.

	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
	https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	https://stackoverflow.com/questions/43576241/javascript-using-reduce-to-find-min-and-max-values
*/

function max(...theArgs) {
  return theArgs.reduce((acc, val) => {
  	acc[0] = (acc[0] === undefined || val > acc[0]) ? val : acc[0]
  	return acc;
  },[]);
}
console.log("1.The max number is: " + max(1,2,4,5));
console.log("2.The max number is: " + max(5,2,7,1,6));

/*
	https://stackoverflow.com/questions/43742077/find-largest-value-in-a-string-of-numbers-without-math-max
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
*/

/*  Assignment 2: Object
	In JavaScript, there are many different sets of syntax for creating objects.
	In the codes below, function parameters are encapsulated into an object, try using 
	at least ​two ways​ to create a proper object as a parameter of the calculate function.
*/

function calculate(args){
	let result;
	if(args.op === "+"){ 
		result = args.n1 + args.n2;
	}else if(args.op === "-"){
		result = args.n1 - args.n2;
	}else{
		result = "Not supported";
	}
	return result;
}
var passObject1 = {
	n1 : 4,
	n2 : 5,
	op : "+"
};

var passObject2 ={};
passObject2['op'] = "-";
passObject2['n1'] = 1;
passObject2['n2'] = 2;


console.log(calculate(passObject1));
console.log(calculate(passObject2));


/*  Assignment 3
	Complete the function below to calculate the average price of all the products.
*/
function avg(data){
	let acc = 0,
		count =0,
		i;
	for(i=0; i< data.length;i++){
		acc +=data[i].price;
		++ count;
	}return acc/count
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
console.log("Average price of all products is: "+ avg(products));

/*
	function avg2(data){
		let sum = 0,
			productCount = 0,
			i;
		for (i=0; i < data.length; i++){
			if (data.name ='Product'){
				sum +=data[i].price;
				++ productCount;
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
	console.log("Average price of all products is: "+avg2(products));
*/

