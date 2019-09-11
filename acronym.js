import { emptyTypeAnnotation } from "@babel/types";

export const parse = (input) => {
console.log(typeof input)
const empty = [];
const upString = input.toUpperCase();
const gary = upString.replace(/[-_]/g, ' ');
const array = gary.split(' ');
// console.log(array);
for(let i=0;i < array.length; i++) {
empty.push(array[i].charAt(0));
// console.log(empty);
};
// console.log(empty.join());
const empty2 = empty.join();
// console.log(empty2);
const result = empty2.replace(/,/g, '');
// console.log(result);
return result;
};
