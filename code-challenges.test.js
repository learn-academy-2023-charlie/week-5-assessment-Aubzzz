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
//Process:

//:codeWords, takes in a string as a parameter
//create a new object that holds key value pairs for each letter to number, implemented later in the function
// initially tried to create a new variable after the object to store a string turned into an array by using .split
// then created a line that .map the new variable after it was split
//then created a for loop to iterate through the array
//created an if/else conditional statement saying 
    //if (newArray = "a", "e", "i", "o", "u")
        //return string.replaceAll("a", "4")

//From here, did not know how to put in multiple values for .replaceAll("a", "4"). This is what's seen in the output. Also, turned it back into a string using .join before. Internet resources led me to the code below.

//other code: created a new variable for the string. 
//used a for loop to call on key in object
//used the new variable to replaceAll with the key value from newCharacters, tried variations of writing what goes in the parathensis
//return newString
//Console log the original function and pass in the first arguement

//First OUTPUT: L4ck4d4isic4l
//Second OUTPUT: UNDEFINED at 'vaule' : newString = newString.replaceAll(newCharacters[key], newCharacters[value])


// const secretCodeWord1 = "Lackadaisical"

// const codeWords = (string) => {
//     const newCharacters = {
//         "a": "4",
//         "e": "3",
//         "i": "1",
//         "o": "0",
//         "E": "3"
//     };
//         let newString = string;
//         for (let key in newCharacters) {
//         newString = newString.replaceAll(newCharacters[key], newCharacters[value])
//         return newString 
// }}
// console.log(codeWords(secretCodeWord1))



// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// describe("matchTheLetter", () => {
//     it("creates a function that takes an array of words/single letter and returns an array of all the words with that single letter", () => {
//     expect(matchTheLetter(filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
//     expect(matchTheLetter(filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//  })
// })

//RED TEST- Good Failure
// FAIL  ./code-challenges.test.js
// matchTheLetter
//   ✕ creates a function that takes an array of words/single letter and returns an array of all the words with that single letter

// ● matchTheLetter › creates a function that takes an array of words/single letter and returns an array of all the words with that single letter

//   ReferenceError: matchTheLetter is not defined

//     119 | describe("matchTheLetter", () => {
//     120 |     it("creates a function that takes an array of words/single letter and returns an array of all the words with that single letter", () => {
//   > 121 |     expect(matchTheLetter(filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
//         |     ^
//     122 |     expect(matchTheLetter(filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     123 |  })
//     124 | })

//     at Object.expect (code-challenges.test.js:121:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.16 s, estimated 1 s
// Ran all test suites.




// b) Create the function that makes the test pass.
//Pseudo Code:
//Input: 
            //const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
            // const filterLetterA = "a"
            // const filterLetterE = "e"
//Output:["Mango", "Apricot", "Peach"], ["Cherry", "Blueberry", "Peach"]
//Process: Create a function called fruitList, pass in the parameters of array and string
//return - use .filter method on the array to filter through values at the index, pasing in the string parameter
//create a new variable that takes the function fruitList and passes in the arguements of the variable fruitArray and filterLetterA?? CHATGPT suggested this because I got stuck on how to return it without getting an "undefined". It also didn't work.
//console.log the function with the passed in arguement of filterLetterA
//OUTPUT: 'array.fitler is not a function' OR 'fruitList is undefined'

// const fruitList = (array, string) => {
//     return array.filter(array => array.includes(string))
//     //const selectedWords = fruitList(fruitArray, filterLetterA);
// }
// console.log(fruitList(filterLetterA))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// const hand1 = [5, 5, 5, 3, 3]
// const hand2 = [5, 5, 3, 3, 4]
// const hand3 = [5, 5, 5, 5, 4]
// const hand4 = [7, 2, 7, 2, 7]

// describe("fullHouse", () => {
//     it("creates a function that takes an array of 5 numbers and determines if the array is a full house; one pair and three of a kind", () => {
//     expect(fullHouse(hand1)).toEqual("true")
//     expect(fullHouse(hand2)).toEqual("false")
//     expect(fullHouse(hand3)).toEqual("false")
//     expect(fullHouse(hand4)).toEqual("true")
// })
// })


//RED-Good Failure
// FAIL  ./code-challenges.test.js
// fullHouse
//   ✕ creates a function that takes an array of 5 numbers and determines if the array is a full house; one pair and three of a kind (1 ms)

// ● fullHouse › creates a function that takes an array of 5 numbers and determines if the array is a full house; one pair and three of a kind

//   ReferenceError: fullHouse is not defined

//     182 | describe("fullHouse", () => {
//     183 |     it("creates a function that takes an array of 5 numbers and determines if the array is a full house; one pair and three of a kind", () => {
//   > 184 |     expect(fullHouse(hand1)).toEqual("true")
//         |     ^
//     185 |     expect(fullHouse(hand2)).toEqual("false")
//     186 |     expect(fullHouse(hand3)).toEqual("false")
//     187 |     expect(fullHouse(hand4)).toEqual("true")

//     at Object.expect (code-challenges.test.js:184:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.141 s, estimated 1 s
// Ran all test suites.

// b) Create the function that makes the test pass.
//PseudoCode
//Input:
// const hand1 = [5, 5, 5, 3, 3]
// const hand2 = [5, 5, 3, 3, 4]
// const hand3 = [5, 5, 5, 5, 4]
// const hand4 = [7, 2, 7, 2, 7]
//Output: true, false, false, true
//Process:
//Create a function called fullHouse that passes an array as a parameter
//create a for loop to iterate through the array
//create conditional if statement stating if index values are the same *3 && the same *2, return true 
//the internet resources said to use slice  before the array, inorder to take subset of the array?
//.splice was another internet suggestion

//my attempt
// const fullHouse = (array) => {
//     const newSubset = array.slice()
//     for (let i=0; i <array.length; i++)
//     if (array === ([i]))
// }
// console.log(fullHouse(hand1))


//found on the internet for resource purposes. Don't really understand what's going on here though, especially at the splice level and the 'el'
// const arr2 = ['K', '2', 'K', 'A', 'J'];
// const isFullHouse = arr => {
//    const copy = arr.slice();
//    for(let i = 0; i < arr.length; ){
//       const el = copy.splice(i, 1)[0];
//       if(copy.includes(el)){
//          copy.splice(copy.indexOf(el), 1);
//          if(copy.includes(el)){
//             return true;
//          }
//       }else{
//          i++;
//       }
//    };
//    return false;
// };
// console.log(isFullHouse(arr1));
// console.log(isFullHouse(arr2));
