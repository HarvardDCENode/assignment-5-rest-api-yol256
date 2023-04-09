var container = document.querySelector('.container');

// Fetches all tasks from the database through the rest api
var tasks = fetch('/tasks')
            .then(res => res.json())
            .then(res =>  renderTasks(res.tasks))
            .catch(err => console.log(err));

// Renders all tasks to the page
function renderTasks(tasks) {
    tasks.forEach(task => {
        var {description, completed, date, _id, time} = task;
        container.innerHTML = `
        <div class="task ${completed ? 'complete' : ''}">
            <p id="description">${description}</p>
            <p>${date}</p>
            <p>${time}</p>
            <form>
                <input type="text" name="completed" value="${completed ? 'on' : 'off'}" class="hidden">
                <input type="button" value="${completed ? 'undo' : 'complete'}" class="completeBtn" data-id='${_id}'>
            </form>
            <a href="/update/${_id}">Edit</a>
            <form>
                <input type="button" value="Delete" class="delete" data-id='${_id}'>
            </form>
        </div>
        ` + container.innerHTML;
    });
    document.querySelectorAll('.delete').forEach(btn => {
        btn.addEventListener('click', deleteHandler);
    });
    document.querySelectorAll('.completeBtn').forEach(btn => {
        btn.addEventListener('click', completeHandler);
    });
}

// Deletes a task from the database through the rest api
function deleteHandler(e) {
    var id = e.target.dataset.id;
    fetch(`/tasks/${id}`, {
        method: 'DELETE'
    })
    .then(() => window.location.reload())
    .catch(err => console.log(err));    
}

// Updates a task in the database through the rest api
function completeHandler(e) {
    var id = e.target.dataset.id;
    console.log(id)
    fetch(`/tasks/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            completed: e.target.previousElementSibling.value === 'on' ? false : true
        })
    })
    .then(() => window.location.reload())
    .catch(err => console.log(err));

}