
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

// print values
function printNodeValues(head) {
    let str = "";
    while (head !== null) {
        str = str + head.val + " -- > ";
        // Move node myself
        head = head.next;
    }
    console.log(str);
}

// count nodes
function countNodes(head) {
    let count = 0;
    while (head !== null) {
        count++;
        // Move node myself
        head = head.next;
    }
    return count;
}

// Q1 Find the middle of the linkedlist

function searchMiddleLinkedList(head) {
    let current = head;
    let count = Math.floor(countNodes(head) / 2);
    for (let i = 0; i < count; i++) {
        current = current.next;
    }
    return current.val;
}

console.log(searchMiddleLinkedList(node1));
//  10 -> 20 -> 30 -> 40 -> 50  , Here middle is 30
// 10 -> 20 -> 30 -> 40 , Return middle as n / 2 + 1


// Advance Question
let node01 = new Node(10);
let node02 = new Node(40);
let node03 = new Node(80);
let node04 = new Node(100);

node01.next = node02;
node02.next = node03;
node03.next = node04;

let node11 = new Node(20);
let node12 = new Node(45);
let node13 = new Node(60);
let node14 = new Node(90);

node11.next = node12;
node12.next = node13;
node13.next = node14;

// Q2 You have 2 sorted linked list, and you have to merge it into one,
// 10 --> 40 --> 80 ---> 100 // L1
// 20 --> 45 --> 60 --> 90 // L2
// 10 --> 20 --> 40 --> 45 --> 60 --> 80 --> 90 --> 100
function twoSortedLinkedList(listOne, listTwo) {
    let temp = listOne;
    let current = temp;

    // 
    if (listOne.val <= listTwo.val) {
        temp = listOne;
        listOne = listOne.next;
    } else {
        temp = listTwo;
        listTwo = listTwo.next;
    }

    // 
    while (listOne !== null || listTwo !== null) {

        if (listOne == null && listTwo !== null) {
            temp.next = listTwo;
            listTwo = listTwo.next;
        }
        else if (listTwo == null && listOne !== null) {
            temp.next = listOne;
            listOne = listOne.next;
        }
        else if (listOne.val <= listTwo.val) {
            temp.next = listOne;
            listOne = listOne.next;
        } else {
            temp.next = listTwo;
            listTwo = listTwo.next;
        }
        temp = temp.next;
    }

    printNodeValues(current);
}

twoSortedLinkedList(node01,node11);