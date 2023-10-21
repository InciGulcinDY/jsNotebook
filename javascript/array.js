//Array 
let item = "Yolcu"
let array = [100,56,"inci","sezgin","doga",item]

console.log(`Lenght of the array: ${array.length}`)

console.log(`The first item: ${array[0]}`)

console.log(`The last item: ${array[array.length-1]}`)

//Adding to the end of the array:
array.push('durak')
console.log(array)

//Adding to the beginning of the array
array.unshift('45')
console.log(array)

//Splice: 
array.splice(1,0,'75')
console.log(array)

//Removing item from the end of the array 
array.pop();
console.log(array)

//Removing item from the beginning of the array 
array.shift()
console.log(array)

//join() Demostrating the array as a whole string
console.log("join: " + array.join())

//concat() Merging two arrays
let array2 = ["antalya" , "izmir" , "istanbul"]
console.log(array2.concat(array))

