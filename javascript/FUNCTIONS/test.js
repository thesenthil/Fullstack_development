//reverse string
function reverseString(str) {
    let word =str.split();
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i].split("").reverse().join("");
    }
    // return word.join(" ");
    return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}
console.log(reverseString("i like to teach programming")); // Output: "i ekil ot dehct gnimmargorp"

// //reverse without changing positioon of words
// function reverseString(str) {
//     let word =str.split(" ");   
//     return word.reverse().join(" ");
// }


// function reverseString(str) {
//     let word =str.split(" ");
//     for (let i = 0; i < word.length; i++) {
//         word[i] = word[i].split("").reverse().join("");
//     }   
//     return word.join(" ");
//}

//revers use only one function
// function reverseString(str) {
//     return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
// }