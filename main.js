// ============Variables=============
// var is globally scoped
// let, count have a block-level scope

// let, can be reasigned
// ---------------------
// let age = 30;       ¦
// age = 31;           ¦
// console.log(age);   ¦
// ---------------------

// const, can't be directly reasigned
// ---------------------
// const cage = 30;    ¦
// cage = 31;          ¦
// console.log(cage);  ¦
// ---------------------
// Uncaught TypeError: Assignment to constant variable.
// ---------------------
// const score;        ¦
// score = 10;         ¦
// console.log(score); ¦
// ---------------------
// Uncaught SyntaxError: Missing initializer in const declaration

// always use const, unless you know you will reasign the value

// ============Data Types============
// string, numbers, noolean, null, undefined

// string
// -----------------------------
// const name = 'John';        ¦
// console.log(typeof name);   ¦
// -----------------------------

// number
// -----------------------------
// const age = 30;             ¦
// console.log(typeof age);    ¦
// -----------------------------

// still number
// -----------------------------
// const rating = 4.5;         ¦
// console.log(typeof rating); ¦
// -----------------------------

// boolean
// -----------------------------
// const isCool = true;        ¦
// console.log(typeof isCool); ¦
// -----------------------------

// null
// -----------------------------
// const x = null;             ¦
// console.log(typeof x);      ¦
// // object                   ¦
// -----------------------------
// Why is typeof null “object”? - StackOverflow

// undefined
// -----------------------------
// const y = undefined;        ¦
// console.log(typeof y);      ¦
// let z;                      ¦
// console.log(typeof z);      ¦
// -----------------------------

// Concatnetaion
// ---------------------------------------------------------
// console.log('My name is ' + name + ' and I am ' + age); ¦
// // My name is John and I am 30                          ¦
// ---------------------------------------------------------
// Template String
// ---------------------------------------------------------
// console.log(`My name is ${name} and I am ${age}`);      ¦
// // My name is John and I am 30                          ¦
// const hello = `My name is ${name} and I am ${age}`;     ¦
// console.log(hello);                                     ¦
// // My name is John and I am 30                          ¦
// ---------------------------------------------------------

// string
// ------------------------------------------------------------
// const s = 'Hello World';                                   ¦
// console.log(s.length);                                     ¦
// // 11                                                      ¦
// console.log(s.toUpperCase());                              ¦
// // HELLO WORLD                                             ¦
// console.log(s.toLowerCase());                              ¦
// // hello world                                             ¦
// console.log(s.substring(0,5));                             ¦
// // Hello                                                   ¦
// console.log(s.split(''))                                   ¦
// // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"] ¦
//                                                            ¦
// const x = 'technology, computers, it, code';               ¦
// console.log(x.split(', '))                                 ¦
// // ["technology", "computers", "it", "code"]               ¦
// ------------------------------------------------------------

// array - variables that hold multiple values
// ---------------------------------------------------------------------------------
// const numbers = new Array(1,2,3,4,5);                                           ¦
// console.log(numbers);                                                           ¦
// // [1, 2, 3, 4, 5]                                                              ¦
// ---------------------------------------------------------------------------------
// const fruits = ['apples', 'oranges', 'pears', 10, true];                        ¦
// console.log(fruits);                                                            ¦
// // ["apples", "oranges", "pears", 10, true]                                     ¦
// console.log(fruits[1]);                                                         ¦
// // oranges                                                                      ¦
// ---------------------------------------------------------------------------------
// fruits[5] = 'grapes';                                                           ¦
// console.log(fruits[5]);                                                         ¦
// // grapes                                                                       ¦
// ---------------------------------------------------------------------------------
// fruits.push('mangos');                                                          ¦
// console.log(fruits);                                                            ¦
// // ["apples", "oranges", "pears", 10, true, "grapes", "mangos"]                 ¦
// ---------------------------------------------------------------------------------
// fruits.unshift('strawberries');                                                 ¦
// console.log(fruits);                                                            ¦
// // ["strawberries", "apples", "oranges", "pears", 10, true, "grapes", "mangos"] ¦
// ---------------------------------------------------------------------------------
// fruits.pop();                                                                   ¦
// console.log(fruits);                                                            ¦
// // ["strawberries", "apples", "oranges", "pears", 10, true, "grapes"]           ¦
// ---------------------------------------------------------------------------------
// console.log(Array.isArray(fruits));                                             ¦
// // true                                                                         ¦
// ---------------------------------------------------------------------------------
// console.log(Array.isArray('hello'));                                            ¦
// // false                                                                        ¦
// ---------------------------------------------------------------------------------
// console.log(fruits.indexOf('oranges'));                                         ¦
// // 2                                                                            ¦
// ---------------------------------------------------------------------------------

// =============Object===============
// ----------------------------------------------------------
// const person = {                                         ¦
//     firstName: 'John',                                   ¦
//     lastName: 'Doe',                                     ¦
//     age: 30,                                             ¦
//     hobbies: ['music', 'movies', 'sports'],              ¦
//     address: {                                           ¦
//         street: '50 main st',                            ¦
//         city: 'Boston',                                  ¦
//         state: 'MA'                                      ¦
//     }                                                    ¦
// }                                                        ¦
// ----------------------------------------------------------
// console.log(person);                                     ¦
// // {firstName: "John", lastName: "Doe", age: 30,         ¦
// // hobbies: Array(3), address: {…}}                      ¦
// ----------------------------------------------------------
// console.log(person.firstName, person.lastName);          ¦
// // John Doe                                              ¦
// ----------------------------------------------------------
// console.log(person.hobbies[1]);                          ¦
// // movies                                                ¦
// ----------------------------------------------------------
// console.log(person.address.city);                        ¦
// // Boston                                                ¦
// ----------------------------------------------------------
// const { firstName, lastName } = person;                  ¦
// console.log(firstName);                                  ¦
// // John                                                  ¦
// ----------------------------------------------------------
// const { firstName, lastName, address: {city} } = person; ¦
// console.log(city);                                       ¦
// // Boston                                                ¦
// ----------------------------------------------------------
// person.email = 'john@gmail.com';                         ¦
// console.log(person);                                     ¦
// // email: "john@gmail.com"                               ¦
// ----------------------------------------------------------

// --------------------------------------------------------------
// const todos = [                                              ¦
//     {                                                        ¦
//         id: 1,                                               ¦
//         text: 'Take out trash',                              ¦
//         isCompleted: true                                    ¦
//     },                                                       ¦
//     {                                                        ¦
//         id: 2,                                               ¦
//         text: 'Meeting with boss',                           ¦
//         isCompleted: true                                    ¦
//     },                                                       ¦
//     {                                                        ¦
//         id: 3,                                               ¦
//         text: 'Dentist appt',                                ¦
//         isCompleted: false                                   ¦
//     },                                                       ¦
// ];                                                           ¦
// --------------------------------------------------------------
// console.log(todos);                                          ¦
// // 0: {id: 1, text: "Take out trash", isCompleted: true}     ¦
// // 1: {id: 2, text: "Meeting with boss", isCompleted: true}  ¦
// // 2: {id: 3, text: "Dentist appt", isCompleted: false}      ¦
// --------------------------------------------------------------
// console.log(todos[1].text);                                  ¦
// // Meeting with boss                                         ¦
// --------------------------------------------------------------
// const todoJSON = JSON.stringify(todos);                      ¦
// console.log(todoJSON);                                       ¦
// // [{"id":1,"text":"Take out trash","isCompleted":true}      ¦
// // ,{"id":2,"text":"Meeting with boss","isCompleted":true}   ¦
// // ,{"id":3,"text":"Dentist appt","isCompleted":false}]      ¦
// --------------------------------------------------------------

// For loop
// ----------------------------------------------
// for(let i = 0; i < 10; i++) {                ¦
//     // console.log(i);                       ¦
//     console.log(`For Loop Number: ${i}`);    ¦
// }                                            ¦
// ----------------------------------------------
// While loop
// ----------------------------------------------
// let i=0;                                     ¦
// while(i < 10) {                              ¦
//     console.log(`For While Number: ${i}`);   ¦
//     i++;                                     ¦
// }                                            ¦
// ----------------------------------------------
// ----------------------------------------------------------
// for(let i = 0; i < todos.length; i++){                   ¦
//     console.log(todos[i].text);                          ¦
// }                                                        ¦
// // Take out trash                                        ¦
// // Meeting with boss                                     ¦
// // Dentist appt                                          ¦
// ----------------------------------------------------------
// For Of loop
// ----------------------------------------------------------
// for(let todo of todos){                                  ¦
//     console.log(todo);                                   ¦
// }                                                        ¦
// // {id: 1, text: "Take out trash", isCompleted: true}    ¦
// // {id: 2, text: "Meeting with boss", isCompleted: true} ¦
// // {id: 3, text: "Dentist appt", isCompleted: false}     ¦
// ----------------------------------------------------------
// for(let todo of todos){                                  ¦
//     console.log(todo.id);                                ¦
// }                                                        ¦
// // 1                                                     ¦
// // 2                                                     ¦
// // 3                                                     ¦
// ----------------------------------------------------------

// high order array methods
// forEach, map, filter
// --------------------------------------------------------------
// todos.forEach(function(todo) {                               ¦
//     console.log(todo.text);                                  ¦
// });                                                          ¦
// // Take out trash                                            ¦
// // Meeting with boss                                         ¦
// // Dentist appt                                              ¦
// --------------------------------------------------------------
// const todoText = todos.map(function(todo) {                  ¦
//     return todo.text;                                        ¦
// });                                                          ¦
// console.log(todoText);                                       ¦
// // ["Take out trash", "Meeting with boss", "Dentist appt"]   ¦
// --------------------------------------------------------------
// const todoCompleted = todos.filter(function(todo){           ¦
//     return todo.isCompleted === true;                        ¦
// });                                                          ¦
// console.log(todoCompleted);                                  ¦
// // 0: {id: 1, text: "Take out trash", isCompleted: true}     ¦
// // 1: {id: 2, text: "Meeting with boss", isCompleted: true}  ¦
// --------------------------------------------------------------
// const todoCompleted = todos.filter(function(todo){           ¦
//     return todo.isCompleted === true;                        ¦
// }).map(function(todo){                                       ¦
//     return todo.text;                                        ¦
// });                                                          ¦
// console.log(todoCompleted);                                  ¦
// // ["Take out trash", "Meeting with boss"]                   ¦
// --------------------------------------------------------------

//  ==========conditionals===========
// ----------------------------------------------------------
// const x = 10;                                            ¦
// if(x == 10){                                             ¦
//     console.log('x is 10."==" only matchs the value');   ¦
// }                                                        ¦
// ----------------------------------------------------------
// const x = '10';                                          ¦
// if(x == 10){                                             ¦
//     console.log('x is 10."==" only matchs the value');   ¦
// }                                                        ¦
// ----------------------------------------------------------
// const x = 10;                                            ¦
// if(x === 10){                                            ¦
//     console.log('x is 10."===" also matchs the type');   ¦
// }                                                        ¦
// ----------------------------------------------------------
// const x = 4;                                             ¦
// const y = 11;                                            ¦
// if(x > 5 || y > 10){                                     ¦
//     console.log('x > 5 or y > 10');                      ¦
// } else if(x <5 && y > 10){                               ¦
//     console.log('x < 5 and y > 10');                     ¦
// }                                                        ¦
// else{                                                    ¦
//     console.log('x < 10');                               ¦
// }                                                        ¦
// ----------------------------------------------------------

// ternary operator
// ------------------------------------------------------
// const x = 10;                                        ¦
// const color = x > 10 ? 'red' : 'blue';               ¦
// console.log(color);                                  ¦
// ------------------------------------------------------

// switch
// ------------------------------------------------------
// const x = 10;                                        ¦
// const color = x > 10 ? 'red' : 'blue';               ¦
// switch(color){                                       ¦
//     case 'red':                                      ¦
//         console.log('color is red');                 ¦
//         break;                                       ¦
//     case 'blue':                                     ¦
//         console.log('color is blue');                ¦
//         break;                                       ¦
//     default:                                         ¦
//         console.log('color is not red or blue');     ¦
//         break;                                       ¦
// }                                                    ¦
// ------------------------------------------------------

// function
// ------------------------------------------------------------------
// function addNums(num1 = 1, num2 = 1){                            ¦
//     return num1 + num2;                                          ¦
// }                                                                ¦
// console.log(addNums(5, 5));                                      ¦
// ------------------------------------------------------------------
// arrow function
// ------------------------------------------------------------------
// const addNums = (num1 = 1, num2 = 1) => {                        ¦
//     console.log(num1 + num2);                                    ¦
// }                                                                ¦
// addNums(5, 5);                                                   ¦
// ------------------------------------------------------------------
// const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);¦
// addNums(5, 5);                                                   ¦
// ------------------------------------------------------------------
// 不需要return这个关键字                                            ¦
// const addNums = (num1 = 1, num2 = 1) => num1 + num2;             ¦
// console.log(addNums(5, 5));                                      ¦
// ------------------------------------------------------------------
// const addNums = (num1 = 1, num2 = 1) => {                        ¦
//     return num1 + num2;                                          ¦
// }                                                                ¦
// console.log(addNums(5, 5));                                      ¦
// ------------------------------------------------------------------
// const addNums = num1 => num1 + 5;                                ¦
// console.log(addNums(5));                                         ¦
// ------------------------------------------------------------------
// 比如这样：todos.forEach((todo) => console.log(todo));             ¦
// ------------------------------------------------------------------

// Constructor function
// ----------------------------------------------------------
// function Person(firstName, lastName, dob) {              ¦
//     this.firstName = firstName;                          ¦
//     this.lastName = lastName;                            ¦
//     this.dob = new Date(dob);                            ¦
//     // this.getBirthYear = function(){                   ¦
//     //     return this.dob.getFullYear();                ¦
//     // }                                                 ¦
//     // this.getFullName = function(){                    ¦
//     //     return `${this.firstName} ${this.lastName}`;  ¦
//     // }                                                 ¦
// }                                                        ¦
// Person.prototype.getBirthYear = function(){              ¦
//     return this.dob.getFullYear();                       ¦
// }                                                        ¦
// Person.prototype.getFullName = function(){               ¦
//     return `${this.firstName} ${this.lastName}`;         ¦
// }                                                        ¦
// ----------------------------------------------------------
// Same as above
// Class
// ----------------------------------------------------------
// class Person{                                            ¦
//     constructor(firstName, lastName, dob) {              ¦
//         this.firstName = firstName;                      ¦
//         this.lastName = lastName;                        ¦
//         this.dob = new Date(dob);                        ¦
//     }                                                    ¦
//     getBirthYear(){                                      ¦
//         return this.dob.getFullYear();                   ¦
//     }                                                    ¦
//     getFullName(){                                       ¦
//         return `${this.firstName} ${this.lastName}`;     ¦
//     }                                                    ¦
// }                                                        ¦
// ----------------------------------------------------------
// Instantiate object
// ----------------------------------------------------------
// const person1 = new Person('John', 'Doe', '4-3-1980');   ¦
// console.log(person1);                                    ¦
// // Person {firstName: "John", lastName: "Doe",           ¦
// dob: Thu Apr 03 1980 00:00:00 GMT+0800 (中国标准时间)}    ¦
// console.log(person1.dob.getFullYear());                  ¦
// // 1980                                                  ¦
// console.log(person1.getBirthYear());                     ¦
// // 1980                                                  ¦
// console.log(person1.getFullName());                      ¦
// // John Doe                                              ¦
// ----------------------------------------------------------

// DOM
// ----------------------------------------------------------
// the window object is the parent object of the browser    ¦
// console.log(window);                                     ¦
// alert('1');                                              ¦
// window.alert('1');                                       ¦
// ----------------------------------------------------------
// Single element
// ----------------------------------------------------------
// const form = document.getElementById('my-form');         ¦
// console.log(form);                                       ¦
// console.log(document.querySelector('.container'));       ¦
// console.log(document.querySelector('h1'));               ¦
// ----------------------------------------------------------
// Multiple element
// ----------------------------------------------------------
// // recommended                                           ¦
// console.log(document.querySelectorAll('.item'));         ¦
// // NodeList(3) [li.item, li.item, li.item]               ¦
// NodeList可以直接用array的方法                             ¦
// ----------------------------------------------------------
// // old, not recommended                                  ¦
// console.log(document.getElementsByClassName('item'));    ¦
// // HTMLCollection(3) [li.item, li.item, li.item]         ¦
// HTMLCollection不能直接使用array方法，需要转换成array才能用 ¦
// console.log(document.getElementsByTagName('li'));        ¦
// // HTMLCollection(3) [li.item, li.item, li.item]         ¦
// ----------------------------------------------------------
// const items = document.querySelectorAll('.item');        ¦
// items.forEach((item) => console.log(item));              ¦
// ----------------------------------------------------------

// ----------------------------------------------------------
// const ul = document.querySelector('.items');             ¦
// ul.remove();                                             ¦
// ul.lastElementChild.remove();                            ¦
// ul.firstElementChild.textContent = 'Hello';              ¦
// ul.children[1].innerText = 'Brad';                       ¦
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';        ¦
// ----------------------------------------------------------
// const btn = document.querySelector('.btn');              ¦
// btn.style.background = 'red';                            ¦
// ----------------------------------------------------------
// const btn = document.querySelector('.btn');              ¦
// // click还可以换成mouseover，mouseout等                   ¦
// btn.addEventListener('click', (e) => {                   ¦
//     e.preventDefault();                                  ¦
//     // console.log('click');                             ¦
//     // console.log(e);                                   ¦
//     // console.log(e.target);                            ¦
//     // console.log(e.target.className);                  ¦
//     // console.log(e.target.id);                         ¦
//     // document.querySelector('#my-form').style          ¦
//     // .background = '#ccc';                             ¦
//     // document.querySelector('body')                    ¦
//     // .classList.add('bg-dark');                        ¦
//     document.querySelector('.items').lastElementChild    ¦
//     .innerHTML = '<h1>Hello</h1>';                       ¦
// });                                                      ¦
// ----------------------------------------------------------

// --------------------------------------------------------------
// const myForm = document.querySelector('#my-form');           ¦
// const nameInput = document.querySelector('#name');           ¦
// const emailInput = document.querySelector('#email');         ¦
// const msg = document.querySelector('.msg');                  ¦
// const userList = document.querySelector('#users');           ¦
//                                                              ¦
// myForm.addEventListener('submit', onSubmit);                 ¦
// function onSubmit(e){                                        ¦
//     e.preventDefault();                                      ¦
//     // console.log(nameInput.value);                         ¦
//     if(nameInput.value === '' || emailInput.value === ''){   ¦
//         // alert('please enter fields');                     ¦
//         msg.classList.add('error');                          ¦
//         msg.innerHTML = 'please enter all fields';           ¦
//         setTimeout(() => msg.remove(), 3000);                ¦
//     }else{                                                   ¦
//         // console.log('success');                           ¦
//         const li = document.createElement('li');             ¦
//         li.appendChild(document.createTextNode(`             ¦
//         ${nameInput.value} : ${emailInput.value}`));         ¦
//         userList.appendChild(li);                            ¦
//         // clear fields                                      ¦
//         nameInput.value = '';                                ¦
//         emailInput.value = '';                               ¦
//     }                                                        ¦
// }                                                            ¦
// --------------------------------------------------------------