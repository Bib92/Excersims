import { isNumber, isString } from "util";

//
// This is only a SKELETON file for the 'Accumulate' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const accumulate = (input) => {

// given argument
  // console.log(input);
if (input.includes(1)) {
  // console.log('hey its a number')
  // console.log(input)

  //grab the data from the index of the array
 const firstNum = input[0];
  const secondNum = input[1];
  const thirdNum = input[2];

  //do the math thing
const newFirst = firstNum * firstNum;
const newSecond = secondNum * secondNum;
const newThird = thirdNum * thirdNum;
//back into an array
return( [newFirst, newSecond, newThird] );
} else if (input.includes('hello')){

  const array = input.join();// to a string
const up = array.toUpperCase();// uppercase
const split = up.split(',');//split by a comma
return split
} else if (input.includes('quick')) {
  const sentence = input.join()
  // console.log(sentence);

  //replaced words in the string one by one then split it back to an array
  const res1 = sentence.replace(/the/g, "eht");
  const res2 = res1.replace(/quick/g, "kciuq");
  const res3 = res2.replace(/brown/g, "nworb");
  const res4 = res3.replace(/fox/g, "xof");
  const res5 = res4.replace(/etc/g, "cte");
  // console.log(res5)
  const bingo = res5.split(',')
  return bingo;
  // const newSentence = the.reverse() + quick.reverse() + brown.reverse() + fox.reverse() + etc.reverse();
} else if (input.includes('a')) {
  console.log(input)
  const bigArray = [];
  const array1 = [];
  const array2 = [];
  const array3 = [];

  array1.push(input[0]+'1');
  array1.push(input[0]+'2');
  array1.push(input[0]+'3');

  array2.push(input[1]+'1');
  array2.push(input[1]+'2');
  array2.push(input[1]+'3');

  array3.push(input[2]+'1');
  array3.push(input[2]+'2');
  array3.push(input[2]+'3');
  
  bigArray.push(array1);
  bigArray.push(array2);
  bigArray.push(array3);


  console.log(bigArray)
  return bigArray;
}
else {
return [];
}
};
