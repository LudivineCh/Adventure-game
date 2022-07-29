//STORY CONTENT

// A function so we can pass the name as an argument
function readStory(nameInput, currentChapter) { 
  //return our main object (story with infos for each chapter)
  return {
    currentChapter: `${currentChapter}`,
    chapterOne: {
      title: `Chapter 1: ${nameInput} is brave`,
      storyText: "Oh , you definitely are a brave human, Quetzalcoatl would be so proud of its child. <br><br> As his father, I need to make sure you are worthy of this quest as it will require not only bravery but also knowledge on Aztec Mythology and Web Dev. <br><br> My first question is related to Aztec Mythology : Quetzalcoatl’ name is the combination of two animals. Looking at the picture of my mighty son, which animals do you think they are ?", 
      image :"quetzalcoatl-mexicain-azteque.webp",
      buttonText: "Submit your choice",
      // choices: list of objects
      choices: [
        {
          choice: "A bird and a snake",
          goChapter: "chapterTwo" 
        },
        {
          choice: "A sea horse and a porcuppine",
          goChapter: "errChap1" 
        }
      ]
    },
    errChap1: {
      title: "Origin Error",
      storyText: "You failed. <br><br> Quetzalcoatl’s name is a combination of the Nahuatl words quetzal (the emerald plumed bird), and coatl (snake).", 
      image :"nameorigin.png",
      defaultChapter: 'chapterOne',
      buttonText: "Let's try again"
    },
    chapterTwo: {
      title: `Chapter 2: ${nameInput} knows Aztec Mythology`,
      storyText: "Well done! This resplendent Quetzal will accompany you, this bird might come handy in difficult time. <br><br> My second question is related to Web Dev. Quetzalcoatl is part of the « god-of-learning » CLASS. <br><br> Why would it be a disaster for humans if Quetzalcoatl were to die ?", 

      image :"quetzal.jpg",
      buttonText: "Submit your choice",
      choices: [
        {
          choice: "Because you would be getting the inheritance!",
          goChapter: "errChap2" 
        },
        {
          choice: "Because you wouldn’t be getting the inheritance!",
          goChapter: "chapterThree" 
        }
      ]
    },
    errChap2: {
      title: "Inherited error",
      storyText: "You failed. Quetzalcoat is the parent of mankind, so each human is considered as its child. Inheritance allows us to define a child class (human) that inherits all the methods and properties from the parent class (Quetzalcoat).  <br><br> So if Quetzalcoat were to die, Humans would not be getting inheritance and would loose all knowledge related to its deity class : learning, science, agriculture, crafts and the arts.", 
      image :"inheritance.png",
      defaultChapter: 'chapterTwo',
      buttonText: "Let's try again"
    },
    chapterThree: {
      title: `Chapter 3: ${nameInput} is the Chosen One`,
      storyText: `${nameInput}, you are the chosen one ! <br> If someone can save Quetzalcoatl, it's you ! <br><br>
      To find the secret temple, wait for the first ray of the sun and head up the Arrai River until you see a Red Giant Ant. <br> <br>What method do you use to locate the Red Giant Ant along the Arrai River?`, 
      image :"archangels-kukulcan.jpg",
      buttonText: "Submit your choice",
      choices: [
        {
          choice: "Array.prototype.indexOf()",
          goChapter: "chapterFour" 
        },
        {
          choice: "Array.prototype.includes()",
          goChapter: "errChap3" 
        }
      ]
    },
    errChap3: {
      title: "Error Method",
      storyText: "You use the method Array.prototype.includes(), and find out that indeed there is a Red Giant Ant along the River. <br><br> Unfortunately, you do not know where it is located, so you keep walking until a scourge of mosquitoes bite you everywhere. The respledent Quetzal comes to your rescue so you could flee all the way back home.", 
      image :"include.png",
      defaultChapter: 'chapterThree',
      buttonText: "Let's try again"
    },
    chapterFour: {
      title: "Chapter 4 : The temple",
      storyText: "You use the method Array.prototype.includes(), walked 4 kilometers along the river and finally find the Red Giant. <br> <br> The Red Giant leads you to the temple. The door of the temple is closed and no matter how hard you push it, it won’t open. You’re exhausted, hot and sweaty. <br> <br> What do you do ?",
      image :"indexof.png", 
      buttonText: "Submit your choice",
      choices: [
        {
          choice: "Sleep, and see what happpens in the morning.",
          goChapter: "errChap4" 
        },
        {
          choice: "Persevere to see if you are missing something. ",
          goChapter: "chapterFive" 
        }
      ]
    },
    errChap4: {
      title: "Error Procedure",
      storyText: "You decide to wait until morning and seek refuge at the entrance of the temple. During the night, a jaguar comes near you. The loud strident 'tchik tchik' of the Quetzal bird wakes you up, and warn you about the danger. You flee all the way back home.", 
      image :"jaguar.jpg",
      defaultChapter: 'chapterOne',
      buttonText: "Let's try again"
    },
    chapterFive: {
      title: "Chapter 5: Break the Code",
      storyText: "You look every inch of the door and walls. Eventually, you find a weird shape on the wall with dust on it. You remove the dust which reveals the code to open the door. <br> <br> Well done ! <br> <br> It is written : to open the doors you must pair all the cards. <br> <br> Quetzalcoatl is getting weaker! hurry up !!", 
      image :"code.jpg",
      buttonText: "Break the Code"
    },
    chapterSix: {
      title: "Chapter 6: Enter the temple",
      storyText: `Well done ${sessionStorage.getItem('hero')}, you broke the code ! <br> <br> The door opens slowly. Before you walked in, the resplendent Quetzal warned you about the potential enemy you could meet, especially one :  <br> <br> Tlāloc, one of the god of Rain has plenty reasons to seek revenge on the Quetzalcoatl’s family as Quetzalcoatl's brother, Tezcatlipoca, seduced Tlāloc’s wife , Xōchiquetzal.<br> <br> It seems liks Gods have the same problems as humans ! <br> <br> Anyway, as soon as you are ready to enter the temple, just go.`, 
      image :"eddy-taylor-aztectemple.jpg",
      defaultChapter: 'chapterSeven',
      buttonText: "Enter the temple"
    },
    chapterSeven: {
      title: "Chapter 7: Open the right door or perish",
      storyText: "After walking for hours inside the labyrinth of this Aztec Temple, you entered a perfectly square room with three doors. The resplendent Quetzal feels great danger behind all of those doors. Anyway, only one will lead you to Quetzalcoatl. <br> <br> Which door should you open to avoid TRUE danger ?", 
      image :"three_doors.png",
      buttonText: "Enter the door",
      choices: [
        {
            choice: "Door A",
            goChapter: "errChap7" 
        },
        {
            choice: "Door B",
            goChapter: "errChap7" 
        },
        {
            choice: "Door C",
            goChapter: "chapterEight" 
          }
      ]
    },
    errChap7: {
      title: "True statement",
      storyText: "You failed, and fall into an infinite loop that brings you back in front of the door. <br> You should definitely work on your Javascript.", 
      image :"main-qimg-41585198bc6b9576738e54b02b008860-lq.jfif",
      defaultChapter: 'chapterSeven',
      buttonText: "Let's try again"
    },
    chapterEight: {
      title: "Chapter Eight: The fight behind the Door",
      storyText: `Well done ${sessionStorage.getItem('hero')} ! The door open into a huge room. You can see Quetzacoatl lying on a golden tree. He is way smaller that you expected, and look so weak.<br><br>Suddently, a jaguar jump down from the golden tree and look at you right in the face. Is he a friend of Quetzacoatl ? an ennemy ? <br><br>From the shrill alarm calls made by the respledent Quetzal you understand that it is time to fight.<br> What weapon do you choose?`, 
      image :"jaguar.jpg",
      buttonText: "Submit your choice",
      choices: [
        {
          choice: "A poisoned bow and arrow",
          goChapter: "errChap8" 
        },
        {
          choice: "A bamboo spear",
          goChapter: "chapterNine" 
        }
      ]
    },
    errChap8: {
      title: "Type Error",
      storyText: "You choose the poisoned bow and arrow: a skill weapon, that is not very easy to use at short distance. You throw an arrow, and completely missed the jaguar. <br> <br> The resplendent bird uses his magic to get back in time, and you end up in front of the three closed doors.", 
      image :"gioele-fazzeri-dj_DVO6OeZA-unsplash.jpg",
      defaultChapter: 'chapterSeven',
      buttonText: "Let's try again"
    },
    chapterNine: {
      title: "Chapter Nine: The Golden Tree",
      storyText: `Well done ${sessionStorage.getItem('hero')}, You throw the bamboo spear right into the jaguar’s head. The jaguar falls in the floor and starts to burn. The ashes floats in the air into the shape of a human wearing a feathered skull, and a jaguar cape. The dark smoking shape whispers : 'I, Tezcatlipoca, will come back stronger' and then disappears into thin air. So, it was Quetzalcoatl’s brother behind all of this...<br><br> You walk closer to the golden tree, the weaked snake speacks : 'I, Quetzacoatl, need to feed on the magical fruits of the golden tree to survive. Unfortunately, I am too weak to see them. Please, guide me to them...'. <br><br> The golden tree is growing on waters, as you come closer you noticed that there is no fruit on the branches. You look down and see the fruits growing on the roots.<br><br>  Are you ready to throw Quetzacoatl into the mystical waters ?`, 
      image :"Davide-scalia-tezcatlipoca-character-design.webp",
      buttonText: "Let's throw Quetzacoatl into the mystical waters"
    } 
  }
}


// LOGIC

// declare the object : story
let story;
// Select the start button
let button = document.querySelector('#start-button')
// get the info inside div content (h2, input, label, button)
let divContent = document.querySelector('#content')
// After hero broke the code of the memory game: goes straight to chapterSix
if (window.sessionStorage.getItem('memory') === 'passed') {
  // Immediately Involked Function Expression
  (function (){
    // Fill up our object "story" with content
    let nameHero = window.sessionStorage.getItem('hero');
    story = readStory(nameHero.value, "chapterSix");
    // call function to move to another chapter
    nextChapter();
  })(); 
} else {
  // If start button is clicked, apply function
  button.addEventListener('click', function() {
    // Get the text inside the start button field
    let nameInput = document.querySelector('#name-input');
    //If the person forget to write his name :
    if (nameInput.value == "") {
      alert("Please, tell us your beautiful name");
      return;
    } else {
        // store hero name
        window.sessionStorage.setItem('hero', nameInput.value);
        // Fill up our object "story" with content
        story = readStory(nameInput.value, "chapterOne");
        // call function to move to another chapter
        nextChapter();
      }
    })
}


//Function that updates the page of each chapter
function nextChapter() {
  // innerHTML > Change what's inside the div content of each chapter
  divContent.innerHTML = `
  <div class="content">
    <h2> ${story[story.currentChapter].title} </h2>
    <div class="container-1"> 
      <div class="container-1a">
        <p> ${story[story.currentChapter].storyText} </p>
      </div>
      <div class="container-1b">    
        <img src="img/adventure/${story[story.currentChapter].image}">
      </div>
    </div>  
    <div class="container-2">
      ${displayChoices()}
    </div>
    <div class="container-3">
      ${displayButton()}
    </div>
  </div>
  `
  // when the hero click on the button to submit his/her choice, call function getChoice
  // This allows to take into account the choice once the hero has clicked the submit button
  let button = document.querySelector("#submit-button");
  button.addEventListener('click', function() {
    getChoice()
  })
}


// Function that displays the choices according to the chapter
function displayChoices() {
  let contentChoice = "" // empty string
  // If there is no choice, return an empty string
  if (!story[story.currentChapter].choices){
    return ""
  }
  // loop through the number of choices ( we could have any numbers of choices)
  for(let i = 0; i < story[story.currentChapter].choices.length; i++) {
    // adding inside choices (no replacement)
    contentChoice += `
    <div>
      <input id = "radio${i}" type = "radio" name = "choices"/>
      <label for "radio${i}"> ${story[story.currentChapter].choices[i].choice} </label>
    </div>`
  }
  return contentChoice;
}


// Function that displays the right button
function displayButton() {
  let buttonChoice = "";
  // if chapterFive then the button need to launch the memory game, otherwise a button that display the button text.
  if (story[story.currentChapter].title === "Chapter Nine: The Golden Tree") {
    buttonChoice = `
    <div>
      <a href="snakegame.html" id = "memory-button" class="button">${story[story.currentChapter].buttonText}</a>
    </div>`
  } else if (story[story.currentChapter].title === "Chapter 5: Break the Code") {
    buttonChoice = `
    <div>
      <a href="memory.html" id = "memory-button" class="button">${story[story.currentChapter].buttonText}</a>
    </div>`
  } else {
    buttonChoice = `
    <div>
      <button class = "button" id = "submit-button"> ${story[story.currentChapter].buttonText} </button>
    </div>`
  }
  return buttonChoice;
}


// Function that checks which choice has been checked and then calls the function nextChapter.
function getChoice() {
  // variable that select all the button with the type radio/ ie all the possible choices
  let listChoices = document.querySelectorAll('input[type="radio"]');

  // Loop through each button
    for (let i = 0; i < listChoices.length; i++) {
      // if a button is checked, go to the next chapter related to the choice
      if (listChoices[i].checked) {
        story.currentChapter = story[story.currentChapter].choices[i].goChapter
        // Move to the next chapter
        nextChapter();
        // do not continue to read the rest of the function
        return;
      }
    }
  // When there is no choice in the list !
  // in case of a wrong choice, then hero need to try again
  if (story[story.currentChapter].defaultChapter) {
    story.currentChapter = story[story.currentChapter].defaultChapter
    nextChapter();
  } else {
    // in case the hero did not click any choice :
    alert("Please my friend, make a choice.");
  }
}
