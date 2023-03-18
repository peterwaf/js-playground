//DATE FORMATS

//new Date()
const myFullDate = new Date();
const sanContainer = document.getElementsByTagName("span");
sanContainer[0].innerHTML = myFullDate;
sanContainer[0].style.background = "yellow";

//new Date(date string)
let newDate = new Date("12 April 2023");
console.log("Date string"+ "\n"+ newDate);


//new Date(year,month,day,hours,minutes,seconds,ms)
let fullyearMonthDate = new Date(2023,11,25,0,30,17,18)
console.log("Date with parameters"+ "\n"+ fullyearMonthDate);

//new date object creation formats
//new Date(year,month,day)
//new Date(year,month,day,hours)
//new Date(year,month,day,hours,minutes)
//new Date(year,month,day,hours,minutes,seconds)
//new Date(year,month,day,hours,minutes,seconds,ms)
//new Date(milliseconds)

//date get methods

let fullYear = fullyearMonthDate.getFullYear()
console.log("Full year "+ "\n"+ fullYear);

let fullYearDate = fullyearMonthDate.getDate()

console.log("Full year date "+ "\n"+ fullYearDate);


