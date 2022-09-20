// Write a function that takes an array as a parameter and returns the largest number inside that array
let numList = [20, 40, -10, 5, 40, 5, 11];

function arraySum(numList) {
    let maxNumber = Math.max.apply(null, numList);
    if (numList.length == 0) {
        console.log("There is no number inside the array");

    } else {
        console.log("The largest number: " + maxNumber);
    }

}

// call function
arraySum(numList);