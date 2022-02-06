const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]
var ordersList = document.querySelector("#detailsList");

// list of each part number and qty for check-off in the "detailsList" element
//make for loop to assign checkbox and append

parts.forEach(myfunction);

function myfunction(item, index){
    var checkBoxes = document.createElement("input");
        checkBoxes.type = "checkbox";
        checkBoxes.id = "box" + index;
        ordersList.appendChild(checkBoxes);

    var boxLabel = document.createElement("label");
        boxLabel.setAttribute("for", "box" + index);
        boxLabel.innerHTML = `${item.qty} ${item.partNbr} ${item.partDescr} <br>`;
        ordersList.appendChild(boxLabel);
}

// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element

var specialBox = document.querySelector("#specialPackaging");
var handleWithCare = parts.filter(function(element, index) {
    return parts[index].aisle === "B3";
});

if (handleWithCare.length !== 0) {
    handleWithCare.forEach(function(element, index) {
        let specialList = document.createElement("p");
        specialList.textContent = `Item: ${handleWithCare[index].partNbr} / Qty: ${handleWithCare[index].qty}`;
        specialBox.appendChild(specialList);
    })
} else {
    specialPackaging.remove();
}


// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element

let hazardousMaterials = document.querySelector("#hazardousMaterials");
let hazardous = parts.some(function(element, index) {
    return parts[index].aisle === "J4";
})

if (hazardous !== true) {
    hazardousMaterials.remove();
} else {
    let noteOfCaution = document.createElement("p");
    noteOfCaution.textContent = "Gloves are required!";
    hazardousMaterials.appendChild(noteOfCaution);
}

// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1

let smallParts = document.querySelector("#smallItemsOnly");
let smallItems = parts.every(function(element, index) {
    return parts[index].aisle === "H1";
})
if (smallItems !== true) {
    smallParts.remove();
} else {
    let smallPartsInfo = document.createElement("p");
    smallPartsInfo.textContent = "Small items: take a basket and go directly to asile H1";
    smallParts.appendChild(smallPartsInfo);
}

// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element

let forkLiftNeeded = document.querySelector("#forkLiftNeeded");
let largeParts = parts.find(function(element, index) {
    return parts[index].aisle === "S" || parts[index].aisle === "T" || parts[index].aisle === "U";
})
if (largeParts === undefined) {

} else {
    let forkliftNote = document.createElement("p");
    forkliftNote.textContent = "Large items: Forklift required!";
    largeParts.appendChild(forkliftNote);
}

// sum up the total number of parts and append that number to the text already in "totalItems" element
// document.getElementById("totalItems").innerHTML = parts.reduce();
let total = parts.reduce((total, part) => total + part.qty, 0);
document.querySelector('#totalItems').textContent += ': ' + total;