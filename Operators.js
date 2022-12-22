let num1 = 10;
let num2 = 20;

console.log (num1 + num2);

num1++;
console.log(num1);

console.log(++num2);

console.log(num2++);
console.log(num2);

// comparisiom 

console.log( num1 != num2);     
console.log( num1 == num2);     
console.log(num1 > num2);
console.log(num1 < num2);


// triple equal ===

// == value only
// === value type 

let data1 = 20;        //int
let data2 = "20";      // char

console.log(data1 == data2);
document.write(data1 == data2);

console.log(data1 === data2);
document.write(data1 === data2);




//Logical Operator
// and operator

console.log( 10 == 10 && 20 == 20);

if( 10 == 10 && 20 == 20)
{
    console.log("Ok");
}
else{
    console.log("fail");
}


if( 100 == 10 && 20 == 20)
{
    console.log("Ok");
}
else{
    console.log("fail");
}


// Or operator

if( 100 == 10 || 20 == 20)
{
    console.log("Ok");
}
else{
    console.log("fail");
}

if( 10 == 10 || 201 == 20)
{
    console.log("Ok");
}
else{
    console.log("fail");
}

if( 100 == 10 || 201 == 20)
{
    console.log("Ok");
}
else{
    console.log("fail");
}


// Not operator


if( ! 10 == 10 )
{
    console.log("Ok");
}
else{
    console.log("fail");
}


if( ! 101 == 101 )
{
    console.log("Ok");
}
else{
    console.log("fail");
}


// Ternary Operator

let result = 10 == 10 ? "same" : "not same";
console.log (result);