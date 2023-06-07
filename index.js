import { dataInfo } from './data.js';

const data = JSON.parse(dataInfo);
console.log(data);
const content = document.querySelector('.content');

data.forEach(({id, name, description, url }) => {
    const div = document.createElement('div');
    div.classList.add('seasons');
   
    const title = document.createElement('h1');
    title.classList.add('season-name');
    title.textContent = `${id}. ${name}`;

    const img = document.createElement('img');
    img.classList.add('season-img');
    img.src = url;

    const descript = document.createElement('p');
    descript.classList.add('season-desc');
    descript.textContent = description;

    content.appendChild(div);
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(descript);
});