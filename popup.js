const items = document.querySelector('.list');
const itemPlus = document.querySelector('.add');
document.querySelector('ul').addEventListener('click',checkToDo);

itemPlus.addEventListener('click', e => {
    let thisElement = e.target;
    if(thisElement.nodeName !== 'I'){
        thisElement = e.target.firstElementChild;
    }

    const itemElement = document.createElement('li');
    itemElement.classList.add('item');
    const checkTag = document.createElement('input');
    checkTag.setAttribute('type','checkbox');
    checkTag.classList.add('item--check');
    const textTag = document.createElement('input');
    textTag.setAttribute('type','text');
    textTag.classList.add('item--title');
    const spanTag = document.createElement('span');
    spanTag.classList.add('item--delete');
    spanTag.innerHTML = `<i class="fas fa-trash-alt"></i>`;

    itemElement.append(checkTag,textTag,spanTag);
    items.append(itemElement);

    textTag.focus();
   
    }
);
const deleteBtns = document.querySelectorAll('.fa-trash-alt');
items.addEventListener('click',e=>{
    if(e.target.classList.contains('fa-trash-alt')){
        const checkboxs = document.querySelectorAll('.item--check:checked');
        if(checkboxs.length > 0)
            checkboxs.forEach(item => item.parentElement.remove());
        else
            e.target.parentElement.parentElement.remove();
    }
});

function checkToDo(e){
    const todo = e.target.nextSibling;
    if(e.target.checked){
        todo.style.color = "#dddddd";
    }else{
        todo.style.color = "#000000";
    }
}

window.addEventListener('keydown',e=>{
    if(e.keyCode !== 13) {
        e.stopPropagation();
        return;
    }
    itemPlus.click();
})
