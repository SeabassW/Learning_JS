
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
/*
var heightFriend = 187;
var ageFriend = 19;
var heightJohn = 176;
var ageJohn = 22;
var heightOther = 166;
var ageOther = 54;

var resultFriend = heightFriend + 5 * ageFriend;
var resultJohn = heightJohn + 5 * ageJohn;
var resultOther = heightOther + 5 * ageOther;

console.log(resultFriend);
console.log(resultJohn);
console.log(resultOther);


if (resultFriend === resultJohn || resultJohn === resultOther) {
    console.log('It\'s a tie!');
} else if (resultFriend > resultJohn && resultFriend > resultOther) {
    console.log('Friend wins!');
} else if (resultJohn > resultOther) {
    console.log('John wins!');
} else {
    console.log('Other wins!');
}
*/

/////////////////////////////////////////////////////////////
// Lecture: Functions
/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);


function yearsUntilRetire(name, yearOfBirth) {
    var age = calculateAge(yearOfBirth); 
    var retirement = 65 - age;
    
    if (retirement >= 0) {
        console.log(name + ' has ' + retirement + ' years left till retirement');
    } else {
        console.log(name + ' has already retired ' + Math.abs(retirement) + ' years ago')
    }
}


yearsUntilRetire('John', 1990);
yearsUntilRetire('Mike', 1969);
yearsUntilRetire('Mary', 1948);
*/
/////////////////////////////////////////////////////////////
// Lecture: Statements and Expressions
/*
//Function Statement
function someFun(par) {
    //code
}

//Function Expression
var someFun = function(par) {
    //code
}

//Expressions
3 + 4;
var x = 3;

//Statements
if (x === 5) {
    //do something
}
*/
/////////////////////////////////////////////////////////////
// Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'baker', false];

john.push('Blue');
john.unshift('Mr.')
john.pop();
john.shift();

console.log(john);

console.log(john.indexOf('Smith'));

if (john.indexOf('teacher') === -1) {
    console.log('John is not a teacher');
}
*/
/////////////////////////////////////////////////////////////
// Lecture: Objects
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john);
console.log(john.lastName);
console.log(john['yearOfBirth']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane.isMarried = true;

console.log(jane);

*/
/////////////////////////////////////////////////////////////
// Lecture: Objects and Methods
/* v1.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    }
};

console.log(john.family[2]);
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/
/*
// v2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mike', 'Bob'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);

var mike = {
    name: 'Mike',
    lastName: 'Smith',
    yearOfBirth: 1950,
    job: 'builder',
    isMarried: false,
    family: ['Jane', 'John', 'Bob'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
*/

/////////////////////////////////////////////////////////////
// Lecture: Loops

// for-loops
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var names = ['John', 'Jane', 'Mark', 'Mary','Bob'];

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length-1; i >= 0; i--) {
    console.log(names[i]);
}

// while-loops

var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i = 1; i <= 5; i++) {
        
    if (i === 3) {
        continue;
    }
    
    console.log(i);
}

































