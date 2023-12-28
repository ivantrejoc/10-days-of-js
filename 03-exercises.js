//EJERCICIO 8 - HERENCIA DE CLASES
// Objective

// In this challenge, we practice implementing inheritance and use JavaScript prototypes to add a new method to an existing prototype. Check out the attached Classes tutorial to refresh what we've learned about these topics.

// Task

// We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

// Add an area method to Rectangle's prototype.
// Create a Square class that satisfies the following:
// It is a subclass of Rectangle.
// It contains a constructor and no other methods.
// It can use the Rectangle class' area method to print the area of a Square object.
// Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.

// Language: JavaScript (Node.js)
// More
// 141516171819201213219101167834512
// Rectangle.prototype.area=function(){
//             return this.w*this.h;
//         };
// /*
//  * Create a Square class that inherits from Rectangle and implement its class constructor
//  */
// class Square extends Rectangle {
//     constructor(width) {
//     super(width,width);
//     }

// Line: 19 Col: 24

// Test against custom input
// Congratulations!

// You have passed the sample test cases. Click the submit button to run your code against all the test cases.

// Sample Test case 0
// Your Output (stdout)
// 12
// 9
// Expected Output
// 12
// 9

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
  return this.w * this.h;
};
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
  constructor(w) {
    super(w, w);
  }
}

//EJERCICIO 9 - CREATE A RECTANGLE OBJECT
// Objective

// In this challenge, we practice creating objects. Check out the attached tutorial for more details.

// Task

// Complete the function in the editor. It has two parameters:  and . It must return an object modeling a rectangle that has the following properties:

// : This value is equal to .
// : This value is equal to .
// : This value is equal to
// : This value is equal to
// Note: The names of the object's properties must be spelled correctly to pass this challenge.

// Input Format

// The first line contains an integer denoting .
// The second line contains an integer denoting .

// Constraints

// Output Format

// Return a object that has the properties specified above. Locked code in the editor prints the returned object's , , , and  to STDOUT.

// Sample Input 0

// 4
// 5
// Sample Output 0

// 4
// 5
// 18
// 20
// Explanation 0

// Given a  of  and a  of , the Rectangle object's  is  and its  is .

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  let length = a;
  let width = b;
  let perimeter = 2 * (a + b);
  let area = a * b;
  let rectangle = { length, width, perimeter, area };
  return rectangle;
}

//EJERCICIO 10 - Count Objects

// Submissions	Leaderboard	Discussions	Editorial	Topics
// Objective

// In this challenge, we learn about iterating over objects. Check the attached tutorial for more details.

// Task

// Complete the function in the editor. It has one parameter: an array, , of objects. Each object in the array has two integer properties denoted by  and . The function must return a count of all such objects  in array  that satisfy .

// Input Format

// The first line contains an integer denoting .
// Each of the  subsequent lines contains two space-separated integers describing the values of  and .

// Constraints

// Output Format

// Return a count of the total number of objects  such that . Locked stub code in the editor prints the returned value to STDOUT.

//Sample Input 0

// 5
// 1 1
// 2 3
// 3 3
// 3 4
// 4 5
// Sample Output 0

// 2
// Explanation 0

// There are  objects in the  array:

// Because we have two objects  that satisfy  (i.e.,  and ), we return  as our answer.

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let count = 0;
  for (let object of objects) {
    if (object.x == object.y) {
      count++;
    }
  }
  return count;
}

function getCount(objects) {
  let count = 0;
  objects.forEach((o) => {
    if (o.x == o.y) {
      count++;
    }
  });
  return count;
}
