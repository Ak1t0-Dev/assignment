### Javascript Test

Just a quick test to test your javascript understanding.

###### 1- What is ES6?
It is the 6th Edition of ECMAScript which was published in 2015, and ECMAScript standalizes Javascript as a global programming language.  

###### 2- Name 3 examples of ES6 features which you learnt.
let & const, arrow functions, and the spread operator 

###### 3- What is the difference between let and const?
let can be reassigned a value, but const cannot.  

###### 4- How do you access object values? Give 3 examples
use square bracket: obj["property"]  
use curly brase: const { property } = obj
use dot: obj.property  

###### 5- What does setInterval and setTimeout do?
setInterval: it will execute a function in the time you set (it is repeated)  
setTimeout: it will execute a function once in time you set  

What will be the output of the following ?

# FIRST
```
 for (var i = 0 ; i < 5 ; i++) {
       setTimeout(() => {
       console.log(i);
}, 0);
}
```

output: 5  
output: 5  
output: 5  
output: 5  
output: 5  

# SECOND
```
 for (let i = 0 ; i < 5 ; i++) {
       setTimeout(() => {
       console.log(i);
}, 0);
}
```
output: 1  
output: 2  
output: 3  
output: 4  
output: 5  




###### 6- What are promises?
promises are a result of asynchronous operations and there are 3 status when promises handle them: pending, fulfilled, and rejected.  


###### 7- Convert this async function to async/await

```js
getQuote().then((quote) => {
  console.log(quote);
}).catch(function(err) {
  console.log(err);
});
// after this line,
const getQuote = async (quote) => {
  try {
  await console.log(quote);
  } catch(err) {
  console.log(err);
  }
}

```
  
###### 8- Convert this code to arrow function.

```js
function greeting(firstname, lastname) {
  return `Hello ${firstname} ${lastname}`;
}
// after this line,
const greeting = ((firstname, lastname) => {
  return `Hello ${firstname} ${lastname}`;
})
```

###### 9- Explain what a callback function is.
a callback function is a function that passed itself to other function and be executed.  


###### 10- What does the functions pop and push do to an array? And what do they return ?
Both are operations performed on a stack that the data structure is based on FILO.  
pop: remove the last value from an array  
push: add a value to the end of an array 

pop will return the last value which it removed in an array (it will return undefined if theres no value)  
push will return the length of an array when the method was executed  

###### 11- What is the expected answer to this code?

```js
let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string);
```
output: 123  
(string not a number) 

###### 12- What data type would Array.map() and Array.filter() return?
Array.map(): it returns a new array that the result of execution in each element.  
Array.filter(): it returns an array that matches the condition of function, but it is a shallow copy.  

Additionally what will be the output of this ?

```
let array = [1,2,3, 0, 4,10, 0];
let output = array.filter((item) => item); 
```
output: [1, 2, 3, 4, 10]  


###### 13- What data type would Array.includes() and Array.some() return?
Array.includes(): it will return boolean
(if a parameter value exist in the array, it will return true)  
Array.some(): it will return boolean
(if a condition in the callback matches at least one element in the array, it will return true)  


###### 14- Write down the 4 main methods of rest api
GET, POST, DELETE, PUT  


###### 15- What is the difference between JSON and a JavaScript object?
JSON is a text format, presented in a string, that uses for passing data between clients and servers. 
Keys should be string.  
Javascript object is used to store a data and it can include functions, methods and also other data types than string can also be used.  

#### 16 - Use this endpoint and fetch the output using FETCH API and print them on the console. Use both .then and catch and try and catch block as well.

```
https://www.boredapi.com/api/activity
```

```js
try {
fetch('https://www.boredapi.com/api/activity')
  .then((response) => console.log(response))
} catch(err) {
  console.log(err);
}
```

The above API returns what to do when you are bored.

