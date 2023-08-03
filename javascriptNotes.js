//Button1 - Add Event with DOM-Console
let button1=document.querySelector("#button1")
button1.addEventListener("click",functionButton1)

//Button2 - Add Event with DOM-Alert
let button2=document.querySelector("#button2")
button2.addEventListener("click",functionButton2) 

//Button3 - Add Event with DOM-Mouse Over
let button3=document.querySelector("#button3")
button3.addEventListener("dblclick",functionButton3)

//Button4 - Add Event with DOM-Mouse Over
let button4=document.querySelector("#button4")
button4.addEventListener("click",functionButton4)

//Button1 Function
function functionButton1(){
    console.log("clicked")   
}
//Button2 Function
function functionButton2(){
    alert("DANGER!!!")
}
//Button3 Function
function functionButton3(){
    console.log("mouse over")
    this.style.color="success"?this.style.color="black":this.style.color="success"
}

function functionButton4(){
    console.log("button")
}