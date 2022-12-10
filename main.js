const listTodo = [];
const listDone = [];

document.getElementById("addItem").onclick = () => {
    let task = document.getElementById("newTask").value;
    if (task === "") {
        alert("Không để trống");
     
    } else {
        listTodo.push(task);
        renderHTML(listTodo, "todo", 1);
    }
    document.getElementById("newTask").value="";
};


const renderHTML = (data, ID, key) => {
    let content = "";
    if (data) {
        switch (key) {
            case 1:
                data.forEach((task, index) => {
                    content += `<li>${task} <div><i onclick="deLete('${index}')" class="fa fa-trash-alt"></i><i onclick="done('${index}')" class="fa fa-check-circle"></i></div></li>`
                });
                break;
            case 2:
                data.forEach((task, index) => {
                    content += `<li>${task} <div><i onclick="deLete1('${index}')" class="fa fa-trash-alt"></i><i class="fa fa-check-circle"></i></div></li>`
                });
                break;

        }
    };
    document.getElementById(ID).innerHTML = content;
};

window.done = done;
function done(id) {
    listDone.push(listTodo[id]);
    listTodo.splice(id, 1);
    renderHTML(listTodo, "todo", 1);
    renderHTML(listDone, "completed", 2);
};

window.deLete = deLete;
function deLete(id) {
    listTodo.splice(id, 1);
    renderHTML(listTodo, "todo", 1);
};
window.deLete1 = deLete1;
function deLete1(id) {
    listDone.splice(id, 1);
    renderHTML(listDone, "completed", 2);
};

document.getElementById("two").onclick = () => {
    let arrangeAZ = listTodo.sort((task, nexttask) => {
        let tasK = task.toLowerCase();
        let nextTask = nexttask.toLowerCase();
        if (tasK < nextTask) {
            return -1;
        }
        if (tasK > nextTask) {
            return 1;
        }
        return 0;
    });
    let arrange1AZ = listDone.sort((task, nexttask) => {
        let tasK = task.toLowerCase();
        let nextTask = nexttask.toLowerCase();
        if (tasK < nextTask) {
            return -1;
        }
        if (tasK > nextTask) {
            return 1;
        }
        return 0;
    });
    renderHTML(arrangeAZ, "todo", 1)
    renderHTML(arrange1AZ, "completed", 2)
};

document.getElementById("three").onclick = () => {
    let arrangeZA = listTodo.sort((task, nexttask) => {
        let tasK = task.toLowerCase();
        let nextTask = nexttask.toLowerCase();
        if (tasK < nextTask) {
            return 1;
        }
        if (tasK > nextTask) {
            return -1;
        }
        return 0;
    });
    let arrange1ZA = listDone.sort((task, nexttask) => {
        let tasK = task.toLowerCase();
        let nextTask = nexttask.toLowerCase();
        if (tasK < nextTask) {
            return 1;
        }
        if (tasK > nextTask) {
            return -1;
        }
        return 0;
    });
    renderHTML(arrangeZA, "todo", 1)
    renderHTML(arrange1ZA, "completed", 2)
};

document.getElementById("one").onclick=()=>{
   document.getElementById("todo").style.display="none";
   document.getElementById("completed").style.display="block";
};
document.getElementById("all").onclick=()=>{
    document.getElementById("todo").style.display="block";
    document.getElementById("completed").style.display="block";
 };
