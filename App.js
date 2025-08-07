//========= Here I am creating the elements using the DOM ========

//==== The first element I want to create is the h1 element
let theHeading = document.createElement("h1");
theHeading.innerText = "My TODO List";
theHeading.style.textAlign = "center";
theHeading.style.fontFamily = "Arial, sans-serif";
theHeading.style.color = "#3b2f2f";
theHeading.style.textShadow = "2px 2px #e5d5c3";
document.body.prepend(theHeading);

//====Now I am creating the element that will display the text about DOM ===
let theTextHolder = document.createElement("div");

theTextHolder.innerHTML =
  "<h2 style='text-align:center; color:#4c3a2b;'>Add a Task Below</h2>" +
  "<div style='display:flex; justify-content:center; align-items:center; flex-wrap:wrap; gap:10px;'>" +
  "<input type='text' id='taskInput' placeholder='Enter Here'>" +
  "<button id='submitBtn'>Add Task</button>" +
  "</div>" +
  "<div id='errorSpot' style='text-align:center;'></div>";

//=== Here I am creating a button ======                     
let subBtn = theTextHolder.querySelector("#submitBtn");
subBtn.onclick = addTask;

//==== Appending to the main container
document.getElementById("root").appendChild(theTextHolder);

//===== The following code is for the function that takes place when you press the 
//====== add button=
let userInputs = []; // My array here will receive the users inputs ====
let theList = document.createElement("ul");
theList.style.listStyleType = "none";
theList.style.padding = "0";
theList.style.marginTop = "20px";
document.getElementById("root").appendChild(theList);

function addTask() {
  let usersTask = document.getElementById("taskInput").value.trim();
  let errorSpot = document.getElementById("errorSpot");

  if (usersTask !== "") {
    errorSpot.innerHTML = "";
    userInputs.push(usersTask);

    let theItem = document.createElement("li");
    let btnID = userInputs.length;

    theItem.style.display = "flex";
    theItem.style.justifyContent = "space-between";
    theItem.style.alignItems = "center";
    theItem.style.padding = "10px";
    theItem.style.margin = "8px 0";
    theItem.style.backgroundColor = "#f8e6d2";
    theItem.style.borderRadius = "10px";
    theItem.style.boxShadow = "1px 1px 5px rgba(0,0,0,0.1)";

    theItem.innerHTML = `
      <span style="flex:1; padding-left:10px;">${usersTask}</span>
      <input type='checkbox' style='transform: scale(1.3); margin-right: 10px;'>
      <button id='del${btnID}' style='padding: 5px 10px; background-color: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer;'>Delete</button>
    `;

    theItem.querySelector("button").onclick = function () {
      theItem.remove();
    };

    theList.appendChild(theItem);
    document.getElementById("taskInput").value = "";

  } else {
    errorSpot.style.color = "red";
    errorSpot.innerHTML = "Task Required...!!!";
  }
}

//============= Below is the style of my elements ==============

//=== Styling the body below ===
document.body.style = `
  background: linear-gradient(135deg, #dbc6b4, #e8d1bc);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;
//======= Here I am styling my heading ====
theHeading.style=`margin-top:200px;`;

//=== styling the main element below ======
let root = document.getElementById("root");
root.style = `
  background-color: #d3ac8b;
  padding: 30px;
  width: 520px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  border: 2px solid #b58b67;
  
`;

// Styling the <p> container
theTextHolder.style.color = "rgba(100, 100, 85, 1)";
theTextHolder.style.marginBottom = "20px";

// Styling the input field
let inputField = document.getElementById("taskInput");
inputField.style = `
  width: 300px;
  height: 35px;
  border-radius: 7px;
  padding: 5px 10px;
  font-size: 16px;
  background-color: rgba(212, 188, 168, 1);
  border: 1px solid rgba(219, 195, 174, 1);
  color: black;
`;

// Styling the Add Task button
subBtn.style = `
  height: 36px;
  padding: 0 15px;
  background-color: rgba(219, 151, 96, 1);
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

subBtn.onmouseover = function () {
  subBtn.style.backgroundColor = "#c97e3c";
};
subBtn.onmouseout = function () {
  subBtn.style.backgroundColor = "rgba(219, 151, 96, 1)";
};

// Extra: Footer decoration (optional)
document.querySelector("footer").innerHTML = "<p style='text-align:center; color:#7a5f4d; margin-top:20px;'>DOM To-Do App © 2025</p>";
