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

console.log(monthArray);
      // populating months drop down
let monthSelect = document.querySelector('#month')

for(m = 0; m <= 11; m++) {
    var optnM = document.createElement("OPTION");
    optnM.text = monthArray[m];
    optnM.value = (m+1);
    monthSelect.options.add(optnM);
}

var d = new Date();
d.getMonth() + 1;	
d.getDate();		
d.getFullYear();

printCalendar(d); 
// under function provided code/source code
function printCalendar(){

let selectedMonth = monthSelect.value
let selectedYear = document.querySelector("#year").value
const today = new Date(`${selectedMonth}/1/${selectedYear}`) //5/1/2021
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

document.getElementById("calendarDays").innerHTML = " "

let x
const weekday = today.getDay()
for (x = 0; x < weekday; x++) {
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
}
let dt = 0
do {
    dt++
    document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
} while (dt < days)
const monthName = today.toLocaleDateString('default', { month: 'long' })
const year = today.getFullYear()
document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`
const remainder = (7 - ((x + dt) % 7))
let y = 0
while (y < remainder) {
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    y++
}
}

var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    printCalendar(document.querySelector("#month").value, document.querySelector("#year").value)
}   
)