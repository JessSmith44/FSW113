
const today = new Date('5-11-2021')
const month = today.getMonth()
let days
switch (month) {
    case 1:
        days = 28
        break
    case 3:
    case 5:
    case 8: 
    case 10:
        days = 30
        break
    default:
        days = 31
}
    
let x
const weekday = today.getDay()
for (x = 0; x < weekday; x++){
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
}

let dt = 0
do {
    dt++
    document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
} while ( dt < days)

const monthName = today.toLocaleDateString('default', {month:'long'})
const year = today.getFullYear()
document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`

const remainder = (7 - ((x + dt) % 7))
let y = 0
while ( y < remainder) {
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    y++
}


var d = new Date();
var monthArray = new Array();
monthArray[0] = "January";
monthArray[1] = "February";
monthArray[2] = "March";
monthArray[3] = "April";
monthArray[4] = "May";
monthArray[5] = "June";
monthArray[6] = "July";
monthArray[7] = "August";
monthArray[8] = "September";
monthArray[9] = "October";
monthArray[10] = "November";
monthArray[11] = "December";
for(m = 0; m <= 11; m++) {
    var optnM = document.createElement("OPTION");
    optnM.text = monthArray[m];
    optnM.value = (m+1);
   
    document.getElementById('month').options.add(optnM);
}

for(y = 2010; y <= 2050; y++) {
    var optnY = document.createElement("OPTION");
    optnY.text = y;
    optnY.value = y;
    
    document.getElementById('year').options.add(optnY);
}
document.querySelector("#calendarTitle").innerHTML = months[Date.getMonth()];
document.querySelector("#calendarTitle").innerHTML = date.toLocaleDateString();

var btn = document.getElementById("btn");
btn.onclick(
    
    printCalendar()
)
document.querySelector('calendarTitle')
title.append(optnM, optnY)

//Modify the JavaScript to populate the month select you create in the HTML page from an array of 
//month names. You can use either a for loop or an array.map to populate the select. remember that while 
//arrays start with zero, month numbers go from 1-12.

//Modify the JavaScript to run a function called printCalendar() when the user clicks the "Go" button.

//Modify the JavaScript to use the first day of the month the user selects in place of the const today. 