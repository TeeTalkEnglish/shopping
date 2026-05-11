class Chat {
    constructor(channelName, role, phrases) {
        this.channel = new BroadcastChannel(channelName);
        this.role = role;
        this.phrases = phrases;
        this.chatBox = document.getElementById('chat-box');
        this.buttonsDiv = document.getElementById('buttons-div');

        this.channel.onmessage = (event) => {
            this.displayMessage(event.data.role, event.data.message);
        };

        this.createButtons();
    }

    createButtons() {
        this.phrases.forEach(phrase => {
            const button = document.createElement('button');
            button.textContent = phrase;
            button.className = 'phrase-button';
            button.addEventListener('click', () => this.sendMessage(phrase));
            this.buttonsDiv.appendChild(button);
        });
    }

    sendMessage(message) {
        const data = { role: this.role, message: message };
        this.channel.postMessage(data);
        this.displayMessage(this.role, message);
    }

    displayMessage(role, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${role}`;
        messageDiv.textContent = `${role.charAt(0).toUpperCase() + role.slice(1)}: ${message}`;
        this.chatBox.appendChild(messageDiv);
        this.chatBox.scrollTop = this.chatBox.scrollHeight;
    }
}

// Phrases for students
const studentPhrases = [
    // Size questions
    "What sizes do you have?",
    "Do you have this in a larger size?",
    "What is a medium in Australian sizes?",
    "Is this size true to fit?",
    "What is the best size for me?",
    
    // Price questions
    "How much does this cost?",
    "Is this on sale?",
    "Do you have any discounts?",
    "What's the price of this one?",
    "Are there any deals today?",
    
    // Fitting room
    "Can I try it on?",
    "Where is the fitting room?",
    "How many items can I take to the fitting room?",
    "Do you have a mirror in the fitting room?",
    
    // Color and style
    "Do you have this in another color?",
    "What colors are available?",
    "Do you have it in black?",
    "What style do you recommend?",
    
    // Material and care
    "What is this made of?",
    "Is it cotton or synthetic?",
    "How do I wash this?",
    "Is it easy to care for?",
    "Will it shrink?",
    
    // General questions
    "Can I return this if it doesn't fit?",
    "Do you have a different brand?",
    "What is popular here?",
    "Can you recommend something?",
    "Do you accept card payment?",
    "Is there a changing room available?",
    "Do you have anything similar?",
    "How long is the wait?",
    "Are you having a sale today?",
    "Can you help me find my size?"
];

// Phrases for teachers
const teacherPhrases = [
    // Greeting and offering help
    "Hi! How can I help you today?",
    "Hello! Are you looking for something special?",
    "Welcome! Can I assist you?",
    "Good day! What can I help you find?",
    
    // Size suggestions
    "We have sizes small, medium, and large.",
    "Australian sizes are usually one size bigger than overseas.",
    "I think a medium would suit you best.",
    "Yes, I can get you a size large right away.",
    "That style usually runs small, so try a larger size.",
    "We have XS, S, M, L, XL, and XXL.",
    
    // Price information
    "It's $25.",
    "This one is $45.",
    "We have a 20% discount on everything today.",
    "That's on sale for $30, down from $50.",
    "Full price is $35.",
    "We're having a spring sale this week.",
    
    // Fitting room information
    "The fitting room is over there.",
    "You can take up to 5 items to the fitting room.",
    "Yes, there's a large mirror in the fitting room.",
    "The fitting rooms are at the back of the store.",
    "You can use any of the changing rooms on the left.",
    
    // Color and style options
    "We have it in blue, red, green, and black.",
    "This comes in navy, white, and grey.",
    "Let me check if we have it in other colors.",
    "This style is very popular right now.",
    "We only have black left in stock.",
    
    // Material information
    "It's 100% cotton, very comfortable.",
    "This is a cotton and polyester blend.",
    "It's machine washable at 30 degrees.",
    "This material doesn't shrink.",
    "It's easy to care for, just wash and wear.",
    
    // Policy questions
    "Yes, you can return it within 14 days.",
    "We accept returns with the receipt.",
    "We take credit card, debit card, and cash.",
    "You have 30 days to return items.",
    "We don't accept returns without a receipt.",
    
    // Recommendations
    "I'd recommend this one for you.",
    "This is our best seller.",
    "This style suits most people.",
    "Many customers love this one.",
    "This is great value for money.",
    
    // Availability
    "Let me check if we have that in stock.",
    "I'm sorry, we're out of stock in that size.",
    "We should get more in next week.",
    "Yes, we have plenty of those.",
    "Can I order that for you?",
    
    // General responses
    "Sure, no problem.",
    "Anything else I can help with?",
    "Would you like to try that on?",
    "That looks great on you.",
    "Let me know if you need anything else.",
    "The changing room is free to use.",
    "We're quite busy today.",
    "Thank you for shopping with us!"
]; or 'teacher'