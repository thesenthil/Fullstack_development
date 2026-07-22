// singalton object
// A singleton object is a design pattern that restricts the instantiation of a class to a single instance and provides a global point of access to that instance. In JavaScript, you can create a singleton object using an object literal or by using a class with a static method to ensure that only one instance is created.

 const singletone= new Object(
    //name="sanchit",
    age=20,
    email="sanchit@example.com"
 )
// console.log(singletone);

 //-------------------********---------------
 //non singleton object:  A non-singleton object is an object that can have multiple instances created from it. In JavaScript, you can create non-singleton objects using constructor functions or classes, allowing you to create multiple instances with their own unique properties and methods.

 const nonSingleton = {}
 nonSingleton.id = "12345";
 nonSingleton.name = "John Doe";
 nonSingleton.age = 30;
 //console.log(nonSingleton);

// const regularuser = {
//     email:"johndoe@example.com",
//     fullname:{
//         firstname:"John",
//         lastname:"Doe"
//     }
// }
// console.log(regularuser.fullname.firstname);
// console.log(regularuser.fullname.lastname);

const obj1= {1: "one", 2: "two", 3: "three"}
const obj2= {4: "four", 5: "five", 6: "six"}

//const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};
//console.log(obj3);

//console.log(Object.entries(nonSingleton));

// destructuring:- Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise and readable way. It provides a convenient syntax for unpacking values from data structures.

const course={
   coursename : "JavaScript",
   duration : "3 months",
   level : "beginner"
}
 const {coursename} = course;
  console.log(coursename);

 
