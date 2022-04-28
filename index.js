// code your solution here
const record = [
    {year: "2018", result: "L"},
    //  {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
   ];


function winn (element){
  return element.result==="W" 
}

function superbowlWin(record){
    let win = record.find(winn)
    if (win === undefined){
      
            return undefined
            }
        
           return win.year
}
console.log (superbowlWin(record));


//    function superbowlWin(record) {
//     let win = record.find ((element) => element.result==="W")
//      if (win === undefined){
      
//         return undefined
//      }

//      return win.year
//  }

//  console.log (superbowlWin(record))






//     const winner = record.find((r) => r.result==="W") 
//     return winner ? winner.year : undefined
