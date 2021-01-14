//1.declaring a function
function elon() {
    console.log("You Don't Need a College Degree to Work at Tesla");
}

// calling the function
elon();

//2.Function With parameter
// declaring a function
function sam(name) {
    console.log("Hi Darling " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
sam(name);

//3.program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() 
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}


//4.Apply()

var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName: "Elon",
  lastName: "Musk"
}
person.fullName.apply(person1);