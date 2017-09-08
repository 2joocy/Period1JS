# Period 1 - Javascript
This github will be provided, as a sheet to answer the learning goals of Period 1 of the Javascript / NodeJS / Typescript course. 


##### Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.
- 

##### Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node, in (many different) Browsers
- 
##### Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system.
- 
##### Explain about the Event Loop in Node.js
- 
##### Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises
- 
##### Explain the purpose of “use strict” and also Linters, exemplified with ESLint 
- 

# Code examples

#### Variable/function-Hoisting
**Working example**
```sh
name = "Lars";

console.log("Hej " + name);

var name;
```

**Not Working**
```sh
var firstName = "Lars";

console.log(firstName + lastName);

var lastName = "Andersen";
```
Javascript can only hoist declarations, but no initializations.

#### **this** in JavaScript
```sh

```
#### Closure and Modules
```sh
//CLOSURE

//Global Scope
members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
    ]

//This variable have been initialized outside a function, therefore it will be defined as a global scope.
var arr = ["Lars", "Jens", "Bo", "Frederik", "William", "Lars", "Peter", "Jan", "Bo"];

function arrLogic(){
    //initiailized in scope, therefore it will be scoped within ArrLogic
    var arr = ["Lars", "Jens", "Bo", "Frederik", "William", "Lars", "Peter", "Jan", "Bo"];

    function filterArray(){
        arr.filter(function(name){
            if(name.length > 3){
                arr2.push(name);
            }
        });
        
        console.log(arr2);
    }
    
    function mapArray(){
        arr.map(function(name){
            arr2.push(name.toUpperCase);
        });
    
        console.log(arr2);
    }
    

}

//**************************************************************/

//MODULES

var arrModule = (function() {
    var arr = ["Lars", "Jens", "Bo", "Frederik", "William", "Lars", "Peter", "Jan", "Bo"];
    
        function filterArray(){
            arr.filter(function(name){
                if(name.length > 3){
                    arr2.push(name);
                }
            });
            
            console.log(arr2);
        }
        
        function mapArray(){
            arr.map(function(name){
                arr2.push(name.toUpperCase);
            });
        
            console.log(arr2);
        }
    return {
            mapArray: mapArray,
            filterArray: filterArray
        };
}());
```
#### Immediately-Invoked Function Expressions (IIFE)
```sh

```
#### JavaScripts Prototype
```sh
Array.prototype.myMap = function(callback){
    for(var i = 0; i < Array.length; i++){
        Array.push(callback(Array[i]));
    }
};

Array.prototype.myFilter = function(callback){
    for(var i = 0; i < Array.length; i++){
        Array.push(callback(Array[i]));
    }
}
```
#### User defined Callback Functions
```sh
function myMap(array, callback){
    var newArr = [];

    for(var i = 0; i < array.length; i++){
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function myFilter(array, callback){
    var newArr = [];
    
    for(var i = 0; i < array.length; i++){
        newArr.push(callback(array[i]));
    }
    
    return newArr;
}

```
#### Explain the methods map, filter and reduce
Map & Join
```sh
function ex4a(arr){
    return ("<ul>" + arr.map((name) => "<li>" + name + "</li>").join("\n") + "</ul>");
    
}

function ex4b(){
    document.getElementById("tableData").innerHTML = (
    '<table style="width:100%">' + 
    '<tr>' +
    '<th>Name</th>' +
    '<th>Phone Number</th>' + 
    '</tr>' +
    '<tr>' + 
      (names.map((person) => "<td>" + person.name + "</td>" + "<td>" + person.phone + "</td>").join("\n")) +
    '</tr>' +
    '</table>'
    );
}
```
Reduce
```sh
function myReduce(){
    return numbers.reduce((total, number) => total + number);
}
```

#### User defined reusable modules implemented in Node.js
```sh

```

# ES6-7 and TypeScript
#### Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.
#### Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.
#### Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.
#### Provide examples with es6, running in a browser, using Babel and Webpack
#### Provide an number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics
