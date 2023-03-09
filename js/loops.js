let myLuckyNumbers = [1,2,3,4,5]
// using for each loop to get the sum of an array numbers
function countMycars(arr){
    let sum = 0
    arr.forEach(element => {
        sum += element
    });
    return sum
}
console.log("Foreach loop sum")
console.log(countMycars(myLuckyNumbers))

// using for loop to get the sum of an array numbers

function countAllMyCars(arr){
    let sum = 0
    for (i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum
}

console.log("For loop sum")
console.log(countAllMyCars(myLuckyNumbers))