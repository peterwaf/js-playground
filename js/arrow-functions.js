let firstName = "Peter";
let lastName = "Wafula"

//normal function

function printName1(a,b){
    return a +" "+b
}

//arrow function with brackets

let printName2 = (a,b) => {
    return a +" "+b
}

//arrow function without brackets


let printName3 = (a,b) => a +" "+b

console.log("normal function")
console.log(printName1(1,2))

console.log("arrow function with brackets")
console.log(printName2(1,2))

console.log("arrow function without brackets")
console.log(printName3(1,2))




