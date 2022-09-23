// Write a function that takes a value n as a parameter, and prints the following pattern

/*

*****
****
***
**
*



*/
function printItem(num) {
    let item = "";

    for (let i = 0; i <= num; i++) {
        item += "*";
    }
    for (let j = num; j > 0; j--) {
        item = item.slice(1);
        console.log(item);
    }
}

printItem(5);