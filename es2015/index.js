function NumbersES5(numbs) { 
        var self = this; 
        this.nums = numbs; 
        this.fives = []; 
        this.nums.forEach(function (v) { 
            if (v % 5 === 0) { 
                self.fives.push(v); 
            } 
    }); 
}

function NumbersArrow(numbs) { 
    var self = this; 
    this.nums = numbs; 
    this.fives = []; 
    this.nums.forEach((v) => { 
        if (v % 5 === 0) { 
            self.fives.push(v); 
        } 
}); 
}

var numbersEs5 = new NumbersES5([1, 3, 5, 10, 14, 20, 33, 50]); 
console.log(numbersEs5.fives); 

var counter = {
    count: 0,
    inc: () => {
      this.count++;
    }
  }

var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

function f(...args){
    let returnString = ""; 
        for (var index = 0; index < args.length; index++) { 
            returnString += "\nrest value " + index + " is a: " + args[index].constructor.name; 
        } 
    return returnString; 
}

var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
var restParams = [ ...rest];
console.log(f(5,2,...restParams));

var chars = [... f(5,2,...restParams)];

console.log(restParams);
console.log(chars);

function createPerson(fName, lName, age){
    return {type: "Person", fName, lName, age};
}

let { lastName, phone } = getPerson();

export default {f};