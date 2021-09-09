let items = document.querySelector('.list');
const toDoInput = items.querySelector("input");
let itemPlus = document.querySelector('.add');
let deleteBtns = document.querySelector('.delete');
let reset = document.querySelector('.reset')

document.querySelector('ul').addEventListener('click',checkToDo);
itemPlus.addEventListener('click', add);
reset.addEventListener('click', resetToDo);


const TODOS_LS = "toDos";
let toDos = [];
//loadToDos();

function add (e){
//itemPlus.addEventListener('click', e => {
    let thisElement = e.target;
    if(thisElement.nodeName !== 'I'){
        thisElement = e.target.firstElementChild;
    }


    var todoId = items.children.length+1;

    let itemElement = document.createElement('li');
    itemElement.setAttribute('id',todoId);
    itemElement.classList.add('item');

    const newId = toDos.length + 1;

    let checkTag = document.createElement('input');
    checkTag.setAttribute('type','checkbox');
    checkTag.classList.add('item--check');

    let textTag = document.createElement('input');
    textTag.setAttribute('type','innerText');
    textTag.classList.add('item--title');

    let removeTag = document.createElement('button');
    removeTag.classList.add('list--remove');
    const x = document.createTextNode("X");
    removeTag.appendChild(x);
   


    itemElement.appendChild(checkTag);
    itemElement.appendChild(textTag);
    itemElement.appendChild(removeTag);
    todoId = newId;

   // let text = document.getElementById('newId').value;
    //document.getElementById("textTag").innerText = text;

    items.appendChild(itemElement);
    removeTag.addEventListener('click', deleteToDo);

   const toDoObj = { // toDos 배열안에 넣을 정보를 setup 
        textTag,
        id: newId
    };
    
   
    toDos.push(toDoObj);
    //handleSubmit();
    textTag.focus();
    saveToDos();
    console.log(itemElement);
   
    }
//);


function handleSubmit() {
    //event.preventDefault(); // 엔터를 눌러도 submit이 작동하지 않도록 기본 기능을 정지시킴
    const currentValue = toDoInput.value;
    add(currentValue);
    toDoInput.value = "";
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

deleteBtns.addEventListener('click', e=>{

        var checkboxs = document.querySelectorAll('.item--check:checked');
        checkboxs.forEach(item => item.parentElement.remove());
        saveToDos();
           
    
});

function deleteToDo(e){
    let li = e.target.parentElement;
    //let parentElement = remove.parentElement;
    //parentElement.removeChild(remove);
    //toDos = parentElement;
    li.remove();
    toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id));
    saveToDos();
}

function resetToDo(e){
    let ul = document.querySelector('.list').innerHTML = '';
    toDos = ul;
    saveToDos();

}

function checkToDo(e){
    const todo = e.target.nextSibling;
    if(e.target.checked){
        todo.style.color = "#dddddd";
        todo.style.textDecoration = "line-through";

    }else{
        todo.style.color = "#000000";
        todo.style.textDecoration = "none"
    }
    saveToDos();
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);

}

window.addEventListener('keydown',e=>{
    if(e.keyCode !== 13) {
        e.stopPropagation();
        return;
    }
    itemPlus.click();
})
