
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
/*
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

*/
/////////////////////////////////////////////////////////////
// Coding Challenge 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/
/*
var yearOfBirth = [1959,1902,2001,1999,2003,2001,2012,1944];
var age = [];

for (var i = 0; i < yearOfBirth.length; i++) {
    var currYear = (new Date()).getFullYear();
    age.push(currYear - yearOfBirth[i]);
}

console.log(age);

for (var j = 0; j < age.length; j++) {
    console.log("This person is: "+ age[j] + " years old");
    if (age[j] >= 18) {
            console.log("Old Enough");
    } else {
        console.log("Too Young!");
    }
}
*/
var yearOfBirth = [1959,1902,2001,1999,2003,2001,2012,2009];

function printFullAge(arrayYears) {
    var oldEnough = [];
    for (var i = 0; i < arrayYears.length; i++) {
        var currYear = (new Date()).getFullYear();
        
        var age = currYear - arrayYears[i];
            
        if (age >= 18) {
            oldEnough.push(true);
        } else {
            oldEnough.push(false);
        }
    }
    return oldEnough
}
    
var full_1 = [1965,2008,1992];
var full_2 = [1998,2002,2016,1999,1959,2000,1823];

console.log(printFullAge(full_1));
console.log(printFullAge(full_2));



























