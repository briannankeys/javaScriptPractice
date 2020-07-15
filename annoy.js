// var answer = prompt("are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("are we there yet?");
// }

// alert("YAY! We made it!");


// if(answer === "yes") {
// 	alert("YAY, We made it!")
// } 	else {
	
// }

// *******VERSION 2************ usiing index.Of


var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
	var answer = prompt("are we there yet?");
}


alert("YAY! We made it!");


