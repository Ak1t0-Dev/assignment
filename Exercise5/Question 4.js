// Question 4 , Write a function to find the sum of numbers in an array but using recursion

// give array.length - 1 to index and
// then call the recursive function
function sumNumbers(array) {
    if (array.length === 0) {
        return "the array is empty";
    }

    return sumNumbersRecuresive(array, array.length - 1);
}

function sumNumbersRecuresive(array, i) {
    if (i < 0) {
        return 0;
    }
    
    return array[i] + sumNumbersRecuresive(array, i - 1);
}

console.log(sumNumbers([1, 2, 3, 4, 5, 6])); // sum positive numbers
console.log(sumNumbers([-6, -5, -4, -3, -2, -1]));// sum negative numbers
console.log(sumNumbers([1]));// one element
console.log(sumNumbers([]));// no element