//accept two intergers and display the larger
function dispLarger(num1, num2) {
    const message1 = " is larger";
    const message2 = "Both numbers are equal";
    
    if (num1 > num2) {
        console.log(num1 + message1);
    } else if (num1 < num2) {
        console.log(num2 + message1);
    } else {
        console.log(message2);
    }

}

dispLarger(11, 10);