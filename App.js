// All your DOM manipulation must happen here.
// You will create and inject all elements into <main id="root"> using JavaScript only.

//========= Here I am creating the elements using the DOM ========
//==== The first element I want to create is the h1 element
let theHeading = document.createElement("h1");
document.body.appendChild(theHeading);

//====Now I am creating the element that will display the text about DOM ===
let theTextHolder = document.createElement("p");

theTextHolder.innerHTML = "<h1>Welcome to DOM Lessons</h1>"+
                           "<h2>Add a tASK Below</h2>"+
                           "<input type='text' id='taskInput' placeholder= 'Enter Here'><br>"+
                           "<span id='errorSpot'></span>";

//=== Here I am creating a button ======                     
let subBtn = document.createElement("button");
subBtn.innerText= "Add Task";
subBtn.onclick = addTask;
        
                                       
document.getElementById("root").appendChild(theTextHolder);
document.getElementById("root").appendChild(subBtn);     

//===== The following code is for the function that takes place when you press the 
//====== add button=

let userInputs = [];// My array here will receive the users inputs ====
let theList = document.createElement("ul");
document.getElementById("root").appendChild(theList);

function addTask() {
    let usersTask = document.getElementById("taskInput").value;
    let errorSpot = document.getElementById("errorSpot");

    if(usersTask !== "") {
        errorSpot.innerHTML = "";
        userInputs.push(usersTask);
        let theItem = document.createElement("li");
        let btnID = userInputs.length;
        theItem.innerHTML = `
            ${usersTask} 
            <input type='checkbox'>
            <button id='del${btnID}'>Delete</button>
        `;
        theItem.querySelector("button").onclick = function() {
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
document.body.style = "background-color: rgba(219, 198, 180, 1);";

//=== styling the main element below ======
document.getElementById("root").style = "background-color: rgba(211, 172, 139, 1);"+
                                        " width: 500px; margin-bottom: 20px;"+
                                         "border-radius: 20px; font-size:20px";
 theTextHolder.style.color = "rgba(100, 100, 85, 1)";
 document.getElementById("taskInput").style= "width: 300px; height: 30px; border-radius: 7px;"+
                           "margin-left: 20px; background-color: rgba(212, 188, 168, 1);"+
                           "border-color:rgba(219, 195, 174, 1);color: black; font-size: 17px";
 subBtn.style= "width: 120px; height: 30px; background-color: rgba(219, 151, 96, 1);"+
               " border-color: rgba(216, 171, 135, 1); margin-left: 20px;";

