// const myPromise = new Promise((resolve,reject)=>{
//     let sumNumber = 2
//     if (sumNumber ===2){
//         resolve(sumNumber)
//     }
//     else{
//         reject("Failed")
//     }
// })

// myPromise.then((message)=>{
//     console.log( "The number is " +message)
// }).catch((message)=>{
//     console.log(message)
// })


//assuming i want to gift myself a car once I have the money

const myGift = new Promise((resolve, reject) => {
    let giftCar = true
    let myCar = {
        name : "Honda",
        engineSize : "1300CC",
        capacity:"5 seater",
        fuel : "Petrol"
    }
    if (giftCar == true) {
        resolve(myCar)
    }
    else{
        reject("No money to buy a car")
    }
})

//use .then to deliver the promise, mydata will be the result of resolve

myGift.then((mydata)=>{

    message = "Gift promise fulfilled \n"+ "Car name :" + mydata.name + "\n"+
    "Car Engine Size :" + mydata.engineSize + "\n"+
    "Capacity :" + mydata.capacity + "\n"+
    "Fuel :" + mydata.fuel + "\n"
    console.log(message)
})

console.log(myGift)