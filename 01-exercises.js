
//EJERCICIO 1 SEPARAR VOCALES Y CONSONANTES:

const s = "javascript is awesome";

function vowelsAndConsonants(s) {
    const vowels = "aeiou";
     const consonants = "bcdfghjklmnpqrstvwxyz";
 
     for (let char of s) {
         if (vowels.includes(char)) {
             console.log(char);
         }
     }
 
     for (let char of s) {
         if (consonants.includes(char.toLowerCase())) {
             console.log(char);
         }
     } 
}

//EJERCICIO 2 REGEX:
//Objective

// In this challenge, we use a Regular Expression to evaluate a string. Check out the attached tutorial for more details.

// Task

// Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.

// Constraints

// The length of string  is  .
// String  consists of lowercase letters only (i.e., [a-z]).
// Output Format

// The function must return a RegExp object that matches any string  beginning with and ending in the same vowel.

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    const re = /^([aeiou]).*\1$/;
    /*
     * Do not remove the return statement
     */
    return re;
}


//EJERCICIO 3 REVERSE STRING:

// Objective

// In this challenge, we learn about strings and exceptions. Check out the attached tutorials for more details.

// Task

// Complete the reverseString function; it has one parameter, . You must perform the following actions:

// Try to reverse string  using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's  on a new line.
// Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
// Input Format

// Locked stub code in the editor reads variable  from stdin and passes it to the function.

// Output Format

// You must write two print statements using console.log():

// Print the contents of a caught exception's  on a new line. If no exception was thrown, this line should not be printed.
// Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

function reverseString(s) {
    try {
     let separate = s.split("");
     let invert = separate.reverse();
     let joinedString = invert.join("");
     console.log(joinedString);
 } catch (error) {
     console.log(error.message);
     console.log(s); 
 }

  
}


//EJERCICIO 4 IS POSITIVE: 

// Objective

// In this challenge, we practice using throw and catch statements to work with custom error messages.

// Task

// Complete the isPositive function below. It has one integer parameter, . If the value of  is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:

// If  is , throw an Error with  Zero Error.
// If  is negative, throw an Error with  Negative Error.
// Input Format

// Locked stub code in the editor reads the following input from stdin and passes each value of  to the function as an argument:
// The first line is an integer, , denoting the number of times the function will be called with some .
// Each line  of the  subsequent lines contains an integer denoting some .

// Constraints

// Output Format

// If the value of  is positive, the function must return the string YES. Otherwise, it must throw an Error according to the following rules:

// If  is , throw an Error with  Zero Error.
// If  is negative, throw an Error with  Negative Error.

function isPositive(a) {

    if(a > 0){
       return "YES"; 
    } else if (a === 0){
            throw new Error("Zero Error");
            }else{
                throw new Error("Negative Error");
            }
    }
    