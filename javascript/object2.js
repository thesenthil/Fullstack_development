let obj1={name:"senthil",age:22,roll_no:123};
// console.log(obj1);

let obj2=obj1;
console.log(obj2);
console.log(obj2.name="senthhil");
console.log(obj2);
obj1.name="superman";

// destructuring is defined as a special syntax that allows us to "unpack" arrays or objects into a bunch of variables, as sometimes that is more convenient.

let obj3={name:"senthil",age:22,roll_no:123,class:"b.tech"};

let {name,age}=obj3;
console.log(name);
console.log(age);

let obj4={animal:"dog",car:"mercedes",bike:"rr310",mobile:"iphone"};
let{animal,bike}=obj4;
console.log(animal);
console.log(bike);

// //****** rest operator */
let obj5={subject:"maths",game:"cricket",song:"bulleya",color:"red"};
let{subject,...baaki}=obj5;
console.log(baaki);

//****** spread operator */
let obj7={destination:"ladakh",river:"ganga",trip:"mountain"};
let obj8={...obj7};
console.log(obj8);

let obj9={name:"tinku",age:22}
let obj10={roll_no:123,class:"b.tech"}
let obj11={...obj9,...obj10};
console.log(obj11);