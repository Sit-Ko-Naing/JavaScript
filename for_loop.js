// let i = prompt("Enter a number : ");

// for(let i = 0; i <=5 ; i++){
//     console.log("number of for is : " + i);
    
// }

// console.log("End");


let num1, num2;

num1 = parseInt(prompt("Enter a number less than 5 : "));

while(num1 > 5){
    num1 = parseInt(prompt("Enter a number 1   less than 5 : ")); 
}

num2 = parseInt(prompt("Enter a number greater than 5 : "));

while(num2 < 5){
    num1 = parseInt(prompt("Enter a number 2 grater than 5 : ")); 
    break;
}


console.log(num1);
console.log(num2);
console.log('total value : ' + (num1+num2));