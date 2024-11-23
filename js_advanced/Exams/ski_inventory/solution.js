let availableProducts = []
function solve() {
   const buttons = document.getElementsByTagName('button');
   const filterBtn = buttons[0];
   const addBtn = buttons[1];
   console.log(addBtn);
   const buyBtn = buttons[2];



   

   addBtn.addEventListener('click', () => {
      const addInputs = document.getElementsByTagName('input');
      const itemName = addInputs[1];
      const itemQuantity = addInputs[2];
      const itemPrice = addInputs[3];
      console.log(5555);
      const ulAvailableProducts = document.getElementsByTagName('ul')[0];

      availableProducts.push({
         name: itemName.value,
         quantity: itemQuantity.value,
         price: itemPrice.value
      });
      const span = document.createElement('span');
      span.innerHTML = itemName.value;
      ulAvailableProducts.appendChild(span)
      console.log(availableProducts);

   })

}