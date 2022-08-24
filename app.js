// // // console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
// const emailRef = document.querySelector(".email");
// // // 1. Then

// // fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
// //     return response.json()
// // }).then(data => {
// //     console.log(data);
// //     emailRef.innerHTML = data.email
// // })

// // 2.Async/Await <-- BETTER -->

//  async function main(){
//      const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     emailRef.innerHTML = data.email
// }

// main();


// function getSubscriptionStatus(){
//     return new Promise((resolve, reject) => {
//         resolve("VIP")
//     })
// }

// async function main(){
//     console.log(await getSubscriptionStatus())
// }

// main();

// function getVideo(subscriptionStatus){
//     return new Promise((resolve, reject) => {
//         if (subscriptionStatus === "VIP"){
//             resolve("Show Video")
//         }
//         else if (subscriptionStatus === "FREE"){
//             resolve("Show Trailer")
//         }
//         else{
//             reject("no video")
//         }
//     })
// }

// async function main(){
//     console.log(await getVideo("NONE"))
// }

// main();

// EASY CHALLENGES

// Challenge 1 

function calcRemainder(num1, num2){
    console.log(num1 % num2)
}

calcRemainder(10, 13);

// Challenge 2

function isOdd(num){
    return num % 2 !== 0
}

console.log(isOdd(46))

// Challenge 3

function booleanInteger(num){
    return num % 2 === 0 ? 1 : -1
}

console.log(booleanInteger(6))

// Challenge 4

function isLoggedInAndSubscribed(str1, str2){
    return str1 === "LOGGED_IN" && str2 === "SUBSCRIBED"
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"))

//Challenge 5

function isLoggedInOrSubscribed(str3, str4){
    return str3 === "LOGGED_IN" || str4 === "SUBSCRIBED"
}

console.log(isLoggedInOrSubscribed("LOGGED_IN", "SUBSCRIBED"))



//MEDIUM CHALLENGES


// Challenge 1

function filterOutFalsy(value1, value2){
    return !value1 ? value1 : value2
}

console.log(filterOutFalsy(true, "Dog"))

// Challenge 2

function arrLength (array){
    return array.length
}

console.log(arrLength([]))

// Challenge 3

function lastElem(array2){
    return array2[array2.length - 1]
}

console.log(lastElem([1, 5, 7, 9, 6, false, "dog", 'green', 4.932]))

// Challenge 4

function arrSum(array3){
    let sum = 0 ;
    for (let i = 0; i < array3.length; i++) {
        sum += array3[i]
    }
    return sum
}

console.log(arrSum([4, 5, 1, 6, 9]))

// challenge 5

function progressiveSum(val){  
    let total = 0
    for (let i = 1; i <= val; i++) {
        total += i
    }
    return total
}

console.log(progressiveSum(4))

// Challenge 6

function calcTime(secs){
    let secsRemaining = (secs % 60)
    let mins = Math.floor(secs / 60)

    if (mins.toString().length === 1){
        mins = '0' + mins
    }

    return `${mins}:${secsRemaining}`
}

console.log(calcTime(260))

//Challenge 7

function getMax(numbers){
    numbers.sort(function(a, b){return a - b}) 
    return numbers[numbers.length - 1]    
}

console.log(getMax([1, 5, 96, 81, 90, 3, 23, 12, 56]))

//Challnege 8 

function reverseString(word){
  return word.split('').reverse().join('')
}

console.log(reverseString("This is Cool"))

//Challenge 9

function convertToZeros(numArr){

    return numArr.map(elem => elem = 0)

    return numArr.fill(0)
    

    for (let i = 0; i < numArr.length; i++) {
        numArr[i] = 0

    }
    return numArr
}

console.log(convertToZeros(["fgfg", 56, 21, "fheif"]))

//Challenge 10

function removeApples(fruitArr){
    return fruitArr.filter(elem => elem !== "Apple")
}

console.log(removeApples(["Apple", "Banana", "Mango","Apple", "Pineapple"]))

//Challenge 11

function removeFalsy(arr2){
    return arr2.filter(elem => !!elem === true)
}

console.log(removeFalsy(["", 0, [], null, undefined, "3", true, "Banana"]))

//Challenge 12

function convertToBoolean(toConvert){
    return toConvert.map(elem => elem = !!elem)
    
}

console.log(convertToBoolean([500, 0, "David", "", []]))

//Challeneg Advanced Challenges

//Challenge 1

function showRating(rating){
    refNum = 0
    ratingStr = ""
    for (let i = rating; i > 0; i = i - 0.5) {
        refNum += 0.5
        if(refNum === 1 ){
            ratingStr += "* "
            refNum = 0
        }
    }
    if (refNum === 0.5){
        ratingStr += ". "
    }

    return ratingStr
}

console.log(showRating(3.5))

//Challenge 2

function sortLowToHigh(toSort){
   return toSort.sort(function(a, b){return a-b});
}

console.log(sortLowToHigh([5, 10, 0, -5]))

//Challenge 3

function sortHighToLow(items){

    return items.sort((a, b) => { return b.price - a.price})

    return items.sort(function(a, b){
        if (a.price < b.price){
            return 1
        }
        else if (a.price > b.price){
            return -1
        }
        else{
            return 0
        }
    })
}

console.log(sortHighToLow([
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10},
]))

//Challenge 4

async function postsByUser(user){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    newData = data.filter(elem => elem.userId === user)
    console.log(newData)
}

postsByUser(4)

//Challenge 5

async function firstSixIncomplete(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json()
    newData = data.filter(elem => !elem.completed).slice(0, 6)
        console.log(newData)
}

firstSixIncomplete()