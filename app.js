const InputTugas = document.getElementById('InputTugas');
const IsiList = document.getElementById('IsiList');
const tombol = document.getElementById('tombol');

tombol.onclick = function() {
    if (InputTugas.value === '') {
        alert ('kamu belum memasukan tugas apapun')
    }
    else{
        let li = document.createElement('li');
        li.textContent = InputTugas.value;
        IsiList.append(li);
        let span = document.createElement('span')
        span.textContent = '\u00d7';
        li.append(span);
        InputTugas.value = '';
    }
}

IsiList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');

    } else if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
    }
    saveData();
});

InputTugas.addEventListener("keyup", function(event) {
    if (event.key === "Enter"){
        tombol.click()
    }    
});

function saveData() {
    localStorage.setItem('data', IsiList.innerHTML);
}

function showTask() {
    IsiList.innerHTML = localStorage.getItem('data');
}

showTask();
