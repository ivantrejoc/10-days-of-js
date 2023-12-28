//EJERCICIO 11 - CLASSES

// Objective

// In this challenge, we practice using JavaScript classes. Check the attached tutorial for more details.

// Task

// Create a Polygon class that has the following properties:

// A constructor that takes an array of integer values describing the lengths of the polygon's sides.
// A perimeter() method that returns the polygon's perimeter.
// Locked code in the editor tests the Polygon constructor and the perimeter method.

// Note: The perimeter method must be lowercase and spelled correctly.

// Input Format

// There is no input for this challenge.

// Output Format

// The perimeter method must return the polygon's perimeter using the side length array passed to the constructor.

// Explanation

// Consider the following code:

// // Create a polygon with side lengths 3, 4, and 5
// let triangle = new Polygon([3, 4, 5]);

// // Print the perimeter
// console.log(triangle.perimeter());
// When executed with a properly implemented Polygon class, this code should print the result of .

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  perimeter() {
    let total = 0;
    this.sides.forEach((side) => {
      total += side;
    });
    return total;
  }
}

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  perimeter() {
    let total = 0;
    for (let side of this.sides) {
      total += side;
    }
    return total;
  }
}

//EJERCICIO 12 - Template Literals

// Objective

// In this challenge, we practice using JavaScript Template Literals. Check the attached tutorial for more details.

// Task

// The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.

// Complete the function in the editor so that it does the following:

// Finds the initial values of  and  by plugging the area and perimeter values into the formula:
// where  is the rectangle's area and  is its perimeter.
// Creates an array consisting of  and  and sorts it in ascending order.
// Returns the sorted array.
// Input Format

// The first line contains an integer denoting .
// The second line contains an integer denoting .

// Constraints

// Output Format

// Return an array consisting of  and , sorted in ascending order.

// Sample Input 0

// 10
// 14
// Sample Output 0

// 10
// 14
// Explanation 0

// The locked code in the editor passes the following arrays to the tag function:

// The value of  is [ 'The area is: ', '.\nThe perimeter is: ', '.' ].
// The value of  is [ 140, 48 ], where the first value denotes the rectangle's area, , and the second value denotes its perimeter, .
// When we plug those values into our formula, we get the following:

// We then store these values in an array, [14, 10], sort the array, and return the sorted array, [10, 14], as our answer.

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const [a, p] = expressions
    const s = [
        (p + Math.sqrt( p**2 - 16 * a )) / 4,
        (p - Math.sqrt( p**2 - 16 * a )) / 4
    ];
    
    return s.sort((a, b) => a - b); 
}

//EJERCICIO 13 - Arrow Functions

// Objective

// In this challenge, we practice using arrow functions. Check the attached tutorial for more details.

// Task

// Complete the function in the editor. It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:

// If the element is even, multiply the element by .
// If the element is odd, multiply the element by .
// The function must then return the modified array.

// Input Format

// The first line contains an integer, , denoting the size of .
// The second line contains  space-separated integers describing the respective elements of .

// Constraints

// , where  is the  element of .
// Output Format

// Return the modified array where every even element is doubled and every odd element is tripled.

// Sample Input 0

// 5
// 1 2 3 4 5
// Sample Output 0

// 3 4 9 8 15
// Explanation 0

// Given , we modify each element so that all even elements are multiplied by  and all odd elements are multipled by . In other words, . We then return the modified array as our answer.

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    let multiplyArray = []
    nums.forEach((e) =>{
        if(e % 2 === 0){
            let doubled = e * 2;
            multiplyArray.push(doubled);
        }else{
            let tripled = e * 3;
            multiplyArray.push(tripled);
        }        
    })
    return multiplyArray;   
}

//EJERCICIO 14 - Bitwise Operartors

// Objective

// Today, we're practicing bitwise operations. Check the attached tutorial for more details.

// Task

// We define  to be a sequence of distinct sequential integers from  to ; in other words, . We want to know the maximum bitwise AND value of any two integers,  and  (where ), in sequence  that is also less than a given integer, .

// Complete the function in the editor so that given  and , it returns the maximum .

// Note: The  symbol represents the bitwise AND operator.

// Input Format

// The first line contains an integer, , denoting the number of function calls.
// Each of the  subsequent lines defines a dataset for a function call in the form of two space-separated integers describing the respective values of  and .

// Constraints

// Output Format

// Return the maximum possible value of  for any  in sequence .

function getMaxLessThanK(n, k) {
    let max=0;
    for(let a = 1; a <= n; a++)
        for(let b = a + 1; b <= n; b++) {
            let x = a & b;
            if (max < x &&  x < k)
                    max = x;
        }
        return max;
}