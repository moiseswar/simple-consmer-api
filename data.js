const aplication = document.querySelector('.container');
const getURL =  new URLSearchParams(window.location.search);
const url = 'https://jsonplaceholder.typicode.com/users';
id = getURL.get('id');

fetch(`${url}/${id}`)
.then(response => response.json())
.then(data => {
    const name = document.createElement('p')
    name.innerHTML =data.name;
    aplication.appendChild(name);
})
.catch(err => console.log(err));