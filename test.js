/**
 * test suite for NodeJS
 *
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/
var strinter = require('./strinter').strinter;


// pass a string
var data = 'world!';
var out = strinter('Hello %s', data);
console.log(out);

// pass a number
var data = 10;
var out = strinter('Number %d', data);
console.log(out);

// pass an object
data = {name: 'Jorge', lastname: 'Ramirez', age: 22};
out = strinter('Hello I am %(name)s %(lastname)s. I\'m %(age)d years old', data);
console.log(out);

// pass an array
data = ['Jorge', 'Ramirez', 22];
out = strinter('Hello I am %s %s. I\'m %d years old', data);
console.log(out);

// display error
data = ['Jorge', 'Ramirez', 22];
out = strinter('Hello I am %d %s. I\'m %d years old', data);
