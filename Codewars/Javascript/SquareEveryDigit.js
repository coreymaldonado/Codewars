// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// Clever solution
function squareDigits(num){
    return parseInt(((num.toString().split('')).map( int => int = int ** 2)).join(''))
  }
  
  // Readable solution
  function squareDigits(num){
    let numSquared = num.toString().split('')
    numSquared = numSquared.map( int => int = int ** 2)
    return parseInt(numSquared.join(''))
  }