var arr = ["Lars", "Jens", "Bo", "Frederik", "William", "Lars", "Peter", "Jan", "Bo"];
var arr2 = [];
var names = [
            {name:"Lars",phone:"1234567"}, 
            {name: "Peter",phone: "675843"}, 
            {name: "Jan", phone: "98547"},
            {name: "Bo", phone: "79345"}
            ];

var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
    ]

var numbers = [2, 3, 67, 33];

var all = ["Lars", "Peter", "Jan", "Bo"];

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



function allUpperCase(name){
    return name.toUpperCase;
}

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

//REDUCE OPGAVER

function myReduce(){
    return numbers.reduce((total, number) => total + number);
}

//THIS EXAMPLES

var arr = [];

console.log(this.arr.map((name) => {return name}));

//THIS NO SCOPE
function foo(){
    var arr = [];
    console.log(this.arr);
}