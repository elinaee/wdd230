const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


///
const api = "https://elinaee.github.io/wdd230/chamber/json/data.json",
businessCards = document.querySelector(".directory");

fetch(api)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const companies = jsonObject["company"]
        companies.forEach(displayCompanies);
    })  
function displayCompanies(company){
    let card = document.createElement('section');
    let name = document.createElement('h3')
    let logo = document.createElement('img');
    let contact = document.createElement('p')
    let address = document.createElement('p'); 
    let membershipLevel = document.createElement('p'); 
    let url = document.createElement('a'); 

    logo.setAttribute('src', `${company.imgDirectory}`);
    logo.setAttribute('alt', `${company.name} logo`);
    logo.setAttribute('loading', 'lazy'); 
    name.textContent = `${company.name}`;
    address.textContent = `${company.address}`;
    contact.textContent = `${company.contact}`;
    membershipLevel.textContent = `${company.membershipLevel}`;
    url.textContent = `Business Website`
    url.setAttribute("href", `${company.websiteurl}`);
    url.setAttribute('target', '_blank');

    card.appendChild(logo)
    card.appendChild(name)
    card.appendChild(address)
    card.appendChild(contact)
    card.appendChild(membershipLevel)
    card.appendChild(url)
