let myPromise = new Promise((resolve, reject) => {
    let birthdayGiftCake = "true"
    let birthdayCake = {
        shape: "Round",
        color: "Pink and Yellow",
        flavour: "Vanilla",
        art: "Happy birthday Peter"
    }
    if (birthdayGiftCake == true) {
        resolve(birthdayCake)
    }
    else {
        reject("No gift assigned")
    }
})

myPromise.then(data=>{
    console.log("Cake Shape: " + data.shape + "\n"
    +"Cake color: " + data.color + "\n"
    +"Cake flavour: " + data.flavour + "\n"
    +"Cake art: " + data.art
    )
}).catch(error => {
    console.error(error)
})

console.log(myPromise)
