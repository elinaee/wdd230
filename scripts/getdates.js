const options = { year: 'numeric'};
document.getElementById('date').textContent = new Date ().toLocaleDateString('en-US', options);

const dateTime = document.lastModified;
document.querySelector('#lastMod').textContent  = `Last Updated: ${dateTime}`;