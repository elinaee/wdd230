const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });


function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let parag = document.createElement('p');
    let parag1 = document.createElement('p');
  
    // Change the textContent property of the h2 element 
    //to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    //change the textContent property of the p element to contain 
    // the prophet's birthdate
    parag.textContent = `Date of birth: ${prophet.birthdate}`;

    //change the textContent property of the p element to contain 
    // the prophet's birthplace
    parag1.textContent = `Place of Birth: ${prophet.birthplace}`;
  
    // Build the image attributes by using the setAttribute 
    //method for the src, alt, and loading attribute values. 
    //(Fill in the blank with the appropriate variable).
    ____.setAttribute('src', prophet.imageurl);
    ____.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
    ____.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(parag);
    card.appendChild(parag1);
  
    // Add/append the existing HTML div with the cards class 
    //with the section(card)
    document.querySelector('div.cards').appendChild(card);
};

function ordinal(value){
    let str = String(value),
    len = str.length,
    end  = str.substring(len - 1, 1),
    bool = len > 1 && str.substring(len - 2, 1) === "1",
    dOrdinal = "th";
  if (end === "1" && !bool) {
    dOrdinal = "st";
  } else if (end === "2" && !bool) {
    dOrdinal = "nd";
  } else if (end === "3" && !bool) {
    dOrdinal = "rd";
  }
  return dOrdinal;
}