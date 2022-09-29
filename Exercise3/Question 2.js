// Question 2

// Write a function that takes a value n as a parameter, and prints the following pattern

/*

*****
****
***
**
*



*/

function printItem(num) {
    let item = '';

    for (let i = 0; i < num; i++) {
        for (let j = num; j > i; j--) {
            item += '*';
        }

        console.log(item);

        item = '';
    }
}

printItem(5);

