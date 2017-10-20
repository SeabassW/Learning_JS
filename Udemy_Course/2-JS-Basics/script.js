
//////////////////////////////////////////////////////////
// Lecture: Variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

//////////////////////////////////////////////////////////
// Lecture: Variables 2
/*
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age)

var job, isMarried;

//console.log(job);

job = 'Teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

//////////////////////////////////////////////////////////
// Lecture: Operators

var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/
//////////////////////////////////////////////////////////
// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'no'

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;

if (isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}
*/
//////////////////////////////////////////////////////////
// Lecture: Boolean logic and Switch
/*
var age = 26;

if (age <= 19) {
    console.log("John is a teenager");
} else if (age >= 20 && age < 30) {
    console.log("John is a young man");
} else {
    console.log("John is a man");
}


var job = prompt('What does John do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids');
        break;
    case 'driver':
        console.log('John drives a cab');
        break;
    case 'cop':
        console.log('John fights crime');
        break;
    default:
        console.log('John does nothing');
}
*/


/////////////////////////////////////////////////////////////
// Coding Challenge 1

var heightFriend = 186;
var ageFriend = 19;
var heightJohn = 178;
var ageJohn = 21;
var heightOther = 166;
var ageOther = 34;

var resultFriend = heightFriend + 5 * ageFriend;
var resultJohn = heightJohn + 5 * ageJohn;
var resultOther = heightOther + 5 * ageOther;

console.log(resultFriend);
console.log(resultJohn);
console.log(resultOther);

switch (resultFriend | resultJohn | resultOther) {
    case resultFriend > resultJohn && resultFriend > resultOther:
        console.log('Friend wins!');
        break;
    case resultJohn > resultFriend && resultJohn > resultOther:
        console.log('John wins!');
        break;
    case resultOther > resultFriend && resultOther > resultJohn:
        console.log('Other wins!');
        break;
    case resultFriend === resultJohn && resultFriend === resultOther:
        console.log('It\'s a tie!');
        break;
    default:
        console.log('Whoaah! Why are you here?!');
}

// possible to use multiple parameters in switch? if not -> if/else






































