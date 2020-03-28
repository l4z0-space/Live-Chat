const socket = io('http://localhost:3000')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')
const messageContainer = document.getElementById('message-container')

const userName = prompt("username: ")
addMessage("You joined...")
socket.emit('send-chat-message',userName+" joined...")

socket.on('chat-message', data =>{
    addMessage(data)
})

messageForm.addEventListener('submit', e=>{
    e.preventDefault()
    const message =userName+": "+ messageInput.value
    socket.emit('send-chat-message',message)
    addMessage("You: "+ messageInput.value)
    messageInput.value = ''
})



function addMessage(message){
    const messageContent = document.createElement('div')
    messageContent.innerText =message
    messageContainer.append(messageContent)
}