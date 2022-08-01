// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
    // your code
    let count = 0
    arr.reverse()
    let binaryPlace = 1
    for (i in arr){
      if (arr[i] !== 0){
        count += binaryPlace
      }
      binaryPlace *= 2
    }
    return count;
  // As it relates to my solving this problem, the binary pattern is as follows:  
  //     0001, 4 places, up to 8
  //     11111, 5 places, up to 16
  //     010101, 6 places, up to 32
  //     ..., 7 places, up to 64
  //     ..., 8 places, up to 128
  //     ..., 10 places, up to 512
  // Each place doubles, so this function can work for any length of number
  // and we simply need to double the binary place during each iteration. 
  // If the value from the array is 0, we do nothing, if it's 1, we add the number
  // to our total, and keep looping through this until the end of the array is met
  };