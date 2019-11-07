/* eslint-disable require-jsdoc */
// Write a function called removeDups(numList) that takes an Array which may contain diplicates, and
// then returns a new Array with the duplicates removed.
"use strict";
function removeDups(numList){
    let myMapp = new Map();
    for(let item of numList){
        myMapp.set(item);
     }
     let nonDuplicates = [];
     for (let key of myMapp.keys()) {
        nonDuplicates.push(key);
}
return nonDuplicates;
}