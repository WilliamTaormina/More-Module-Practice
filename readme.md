# Javascript-Modules

## What I learned

Javascript modules are reusable pieces of code that can be exported from one program, and imported for use into another program. Modules are particularly useful because they help to:

* find, fix, and debug code more easily.
* reuse and recycle defined logic in different parts of our application.
* keep information private and protected from other modules.
* prevent pollution of the global namespace, and potential naming collisions by cautiously selecting variables and behavior we load into a program.

### Defining and Exporting Modules

The syntax for defining and exporting modules looks like this:

```javascript
let Dinner = {};

Dinner.firstCourse = "Pizza";

module.exports = Dinner;
```

The pattern we use to export modules is thus:

1.  Define an object to represent the module
2.  Add data or behavior to the module
3.  Export the Module

We can also wrap any collection of data and functions in an object, and export the object using **module.exports**. Example syntax would look like this:

```javascript
let Dinner = {};

module.exports = {
 firstCourse: = "Pizza";
 happyCamper:  function(){
 console.log('I am so excited that I am about to eat ' + this.firstCourse);
 }
};
```

### Importing the Module with **require()**

To make use of the module and the behavior we define in it, we **import** the module. A common way to do this is with the **require()** function.

Modules can be separated into individual documents, based on their specific feature, function, or goal, and then imported and exported back and forth, based on how you need to use them or combine them to make the program work.

require() syntax:

```javascript
const Dinner = require("./dinner.js");
function happyCamper() {
  console.log("I am so excited that I am about to eat " + Menu.firstCourse);
}
happyCamper();
```

The pattern we use to import modules is thus:

1.  Import the module using the **require()** function
2.  Us the module and it's properties within a program

#### ES6 Export Default

In ES6, Javascript a nw more readable and flexible syntax for exporting modules. There are two techniques for exporting modules:default export, and named export.

1.  Default Export - allows us to export one module per file. 'export default' uses the Javascript 'export' statement to export Javascript Objects, functions, and primitive data types. An example:

```javascript
let Menu = {};
export default Menu;
```

2.  Named Export = named export lets us export data through the use of variables.

```javascript
let specialty = "";
function isVegetarian() {}
function isLowSodium() {}

export { specialty, isVegetarian };
```

When writing in ES6 syntax, we use 'export default' in place of 'module.exports'

#### ES6 Import

ES6 module syntax also introduces the import keyword, for importing objects. The import syntax is:

```javascript
import Menu from './menu'.
```

Breaking down the import statement from above:

1.  The 'import' keyword begins the statement
2.  The keyword 'Menu' here specifies the name of the variable to store the default export in
3.  'from' specifies where to load the module from
4.  './menu' is the name of the module to load. When dealing with local files, it specifically refers to the name of the file without the extension of the file.
