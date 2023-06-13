const fs = require('fs');
const { parse } = require('path');
let rawdata = fs.readFileSync('problem1.json');
let fluffy = JSON.parse(rawdata);
fluffy.weight=5
fluffy.height=10
fluffy.name="Fluffyy"
let listActivities=[]
let TotalWeight=0;
fluffy.catFriends.forEach(element=>{
    listActivities.push(element.activities)
    console.log(element.name)
    TotalWeight+=parseFloat(element.weight)
})
listActivities=listActivities.flat()
//console.log(listActivities) 
console.log("TotalWeight is  " + TotalWeight)
let activities=[...fluffy.activities, ...listActivities]
console.log(activities)
let x=1;
fluffy.catFriends.forEach(element=>{
    if(x%2==0){
        element.activities.push("love")
    }
    else{
        element.activities.push("hate")
    }
    x++;
    if(element.name==='bar'){
        element.furcolor='Brown'
    }
})
console.log(fluffy)
function writeToFile(list){
   
    fs.writeFile('output1.json', JSON.stringify(list), err => {
       if (err) console.error(err);
       else console.log('Data written to file successfully.');
    });
 }
 writeToFile(fluffy);





// Problem 1 Playing with JSON object’s Values:

// ## Problem 1 instructions
// 1. Read the json in problem1.json
// 2. Add height and weight to Fluffyrie
// 3. Fluffy name is spelled wrongly. Update it to Fluffyy
// 4. List all the activities of Fluffyy’s catFriends.
// 5. Print the catFriends names.
// 6. Print the total weight of catFriends
// 7. Print the total activities of all cats (op:6)
// 8. Add 2 more activities to bar & foo cats
// 9. Update the fur color of bar
