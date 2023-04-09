var description = document.getElementById('description');
var date = document.getElementById('date');
var time = document.getElementById('time');
var submitBtn = document.getElementById('sumbitBtn');

// Calls rest api to create a new task
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var task = {
        description: description.value,
        date: date.value,
        time: time.value
    }
    console.log(task)
    fetch('/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(() => window.location = '/') // Redirect to home page
    .catch(err => console.log(err));
});




