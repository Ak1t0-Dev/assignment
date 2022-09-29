// Write a function that takes a value n as a parameter, and prints the following pattern

/*

*
**
***
****
*****
****
***
**
*


*/
function printItem(num) {
    let item = '';
    
    // adding stars till num
    for (let i = 0; i < num; i++) {
        item += '*';
        console.log(item);
    }
    item = '';
    
    // lessen stars till 1
    for (let j = 1; j < num; j++) {
        for (let k = num; k > j; k--) {
            item += '*';
        }

        console.log(item);

        item = '';
    }
}

printItem(5);
