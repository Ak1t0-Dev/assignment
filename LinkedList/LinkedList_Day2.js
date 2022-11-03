
// Import a JS file, you use require keyword (ES5)
const Node = require('./Node');

let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
let node4 = new Node(40);

node1.next = node2;
node2.next = node3;
node3.next = node4;

// ES6
// import Node from "./Node";

function printNodeValues(head) {
    let str = "";
    while (head !== null) {
        str = str + head.val + " -- > ";
        // Move node myself
        head = head.next;
    }
    console.log(str);
}

printNodeValues(node1);

//  Question 1 - Count the number of nodes in Linked List
function countNodes(head) {
    let count = 0;
    while (head !== null) {
        count++;
        // Move node myself
        head = head.next;
    }
    return count;
}

//  Question 2 - Add a new node to the linked list 
// Here you will take the val, and make a new node
function addNewNode(head, val) {
    let current = head;
    let newNode = new Node(val);
    while (true) {
        current = current.next;
        if (current.next === null) {
            current.next = newNode;
            break;
        }
    }
    printNodeValues(head);
}

console.log(countNodes(node1));
addNewNode(node1, 50);


// 20221103 Assignment //

// Homework Question1
// Find nth Node from end of the list
function findNode(head, n) {
    let current = head;
    let count = countNodes(head);
    for (let i = 0; i < count - n; i++) {
        current = current.next;
    }
    console.log(current.val);
}

findNode(node1, 2);

// Homework Question2
// Print the nodes of the linked list in a reverse fashion
function printNodeReverse(head) {
    let count = 0;
    let array = [];
    let str = "";
    while (head !== null) {
        array[count] = head.val;
        head = head.next;
        count++;
    }
    for (let i = count - 1; i >= 0; i--) {
        str += array[i] + " ";
    }
    // In this question you were only consoling the values
    console.log(str);
}

printNodeReverse(node1);

// Homework Question3
// Return the sum of node values inside a linked list
function SumOfNodeValues(head) {
    let sum = 0;
    while (head !== null) {
        sum += head.val;
        head = head.next;
    }
    console.log(sum);
}

SumOfNodeValues(node1);

 // Homework Question4 
// Return the reverse of the linked list (ADVANCE)
function reverseLinkedList(head) {
    // Orignal - 10 --> 20 --> 25 --> 40 ---> null
    // Return reversed - 40 --> 25 --> 20 --> 10 --> null
    let key = 0;
    let obj = {};
    let lastIndex = 0;

    while (head !== null) {
        obj[key] = head;
        head = head.next;
        obj[key].next = null;
        key++;
    }
    lastIndex = key - 1;
    for (let i = lastIndex; i > 0; i--) {
        obj[i].next = obj[i - 1];
    }
    
    console.log(obj[lastIndex]);
    // In this question 40 becomes the head
    // if you want you can return the new head
}

 reverseLinkedList(node1);