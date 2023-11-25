const database = firebase.database().ref();


const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send-btn");
/*
if(len(messageInput.value)>0){
}*/
/*
let text = messageInput.value;
let final = text.length;
console.log(length);*/
/*
if (text>0){
    sendButton.onclick = updateDb;

}*/

sendButton.onclick = updateDb;
    

/*
if(messageInput.value.length>0){

}*/



function updateDb(event) {
    if(usernameInput.value.length == 0){
        usernameInput.value = "Anonymous Blogger"
    }
    if(messageInput.value.length > 700){
    
    event.preventDefault();

    const entry = {
        username: usernameInput.value,
        message: messageInput.value
    };

    console.log(entry);

    database.push(entry);
    messageInput.value = "";
    usernameInput.value = "";
    }
    else{
    alert("your blog must be at least 700 characters")    
    }
}

database.on("child_added", addMessageToBoard);









