function isEven(num) {
	if(num % 2 === 0) {
	return true;
	} 
	else {
	return false
	}
}

isEven(4); 
isEven(21);
isEven(68);
isEven(333);


// OR

function isEven(num) {
	return num % 2 === 0;
}

function factorial(num){
	// define a result variable
	let result = 1; 
	// calculate factorial and store value in result
	for(var i = 2; i <= num; i++) {
		result *= i; 
	}
	// return the result variable 
	return result; 
}

//factorial(4) 4 x 3 x 2 x 1