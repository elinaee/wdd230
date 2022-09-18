document.addEventListener('DOMContentLoaded', function(){
    const year = document.querySelector('#year');

    function date() {
       year.innerHTML = new Date().getFullYear();
    };

    date();
}

// *********************************************

let dayname = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];

let months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = dayName +", " + monthName + " " + d.getDate() + ", " + d.getFullYear();

document.getElementById("currentdate").textcontent = fulldate;