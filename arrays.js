var student = ["Raju", "Bangalore", 30 , true, null]

var numbers = [1, 5, 3, 8, 6, 4, 9]

stringarray = ["bfih", "wfuyybg", "kfbcuihbwe"]

//arraylength - how many elements are there an array

console.log(stringarray.length)

// array index 

//index always starts from 0

//  arrayname[index]

console.log(student[2])

console.log(student)
console.log(numbers)
finalarray = student.concat(numbers)

console.log(finalarray)


console.log(numbers)
var sortedarray = numbers.sort()

console.log(sortedarray)

// prices = [5549, 6529,5599, 6529]

// sorted = prices.sort()

// //expect(prices).to.equal(sorted)

var x = []



stringarray.unshift("30")

stringarray.unshift("40")

stringarray.push("70")

console.log(stringarray)

//add elements to at end of array - push

// add elements to at beginning of array -unshift


//to remove elements at the end of array - pop

// to remove elements at the begging array - shift 

//[ '40', '30', 'bfih', 'wfuyybg', 'kfbcuihbwe', '70' ]

stringarray.pop()

stringarray.pop()

stringarray.shift()

stringarray.shift()

console.log(stringarray)


stringaarr = [ "raju", "arun", "bharath", "sandeep"]


// sortedarr = stringaarr.sort()
// console.log(sortedarr)

// rev = sortedarr.reverse()
// console.log(rev)

// console.log(stringaarr[6])


// console.log(stringaarr.indexOf("sandeep"))

if(stringaarr.includes("xyz")){

    console.log("element is presnt ")
}
else{

    console.log("element is not presnt ")
}

console.log(stringaarr.splice(3))

//es6 for of 

let colors = ['red', 'green', 'blue', "orange"];

for (const i of colors){

    console.log("before element access")
    console.log(i);
    console.log("after element access")
}
