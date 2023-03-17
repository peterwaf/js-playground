const myFullDate = new Date();
const sanContainer = document.getElementsByTagName("span");
sanContainer[0].innerHTML = myFullDate;
sanContainer[0].style.background = "yellow";

//DATE FORMATS
//new Date()
//new Date(date string)
//new Date(year,month)
//new Date(year,month,day)
//new Date(year,month,day,hours)
//new Date(year,month,day,hours,minutes)
//new Date(year,month,day,hours,minutes,seconds)
//new Date(year,month,day,hours,minutes,seconds,ms)
//new Date(milliseconds)