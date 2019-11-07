/* eslint-disable id-length */
/* eslint-disable strict */
/* eslint-disable require-jsdoc */
/*
Write a function called checkForSum(numList, numZ) which does the following: it there are two
elements numX, numY in the list whose sum is numZ it should return true, otherwise false.
Your implementation is not allowed to use nested loops. Instead you should be able to obtain the
correct return value by doing a single scan of the input list. Hint: use Map lookup.
 */

 // eslint-disable-next-line no-unused-vars
 function checkForSum (numList,numZ){
     let myMapp = new Map();
     for(let key of numList){
        myMapp.set(key,0);
     }
    for (let item of myMapp){
        let b = numZ - item;
        if(myMapp.has(b)){
            return true;
        }
        
    }
    return false;
 }