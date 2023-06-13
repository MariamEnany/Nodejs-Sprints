const fs = require('fs');
const moment= require('moment') 
const { parse } = require('path');
let rawdata = fs.readFileSync('problem2.json');
let data = JSON.parse(rawdata);
const format2 = "YYYY-MM-DD"

data.accidents.forEach(element=>{
    dateTime = moment(element.date).format(format2);
    element.date=dateTime
    console.log(element)
})
console.log(data);
function writeToFile(list){
   
    fs.writeFile('output2.json', JSON.stringify(list), err => {
       if (err) console.error(err);
       else console.log('Data written to file successfully.');
    });
 }
 writeToFile(data)










// ## Problem 2 instructions
// 1. Read the json in problem1.json
// 2. Install moment.js package using npm
// 4. Convert the dates into the following format YYYY-MM-DD
// 5. Write the results to output2.json