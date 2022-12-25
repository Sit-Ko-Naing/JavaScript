// function

//no argument function

function getName(){
    console.log("I am function.");
    console.log("I am function.");
    console.log("I am function.");
}

getName();

// one argument function
/*
        function getNumber(num1 = 0){
            console.log(num1);
        }

        num1 = parseInt(prompt("Enter a number : "));
        getNumber(num1);

*/


// multi argument function
    /*    
        function sum(num1,num2){
            console.log(num1+num2)
        }

        num1 = parseInt(prompt("Enter a number : "));
        num2 = parseInt(prompt("Enter a number : "));
        sum(num1,num2);

    */


// type function and Void function

        function typeFunction(num1,num2){
            return num1 + num2;

        }

        function voidFunction(num1,num2){
            console.log( num1 + num2);

        }

        var result = typeFunction(100,100);
        console.log(result);


// _________________________________________________________________________

// Short form 

// arrow function
var greet = (name) => {
    console.log(name);
};

greet("Hello, I am greeting.");

// more short arrow function

var one = (age,sex) => console.log(age,sex);
one(22,"male");