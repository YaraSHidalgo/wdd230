// const date1 = document.querySelector("#date1");
//const message = document.querySelector("#emessage");


// Long hand method ... building day and month names from built-in date methods.
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
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
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;


const year = d.getFullYear().document.querySelector('footer').innerHTML = `&copy, ${year} , .:|:. Yara Hidalgo .:|:. Utah `;
console.log(year);

const currentYear = new Date().getFullYear();

// Set the content of the footer element
//const footer = document.querySelector("#footer");
//footer.innerHTML = "&copy; " + currentYear + " .:|:. Yara Hidalgo .:|:. Utah";
let nLastModif = Date.parse(document.lastModified);
let modify = document.getElementById('modification').innerHTML= console.log(nLastModif); 