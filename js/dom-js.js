const mainContainer = document.getElementsByTagName("main");
const buttonsContainer = document.getElementsByTagName("button");
const firstLink = document.getElementsByTagName("a")

//change container background color

buttonsContainer[0].addEventListener("click",(e)=>{
    mainContainer[0].className = "submainClass";
});

//change link text

buttonsContainer[1].addEventListener("click",(e)=>{
    firstLink[0].href = "https://www.google.com/";
    firstLink[0].innerHTML = "Link Changed and linked to google";
});