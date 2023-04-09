var description = document.getElementById('description');
var date = document.getElementById('date');
var time = document.getElementById('time');
var editBtn = document.getElementById('editBtn');

var id = window.location.pathname.split('/')[2];
console.log(id)

document.addEventListener('DOMContentLoaded', () => {
    fetch(`/tasks/${id}`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        description.innerHTML = res.description;
        date.value = res.date;
        time.value = res.time;
    })
    .catch(err => console.log(err));
});


editBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var task = {
        description: description.value,
        date: date.value,
        time: time.value
    }
    console.log(task)
    fetch(`/tasks/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(() => window.location = '/')
    .catch(err => console.log(err));
}
);