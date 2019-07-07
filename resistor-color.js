//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet"]

export function colorCode(colour){
    if (COLORS.includes(colour)){
        return COLORS.indexOf(colour)
    }
    return -1
}
console.log.colorCode