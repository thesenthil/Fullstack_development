let age=6;
if(age>=18){
    console.log("congrats, you can vote!");

}else{
    console.log("you can't vote: phele bada hoja");
}
//control flow statement
//find the greates num. among the 3 variables
//logical operator: there are 3 types of logical operator
//&& and // or not !

let a=10;
let b=20;
let c=30;
if(a>b && a>c){
    console.log(`a ${a} is greater`);
}
else if(b>a && b>c){
    console.log(`b ${b} is greater`);
}else{
    console.log(`c ${c} is greater`);

}


//looping statement
//for loops :Used when the number of iterations is known.
console.log("for_loops");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//
// while Loop:  Executes as long as the condition is true.
console.log("while_loops");
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

//do...while Loop:Executes the code at least once, then checks the condition.
console.log("do_while_loops");
let p = 1;

do {
    console.log(p);
    i++;
} while (i <= 5);

// for...of Loop :Used to iterate over arrays and strings.

let arr = [10, 20, 30];

for (let value of arr) {
    console.log(value);
}
// for...in Loop :Used to iterate over object properties.

let person = {
    name: "Senthil",
    age: 20
};

for (let key in person) {
    console.log(key, person[key]);
}

// output in a single line
let output = "";

for (let j = 1; j <= 5; j++) {
    output += j+ " ";
}

console.log(output);

//post and pre
let x=10;
console.log(x); //output 10
console.log(x++); //output 10
console.log(++x); //output 12
