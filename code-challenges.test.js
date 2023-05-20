// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

//const { string } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"


// describe("codeWords", () => {
//     it("creates a function that takes a string and returns a string with a coded message", () => {
//     expect(codeWords(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//     expect(codeWords(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//     expect(codeWords(secretCodeWord3)).toEqual("3cc3ntr1c")
//  })
// })

//RED-Good Failure
// FAIL  ./code-challenges.test.js
// codeWords
//   ✕ creates a function that takes a string and returns a string with a coded message

// ● codeWords › creates a function that takes a string and returns a string with a coded message

//   ReferenceError: codeWords is not defined

//     25 | describe("codeWords", () => {
//     26 |     it("creates a function that takes a string and returns a string with a coded message", () => {
//   > 27 |     expect(codeWords(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//        |     ^
//     28 |     expect(codeWords(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//     29 |     expect(codeWords(secretCodeWord3)).toEqual("3cc3ntr1c")
//     30 |  })

//     at Object.expect (code-challenges.test.js:27:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.15 s
// Ran all test suites.


// b) Create the function that makes the test pass.

//PseudoCode
//Input: secretCodeWords1, 2, 3
//Output: "L4ck4d41s1c4l", "G0bbl3dyg00k", "3cc3ntr1c"
//Process: Create a function called codeWords, read through a string, maybe create the rules that state certain letters equal to certain numbers. Turn the string into an array with .map "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

const secretCodeWord1 = "Lackadaisical"

const codeWords = (string) => {
    const newCharacters = { //creates a variable to story key value pairs that will be implemented later in the funciton
        "a": "4",
        "e": "3",
        "i": "1",
        "o": "0"
    };
    const newArray = string.split("")//creates a variable to store the string that is using .split to convert to an array
    if ([i]="a", "e", "i", "o")
    return a:4, e:3 i:1 o:0
    for(let i=0; i < newArray.length; i++){ //iterating through the newArray with a for loop
        if (newCharacters.key)//if the key in the newCharacter variable is found through the iteration, then it needs to be replaced with the value of newCharacters
        newArray[i] = newCharacters.hasOwnProperty[newArray[i]]
    }
return newArray.join("")
}
console.log(codeWords(secretCodeWord1))




// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

// const filterLetterA = "a"
// // Expected output: ["Mango", "Apricot", "Peach"]
// const filterLetterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]

// // b) Create the function that makes the test pass.

// // --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// // a) Create a test with expect statements using the variable provided.

// const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false
// const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.
