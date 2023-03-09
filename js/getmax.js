let numbersContainer = [0,96,1000,-1,125,198,1198,0.05]

function getMaximumNumber(arr) {
    //track a number in the array, at start, the number is at position 0 of the array
    let maxNumberTracker = arr[0];
    //declare the maximum number variable and set as default maxNumberTracker
    let maxNumber = maxNumberTracker;
    //loop through the array from position 1
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumberTracker) {
            maxNumberTracker = arr[i];
            maxNumber = maxNumberTracker;

        }
        else {
            maxNumber = maxNumberTracker;
        }
    }
    return maxNumber;
}
console.log("The numbers are : "+ numbersContainer)

console.log("The maximum number is :"+getMaximumNumber(numbersContainer))