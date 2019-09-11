//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (things) => {
 const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
 console.log(things)

 // Line 11 - 19, spliting my arguments into individual variables and converting them to their index positon integer
const firstNum = things[0]
const secondNum = things[1]
// console.log(firstNum)
// console.log(secondNum)

const pair1 = COLORS.indexOf(firstNum)
const pair2 = COLORS.indexOf(secondNum)
// console.log(pair1)
// console.log(pair2)

console.log("" + pair1 + pair2)// concatenate my two values i.e 5+6=56 !== 11
const result = "" + pair1 + pair2
return parseInt(result) // convert string to #
};
// aug 18 2019