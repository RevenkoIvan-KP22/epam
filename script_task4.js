const names = ["a", "b", "c", "d", "e", "f", "g"];

const ul = document.getElementById('names');

names.forEach(function (name) {
    var li = document.createElement('li');
    li.textContent = name;
    li.addEventListener('click', function () {
        alert('Hello, ' + name);
    });
    ul.appendChild(li);
});