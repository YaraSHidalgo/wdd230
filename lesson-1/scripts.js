
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

// console.log year
const year = d.getFullYear()
const footer = document.getElementById('foot').innerHTML= console.log(`&copy, ${year} , .:|:. Yara Hidalgo .:|:. Utah `); 
// console.last modify
let nLastModif = Date.parse(document.lastModified);
const modify = document.getElementById('modification').innerHTML= console.log(nLastModif); 