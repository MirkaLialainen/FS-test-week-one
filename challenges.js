/*------------------
1)
Write a function that determines
if a number is a palindrome. A number is a
palindrome if it reads the same forwards and
backwards. 

Note:
- All negative numbers should return false.
- Single numbers should return true.

Test cases:
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(-12321)); // false
console.log(isPalindrome(1)); // true
console.log(isPalindrome(84146)); // false
console.log(isPalindrome(12)); // false
------------------*/

function isPalindrome(num) {
    let number = (num.toString()) // convert number to a string to enable the split method to work 
    if (number === number.split('').reverse().join('')) // split method divides the string to a list of substrings and searches for pattern, reverse method reverses the string (palindorme check), join method creates and returns the new string (number in reversed order)
    return true;
    else { 
        return false;  // else statement was needed as without, all "False" numbers would return "undefined" 
    }
}

console.log(isPalindrome(12321)); // true
console.log(isPalindrome(-12321)); // false
console.log(isPalindrome(1)); // true
console.log(isPalindrome(84146)); // false
console.log(isPalindrome(12)); // false
/*------------------
2)
Create a function that takes a grid
as an argument and adds all the numbers
in that grid together.

Examples:
const y = [[[1], [2]]];
console.log(addGridItems(y)); // 3

const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
console.log(addGridItems(x)); // 50
------------------*/

function addGridItems(grid) {
 let sum = 0;  // create a variable for sum to be stored 
        for (let i = 0; i < grid.length; i++){
            for (let ii = 0; ii < grid[i].length; ii++) {
                for (let iii = 0; iii < grid[i][ii].length; iii++) { // looping through the nested arrays in side the grid
                    sum += grid[i][ii][iii]++; 
                }
                return sum  // adding each item of the arrays and storing these to varible sum but not getting the result (I get 1 and -2) 
            }
        }
    }
    const y = [[[1], [2]]];
    console.log(addGridItems(y)); // 3
    
    const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
    console.log(addGridItems(x)); // 50

/*------------------
3)
Create a function that turns a string into a
file name: all letters are lowercase, spaces are
swapped for underscores, and it includes a
file extension. 

This function should take two parameters: the string, 
and the type of file it is (so you know what file
extension to add). You only need to cover
the extensions below:
- PDF: .pdf
- image: .png
- JSON: .json

Examples:
console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"
------------------*/

function createFileName(str, ext) {
let filename = (str).toLowerCase().replace(/\s/g, "_"); // store the string element on varibale to enable converting to lowercase and replacing the spaces with underscore = \s metacharacter is used to find a "whitespace" character.
let filetype = (ext).toLowerCase(); //only need to convert to lowercase
return filename + "." +filetype; // add full stop before the ext parameter
}
console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"
/*------------------
4) Print the following pattern
99 96 93 90 88
99 96 93 90
99 96 93
99 96
99

Hints:
- Use a loop within a loop.
------------------*/
let num = "";

for (let x = 0; x <= 5; x++) { //I thought I would loop from 5 to 1 to get the "triangle" to display as pictured but this did not made any difference and I reverted back to 0 to 5 loop. 
    for (let y = 0; y <= 5; y++){
        num = num + 99 - 3; //substracting 3 from number (99) each time seems to be the pattern on displayed picture but I do not know how to display the numbers 
  console.log(num);
}
}