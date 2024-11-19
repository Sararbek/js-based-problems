// Codewars.comdan 10 ta masala

//1-masala. 
//Masalaning shart: This code does not execute properly. Try to figure out why.
{
    function multiply(a, b){
        return a * b
    }
    console.log(multiply(5, 6))
}

//2-masala.
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

{
    function evenOrOdd(number) {
        if(number % 2 === 0){
          return "Even"
        }else{
          return "Odd"
        }
      }
      console.log(evenOrOdd(9))
}

//3-masala
//We need a function that can transform a number (integer) into a string.

{
    function numberToString(num) {
        // Return a string of the number here!
        return num.toString()
      }
    console.log(numberToString(6))
}

//4-masala
//Complete the solution so that it reverses the string passed into it.

//'world'  =>  'dlrow'

{
    function solution(str){
       
        return str.split('').reverse().join('')
    }
    console.log(solution('world'))
}

//5-masala

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

/**
 * makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
 */

{
    function makeNegative(num) {
        // Code?
        if(num > 0){
          return -num
        }else if(num === 0){
          return 0
        }else{
          return num
        }
      }
      console.log(makeNegative(5))
}

//6-masala
//Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

/**
 * 1: -1
14: -14
-34: 34
 */

{
    function opposite(number){
        return number > 0 ? -number : number < 0 ? -number : number
    }
    console.log(opposite(0))
}

//7-masala

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

{
    function boolToWord( bool ){
        if(bool){
          return "Yes"
        }else{
          return "No"
        }
      }
    console.log(boolToWord(true))
}

//8-masala

/**
 * You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 */

{
    function positiveSum(arr) {
        let positiveNumbers = arr.filter(positive => positive > 0)
        let sum = positiveNumbers.reduce((accumulator, current) => accumulator + current, 0)
        return sum
      }
      console.log(positiveSum([1,-4,7,12]))
}

//9-masala

/***
 * Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
 */

{
    function repeatStr (n, s) {
        let sumString = ""
        for(let i = 1; i <= n; i++){
            sumString += s
        }
        return sumString
    }
    console.log(repeatStr(5, "Assalomu alaykum"))
}

//10-masala

/**
 * It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
 */

{
    function removeChar(str){
        let result = ''
        for(let i = 1; i < str.length - 1; i++){
            result += str[i]
        }
        return result
    };
    console.log(removeChar("Salom"))
}

// Ustoz bergan 5 ta masala

//1-masala
//Array ichidagi faqat musbat sonlarni yangi array qilib qaytaring
{
    function findPositiveNumbers(numbers){
        return numbers.filter(num => num > 0)
    }
    console.log(findPositiveNumbers([-16, -18, 14, 0.6, 4, 9]))
}

//2-masala
//Stringni faqat bosh harflarini katta qiladigan funksiya yozing
{
    function capitalizedString(word){
        return word.split(" ").map(firstLetter => firstLetter[0].toUpperCase().concat(firstLetter.slice(1))).join(" ")
    }
    console.log(capitalizedString("assalomu alaykum"))
}

//3-masala
//Sonni teskari tartibda qaytaradigan funksiya yozing
{
    function changedNumber(number){
        return +number.toString().split('').reverse().join('')
    }
    console.log(changedNumber(124))
}

//4-masala
//Array ichida Boolean qiymatlar bor. Shuni faqat 'false' larini yangi array qilib qaytaring

{
    function returnBoolean(arr){
        let newArr = arr.filter(item => item === false)
        return newArr
    }
    let array = [0, false, -16, false, "Salom", true, false]
    console.log(returnBoolean(array))
}

//5-masala
//Array ichidagi musbat sonlarning yig'indisini qaytaring
{
    function sumPositiveNum(arr){
        let sum = arr.filter(num => typeof num === "number" && num > 0).reduce((accumulator, current) => accumulator + current)

        return sum
    }
    let array = [-1, 8, 7, 2, 0, -16, true, "salom"]
    console.log(sumPositiveNum(array))
}