function reverse_string(str) {
    let reversed = ' ';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverse_string('i like programming language'));



/*
function reverse_string(str) {
    return str.split("").reverse().join("");
}

console.log(reverse_string("i like programming"));
*/


//If you want to reverse each word individually
function reverseWords(str) {
    return str
        .split(" ").map(word => word.split("").reverse().join("")) .join(" ");
}

console.log(reverseWords("i like programming"));