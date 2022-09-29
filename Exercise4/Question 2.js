// Write a function to check if there are duplicates in a sorted array?
function duplicatesArrayInSorted(array) {
    
    let flag = false;
    const message1 = "there are duplicates in the sorted array";
    const message2 = "there are no duplicates in the sorted array";

    for (i = 0; i < array.length - 1; i++) {
        if (array[i] == array[i + 1]) {
            flag = true;
            break;      
        }
    }

    if (flag == true) {
        console.log(message1);
    } else {
        console.log(message2);
    }


}

duplicatesArrayInSorted([2, 2, 12, 13, 40, 50]); // duplicated (given array should be sorted)
duplicatesArrayInSorted([1, 2, 12, 13, 40, 50]); // not duplicated (given array should be sorted)