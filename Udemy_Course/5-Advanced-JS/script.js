///////////////////////////////////////////////////////////////
//// Lecture: Function Constructor

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
    /*
    this.calculateAge = function() {
        console.log(2016 - this.yearOfBirth);
    }
    */
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

