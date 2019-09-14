var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let n = 0;
let counter;
let arrivings = [];

rl.on('line', function(line) {
  if (n === 0) {
    counter = +line + 1;
    n = +line;
    console.log(n);
  } else {
    arrivings.push(line);
  }
  counter--;
  if (counter === 0) rl.close();
}).on('close',function(){
  console.log(arrivings);
  process.exit(0);
});

// // Get process.stdin as the standard input object.
// var standard_input = process.stdin;
//
// // Set input character encoding.
// standard_input.setEncoding('utf-8');
//
// // Prompt user to input data in console.
// console.log("Please input text in command line.");
//
// // When user input data and click enter key.
// standard_input.on('data', function (data) {
//
//   // User input exit.
//   if(data === 'exit\n'){
//     // Program exit.
//     console.log("User input complete, program exit.");
//     process.exit();
//   }else
//   {
//     // Print user input in console.
//     console.log('User Input Data : ' + data);
//   }
// });