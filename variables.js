const integer = 5
const float = 6.78
let number = 8
let value = "10"
let userName = "inci"

//exponentiation
let squareOfNumber = number**2
console.log("Exponentiation: " + squareOfNumber)

//Rounding the Number Up/Down
console.log("Rounding the Number Down: " + Math.floor(1.2))
console.log("Rounding the Number Up: " + Math.ceil(1.2))

//Boolean
console.log("Boolean('2'):" + Boolean("2"))
console.log("Boolean('0'):" + Boolean("0"))
console.log("Boolean(''):" + Boolean(""))
console.log("Boolean(0):" + Boolean(0))
console.log("Boolean(-0):" + Boolean(-0))
console.log("Boolean(0==0):" + Boolean(0==0))

//Type of Variables
console.log("Type of Variable: " + typeof(10))
console.log("Type of Variable: " + typeof("10"))
console.log("Type of Variable: " + typeof(Boolean("")))

//converting the variable to another type
console.log("Converting '13' to integer: " + parseInt("13"))
console.log("Converting '13px' to integer: " + parseInt("13px"))
console.log("Converting 'px13' to integer: " + parseInt("px13"))
console.log("Converting '13.23' to float: " + parseFloat("13.23"))
let text = new String("Hello World!");
console.log("Converting String Object to string: " + text.toString())

//Explicit Coercion
console.log("String('524'): " + String("524")) 
console.log("parseInt('524'): " + parseInt("524")) 

//Implicit Coercion
if(3<5) {
    let result = (""+123)
    console.log(result)
    console.log(typeof(result))
}
//Template Literals
let oldString = "My favorite cities:\nLondon\nFirenze"
console.log(oldString)

let newString = `My favorite cities:
London
Firenze`
console.log(newString)
    //interpolation
let london = 5
let firenze = 2
console.log(`I've been in London ${london} times. On the other hand, I've been in Firenze only ${firenze} times`)    

//String
let myName = `Inci Gulcin Durak Yolcu`
    //Length
    console.log(myName.length)
    //indexOf
    console.log(myName.indexOf(`cin`))
    //lastIndexOf
    console.log(myName.lastIndexOf(`u`))
    //Search
    console.log(myName.search(`Gu`))
    //Slice
    console.log(myName.slice(0,5))
    //Replace
    console.log(myName.replace(`Durak Yolcu`, `Inci Gulcin`))
    //Concat
    console.log(myName.concat(` Hello!!!`))
    //charAt
    console.log(myName.charAt(20))
    //charCodeAt
    console.log(myName.charCodeAt(20))
    //Split
    console.log(myName.split(' '))
    //UpperCase
    console.log(myName.toUpperCase())
    //LowerCase
    console.log(myName.toLowerCase())