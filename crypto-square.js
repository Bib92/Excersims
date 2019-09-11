export class Crypto {
    constructor(input) {
        this.problem=input
    };
    normalizePlaintext() {
const problem = this.problem
    const removeFirst = problem.replace(/[!#$%^&\s,]/gi,"")
    return (removeFirst).toLowerCase()
    }

    size() {
        const newInput = (this.problem).replace(/\s/gi,"");
const length = newInput.length;
if (length > 8 ){return length/3}
if (length > 10 ){return length/4}

let result = length/2
return result
}

plaintextSegments() {
    const bigStr = ((this.problem).replace(/[\s!]/gi,"")).toLowerCase()
    if(bigStr.length > 20){
        return bigStr.match(/.{1,6}/g)
    }
    return(bigStr.match(/.{1,4}/g))
}

ciphertext() {
    let array = []
    const problem = ((this.problem).replace(/[\s.]/gi,"")).toLowerCase()
const bigArr = problem.split('')

for (let i = 0; i <bigArr.length/6; i++ ){
for (let j = i; j < bigArr.length; j+=6){
    array.push(bigArr[j])
}}


    console.log(bigArr)
    console.log(array)
    return array.join("")
}
};
