//langauge= language is the medium of communication 
//token= smallest unit of programming language
//keyword= are predifined words 
//variables= are the container which store some value and are changeable.
//constant= are the conatiner but we can't change the value of the constants.

/*datatype= A data type is a classification that tells a programming language what kind of value a variable can store and what operations can be performed on it.

 Number=	Used to store numeric values, including integers and decimal numbers.	let age = 25;
String=	Used to store text or a sequence of characters enclosed in quotes.	let name = "Senthil";
Boolean	=Used to store logical values: true or false.	let isPassed = true;
Undefined	=A variable that has been declared but has not been assigned a value.	let x;
Null=	Represents an intentional absence of any value.	let data = null;
BigInt=	Used to store very large integers beyond the safe limit of the Number type.	let bigNum = 12345678901234567890n;
Symbol=	Used to create unique and immutable identifiers.	let id = Symbol("id");
Object=	Used to store collections of related data as key-value pairs.	let student = {name: "Senthil", age: 20};
*/

let a=10;
let b=20;
var result=a-b;
console.log(a+b);
console.log(result);
console.log(typeof(a));

let name;
console.log(name);  //throw undefined 

let d=null ;
console.log(null);

// datatypes
 let c=4.680
 console.log(a)  //it will run without termiantion
 console.log(typeof(c));

 let number1=3246927023873079817234;
 let number2=324
 console.log(number1*number2);

 let number3=3246927023873079817234;
 let number4=324
 console.log(BigInt(number1*number2)); //typecast BigInt
  console.log(typeof(BigInt(number1*number2))); //typecast BigInt

//typecasting

let string="1123";
console.log(string);
console.log(typeof(string));

let stringg="11234";
console.log(stringg);
console.log(typeof(stringg));

let num=Number(stringg);
console.log(typeof(num));

console.log(10*string); //explicit typecasting
console.log(10+string); //concatenate at ahead
console.log(string+10); //concatenate at back

document.getElementById("h1").innerHTML="hello,world";