// // First, he wants to test out forEachto check who's present. So as he goes down the array of minions, they should console.logthat they're here.

// const minions = [
//   'bob',
//   'kevin',
//   'stuart',
//   'dave',
//   'jerry',
//   'mark',
//   'tim',
//   'phil',
//   'carl'
// ]

// function isPresent(arr) {
//  arr.forEach(minion => {console.log(minion + ' is present')})
// }

// isPresent(minions)


// // Using the mapmethod, capitalize each minion's name EXCEPT kevin's because he was being sneaky and save it to a new array called capitalizedMinions

// const upperCase = minions.map(minion => {
// return minion.toUpperCase()
// })

// console.log(upperCase)

// // Using the mapmethod, capitalize each minion's name EXCEPT kevin's because he was being sneaky and save it to a new array called capitalizedMinions

// const capitalizedMinions = minions.map(minion => {
//   if (minion === 'kevin') {
//     return(minion.toLowerCase())
//   }
//   else {
//     return(minion.toUpperCase())
//   }

// })

// console.log(capitalizedMinions);

// // Use filterto filter out minions that are not capitalized and save the correctly capitalized minions to an array called actuallyCapitalizedMinions

// const actuallyCapitalizedMinions = capitalizedMinions.filter((minion) => {
//   return minion === minion.toUpperCase();
// });

// console.log(actuallyCapitalizedMinions)

// // Use everyagain, but this time on your new actuallyCapitalizedMinionsarray, to check if they're all capitalized now

// const isCapitalized = actuallyCapitalizedMinions.every(minion => {
//   if (minion === minion.toUpperCase()) {
//     return true
//   } else {
//  return false
//   }
    
// })

// console.log(isCapitalized)

// given this array




