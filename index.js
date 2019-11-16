// Write a function that takes in a number as input and recursively finds the sum of all numbers up to and including that number.

// ```js
// input: 6
// output: 21

// //21 = 6 + 5 + 4 + 3 + 2 + 1

const sumOfAll = (num) => {
    if(num === 1) return num 
    return sumOfAll(num - 1) + num
}
console.log(sumOfAll(5))

// - ### Multiply array

// Write a function called `multArr` that takes in an array of numbers as an argument and 
// recursively multiplies together all of the values in the array.

// ```js
// multArr([2, 3, 5]); // returns 30
// multArr([5, 5, 1, 2]); //returns 50
// ```

const multArr = (arr) => {
    if(arr.length === 0) return 1
    let pop = arr.pop()
    return multArr(arr) * pop
}

console.log(multArr([1, 2, 3, 4]))


// Write a function called `concatArr` that takes in an array of strings as an argument 
// and recursively concatenates the strings together into a single string, with spaces between 
// each original string.

// ```js
// concatArr(['is', 'it', 'tomorrow']); // returns 'is it tomorrow'
// concatArr(['or', 'just', 'the', 'end', 'of', 'time']); //returns 'or just the end of time'


const concatArr = (str) => {
    if(arr.length === 0) return " ";
    let shift = `${arr.shift}`
    return shift + concatArr(arr)
    
}

console.log(concatArr(['hello', 'what', 'is', 'the', 'weather']))


// ### Sum evens

// Write a function called `sumEvens` that takes in an array of numbers as an argument 
// and recursively sums only the even numbers in the array.

// ```js
// sumEvens([2, 3, 5, 6]); // returns 8
// sumEvens([10, 5, 1, 2, 12]); //returns 24
// ```

const sumEvens = (arr) => {
    if(arr.length === 0) return 0;
    let shift = arr.shift();
        while(shift % 2 !== 0) {
            shift = arr.shift()
        }
        return sumEvens(arr) + shift 
}

console.log(sumEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]))