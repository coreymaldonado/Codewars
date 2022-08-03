// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let string = s.split(' ');
    let shortest = 'floccinaucinihilipilification'
    let length = 0
    string.forEach( word => {
      if (word.length < shortest.length){
        length = word.length
        shortest = word
      }
    })
    return length;
  }