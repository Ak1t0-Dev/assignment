// Question 2 Write a function that takes a string, and capitalizes every first letter of the word
let message = "no words";

function capitlize(str) {
    let word = [];

    if (str.length > 1) {

        for (let i = 0; i < str.length; i++) {
            word = str.split(" ");
        }

        for (let j = 0; j < word.length; j++) {
            word[j] = word[j].charAt(0).toUpperCase() + word[j].slice(1);
        }

        return word.join(" ");
    } else {
        return message;
    }
}

console.log(capitlize("hello world")); // Hello World
console.log(capitlize("hello")); // Hello
console.log(capitlize("")); // return a message
console.log(capitlize(" ")); // return a message