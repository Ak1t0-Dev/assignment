// Question 3 , Write a binary function using recursion (VERY ADVANCE)

// give the min and max of the array index at first and
// then call the recursive function
function binarySearch(array, target) {
    return binarySearchRecursive(array, target, 0, array.length - 1);
}

function binarySearchRecursive(array, target, min, max) {

    if (min > max) {
        return "Not found";
    }

    let mid = Math.floor((min + max) / 2);

    if (target === array[mid]) {
        return "the number is in index of " + mid;
    }

    else if (target < array[mid]) {
        return binarySearchRecursive(array, target, min, mid - 1);
    }

    else { //target > array[mid]
        return binarySearchRecursive(array, target, mid + 1, max);
    }

}

/**
 * Given array should be ascending sorted
 */
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 6)); // conditon: target === array[mid]
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2)); // conditon: target > array[mid]
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10)); // conditon: target < array[mid]] 
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 0)); // Not found
console.log(binarySearch([], 0)); // Not found
console.log(binarySearch([1], 0)); // Not found