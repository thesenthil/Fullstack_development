// what is object: An object in JavaScript is a collection of key-value pairs.
let obj = {
    name: "senthil",
    age: 22,
    roll_no: 123,

}
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(typeof(obj));

let object={
    course:"b.tech",
    branch:{
        cse:"core computer fundamentals",
        mechanical:"core mechanical fundamentals",
        civil:"core civil fundamentals",
        content:{
            cse:{
                firstyear:"basic of engineering",
                secondyear:"java programming",
                thirdyear:"data structure and algorithm",
                fourthyear:"operating system and database management system",
                placement:{
                    web_dev:"full stack",
                    ai:"propagation",
                }
            }
            },
            mechanical:{
                firstyear:"basic of engineering",
                secondyear:"fluid mechanics",
                thirdyear:"machines mechanism",
                fourthyear:"engine principles"
                
        },
        civil:{
            firstyear:"basic of civil engineering",
            secondyear:"soil",
            thirdyear:"structural analysis",
            fourthyear:"geotechnical engineering"
        }
        }
};
  //(object drilling)
  // console.log(object.content.branch.cse.thirdyear);
// console.log(object.content.branch.mechanical.thirdyear);


console.log(object.branch);