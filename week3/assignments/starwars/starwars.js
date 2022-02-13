// declare any necessary variables
let query;
let item;

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'
function fetchData(){
    query = document.querySelector("#queryType").value;
    item = document.querySelector("#itemID").value;
    getFromSWAPI(query, item);
};

function getFromSWAPI() {
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${query}/${item}`)
    .then(response => response.json())
    .then(data => updateInfo(data))
    .catch(err => console.warn(err))
}

// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.

function updateInfo(data) {
    const keys = Object.keys(data);
    document.querySelector("#dataLabel1").innerText = keys[0];
    document.querySelector("#dataValue1").innerText = data[keys[0]];
    document.querySelector("#dataLabel2").innerText = keys[5];
    document.querySelector("#dataValue2").innerText = data[keys[5]];
};
//check each letter //look for missing ; . () {}