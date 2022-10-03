// Write a function to check if there are duplicates in an array?
function duplicatesArray(array) {
    let flag = false;
    const message1 = "elements of the array should be more than 2";
    const message2 = "there are duplicates in the array";
    const message3 = "there are no duplicates in the array";

    if (array.length < 2) {
        return message1;
    } else {

    for (i = 0; i < array.length - 1; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] == array[j] ) {
                flag = true;
                break;
        }
        }
    }

    if (flag == true) {
        return message2;
    } else {
        return message3; 
    }

}
}

console.log(duplicatesArray([20, 40, -10, 5, 40, 5, 11])); // there are duplicates
console.log(duplicatesArray([20, 30, -10, 1, 40, 5, 11])); // there are no duplicates
console.log(duplicatesArray([])); // array is empty → elements should be more than 2
console.log(duplicatesArray([1])); // array has just one element → elements should be more than 2
console.log(duplicatesArray([2, 2])); // duplicates with boundary value