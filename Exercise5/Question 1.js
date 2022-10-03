// Question 1 Write a function to find the index of the value in the 2D Array
let numList = [[1,2,3], [4,5,6], [7,8,9]]; // the 2D array
let message = " is not in the 2D array";

function findIndex(array, target) {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array[i].length; j++) {
            if (target === array[i][j]) {
                return [i, j];    
            }
        }
    }

    return target + message;

}

console.log(findIndex(numList, 5)); // the number is in the 2D array: [1, 1]
console.log(findIndex(numList, 10)); // the number is not in the 2D array: return the number and a message