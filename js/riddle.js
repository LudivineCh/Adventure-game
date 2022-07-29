
// Select the paragraph where the quote will go
let divQuote = document.querySelector('#quote')
    
// if aztec button is clicked then display a aztec quotes
let aztecButton = document.getElementById('aztec-button')
aztecButton.addEventListener("click", () => {
// Display the quote in the paragraph below the picture of Omeotl    
    divQuote.innerHTML = `
        <div class="quote">
            <p> ${aztecQuote()} </p>
        </div>  `  
    });
// if webdev button is clicked then display a web dev quotes
let webdevButton = document.getElementById('webdev-button')
webdevButton.addEventListener("click", () => {
    // Display the quote in the paragraph below the picture of Omeotl    
    divQuote.innerHTML = `
        <div class="quote">
            <p> ${webdevQuote()} </p>
        </div>  `  
    });   


function aztecQuote() {
    // Get a random number: 0, 1, 2, 3, 4 (5 is excluded)
    let quoteReference = Math.floor(Math.random() *5) ;
    // Create the variable for the quote
    let aztecQuote = ``;
    // Select a quote depending on the random number(quoteReference)
    switch (quoteReference) {
        case 0:
            aztecQuote = "I love the song of the mockingbird,<br>Bird of four hundred voices,<br>I love the color of jade <br> And the intoxicating scent of flowers,<br>But more than all I love my brother, man.<br> ― Nezahualcóyotl.";
            break;
        case 1:
            aztecQuote = "We will pass away. I, Nezahualcoyotl, say, enjoy! <br> Do we really live on earth? Ohuaya, ohuaya.<br>Not forever on earth, only a brief time here!<br>Even jades fracture; even gold ruptures, even quetzal plumes tear:<br>Not forever on earth: only a brief time here! Ohuaya, ohuaya.<br> ― Nezahualcóyotl.";
            break;
        case 2:
            aztecQuote = "O friends, to a good place we've come to live,<br> come in springtime! <br> In that place a very brief moment! So brief is life!<br> ― Nezahualcóyotl.";
            break;
        case 3:
            aztecQuote = "The pleasures and riches of this life are but loaned,<br> their substance is vain, their appearance illusory;<br> and so true is this that I ask thee for an answer to these questions: <br> What has become of Cihuapan? Of the brave Quantzintecomatzin? <br> Of Conahuatzin? What of all these people? <br>Perhaps these very words have already passed into another life. <br> Would that we who are now united by the ties of love and friendship <br>could foresee the sharp edge of death, for nothing is certain, <br>and the future ever brings changes.<br> ― Nezahualcóyotl.";
            break;
        case 4:
            aztecQuote = "The world needs balance to exist. <br>Light and darkness, creation and destruction, femininity and masculinity, <br>order and chaos, light and darkness, good and evil...<br> If one is missing from the other, <br> the pillars that form existence shall crumble <br>and the end shall finally arrive for even the deathless gods. <br> ― Ōmeteōtl.";
            break;
        }
    return aztecQuote;
}

function webdevQuote() {
    // Get a random number: 0, 1, 2, 3, 4 (5 is excluded)
    let quoteReference = Math.floor(Math.random() *5) ;
    // Create the variable for the quote
    let webdevQuote = ``;
    // Select a quote depending on the random number(quoteReference)
    switch (quoteReference) {
        case 0:
            webdevQuote = "We don't just build websites, we build websites that SELLS. <br> ― Christopher Dayagdag";
            break;
        case 1:
            webdevQuote = "Website without visitors is like a ship lost in the horizon. <br> ― Christopher Dayagdag";
            break;
        case 2:
            webdevQuote = "Your website is the center of your digital eco-system,<br> like a brick and mortar location, <br> the experience matters once a customer enters, <br>just as much as the perception they have of you  <br>before they walk through the door. <br> ― Leland Dieno";
            break;
        case 3:
            webdevQuote = "Code is read more than it is written. <br> ― Daniel Roy Greenfeld & Audrey Roy Greenfeld";
            break;
        case 4:
            webdevQuote = "Web development is difficult, only then it is fun to do.<br> You just have to set your standards. <br> If it were to be easy, would anyone do it? <br> ― Olawale Daniel";
            break;
        }
    return webdevQuote;
}