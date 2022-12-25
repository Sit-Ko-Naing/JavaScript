// array

var number = new Array(1,2,3,"mgmg","10.2");
console.log(number);

var fruits = ["mango","banana","orange","apple","avogado"];
console.log(fruits);

console.log(fruits[2]); 
console.log(fruits.length);

for ( var i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// associated arry

var associatedArray = [];
associatedArray ["name"] = "sit ko naing";
associatedArray ["age" ] = 20;
associatedArray ["name1"] = "r ko naing";
associatedArray ["age1" ] = 21;
associatedArray ["name2"] = "f ko naing";
associatedArray ["age2" ] = 24;

console.log(associatedArray["name2"]);
console.log(associatedArray.age2);


var asso1 = { "name" : "KyawKyaw", "age" : 20,
                greeting (){
                    console.log("I am function.");
                }
            };

    console.log(asso1.greeting());


    // push and unshift

    var mun1 = [1,2,3];
    mun1.push(4,5);         // backward add
    mun1.unshift(987,765,453); // forward add 
    console.log(mun1);

    


// pop and shif 

var mmn = [1,2,3,4,5,6,7];
    
mmn.pop();
mmn.shift();
console.log(mmn);


var mum3 = mmn.push(8,9,10,11);
console.log(mum3);


/// Important

var item = [1,2,3,4,5,6,7,8];

let result = item.map(function(n){
    return n * 100;
}      
);

console.log(result);


/// short hand

var arr = [1,2];

// var a = arr[0];
// var b = arr[1];

[a,b] = arr; /// short form for array

console.log(a);
console.log(b);
console.log(a+b);


function show(a,b)  // if show(arr1) >>> change>>>> show([a,b])
{
    console.log(a);
    console.log(b);
}

var arr1 = [23,34];

show(arr1[0],arr1[1]);

show(arr1);