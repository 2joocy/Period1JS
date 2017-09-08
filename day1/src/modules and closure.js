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