let num=[1,2,3,4,5,6,7,8,9,10];
//rest operator
let [a,b,...num1] = num;
console.log(num1);

//spread operator
let num3= [1,2,3,4,5];
let num4 = [...num3, 6, 7, 8];
console.log(num4);