// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function gordon(a){
    let sentence = a.split('')
    let vowels = ['E', 'I', 'O', 'U']
    let mapped = sentence.map( x => {
      x = x.toUpperCase()
      if (x === ' '){
        return '!!!! '
      } else if (x === 'A'){
        return '@'
      } else if (vowels.includes(x)){
        return '*'
      } else {
        return x
      }
    })
    mapped.push('!!!!')
    return mapped.join('')
  }