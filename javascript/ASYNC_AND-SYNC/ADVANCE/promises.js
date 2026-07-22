// promises : 

const PromiseOne = new Promise(function(resolve , reject){
    // do an async task
    //DB calls , cryptography,network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})

PromiseOne.then(function(){
    console.log("promise consumed")
});

///////////////////////////////////////////

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async 2");
        resolve()
    },1000)
}).then(function(){
    console.log("second promise consumed")
})

/////////////////////////////////////////

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "sanchit", email : "sanchit@example.com"})

    },1000)
})
promisethree.then(function(user){
    console.log(user);
    
})


///////////////////////////////////////

const promisefour = new Promise (function(resolve, reject){
    setTimeout(function () {
        let error = false
        if(!error){
            resolve({name:"sanchit", password:"1234"})
        }
        else{
            reject("error : something went wrong ")
        }
        
    },1000)
    
})
promisefour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log((username));
    
})
.catch(function(error){
    console.log(error)
})
.finally(()=>{
    console.log("the promise is either resolved or rejected");
    
})


////////////////////////////////////////////

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username: "java script" ,password: "1234"})
        }
        else
        {
            reject("error : js went wrong")
        }
    },1000)
});
 async function consumepromisefive(){
    try {
        const response =await promisefive
    console.log(response);
    } catch (error) {
        console.log(error);
        
        
    }
    
 
 }
 consumepromisefive()


