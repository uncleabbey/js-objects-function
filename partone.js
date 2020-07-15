// 1

var person = {};

person['firstName'] = 'Gabriel';

person['lastName'] = 'Kayode';

person['occupation'] = 'Web Developer'



// 2

person.firstName

person['firstName']

person.lastName

person['lastName']

person.occupation

person['occupation']


// 3

person["hobby"] = "Reading"


delete person.occupation


// 4

// The difference between dot notation and bracket notation that while they both access same object, dot notation is more readable


// 5

var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

for (prop in namesAndHobbies) {
	// statement
	console.log(`${namesAndHobbies[prop]} => ${prop}`)
}
console.log(namesAndHobbies.elie, "=>", 'elie')
console.log(namesAndHobbies.matt, "=>",  "matt")
console.log(namesAndHobbies.janey, "=>",  "janey")
console.log(namesAndHobbies.tim, "=>",  "tim")


// 6

namesAndHobbies['Kayode'] = 'Writing'

// 7

if (namesAndHobbies['Kayode']) console.log(namesAndHobbies.Kayode)

