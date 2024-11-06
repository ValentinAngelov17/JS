let input = document.getElementById('newText');
let ul = document.getElementById('items');

function addItem() {
    let inputValue = input.value + ' ';
    input.value = '';
    let newItem = document.createElement('li');
    newItem.innerHTML = inputValue;
    let deleteItem = document.createElement('a');
    deleteItem.innerHTML = "[Delete]";
    deleteItem.href = "#"
    newItem.appendChild(deleteItem);
   
    ul.appendChild(newItem);

    deleteItem.addEventListener('click', () => {
        newItem.remove();

    })
    
  

}