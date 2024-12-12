// let ul=document.createElement('ul ');
let ul= document.querySelector('ul');
ul.id='todolist';
let addbtn=document.createElement('button');
addbtn.type='submit';
addbtn.textContent='Add';
let form=document.createElement('form');
let it=document.createElement('label');
let text=document.createTextNode('Enter anything that you would like see turn into a list:')
let line=document.createElement('br');
it.appendChild(text);
it.appendChild(line);
let bar=document.createElement('input');
bar.type='text';
bar.id='yigo';
//Just to see if list works and i can attach list to the dom
let newList=document.createElement('li');
newList.textContent='My heart is broken for you ooohhh delilah delilahh oohhh oh you got my heart broken';
ul.appendChild(newList);
//Trying to make a button that will delete the unordered list automatically after clicking on it
// delbut.classList.add='btn btn-danger btn-sm float-right delete';
document.body.appendChild(form);
form.appendChild(it);
form.appendChild(bar);
form.appendChild(addbtn);
document.body.appendChild(ul);
////Initial thinking
// function takeInput(){
//     let inp=prompt("Enter anything that you would like see turn into a list.");
//     newItem=ul.appendChild(inp);
//     newItem.appendChild(delbut);

// }
//Getting the input to go below in the list
form.addEventListener('submit',function(e){
    e.preventDefault();
    let delbut=document.createElement('button');
    delbut.type='reset';
    delbut.textContent='Remove';
    let newItem=document.getElementById('yigo').value;
    console.log(newItem);
    let lis=document.createElement('li');
    lis.appendChild(document.createTextNode(newItem));
    lis.appendChild(delbut);
    // newItem.textContent=e.target.value;
    ul.appendChild(lis);
    // ul.appendChild(delbut);
})