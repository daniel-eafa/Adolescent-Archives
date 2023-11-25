const chatDiv = document.getElementById("all-messages");
const database = firebase.database().ref();


database.on("child_added", addMessageToBoard);
function addMessageToBoard(rowData){
    const messageObject = rowData.val();
    console.log(messageObject);
    let messageDiv = makeSingleMessageHTML(messageObject.username, messageObject.message);

    chatDiv.insertBefore(messageDiv, chatDiv.firstChild);
}

function makeSingleMessageHTML(usernameTxt, messageTxt) {
    // create a parent div
    let parentDiv = document.createElement("div");
    // add .message class
    parentDiv.classList.add("single-message");

    // create the first p tag for username
    let usernameP = document.createElement("p");
    // add .message-username class
    usernameP.classList.add("single-message-username");
    // update the innerHTML to the appropriate data
    usernameP.innerHTML = "By: " + usernameTxt;
    // append to parentDiv
    parentDiv.insertBefore(usernameP, parentDiv.firstChild);

    // create the second p tag for message
    let messageP = document.createElement("p");
    // update the innerHTML to the appropriate data
    messageP.innerHTML = messageTxt;
    // append to parent Div
    parentDiv.insertBefore(messageP, parentDiv.firstChild);

    // return the parent div
    return parentDiv;
}