let user={
    user_name:"senthil",
    email:"thesenthil0114@gmail.com",
    type:"admin",

    age:25,

}
console.log(user.user_name);
console.log(user["email"]);

console.log(user.user_name="raj");
console.log(user);


let myDate=new Date();
console.log(myDate);

console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());


// setInterval(()=>{
//     console.log(new Date().toLocaleTimeString());
// },1000)

// setInterval(()=>{
//     let myDate=new Date();
//     console.log(myDate.getHours(),":",myDate.getMinutes(),":"   ,myDate.getSeconds());
// },1000)
// console.log(myDate.getUTCDay());

console.log(Object.getOwnPropertyDescriptor(Math,"PI"));
console.log(Object.getOwnPropertyDescriptor(user,"user_name"));