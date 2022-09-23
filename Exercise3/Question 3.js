// Question 3

// Write a function that takes a value n as a parameter, and prints the following pattern


/*
        *
      *   *
    *       *
  *  * * * *  *  



*/
function printItem(num) {
    let item = '';
    let star = '*';
    let firstLine = '';
    let lastLine = '';

    if (num > 0) {
        if (num > 1) {
            // make blanks of first line 
            for (let count = 0; count < num - 1; count++) {
                firstLine += " ";
            }
            // assign a first line with a star
            item = firstLine + star + '\n';

            // make blanks and stars second line to num - 1 line
            for (let i = 1; i < num - 1; i++) {
                let blank = '';
                let blankInside = '';
                // make blanks outside
                for (let j = num - i; j > 1; j--) {
                    blank += ' ';
                }
                // make blanks inside
                for (let k = 0; k < 2 * i - 1; k++) {
                    blankInside += ' ';
                }

                // combine blanks and stars, and make a new line
                item += blank + star + blankInside + star + '\n';
            }

            // make stars for last line
            for (let m = 0; m < num * 2 - 1; m++) {
                lastLine += "*";
            }
            // assign a last line with a star
            item += lastLine;

            console.log(item);
        } else { // if num = 1 than output a star
            console.log(star);
        }
    } else { // if it is not a number or num = 0
        console.log("enter the number more than 0");
    }
}

printItem(10);