# Part 6

### a.	What does the following code output? Why?
```
var firstName = 'Elie';

function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName(); // ?
```
**Answer**:

Tim Because firstName variable was assigned the in the function scope



### b.	What does the following code output? Why?

```
function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName();

console.log(firstName) // ?
```
**Answer**:
undefined because it was defined within function scope


### c.	What does the following code output? Why?
```
console.log(firstName) // ?
var firstName = "Elie"

```
**Answer**: 

Undefined because it was called before it was assigned

### d.	What does the following code output? Why?
```
console.log(firstName) // ?
firstName = 'Elie'
```
**Answer**: 

Undefined because it was called before it was assigned

### e.	What does the following code output? Why?
```
function sayHi(){
    return 'Hi ' + firstName;
    var firstName = 'Elie'
}

sayHi(); // ?
```

**Answer**:
Hi undefined

Undefined because it was called before it was assigned

### f.	What does the following code output? Why?
```
function sayHi(){
    return 'Hi ' + firstName; 
    firstName = 'Elie'
}

sayHi(); // ?
```

**Answer**:
Hi Ellie

Because it is a global variable

### g.	What does the following code output? Why?
```
sayHi() // ?

function sayHi(){
    return 'Hi!';
}
```
**Answer**:

Hi 

because function can be called before being instanciated

### h.	What does the following code output? Why?

```
sayHi() // ?

var sayHi = function(){
    return 'Hi!';
}
```
**Answer**:

Error Because it assigned to a variable