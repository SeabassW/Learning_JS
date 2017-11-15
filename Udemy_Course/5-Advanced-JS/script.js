///////////////////////////////////////////////////////////////
//// Lecture: Function Constructor
/*
//Object literal
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

//Function contructor
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
    this.calculateAge = function() {
        console.log(2016 - this.yearOfBirth);
    }
    
};

//Using Protoype to add methods
Person.prototype.calculateAge  = function() {
    console.log(2016 - this.yearOfBirth);
};

//Using Prototype to add properties (not common use)
Person.prototype.lastName = 'Smith';

//Instantiation 
var jamie = new Person('Jamie', 1987, 'builder');



var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

jamie.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(jamie.lastName);
*/
///////////////////////////////////////////////////////////
// Lecture: Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1996},
    job: { value: 'designer'}
});
*/

///////////////////////////////////////////////////////////
// Lecture: Primitives vs Objects !!!!!!!!
/*
// Primitives
var a = 23;
var b = a; 
a = 46;
console.log(a);
console.log(b);

//Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a,b) {
    a = 30;
    b.city = 'San Francisco'
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/
// !!!!!!!
// When a primitive is changed, a new copy is made
// When an object is changed, the reference to the object is changed.
// https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/
// !!!!!!!


///////////////////////////////////////////////////////////
// Lecture: Passing functions as arguments

/*
Functions are also objects in JavaScript, they are First Class Functions, so:

- A function is an instance of the Object type
- A function behaves like any other object
- We can store functions in a variable;
- We can pass a function as an argument to another function
- We can return a function from a function

*/
/*
var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    
    return arrRes;
}

//Callback function
function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - 0.67 * el);
    } else {
        return -1;
    }
}

//Call the function 
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

// Better practice to create small functions instead of one big function
*/

///////////////////////////////////////////////////////////
// Lecture: Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ", can you please explain what UX design is?");
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

//These variables are functions
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');

interviewQuestion('builder')('Mark');

*/


///////////////////////////////////////////////////////////
// Lecture: IIFE -- Immediately Invoked Function Expressions

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

//IIFE variant:
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//Function is wrapped to trick engine that the function is not a declaration but an expression. 
//Do this by wrapping the function in parentheses.

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck)
})(5);
*/

///////////////////////////////////////////////////////////
// Lecture: Closures

/*
//Closures Summary: 
An inner function always has access to the variables and parameters of its outer function,
even after the outer function has returned.
*/
/*
function retirement(retirementAge) {
    var a = ' years left until retirement';
    
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}


var retirementUS = retirement(66);
//retirement(66)(1990);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
*/ 
/*
//Rewrite this function with closures
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ", can you please explain what UX design is?");
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
*/
/*
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('baker')('Mike');
*/
///////////////////////////////////////////////////////////
// Lecture: Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentleman! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}


john.presentation('formal', 'morning');

//Method borrowing, call
john.presentation.call(emily, 'friendly', 'afternoon')

//Apply
john.presentation.apply(emily, ['friendly', 'evening']);

//Bind, uses currying. Is a technique in which we create a function based on another function but with preset parameters.
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('night');
johnFriendly('noon');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('morning');



var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    
    return arrRes;
}

//Callback function
function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

//Use bind to pass a function with 1 parameter as that is what calculateAge expects
var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

































