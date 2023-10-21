let users = ["lorem","ipsum","dolor","amet","consectetur","elit"]

//Tutorial - FOR
const userlistDOM = document.querySelector('#user-list')

for(index = 0; index<users.length; index++){
    const liDOM = document.createElement('li')
    liDOM.classList.add('list-group-item');
    liDOM.innerHTML = users[index]
    userlistDOM.appendChild(liDOM)
}

//Tutorial - BREAK
const userList2DOM = document.querySelector('#user-list2')

for (index = 0; index < users.length; index++){
    if(users[index] == "dolor") {break}
    let liDOM = document.createElement('li')
    liDOM.classList.add('list-group-item')
    liDOM.innerHTML = users[index]
    userList2DOM.append(liDOM)
}

//Tutorial - CONTINUE
const userList3DOM = document.querySelector('#user-list3')

for (index = 0; index < users.length; index++){
    if(users[index] == "dolor") {continue}
    let liDOM = document.createElement('li')
    liDOM.classList.add('list-group-item')
    liDOM.innerHTML = users[index]
    userList3DOM.append(liDOM)
}

//Tutorial - WHILE
const userNameDOM = document.querySelector('#user-name');
let userName = "";

while(!userName){
    userName = prompt("Please enter your user name!");
}
userNameDOM.innerHTML = userName;


