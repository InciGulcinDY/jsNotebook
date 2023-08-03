let name = document.getElementById("name").innerHTML
let surname = document.getElementById("surname").innerHTML
console.log(`Name: ${name}`)
console.log(`SurName: ${surname}`)

document.getElementById("primary").addEventListener("click",clickedPrimary)
document.getElementById("success").addEventListener("click", clickedSuccess)
document.getElementById("warning").addEventListener("click", clickedWarning)
document.getElementById("danger").addEventListener("click", clickedDanger)

function clickedPrimary(){
    alert(`Clicked the primary button!!!`)
}
function clickedSuccess(){
    alert(`Clicked the success button!!!`)
}
function clickedWarning(){
    alert(`Clicked the warning button!!!`)
}
function clickedDanger(){
    alert(`Clicked the danger button!!!`)
}
//Ading class to DOM
let div = document.querySelector('#name')
div.classList.add('info','visible','block')
console.log(div.classList)