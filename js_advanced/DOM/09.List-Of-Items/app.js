let input = document.getElementById('newItemText');
let ul = document.getElementById('items');

function addItem() {
    let inputValue = input.value;
    input.value = '';
    let newItem = document.createElement('li');
    newItem.innerHTML = inputValue;
    ul.appendChild(newItem);
  

    
}