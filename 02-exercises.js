//EJERCICIO 5 SWITCH STATEMENTS

// Objective

// In this challenge, we learn about switch statements. Check out the attached tutorial for more details.

// Task

// Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

// If the first character in string  is in the set , then return A.
// If the first character in string  is in the set , then return B.
// If the first character in string  is in the set , then return C.
// If the first character in string  is in the set , then return D.
// Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i).

// Function Description

// Complete the getLetter function in the editor below.

// getLetter has the following parameters:

// string s: a string
// Returns

// string: a single letter determined as described above
// Input Format

// Stub code in the editor reads a single string denoting  from stdin.

// Constraints

// , where  is the length of .
// String  contains lowercase English alphabetic letters (i.e., a through z) only.

function getLetter(s) {
  let letter;

  switch (true) {
    case "aeiou".includes(s[0]):
      letter = "A";
      break;
    case "bcdfg".includes(s[0]):
      letter = "B";
      break;
    case "hjklm".includes(s[0]):
      letter = "C";
      break;
    default:
      letter = "D";
  }

  return letter;
}


//EJERCICIO 6 IF-ELSE STATEMENTS:

// Objective

// In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.

// Task

// Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:

// If 25 < score <= 30  , then grade = "A" .
// If 20 < score <= 25, then grade = "B" .
// If 15 < score <=20, then grade "C" .
// If 10 < score <= 15, then grade "D" .
// If 5 < score <= 10, then grade "E" .
// If 0 < score <= 5, then grade "F"

// Input Format

// Stub code in the editor reads a single integer denoting  from stdin and passes it to the function.

// Constraints

// Output Format

// The function must return the value of  (i.e., the letter grade) that Julia earned on the exam.

function getGrade(score) {
    let grade;
    if(score > 25  && score <= 30){
        grade= "A";
    } else if (score > 20 && score <= 25){
        grade = "B";
    } else if (score > 15 && score <= 20){
        grade = "C";
    } else if (score > 10 && score <= 15){
        grade = "D";
    } else if (score > 5 && score <= 10){
        grade = "E";
    } else if (score >= 0  && score <= 5) {
        grade = "F";
    } else{
        grade = "invalid score";
    }
    
    return grade;
}



//EJERCICIO 7 -ARRAYS:
// Objective

// In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

// Function Description

// Complete the getSecondLargest function in the editor below.

// getSecondLargest has the following parameters:

// int nums[n]: an array of integers
// Returns

// int: the second largest number in 
// Input Format

// The first line contains an integer, , the size of the  array.
// The second line contains  space-separated numbers that describe the elements in .

// Constraints

// , where  is the number at index .
// The numbers in  may not be distinct.
// Sample Input 0

// 5
// 2 3 6 6 5
// Sample Output 0

// 5
// Explanation 0

// Given the array , we see that the largest value in the array is  and the second largest value is . Thus, we return  as our answer.

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    
  //1. limpiamos repetidos
  let cleanNums = [...new Set(nums)];
  //2. ordenamos array de mayor a menor con la función flecha b-a
  let secondLargest = cleanNums.sort((a,b) => b-a);
  //3. retornamos el valor en la posición 1
  return secondLargest[1];


  //Posible respuesta
  // let max = Math.max.apply(null, nums);
  // return max;
  // let secondLargest = max[i-1]
  // return secondLargest
}