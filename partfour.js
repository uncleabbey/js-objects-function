// a


function add (num1, num2) {
	return num1 + num2
}

function subtract (num1, num2) {
	return num1 - num2
}

function multiply (num1, num2) {
	return num1 * num2
}

function divide (num1, num2) {
	return num1 / num2
}


// b

function sayHello (name) {
	var firstName = "Gabriel"
	if (name == firstName) {
		return "Hello Boss"
	}
	return ("Hello" + " " + name)
}

// c

function average  (arr) {
	var total =  0
	for(var i = 0, length1 = arr.length; i < length1; i++){
		total += arr[i]
	}
	return total / arr.length
}
average()


// d


function createStudent (firstName, lastName) {
	var fullName = {
		firstName,
		lastName
	}
	return fullName
}

createStudent()

// e


var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");
var elie = createStudent("Elie", "Schoppik");


var students = [tim, matt, elie]

// f

function findStudentByFirstName (firstName) {
	var foundName = false;
	for(var i = 0; i < students.length; i++){
		if ( students[i].firstName.toLowerCase() === firstName.toLowerCase()) {
			foundName = true;
		} 
	}
	return foundName
}
findStudentByFirstName("elie")


// g

function extractEveryThird  (arr) {
	var third = []
	for(var i = 0; i < arr.length; i++){
		if (i % 3 === 0) {
			third.push(arr[i])
		}
	 }
	 return third;
}

// h

function countEvensAndOdds  (arr) {
	var count = {}
	count.oddCount = 0
	count.evenCount = 0
	for(var i = 0, length1 = arr.length; i < length1; i++){
		if (arr[i] % 2 !== 0) {
			count.oddCount += 1;
		} else {
			count.evenCount += 1;	
		}
	}
	return count
}

// i

// answer is in comment
var myVar = "Hello from global";
function scopePractice() {
   var myVar = "Hello from function scope";
}
scopePractice(); // ans: Hello from function scope
console.log(myVar); // ans:  Hello from global
var tricky = "Hello from global";
function trickyScopePractice() {
    tricky = "Hello from function scope";
}
console.log(tricky); // Hello from global
