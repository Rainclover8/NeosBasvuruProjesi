const qaPairs = {
    "How are you?": "I'm good, thank you!",
    "What is your name?": "I'm a simple chatbot.",
    "Tell me a joke.": "Why don't scientists trust atoms? Because they make up everything!",
    "What is the capital of France?": "The capital of France is Paris.",
    "Who wrote 'Romeo and Juliet'?": "William Shakespeare wrote 'Romeo and Juliet'.",
    "What is the largest ocean?": "The Pacific Ocean is the largest ocean.",
    "How many continents are there?": "There are seven continents.",
    "What's the square root of 64?": "The square root of 64 is 8.",
    "Who painted the Mona Lisa?": "Leonardo da Vinci painted the Mona Lisa.",
    "What is the speed of light?": "The speed of light is approximately 299,792 kilometers per second.",
    "When was the Declaration of Independence signed?": "The Declaration of Independence was signed on July 4, 1776.",
    "What is the capital of Japan?": "The capital of Japan is Tokyo.",
    "Who discovered penicillin?": "Alexander Fleming discovered penicillin.",
    "What is the largest planet in our solar system?": "Jupiter is the largest planet in our solar system.",
    "What is the boiling point of water?": "The boiling point of water is 100 degrees Celsius (212 degrees Fahrenheit).",
    "Who wrote 'Hamlet'?": "William Shakespeare wrote 'Hamlet'.",
    "What is photosynthesis?": "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize nutrients from carbon dioxide and water.",
    "What is the distance between the Earth and the Moon?": "The average distance from the Earth to the Moon is about 384,400 kilometers (238,855 miles).",
    "Who was the first person to walk on the Moon?": "Neil Armstrong was the first person to walk on the Moon in 1969.",
    "What is the capital of Italy?": "The capital of Italy is Rome.",
    "What does DNA stand for?": "DNA stands for Deoxyribonucleic Acid.",
    "What is the pH of water?": "The pH of pure water is 7, which is neutral.",
    "Who is the author of '1984'?": "George Orwell is the author of '1984'.",
    "What is the largest country in the world?": "Russia is the largest country in the world by area.",
    "What is the currency of the European Union?": "The currency of the European Union is the Euro."
    
};
document.getElementById('send-btn').addEventListener('click', function() {
    let userInputField = document.getElementById('user-input');
    if (userInputField) {
        let userInput = userInputField.value.trim();
        console.log("User input :", userInput);

        if (userInput) {
            appendMessage('You', userInput);
            const botResponse = qaPairs[userInput] || "Sorry, I don't understand that.";
            appendMessage('Chatbot', botResponse);
            userInputField.value = '';
        }
    } else {
        console.error("User input field not found");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('indirme').addEventListener('click', function() {
        indirme();
        localStorage.clear()
    });
});

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');

   
    const img = document.createElement('img');
    img.style.height = '30px';
    img.style.width = '30px';
    img.style.marginRight = '10px';

    if (sender === 'You') {
        img.src = './icons/user.png'; 
    } else {
        img.src = './icons/chatbot.png'; 
    }

  
    messageDiv.appendChild(img);
    messageDiv.appendChild(document.createTextNode(sender + ": " + message));

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    saveMessageToLocalStorage(sender, message);
}

function indirme() {
    const chatBox = document.getElementById('chat-box');
    let chatData = '';
    chatBox.childNodes.forEach((node) => {
        chatData += node.textContent + '\n'; 
    });
  
    const blob = new Blob([chatData], { type: 'text/plain' });
    
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'chat_history.txt'; 
    downloadLink.click();

    URL.revokeObjectURL(downloadLink.href);
    chatBox.innerHTML = ''; 
}

function saveMessageToLocalStorage(sender, message) {
    
    let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    
    
    chatHistory.push({ sender, message });

    
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

function loadMessagesFromLocalStorage() {
    let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.forEach(msg => {
        appendMessage(msg.sender, msg.message);
    });
}


document.addEventListener('DOMContentLoaded', loadMessagesFromLocalStorage);

function clearChatHistory() {
    localStorage.removeItem('chatHistory');
    document.getElementById('chat-box').innerHTML = ''; 
}