# strinter
Small string interpolation (Python-like) module for JavaScript. It works in Node and the Browser. Keep in
mind that this is a work in progress, so there are things that needs to be done.

## Usage
The following code snippet works in Node

```javascript
  
var strinter = require('./strinter').strinter;

// pass an object
var data = {name: 'Jorge', lastname: 'Ramirez', age: 22};
var out = strinter('Hello I am %(name)s %(lastname)s. I\'m %(age)d years old', data);
console.log(out);
```

And the browser version looks like the following

```html
<script type="text/javascript" src="strinter.js">
  // pass an object
  var data = {name: 'Jorge', lastname: 'Ramirez', age: 22};
  var out = strinter('Hello I am %(name)s %(lastname)s. I\'m %(age)d years old', data);
  console.log(out);
</script>
```

## TODO

* Support '+', '-' and '0' convertion flags.
* Support the following convertion types: 'f', 'g', 'G', 'x', 'X' and 'o'.

## License

`strinter` is licensed under [GPLv3](http://www.gnu.org/licenses/gpl.txt)