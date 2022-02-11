'use strict';

const lists = document.querySelector('ul').getElementsByTagName('ul');

for(let list of lists){
    list.classList.add('list');
}

for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
}


const showList = (event) => {
    const node = event.target.parentNode;
    if(node.childNodes.length <= 1) return; //hasChildNodes()
    
    const list = node.firstChild.nextSibling;
    list.classList.toggle('active');

}

const span = document.querySelectorAll('span');
span.forEach(element => {
    element.addEventListener("click", showList);
});