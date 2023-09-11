const message_container = document.querySelector('.message-container')
const user_input = document.querySelector('input[type="text"]')
const send_btn = document.querySelector('.send')
send_btn.addEventListener('click', chatController)



function postMsg(text, author){
    const message = document.createElement('p')
    message.textContent = text
    message.classList.add(`${author}-message`)
    message_container.appendChild(message)
}

function initiateChat() {
    setTimeout(()=> {postMsg(`Hi, I'm Askie`, 'bot')}, 1000)
    setTimeout(()=> {postMsg('I can answer your questions', 'bot')}, 2000)
    setTimeout(()=> {postMsg('what is your name', 'bot')}, 3000)
}

function clearChat() {
    message_container.replaceChildren()
    initiateChat()
}


function genResponse() {
    const luckyGuess = Math.floor(Math.random() * 10) + 1
    
    switch (luckyGuess) {
        case 1:
            setTimeout(() => {postMsg('The stars say yes, go for it', 'bot')}, 1000)
            break;
        case 2:
            setTimeout(() => {postMsg('Trust your instincts and take the leap', 'bot')}, 1000)
            break;
        case 3:
            setTimeout(() => {postMsg('Hmm, better try again later', 'bot')}, 1000)
            break;
        case 4:
            setTimeout(() => {postMsg('Consider all options before making a move', 'bot')}, 1000)
            break;
        case 5:
            setTimeout(() => {postMsg('Outlook is bright, proceed with confidence', 'bot')}, 1000)
            break;
        case 6:
            setTimeout(() => {postMsg('Seek advice from a trusted friend before deciding', 'bot')}, 1000)
            break;
        case 7:
            setTimeout(() => {postMsg('Signs point to unexpected opportunities', 'bot')}, 1000)
            break;
        case 8:
            setTimeout(() => {postMsg("It's a toss-up, make a choice and see what happens", 'bot')}, 1000)
            break;
        case 9:
            setTimeout(() => {postMsg('Take a step back and reassess before moving forward', 'bot')}, 1000)
            break;
        case 10:
            setTimeout(() => {postMsg('Not the right time, patience will bring better results', 'bot')}, 1000)
            break;
    }
}

function chatController(){
    //get the user input and post it as a message
    const text = user_input.value

    if (text === ''){
        setTimeout(() => {postMsg('please type something in the message box', 'bot')}, 1000)
        return
    }
    else {
        postMsg(text, 'user')
    }

    //check if this post is the first user input, if so treat is as the user's name
    //otherwise it is a question, generate a response
    
    if (document.querySelectorAll('.user-message').length === 1) {
        setTimeout(() => {postMsg(`Hello ${text}, do you have any question?`, 'bot')}, 1000)
    }
    else {
        genResponse()
    }
    //clear the user input box
    user_input.value = ''
}

initiateChat()




