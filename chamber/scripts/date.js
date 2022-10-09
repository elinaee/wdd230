// Date that goes on the footer
const options = {year: 'numeric'};
document.getElementById('date').textContent = new Date ().toLocaleDateString('en-US', options);

// Date that goes on the Header 
const dateTime = document.lastModified;
document.querySelector('#lastMod').textContent  = `Last Updated: ${dateTime}`;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);



datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


// For the Hamburger menu

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);