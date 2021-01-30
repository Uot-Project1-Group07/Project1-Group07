// Options the user could type in
var prompts = [
    ["hi", "hey", "hello","hi there"], 
    ["good morning"], ["good afternoon"],["good night"],
    ["how are you", "how is life", "how are things"],
    ["what are you doing", "what is going on", "what is up"],
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself"
    ],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what did you eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["no","not sure","maybe","no thanks"],
    [""],
    ["haha","ha","lol","hehe","funny","joke"]
  ]
  
  // Possible responses, in corresponding order
  
  var replies = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    ["good morning"], ["good afternoon"],["good night"],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],
    ["My name is ......"],
    ["Same here..."],
    ["Why?", "Why? You shouldn't!", "Try watching TV"],
    ["This site has really good section to read jokes"],  
    ["Bye", "Goodbye", "See you later"],
    ["Salad", "Pizza"],
    ["Bro!"],
    ["Great question"],
    ["That's ok","I understand","What do you want to talk about?"],
    ["Sorry didn't get you"],
    ["Haha!","Good one!"]
  ]
  
  // Random for any other user input
  
  var alternative = [
    "Same",
    "Go on...",
    "Sorry I don't understand :/",
    "Try again",
    "I'm listening..."    
  ]
  
  // any other responses for covid word found
  
  var coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I have COVID", "These are uncertain times",
                       "Need to take precautions"]

 
  var inputField = document.getElementById("input");


//get input on keyenter event
  var getevent = function(e)
  {   
      
    if (e.code === "Enter") 
    {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    } 

  };
  
  function output(input) {
    let product;
  
    // Regex remove non word/space chars
    // Trim trailing whitespce
      
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
      .replace(/ a /g, " ")   
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .replace(/r u/g, "are you");
  
    if (compare(prompts, replies, text)) { 
      // Search for exact match in `prompts`
      product = compare(prompts, replies, text);
    } else if (text.match(/thank/gi)) {
      product = "You're welcome!"
    } else if (text.match(/(corona|covid|virus)/gi)) {
      // If no match, check if message contains `coronavirus`
      product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    } else {
      // If all else fails: random alternative
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }
  
    // Update DOM
    addChat(input, product);
  }
  
  function compare(promptsArray, repliesArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < promptsArray.length; x++) {
      for (let y = 0; y < promptsArray[x].length; y++) {
        if (promptsArray[x][y] === string) {
          let replies = repliesArray[x];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          // Stop inner loop when input value matches prompts
          break;
        }
      }
      if (replyFound) {
        // Stop outer loop when reply is found instead of interating through the entire array
        break;
      }
    }
    return reply;
  }
  
  function addChat(input, product) {
    var messagesContainer = document.getElementById("messages");
  
    let user1Div = document.createElement("div");
    user1Div.id = "user";
    user1Div.className = "user response";
    user1Div.innerHTML = `<img src="./assets/images/user.png" class="userimg"><span>${input}</span>`;
    messagesContainer.appendChild(user1Div);
  
    let user2Div = document.createElement("div");
    let user2Img = document.createElement("img");
    let user2Text = document.createElement("span");
    user2Div.id = "user2";
    user2Div.className = "response";
    user2Img.src = "./assets/images/user1.png";
    user2Img.className = "userimg";   
    user2Text.className = "typing";
    user2Text.innerText = "Typing...";
    user2Div.appendChild(user2Text);
    user2Div.appendChild(user2Img);
    messagesContainer.appendChild(user2Div);
    
  
    // Fake delay to seem "real"
    setTimeout(() => {
      user2Text.innerText = `${product}`;    
    }, 2000
    )
  
  };

  inputField.addEventListener("keydown",getevent);