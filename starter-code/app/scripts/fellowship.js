console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1
function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
var middleEarth = document.create('section');
  // inside, add each land as an article tag
var land = document.create('article');
  // inside each article tag include an h1 with the name of the land
  land.innreHTML = '<h1>' + lands[i] + '</h1>';
  document.appendChild(land);
  // append middle-earth to your document body
  middleEarth.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var hobbits = document.createElement('ul');
  for (var i = 0; i < hobbits.length; i ++){
    var hobbit = document.createElement('li');
    hobbit.className = 'hobbit';
    hobbit.innerText = hobbits[i];
    hobbitList.appendChild(hobbits);
  }
  // give each hobbit a class of hobbit

}


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement('div');
  theRing.setAttribut('id'; 'the-ring');
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribut('class', 'magic-imbued-jewelry');
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener('click'; nazgulScreech);
  // add the ring as a child of Frodo
  frodo.appendChild(theRing);
}
keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement('aside');
  var buddies = document.createElement('ul');
  // attach an unordered list of the 'buddies' in the aside
  for (var i = 0; i < length.buddies; i ++){
    var buddy = document.createElement('li');
    buddy.textContent = buddies[i];
    buddy.appendChild(buddies);
  }

  // insert your aside as a child element of rivendell
  aside.appendChild(buddy);
  rivendell.appendChild(aside);
}

makeBuddies();
// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  Strider.textContent = "Aragorn";
}

beautifulStranger();
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
rivendell.appendChild(hobbits);

}

leaveTheShire();
// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var fellowship = document.createElement('div');
  fellowship.setAttribute('div', 'the-fellowship');
  // add each hobbit and buddy one at a time to 'the-fellowship'
  for (i = 0; i < fellowship.length; i ++) {

  }
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
