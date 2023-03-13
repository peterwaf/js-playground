const divOne = document.getElementById("box1")
const divTwo = document.getElementById("box2")
const divThree = document.getElementById("box3")
const divFour = document.getElementById("box4")
const divFive = document.getElementById("box5")
const divSix = document.getElementById("box6")
const textOne = document.getElementById("text-1")
const focusText = document.getElementById("box-4-text-input")


//1. What is the difference between the "click" and "dblclick" events in JavaScript?
//=> click - the click function code is activated when the user clicks on the mouse once i.e clicks left mouse button clicks once
divOne.addEventListener("click", function theClick() {
    divOne.textContent = "Box clicked"
})

//=> dblclick - the function code is activated when the user double clicks on the mouse i.e clicks left mouse button clicks twice

divTwo.addEventListener("dblclick", function theDoubleClick() {
    divTwo.textContent = "Box double clicked"
})

//2. Explain how the "submit" event works for HTML forms in JavaScript.


//3.What is the "DOMContentLoaded" event, and how is it different from the "load" event?


//4. What is the difference between the "keydown" and "keypress" events in JavaScript?
//=> key down is the current standard javascript event that is activated a key is pressed on the keyboard. e.g

textOne.addEventListener("keydown",(e)=>{
    const pContent = document.getElementById("key_content")
    pContent.textContent = "Key is down" // will activate when the key is pressed on the kyboard including non character keys
})

//=>keypress event is currently deprecated and is no longer supported by updated browsers, it's function is 
//to be to only activate  when a key that produces a character value while excluding Shift, Ctrl, or Meta

//5. What is the difference between the "mouseenter" and "mouseover" events in JavaScript?

//=>mouse enter is activated when the mouse pointer enters an elements and it's containing children tags 
//while mouse over is trigered when a mouse pointer enters the div element

//6. What is the difference between the "focus" and "blur" events in JavaScript?
//=> focus event is activated when an element is on focus,when it is out of focus the opposite blur event occurs,
//e.g we can use it to check if a user has entered a correct email address after proceeding to the next input.

//7. What is the difference between the "submit" and "reset" events in JavaScript?
//=> reset button clears the user input on forms while the submit button saves the user input for the script in the server to process
// the information entered

//8. What is the difference between the "scroll" and "resize" events in JavaScript?
//=> Scroll event is activated when the user scrolls down a window either up or down while the resize
// event triggers when the user window has been resized

//9.What is the difference between the "dragstart" and "dragend" events in JavaScript?
//==> Drag start event is activated when the user starts to drag an element while dragend event
//is activated at the end of a drag event.
//10.How can you cancel the effect of an event once it has been triggered?








