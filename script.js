const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        // cross icon 
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    // adding the data to the browsers local storage
    saveData()
}

listContainer.addEventListener("click", function(e){
    // if it is list mark it check
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    // if it is already checked then delete it
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false)

// storing the task in the browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    // save this immediately when u are adding task on top
}

// display the data when ever we open again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()








