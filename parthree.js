// 1

function myName () {
	var fullName = "Gabriel Kayode"
	console.log(fullName)
}

myName()


// 2

function randomFood() {

	var favoriteFoods = ["pizza", "icecream"];

	return favoriteFoods[Math.floor(Math.random() * favoriteFoods.length)]

}


randomFood()

// 3

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function displayOddNumbers() {
	for(var i = 0; i < numbers.length; i++){
		if (i % 2 === 0) {
			console.log(numbers[i])
		}
	}
} 

displayOddNumbers()


// 4

function displayEvenNumbers () {
	for(var i = 0; i < numbers.length; i++){
		if (i % 2 !== 0) {
			console.log(numbers[i])
		}
	}
} 

displayEvenNumbers ()

// 5

function returnFirstOddNumber() {
	for(var i = 0; i < numbers.length; i++){
		if (i % 2 === 0) {
			console.log(numbers[i])
			break;
		}
	}
}


