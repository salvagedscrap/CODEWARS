// Given a number n, return the number of positive odd numbers below n, EASY!
// Examples (Input -> Output)

// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

// Expect large Inputs!



function oddCount(n){
    let oddNums=[]
    
    
    for(let i = 1;i<n; i = i+2){
      oddNums.push(i)
    }
    return oddNums.length
    
  }

console.log(oddCount(7))