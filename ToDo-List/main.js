// const pushButton = document.querySelector('#push');
// const deleteButton = document.querySelector('#delete');
// const inputIn = document.querySelector('#inputIn');
// const tasks = document.querySelector('#tasks');

// pushButton.onclick = function () {
//     if (inputIn.value.length == 0) {
//         alert('Пожалуйста, запишите задачу!');
//     }

//     else {
//         tasks.innerHTML += `
//         <div class="task">
//             <div id="taskname">
//                 ${inputIn.value}
//             </div>
//             <button class="delete">
//                 X
//             </button>
//         </div>
//         `;

//         const currentTasks = document.querySelectorAll(".delete");
//         for (let i = 0; i < currentTasks.length; i++) {
//             currentTasks[i].onclick = function () {
//                 currentTasks[i].parentNode.remove();
//             }
//         }
//     }
// }

//Ver. 1.0
// deleteButton.onclick = function () {
//     const task = document.querySelectorAll('.task');
//     if (task.length == 0) {
//         alert('Ты кого хочешь наебать урод?')
//     }
//     else {
//         for (let i = 0; i < task.length; i++) {
//             task[i].remove();
//         }
//     }
// }

//Ver. 2.0
// deleteButton.onclick = function () {
//     const task = document.querySelectorAll('.task');

//     if (task.length == 0) {
//         alert('Ты кого хочешь наебать урод?')
//     }

//     else {
//         tasks.replaceChildren();
//     }

// }

const inputIn = document.querySelector('.inputIn');
const addBtn = document.querySelector('.push');
const deleteAll = document.querySelector('.deleteAll');
const tasks = document.querySelector('.tasks');

addBtn.onclick = function () {
    if (inputIn.value == 0) {
        alert('Введите задачу!');
    }
    else {
        tasks.innerHTML += `
        <div class="task">
        <div class="taskName">
            ${inputIn.value}
        </div>
        <button class="deleteTask">
            X
        </button>
    </div>
    `;
    }
    const currentTasks = document.querySelectorAll('.deleteTask');
    for (let i = 0; i < currentTasks.length; i++) {
        currentTasks[i].onclick = function () {
            currentTasks[i].parentNode.remove();
        }
    }
}

deleteAll.onclick = function () {
    const task = document.querySelectorAll('.task');

    if (task.length == 0) {
        alert('Нечего удалять!');
    }
    else {
        for (let i = 0; i < task.length; i++) {
            task[i].remove();
        }
    }
}