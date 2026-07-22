let myheros = ["thor", "spiderman"]

   let heropower={
    thro:"hammer",
    spiderman : "sling" ,  

getspiderpower : function () {
    console.log(`spidy power is ${this.spiderman}`);
    
}
   }

   Object.prototype.sanchit = function(){
    console.log(`sanchit is every where`);
    
   }
  
   Array.prototype.sanchitpandey = function(){
    console.log(`sanchit say hello`);
    
   }

   myheros.sanchit()
 heropower.sanchit()
  myheros.sanchitpandey()

  // inheritance

  