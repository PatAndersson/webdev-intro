let greeting;
console.log(greeting);
greeting = 'hello world';
console.log(greeting);

let message = 'You can\'t be serious!';
console.log(message);
//escape with \
let messageTwo = "he asked, \"Where are we?\"";
console.log(messageTwo);
//escape " with '
let messageThree = 'He asked,"where are we?"';
console.log(message);

//boolean
let isDrinkingAge= true;
let isSeniorCitizen = false;

console.log(isDrinkingAge);
console.log(isSeniorCitizen);

//create an array
let favoriteFruits = ['mango','banana','chocolate'];

console.log(favoriteFruits);

console.log(favoriteFruits[2]);

//objects

let userObject = {
	name: 'Patrik',
	age: 25,
	favoriteFruits: ['mango', 'banana', 'chocolate'], 
	car: {
		make:'fiat',
		model:'500 gucci edition',
		isFunctional: true
	}
};

//print values from the object

console.log(userObject.name);
//also viable but less used is bracket notation
console.log(userObject['age']);

console.log(userObject.favoriteFruits[2]);

console.log(userObject.car.make);
//seperate values by comma, concat a string with + 
console.log(userObject.car.make,userObject.car.model + ' is functional= '+ userObject.car.isFunctional);




if (userObject.age>=21){
	console.log('User can drink');
	}	else{
	console.log('user is too young to drink');
	}

let user ='Patrik';

//this is "truthy" because it checks if  'user' is defined or not
if (user){
	console.log('Goodbye, ' + user + '!');
	}
	else {
	console.log ('Goodbye!');
	}

let userTwo
//this is 'falsy' because userTwo is undefined
if (userTwo){
	console.log ('goodbye, ' + user + '!');
	}
	else {
	console.log('goodbye!');
	}


/*
falsy values in javascript
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
*/
