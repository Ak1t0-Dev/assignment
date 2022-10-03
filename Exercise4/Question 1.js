// Write a function that checks if an array is sorted?
function sortedList(array) {

    let sort = 0;
    const message1 = "elements of the array should be more than 2";
    const message2 = "the array is not sorted";
    const message3 = "the array is sorted in ascending order";
    const message4 = "the array is sorted in descending order";

    if (array.length < 2) {
        return message1;
    } else {

        // the array is ascending or not
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] <= array[i + 1]) {
                sort = 1;
            } else {
                sort = 0;
                break;
            }

        }

        if (sort == 0) {
            // the array is descending or not
            for (let j = 0; j < array.length - 1; j++) {
                if (array[j] >= array[j + 1]) {
                    sort = 2;
                } else {
                    sort = 0;
                    break;
                }
            }
        }

        switch (sort) {
            case 0:
                return message2;
            case 1:
                return message3;
            case 2:
                return message4;
        }
    }

}

console.log(sortedList([1, 2, 3, 4, 5, 6])); // ascending order
console.log(sortedList([2, 2, 3, 4, 5, 6])); // ascending order and there are duplicates
console.log(sortedList([2, 2, 2, 2, 2, 2])); // every element are same → judge as ascending order
console.log(sortedList([6, 5, 4, 3, 2, 1])); // descending order
console.log(sortedList([6, 5, 4, 3, 2, 2])); // descending order and there are duplicates
console.log(sortedList([1, 2, 3, 2, 5, 6])); // not sorted
console.log(sortedList([])); // array is empty → elements should be more than 2
console.log(sortedList([1])); // array has just one element → elements should be more than 2
console.log(sortedList([1, 2])); // ascending order with boundary value