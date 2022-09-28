// Description:

// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

//     Terrible: tip 0%
//     Poor: tip 5%
//     Good: tip 10%
//     Great: tip 15%
//     Excellent: tip 20%

// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

//     "Rating not recognised" in Javascript, Python and Ruby...
//     ...or null in Java
//     ...or -1 in C#

// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
    let lC = rating.toLowerCase()
    let tip = 0
    if(lC=='terrible'){
       tip= 0
    }else if(lC=='poor'){
      tip= amount/100*5
    }else if(lC=='good'){
      tip= amount/100*10
    }else if(lC=='great'){
      tip=tip= amount/100*15
    }else if(lC=='excellent'){
      tip= amount/100*20
    }else{
      return 'Rating not recognised'
    }
      return Math.ceil(tip)
    }
