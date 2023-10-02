import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
JS program to check if a string contains 2 to 4 occurances of a specified character.
</div>
`;
//create a helper functions that counts the amount of characters in a base string(str)
// and see how many times that pecific character (char) occurs in that string

const countChars = (str, char) => 
//split the string into an array, so we can perform array functions onit: filter
// this will fiter out any items in the array that don't match a particular condition,
// the condition we're going to pass in is a function, so it needs a callback (ch), does ch === char, then we'll keep it
//if not, it'll be dropped from the array, adding .length tells us how many characters as defined by char are in the base string
str.split('').filter(ch => ch === char).length;
//new function with base string and char we're looking for. 
const contains2To4 = (str, char) => 
// pass string and char to function and return the length value
//is it greater than 2 is it less than or equal to 4 char, true or false. && checks if both conditions are true.
countChars(str, char) >=2 && countChars(str, char) <=4;

console.log(contains2To4('ooh!', 'o'));
console.log(contains2To4('oh!', 'o'));
console.log(contains2To4('oooh!', 'o'));
console.log(contains2To4('ooooh!', 'o'));
console.log(contains2To4('ooooooooh!', 'o'));








//practice exercise from codebubb on youtube