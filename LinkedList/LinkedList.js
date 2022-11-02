
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

// Homework Quesiton 1
// Write a function that deletes the node in the last index
function deleteNodeLastIndex(head) {
    // delete the last node
    let current = head;

    while (current.next.next !== null) {
        current = current.next;
    }

    current.next = null;
    printNodeValues(head);
}

deleteNodeLastIndex(node1);

// Homework Quesiton 3
// Write a function that deletes the node at the given index
function addNodeAtIndex(head, n, val) {
    // add the node at n index
    let current = head;

    for (let i = 0; i < n; i++) {
        current = current.next;
    }

    current.val = val;
    printNodeValues(head);
    // printNodeValues(head)
}
addNodeAtIndex(node1, 2, 25);
// 10 -> 20 -> 30 -> 40 -> null
// 10 --> 20 --> 25 --> 40 --> null

// Homework Quesiton 2
// Write a function that deletes the node at the given index
function deleteNodeAtIndex(head, n) {
    // delete the node at n index
    let current = head;

    for (let i = 0; i < n - 1; i++) {
        current = current.next;
    }

    current.next = null;
    printNodeValues(head);
}

deleteNodeAtIndex(node1, 2);