// check if a string contains the letter "y"
function checkLetter(word) {

    let boolean = word.includes("y");

    if (boolean == true) {
        console.log("yes");
    } else {
        console.log("no");
    }

}

checkLetter("layer");
