let items = document.querySelector('.list');
let itemPlus = document.querySelector('.add');
let deleteBtns = document.querySelector('.delete');
document.querySelector('ul').addEventListener('click',checkToDo);

itemPlus.addEventListener('click', e => {
    let thisElement = e.target;
    if(thisElement.nodeName !== 'I'){
        thisElement = e.target.firstElementChild;
    }

    let itemElement = document.createElement('li');
    itemElement.classList.add('item');
    let checkTag = document.createElement('input');
    checkTag.setAttribute('type','checkbox');
    checkTag.classList.add('item--check');
    let textTag = document.createElement('input');
    textTag.setAttribute('type','text');
    textTag.classList.add('item--title');
    let removeTag = document.createElement('button');
    removeTag.classList.add('list--remove');
    const x = document.createTextNode("X");
    removeTag.appendChild(x);
    // const spanTag = document.createElement('span');
    // spanTag.classList.add('item--delete');
    // spanTag.innerHTML = `<i class="fas fa-trash-alt"></i>`;

    itemElement.append(checkTag,textTag,removeTag);
    items.append(itemElement);

    textTag.focus();
   
    }
);

deleteBtns.addEventListener('click', e=>{

        var checkboxs = document.querySelectorAll('.item--check:checked');
        checkboxs.forEach(item => item.parentElement.remove());
           
    
});





function checkToDo(e){
    const todo = e.target.nextSibling;
    if(e.target.checked){
        todo.style.color = "#dddddd";
        todo.style.textDecoration = "line-through";

    }else{
        todo.style.color = "#000000";
        todo.style.textDecoration = "none"
    }
}

window.addEventListener('keydown',e=>{
    if(e.keyCode !== 13) {
        e.stopPropagation();
        return;
    }
    itemPlus.click();
})
