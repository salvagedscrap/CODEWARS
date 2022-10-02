// Description:

// Write a function that calculates the original product price, without VAT.
// Example

// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

// Notes:

//     VAT is always 15% for the purposes of this Kata.
//     Round the result to 2 decimal places.
//     If null value given then return -1


function excludingVatPrice(price){
  
    let res = price/115*100
    if(typeof price != 'number'){
      return -1
    }
    console.log(price)
    console.log(res)
    if(res%1==0){
     return res
    } else{
      return Number(res.toFixed(2))
      
    }
  }