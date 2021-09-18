const fs = require('fs');

// creating new file
fs.writeFileSync('read.txt','this is beautiful world');

// reading a file by using sync
// o/p => first it will read from read.txt
// and display the data
const data = fs.readFileSync('read.txt', 'utf-8');

console.log(data);
console.log('after the data');


// example of asynchornous
//reading a file using async --> 
// o/p --> this is the last line ... and it will read data from
// read.txt
const data = fs.readFile('read.txt', 'utf-8', (err, data) => {
   if(err) throw err;
   console.log(data);
});

console.log('this is the last line...');


