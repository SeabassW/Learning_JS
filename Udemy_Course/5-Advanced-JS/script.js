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


///////////////////////////////////////////////////////////
// Lecture: 













































