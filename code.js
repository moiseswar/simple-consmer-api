const aplication = document.querySelector('.container');
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(usuario => {
        let p = document.createElement('p');
        p.setAttribute('id', usuario.id);
        p.innerHTML = usuario.name;
        p.addEventListener('click',function(){
            window.location.href = `./data.html?id=${usuario.id}`;
        });
        aplication.appendChild(p);
    });
})
.catch(err => console.log(err));
