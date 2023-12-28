//EJERCICIO 15 - JavaScript Dates

// Objective

// In this challenge, we learn about JavaScript Dates. Check out the attached tutorial for more details.

// Task

// Given a date string, , in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.

// Input Format

// Locked stub code in the editor reads the following input from stdin:
// The first line contains an integer, , denoting the number of dates to check.
// Each line  of the  subsequent lines contains a date in MM/DD/YYYY format; each date denotes some  that is passed to the function.

// Constraints

// It is guaranteed that the input only consists of valid dates.
// Output Format

// The function must return a string denoting the day of the week corresponding to the date denoted by dateString .

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    dayName = new Date(dateString).toLocaleDateString('en-US',{weekday: 'long'}) 
    return dayName;
}

//EJERCICIO 16 - Regular Expressions II

// Task

// Complete the function in the editor below by returning a RegExp object, , that matches any string  satisfying both of the following conditions:

// String  starts with the prefix Mr., Mrs., Ms., Dr., or Er.
// The remainder of string  (i.e., the rest of the string after the prefix) consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).
// Constraints

// The length of string  is  .
// Output Format

// The function must return a RegExp object that matches any string  satisfying both of the given conditions.

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    
    let re = /^[MEDR][rs]{1,2}\.[a-zA-Z]+$/
    /*
     * Do not remove the return statement
     */
    return re;
}

//EJERCICIO 17 - Regular Expressions III

// Task

// Complete the function in the editor below by returning a RegExp object, , that matches every integer in some string .

// Constraints

// The length of string  is  .
// It's guaranteed that string  contains at least one integer.
// Output Format

// The function must return a RegExp object that matches every integer in some string .

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    let re = /\d+/gm
    /*
     * Do not remove the return statement
     */
    return re;
}

