// Description:

// Write a function that checks if a given string (case insensitive) is a palindrome.
// Fundamentals

function isPalindrome(x) {
    x = x.toLowerCase()
    let a = x.split('')
    a = a.reverse()
    let newStr = a.join('')
    if(newStr == x){
      return true
    }else{
      return false
    }
    
  }