// #! /usr/bin/env node

// import inquirer from "inquirer";

// let answers = await inquirer.prompt([
//     {message: 'Enter your subject', type: 'string', name: 'firstNumber'},
//     {message: 'Enter Second Number', type: 'number', name: 'secondNumber'},
//     {
//         message: 'select one operator to perform operation',
//         type: 'list',
//         name: 'operator',
//         choices: ['Addition','subtraction','Mutiplication','Division'],

//     },
// ])
// // let email: string = 'ali@gmail.com'
// // let pass : String = "123456"

// // if(email == 'ali@gmail.com' && pass=='123456'){
// //     console.log('you sucessfully login');

// // }

// // else{
// //     console.log('invalid username & password');
// // }
// // and visit slide no 148 to see (if else) condition
// // when typscript auot define type of data is called inferance

// let percentage = 39
// if(percentage>=90){
// console.log( 'A+ Grade');
// }

// else if (percentage >= 80 && percentage <=89){
//     console.log('A Grade');
// }

// else if (percentage >= 70 && percentage <=79.99){
//     console.log('B Grade');
// }

// else if (percentage >= 60 && percentage <=69.99){
//     console.log('C Grade');
// }
// else if (percentage >= 50 && percentage <=59.99){
//     console.log('D Grade');
// }
// else if (percentage >= 33 && percentage <=49.99){
//     console.log('E Grade');
// }


// else{
//     console.log('You are Fail');
// }

type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles
};

// Describing a circle using our Shape type
let circle: Shape = {
    kind: "circle",
    radius: 5
};

// Describing a rectangle using our Shape type
let rectangle: Shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.





