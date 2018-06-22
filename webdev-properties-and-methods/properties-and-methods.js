let myUser = {
	name: 'Patrik Andersson',
	age: 25
 };

console.log(myUser.name);



let userName = 'Patrik';

console.log(userName.length); //the amount of characters in the string userName



let languages = ['javascript', 'ruby', 'python'];

console.log(languages.length) //the amount of items in the array



if (userName.length < 5) {
	console.log('Username is too short');
}
else {
console.log('Username is long enough');
}


console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false


let password = '123';

if  (userName.length > 5 && password.length >5) {
	console.log('Username and password is  long enough :)');
	} else {
		console.log('Username or password is too short');
	}



//you can check the length of a  string without variable as well

'Patrik Andersson' > 5 ;


// the symbol || stands for "or" which is true if either of expressions is true

console.log(true ||  true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false





let user = {
	isAdmin: false,
	isMod: true
};

if (user.isAdmin || user.isMod) {
	console.log('User is either mod or admin') ;
	} else{
		console.log('User is neither');
	}


console.log(myUser.name.toLowerCase()); //patrik andersson
console.log(myUser.name.toUpperCase()); //PATRIK ANDERSSON



console.log(languages); //array containing javascript ruby python

let returnedValue = languages.pop(); //the .pop method removes the last element from an array

console.log(languages); //javascript ruby
console.log(returnedValue); //python


console.log(languages); //this only contains javascript and ruby

returnedValue = languages.push('python');

console.log(languages); // it now contains javascript ruby and python again
console.log(returnedValue); // this is  the length of the array with the newly added element



//initialization 'let i= 0;'
// condition ' i< 5;'		the loop will repeat untill this condition isn't true
//final expression ' i++'	this is run after each iteration
for (let  i=0; i<5; i++){
	console.log(i);
}
console.log('Nice loop');



//the charAt method retrieves the character at a given position in a string
for (let i=0; i < myUser.name.length; i++){
	console.log(myUser.name.charAt(i));
}



//to print all items from an array

for (let i=0; i < languages.length; i++) {
	console.log(languages[i]);
}


let sales = [1 , 54, 64, 33, 3, 2, 5];
let total = 0;

// this adds all the elements (which are integers) in the array

for (let i = 0; i < sales.length; i++){
total =total+sales[i];
}


console.log('The total of all sales: ' + total);


// this will modify ALL the elements in the array

let exclamations = ['run', 'hide', 'get away' ];

for (let i=0; i < exclamations.length; i++){
	exclamations[i] = exclamations[i].toUpperCase();
}

console.log(exclamations);
