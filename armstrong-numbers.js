import { isNumberTypeAnnotation } from "@babel/types";

export const validate = (input) => {
const array = input;
const num2string = array.toString();
const powerOF = parseInt(num2string.length);
// console.log(powerOF); length of the number tried n true
const splitArray =num2string.split('');//split between each line
// console.log(splitArray);
const firstNum = parseInt(splitArray[0]);//for sure getting a number
console.log(firstNum);
const secondNum = parseInt(splitArray[1]);
console.log(secondNum);
const thirdNum = parseInt(splitArray[2]);//didnt necessarily need to turn it into an abslute number
console.log(thirdNum);
const fourthNum = splitArray[3];
const fifthNum = splitArray[4];
const sixthNum = splitArray[5];
const seventhNum = splitArray[6];

if (1 == powerOF && Math.pow(firstNum,powerOF) == firstNum) {
  return true;
} else if (2 == powerOF){
return false;
}
else if (3 == powerOF && Math.pow(firstNum, powerOF) + Math.pow(secondNum,powerOF) + Math.pow(thirdNum,powerOF) == num2string) {
  return true;
  }
  else if (4 == powerOF && Math.pow(firstNum, powerOF) + Math.pow(secondNum, powerOF) + Math.pow(thirdNum, powerOF) + Math.pow(fourthNum, powerOF) == num2string) {
    return true;
  }
  else if (5 == powerOF){
    return false;
    }
    else if (6 == powerOF){
      return false;
      }
      else if (7 == powerOF && Math.pow(firstNum, powerOF) + Math.pow(secondNum, powerOF) + Math.pow(thirdNum, powerOF) + Math.pow(fourthNum, powerOF) + Math.pow(fifthNum, powerOF) + Math.pow(sixthNum, powerOF) + Math.pow(seventhNum, powerOF) == num2string) {
        return true;
        }
  else {
  return false;
}
// if (num2string.length() = 1 && firstNum * num2string.length() == firstNum) {
// return true;
// } 


};
//august 17th, 2019