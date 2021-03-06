var jsonData ={};
var counter = 0;

function start() {
    readTextFile();
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("../../json/spacex.json", function(text) {
    jsonData = JSON.parse(text);
    console.log(jsonData);
    console.log(jsonData.facilities[0].name);
    fillAccordions();
});

function fillAccordions() {
    fillFacilitiesAccordion();
    fillVehiclesAccordion();
}

function fillFacilitiesAccordion() {
    counter = 0;
    jsonData.facilities.forEach(element => createFacilitiesAccordion(element));
}

function createFacilitiesAccordion(element) {
    parentElement = document.getElementById("facilitiesAccordion");
    accordionItem = document.createElement("div");
    accordionItem.className = "accordion-item";
    parentElement.appendChild(accordionItem);
    accordionHeader = document.createElement("h2");
    accordionHeader.className = "accordion-header";
    accordionHeader.id = "heading"+counter;
    accordionHeader.innerHTML = element.location;
    button = document.createElement("button");
    button.className = "accordion-button";
    button.type = "button";
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", "collapse"+counter);
    accordionHeader.appendChild(button);
    header = document.createElement("p");
    header.className = "accordion-button-text";
    header.innerHTML = element.name;
    accordionHeader.appendChild(header);
    collapse = document.createElement("div");
    collapse.id = "collapse"+counter;
    collapse.className = "accordion-collapse";
    collapse.className += "collapse";
    accordionItem.appendChild(collapse);
    body = document.createElement("div");
    body.className = "accordion-body";
    collapse.appendChild(body);
    body.innerHTML = element.description;
    counter++;
    test = document.createElement("h1");
}

function fillVehiclesAccordion() {
    counter = 0;
    jsonData.facilities.forEach(element => createVehiclesAccordion(element));
}

function createVehiclesAccordion(element) {
    parentElement = document.getElementById("vehiclesAccordion");
}



// adding html elements dynamically
// I need to parent this:
    // <div class="accordion-item">
    // <h2 class="accordion-header" id="headingOne">
    //   <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
    //     <p class="accordion-button-text">Vehicle #1</p>
    //   </button>
    // </h2>
    // <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#vehiclesAccordion">
    //   <div class="accordion-body">
    //     <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow.
    //   </div>
    // </div>
    // </div>
// to the div with an id of #vehiclesAccordion for launch vehicles and #facilitiesAccordion for facilities

// Methods:
//     creating the element: document.createElement("div");
//     appending the child: parentElement.appendChild(childElement);
//     change class name:
            // element.className = "class-name";
            // element.className += "class-name";
