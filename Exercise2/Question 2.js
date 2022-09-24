// Write a function that takes an array as a parameter and calculates the sum of the numbers
let numList = [1, 2, 3, 4, 5, 6];

function arraySum(numList) {
    let sum = 0;
    for (let i = 0; i < numList.length; i++) {
        sum += numList[i];
    }

    if (numList.length == 0) {
        console.log("There is no number inside the array");

    } else {
        console.log("The sum of the numbers inside the array: " + sum);
    }
}

// call function
arraySum(numList);