// ------------------------------------------------------------------------------
// valiables declaration
// ------------------------------------------------------------------------------
let taskList = []; // tasks
let taskListCopy = []; // deep copy for task list
let newTask = {}; // user's new task

// ------------------------------------------------------------------------------
// add a task to list
// ------------------------------------------------------------------------------
function addTask(event) {

    let taskItem = document.getElementById('taskItem');
    event.preventDefault();

    if (taskItem.value.length > 0) {

        if (newTask.completionDate !== "") {
            // check if there are same task
            if (checkTask(taskItem.value)) {

                newTask.title = taskItem.value;
                // We are creating a new object with a new memory
                let modifiedTask = JSON.parse(JSON.stringify(newTask));
                // We will push object now
                taskList.push(modifiedTask);
                taskListCopy = JSON.parse(JSON.stringify(taskList));
                taskItem.value = "";
                showList();
            } else {
                alert("You cannot add a similar task which you've aleady added");
            }
        } else {
            alert("Please select a date!");
        }
    } else {
        alert("Please enter a value, to add!");
    }

}

// ------------------------------------------------------------------------------
// add the selected priority to an object
// ------------------------------------------------------------------------------
function selectPriority(event) {
    newTask.priority = event.target.value;
}

// ------------------------------------------------------------------------------
// add elements of the tasklist to html
// ------------------------------------------------------------------------------
function showList() {
    let listContainer = document.getElementById('list');
    listContainer.innerHTML = ""; // DELETE THE PREVIOUS HTML BEFORE which was there
    for (let i = 0; i < taskList.length; i++) {
        let listItem = document.createElement('li');

        if (taskList[i].priority === "low") {
            listItem.classList.add("low");
        } else if (taskList[i].priority === "medium") {
            listItem.classList.add("medium");
        } else {
            listItem.classList.add("high");
        }

        // a priority of the task
        let taskPriority = document.createElement('h3');
        taskPriority.setAttribute("class", `priority-${taskList[i].priority}`);
        taskPriority.textContent = taskList[i].priority;
        listItem.appendChild(taskPriority);

        // a title of the task
        let taskTitle = document.createElement("p");
        listItem.setAttribute("id", modifyTitle(taskList[i].title)); // add id to the list item
        taskTitle.textContent = taskList[i].title;
        listItem.appendChild(taskTitle);

        // a date of the task
        let taskDate = document.createElement('h4');
        taskDate.textContent = taskList[i].completionDate;
        listItem.appendChild(taskDate);
        listContainer.appendChild(listItem);
    }
}

// ------------------------------------------------------------------------------
// set the selected date
// ------------------------------------------------------------------------------
function setDate(event) {
    newTask.completionDate = event.target.value;
}

// ------------------------------------------------------------------------------
// search tasks by title
// ------------------------------------------------------------------------------
function searchTasks() {
    let searchKeyword = document.getElementById('search-input');

    taskList = taskListCopy; // Revise the taskList to the orignal Array

    let modifiedTaskList = taskList.filter((task) => {
        if (task.title.includes(searchKeyword.value)) {
            return true;
        }
    })

    taskList = modifiedTaskList;

    showList();
}
// ------------------------------------------------------------------------------
// remove spaces and change to lower cases
// ------------------------------------------------------------------------------
function modifyTitle(title) {
    return title.split(' ').join('').toLowerCase();
}

// ------------------------------------------------------------------------------
// check if there is a similar task (title)
// ------------------------------------------------------------------------------
function checkTask(value) {
    const modfiedValue = modifyTitle(value);

    for (let i = 0; i < taskList.length; i++) {
        if (modfiedValue === modifyTitle(taskList[i].title)) {
            return false;
        }
    }

    return true;
}

// Scope for tomorrow
// Don't allow to add similar tasks
// also add a priority list and show the UI based on that
// Complete a task
// Deploy IT

// Your assignment is to make the application better in UI
// You have to improve or generalize common code
// Whosoever does the best changes by monday
// I will continue on their applicaiton and we will learn drag and drop event
