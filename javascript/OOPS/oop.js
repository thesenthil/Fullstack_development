const user ={
    username : "sanchit",
    logincount : 6,
    signedin :"true",

    getUserDetails :function(){
        //console.log(`username : ${this.username}`)
         //console.log(this);
         

    }
}
//console.log(user.username); 
//console.log(user.getUserDetails());


function User (username ,logincount , isloggedin){
    this.username =username;
    this.logincount = logincount;
    this.isloggedin=isloggedin

    this.greeting =function(){
        console.log(`welcome ${this.username}`)
    }

return this
}
 const userone = new User("sanchit" ,12 , true)
 const usertwo = new User("chai aur code" ,33,false)
  console.log(userone);
  console.log(usertwo);
  
  
