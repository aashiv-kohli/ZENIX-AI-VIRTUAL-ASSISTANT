/*
 *     <--- Zenix ---> 
 *    A virtual Assistant
 */

const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What did one ocean say to the other ocean? Nothing, they just waved.",
    "I'm on a whiskey diet. I've lost three days already!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I'm reading a book about anti-gravity. It's really uplifting.",
    "Why did the bicycle fall over? Because it was two-tired!"
];
// Array of trending songs
const trendingSongs = [
    "Driver's License - Olivia Rodrigo",
    "Save Your Tears - The Weeknd",
    "Blinding Lights - The Weeknd",
    "Levitating - Dua Lipa",
    "Good 4 U - Olivia Rodrigo",
    "Peaches - Justin Bieber ft. Daniel Caesar, Giveon",
    "Montero (Call Me By Your Name) - Lil Nas X",
    "Leave The Door Open - Bruno Mars, Anderson .Paak, Silk Sonic",
    "Deja Vu - Olivia Rodrigo",
    "Astronaut In The Ocean - Masked Wolf"
];

// Array of trending movies
const trendingMovies = [
    "Spider-Man: No Way Home",
    "The Batman",
    "Avatar 2",
    "Jurassic World: Dominion",
    "Doctor Strange in the Multiverse of Madness",
    "Black Panther: Wakanda Forever",
    "The Flash",
    "Mission: Impossible 7",
    "Thor: Love and Thunder",
    "Indiana Jones 5"
];

// Array of trending news
const trendingNews = [
    "New smartphone with hologram display launched",
    "World's first flying car approved for public use",
    "Popular social media app adds AI-powered features",
    "Global temperatures hit record highs this summer",
    "New movie breaks box office records worldwide",
    "Scientists discover a new species in the Amazon",
    "Electric cars now cheaper than gas-powered cars",
    "World Cup 2025 breaks viewership records",
    "New app helps people learn languages in 30 days",
    "Fast food chains introduce plant-based menus",
    "Popular singer announces world tour for 2025",
];

//Text into speech API
function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

//  typing input and submit button
const textInput = document.getElementById('textInput');
const submitText = document.getElementById('submitText');

// Add event listener for the submit button
submitText.addEventListener('click', () => {
    const query = textInput.value.trim();
    if (query) {
        content.textContent = query;
        speakThis(query.toLowerCase());
        textInput.value = ''; // Clear the input field
    }
});

// Add event listener for pressing Enter key
textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = textInput.value.trim();
        if (query) {
            content.textContent = query;
            speakThis(query.toLowerCase());
            textInput.value = ''; // Clear the input field
        }
    }
});

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning");
    }

    else if(hr == 12) {
        speak("Good noon");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon");
    }

    else {
        speak("Good Evening");
    }
}


window.addEventListener('load', () => {
    const userName = sessionStorage.getItem('userName'); // Get the user's name from sessionStorage
    if (userName) { wishMe(""); 
        speak(`  ${userName}. I'm a virtual assistant. My name is Zenix. I'm developed by Aashiv & Tushar, how can I help you?`);
    }  else {
        speak("Hello, I'm a virtual assistant. My name is Zenix. I'm developed by Aashiv & Tushar, how can I help you?");
    }
});

//listen and convert into text API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function performCalculation(operation, num1, num2) {
    switch (operation) {
        case 'add':
        case 'plus':
        case '+':
            return num1 + num2;
        case 'subtract':
        case 'minus':
        case '-':
            return num1 - num2;
        case 'multiply':
        case 'times':
        case '*':
            return num1 * num2;
        case 'divide':
        case 'divided by':
        case '/':
            return num1 / num2;
        default:
            return null;
    }
}


function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if( message.includes('hello')) {
        const finalText = "Hello. How can I help";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine. I think, you also fine";
        speech.text = finalText;
    }

    else if(message.includes('introduce yourself')|| message.includes('who introduced you')) {
        const finalText = "I'm a virtual assistant. My name is Zenix. I'm developed by Aashiv & Tushar. I can help you that you want. Still, I'm under devloping. I think, I'll be more powerful with Aashiv & Tushar. Thank You";
        speech.text = finalText;
    }

    else if(message.includes('how old are you')) {
        const finalText = "As I'm a virtual assistant, I've no age. But, i can say that I've started my journey from 15th march, 2025";
        speech.text = finalText;
    }

    else if(message.includes('what are you doing now') || message.includes('what are you doing') || message.includes('what are you doing right now')) {
        const finalText = "Oh. It's pretty cool. I'm talking with you";
        speech.text = finalText;
    }

    else if(message.includes('what is your name')) {
        const finalText = "My name is Zenix";
        speech.text = finalText;
    }
    else if(message.includes('good morning')|| message.includes('hi good evening')) {
        const finalText = "Good morning, how can I help you ";
    speech.text = finalText;
}
    else if(message.includes('good evening') || message.includes('hi good evening')) {
        const finalText = "Good evening, how can I help you ";
        speech.text = finalText;
    }
    else if(message.includes('good afternoon')) {
        const finalText = "Good afternoon, how can I help you ";
        speech.text = finalText;
    }

    else if(message.includes('who is your developer') || message.includes('who developed you') || message.includes('who build you')) {
        const finalText = "I'm developed by Aashiv & tushar. Let see his profile";
        speech.text = finalText;
    }

    else if(message.includes('can you help me')) {
        const finalText = "Why not? ask me. if possible, then i will try with my best";
        speech.text = finalText;
    }

    else if(message.includes('who are you')) {
        const finalText = "Hey!! I'm Zenix. I'm your personal virtual assistant.";
        speech.text = finalText;
    }

    else if(message.includes('How can you help me')) {
        const finalText = "It's cool. I can help you in many ways.";
        speech.text = finalText;
    }

    else if(message.includes('what is your name') || message.includes('tell me your name')) {
        const finalText = "My name is Zenix";
        speech.text = finalText;
    }
    
    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if (message.includes('open youtube')) {
        if (message.includes('play')) {
            const song = message.replace('open youtube and play', '').trim();
            window.open(`https://www.youtube.com/results?search_query=${song}`, "_blank");
            const finalText = `Opening YouTube and searching for ${song}`;
            speech.text = finalText;
        } else {
            window.open("https://youtube.com", "_blank");
            const finalText = "Opening YouTube";
            speech.text = finalText;
        }
    }

    else if(message.includes('play')) {
        const songName = message.replace('play', '').replace('on youtube', '').trim();
        const searchQuery = songName.replace(" ", "+");
        window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, "_blank");
        const finalText = `Searching and playing ${songName} on YouTube`;
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('how can')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else if (message.includes('notepad')) {
        window.open('file:///C:/Windows/System32/notepad.exe');
        const finalText = "Opening Notepad";
        speech.text = finalText;
    }
    else if(message.includes('joke')){
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const finalText = jokes[randomIndex];
        speech.text = finalText;
    }
    else if(message.includes("trending movies")){
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const finalText = trendingMovies[randomIndex];
        speech.text = finalText;
    }
    else if(message.includes("trending song")){
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const finalText = trendingSongs[randomIndex];
        speech.text = finalText;
    }
    else if(message.includes("trending news")){
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const finalText = trendingNews[randomIndex];
        speech.text = finalText;

    }
    else if(message.includes('image') || message.includes('images')  || message.includes('pictures')) {
        window.open(`https://www.google.com/search?tbm=isch&q=${message.replace("image", "").replace("images", "").trim()}`, "_blank");
        const finalText = "Searching for images on Google";
        speech.text = finalText;
    }
    
    else if(message.includes('news')) {
        window.open(`https://www.google.com/search?tbm=nws&q=${message.replace("news", "").trim()}`, "_blank");
        const finalText = "Searching for news on Google";
        speech.text = finalText;
    }
    
    else if(message.includes('shopping') || message.includes('shop')) {
        window.open(`https://www.google.com/search?tbm=shop&q=${message.replace("shopping", "").trim()}`, "_blank");
        const finalText = "Searching for shopping on Google";
        speech.text = finalText;
    }
    
    else if(message.includes('videos')) {
        window.open(`https://www.google.com/search?tbm=vid&q=${message.replace("videos", "").trim()}`, "_blank");
        const finalText = "Searching for videos on Google";
        speech.text = finalText;
    }
    
    else if(message.includes('short videos')) {
        window.open(`https://www.google.com/search?tbm=vid&q=${message.replace("short videos", "").trim()}`, "_blank");
        const finalText = "Searching for short videos on Google";
        speech.text = finalText;
    }
    
    else if(message.includes('forums')) {
        window.open(`https://www.google.com/search?tbm=forums&q=${message.replace("forums", "").trim()}`, "_blank");
        const finalText = "Searching for forums on Google";
        speech.text = finalText;
    }

    else if (message.includes('map') || message.includes('location') || message.includes('direction')) {
        const location = message.replace("map", "").replace("location", "").trim();
        if (location) {
            window.open(`https://www.google.com/maps/search/${location.replace(" ", "+")}`, "_blank");
            const finalText = `Searching for ${location} on Google Maps`;
            speech.text = finalText;
        } else {
            window.open("https://www.google.com/maps", "_blank");
            const finalText = "Opening Google Maps";
            speech.text = finalText;
        }
    }
    else if (message.includes('roll a dice') || message.includes('dice a roll')) {
        const diceResult = Math.floor(Math.random() * 6) + 1;
        const finalText = `You rolled a ${diceResult}`;
        speech.text = finalText;
    }
    
    else if (message.includes('search instagram for') || message.includes('find instagram user')) {
        const username = message.replace('search instagram for', '').replace('find instagram user', '').trim();
        if (username) {
            window.open(`https://www.instagram.com/${username}`, "_blank");
            const finalText = `Searching for ${username} on Instagram.`;
            speech.text = finalText;
        } else {
            const finalText = "Please specify the Instagram username you want to search for.";
            speech.text = finalText;
        }
    }
    
    else if (message.includes('translate it in') || (message.includes('translate to'))) {
        const translationParts = message.split('translate it in');
        if (translationParts.length > 1) {
            const textToTranslate = translationParts[0].trim();
            const targetLanguage = translationParts[1].trim();  
            if (textToTranslate && targetLanguage) {
                const languageMap = {
                    'french': 'fr',
                    'spanish': 'es',
                    'german': 'de',
                    'hindi': 'hi',
                    'english': 'en',
                    'japanese': 'ja',
                    'chinese': 'zh',
                    'korean': 'ko',
                    'arabic': 'ar',
                    'russian': 'ru',
                    'portuguese': 'pt',
                    'italian': 'it',
                    'dutch': 'nl',
                    'turkish': 'tr',
                    'tamil': 'ta',
                    'telugu': 'te',
                    'bengali': 'bn',
                    'marathi': 'mr',
                    'gujarati': 'gu',
                    'kannada': 'kn',
                    'malayalam': 'ml',
                    'punjabi': 'pa',
                    'urdu': 'ur',
                    
                
                };
    
                const languageCode = languageMap[targetLanguage.toLowerCase()];
    
                if (languageCode) {
                    // Open Google Translate with the text and target language code
                    const translateUrl = `https://translate.google.com/?sl=auto&tl=${languageCode}&text=${encodeURIComponent(textToTranslate)}`;
                    window.open(translateUrl, "_blank");
    
                    const finalText = `Translating "${textToTranslate}" to ${targetLanguage}.`;
                    speech.text = finalText;
                } else {
                    const finalText = `Sorry, I don't recognize the language "${targetLanguage}". Please specify a valid language.`;
                    speech.text = finalText;
                }
            } else {
                const finalText = "Please specify the text and the target language for translation.";
                speech.text = finalText;
            }
        } else {
            const finalText = "Please specify the text and the target language for translation.";
            speech.text = finalText;
        }
    }
    
    // Arithmetic operations
    else if (message.includes('add') || message.includes('plus') || message.includes('+') ||
             message.includes('subtract') || message.includes('minus') || message.includes('-') ||
             message.includes('multiply') || message.includes('times') || message.includes('*') ||
             message.includes('divide') || message.includes('divided by') || message.includes('/')) {
        
        const numbers = message.match(/\d+/g);
        const operation = message.match(/add|plus|\+|subtract|minus|-|multiply|times|\*|divide|divided by|\//g);

        if (numbers && numbers.length >= 2 && operation) {
            const num1 = parseFloat(numbers[0]);
            const num2 = parseFloat(numbers[1]);
            const result = performCalculation(operation[0], num1, num2);

            if (result !== null) {
                const finalText = `The result is ${result}`;
                speech.text = finalText;
            } else {
                speech.text = "I couldn't perform the calculation. Please try again.";
            }
        } else {
            speech.text = "I couldn't understand the numbers or operation. Please try again.";
        }
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on web";
        speech.text = finalText;
    }

    // function speakThis(message) {
    //     const speech = new SpeechSynthesisUtterance();
    
        
         if (message.includes('search instagram for') || message.includes('find instagram user')) {
            let username = message.replace('search instagram for', '').replace('find instagram user', '').trim();
    
            // Replace "underscore" with _ and "dot" with .
            username = username.replace(/underscore/g, '_').replace(/dot/g, '.');
    
            if (username) {
                window.open(`https://www.instagram.com/${username}`, "_blank");
                const finalText = `Searching for ${username} on Instagram.`;
                speech.text = finalText;
            } else {
                const finalText = "Please specify the Instagram username you want to search for.";
                speech.text = finalText;
            }
        }
    
        speech.volume = 1;
        speech.pitch = 1;
        speech.rate = 1;
        window.speechSynthesis.speak(speech);
    }
