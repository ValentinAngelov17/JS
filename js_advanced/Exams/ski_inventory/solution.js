let availableProducts = []
function solve() {
   let totalSum = 0;
   const buttons = document.getElementsByTagName('button');
   const filterBtn = buttons[0];
   const addBtn = buttons[1];
   console.log(addBtn);
   const buyBtn = buttons[2];
   const addButtonsToClientList = document.getElementsByClassName('adding');

   addBtn.addEventListener('click', (event) => {

      event.preventDefault();

      const addInputs = document.getElementsByTagName('input');
      const itemName = addInputs[1];
      const itemQuantity = addInputs[2];
      const itemPrice = addInputs[3];

      const ulAvailableProducts = document.getElementsByTagName('ul')[0];

      availableProducts.push({
         name: itemName.value,
         quantity: Number(itemQuantity.value),
         price: Number(itemPrice.value)
      });
      const li = document.createElement('li');
      li.className = 'productsLi'
      ulAvailableProducts.appendChild(li);
      const spanName = document.createElement('span');
      spanName.innerHTML = itemName.value;
      spanName.className = "spanName";
      li.appendChild(spanName)

      const strongAvailable = document.createElement('strong');
      strongAvailable.innerHTML = `Available: ${itemQuantity.value} `;
      li.appendChild(strongAvailable);

      const divEl = document.createElement('div');
      const strongPrice = document.createElement('strong');
      strongPrice.innerHTML = itemPrice.value;
      divEl.appendChild(strongPrice);

      const addBtnToClientList = document.createElement('button');
      addBtnToClientList.innerHTML = "Add to Client's List";
      addBtnToClientList.className = "adding";
      divEl.appendChild(addBtnToClientList);
      li.appendChild(divEl);

   });

   filterBtn.addEventListener('click', (event) => {
      const input = document.querySelector('input');
      const liItems = document.getElementsByClassName('productsLi');
      const spanItems = document.getElementsByClassName('spanName');
      for (let index = 0; index < spanItems.length; index++) {
         const span = spanItems[index];
         const liItem = liItems[index];
         if (!span.innerHTML.includes(input.value)) {
            liItem.style.display = "none";
         }
      }

   });

   document.addEventListener('click', (event) => {
      const element = event.target.parentNode.parentNode;
      if (event.target.innerHTML == "Add to Client's List") {
         let elements = element.textContent.split('Available: ');
         let elementName = elements[0];
         let splittedElements = elements[1].split("Add to Client's List");
         splittedElements = splittedElements[0].split(' ');
         let elementQuantity = +splittedElements[0];
         console.log(elementQuantity);
         let elementPrice = +splittedElements[1];

         const ulAvailableProducts = document.getElementsByTagName('ul')[1];
         const li = document.createElement('li');
         li.innerHTML = elementName;
         li.className = "shoppingCartItems";
         const strongItemPrice = document.createElement('strong');
         strongItemPrice.innerHTML = elementPrice;
         li.appendChild(strongItemPrice);
         ulAvailableProducts.appendChild(li);
         console.log(element.textContent);

         for (const child of element.children) {
            if (child.innerHTML === `Available: ${elementQuantity} `) {
               if (child.innerHTML === `Available: ${1} `) {
                  element.style.display = "none";
               } else {
                  child.innerHTML = `Available: ${elementQuantity - 1} `
               }
            }
         }

         const totalPriceH1 = document.getElementsByTagName('h1')[1];
         totalSum += elementPrice;
         totalPriceH1.innerHTML = `Total Price: ${totalSum.toFixed(2)}`;

      }
   });

   buyBtn.addEventListener('click', () => {

      const ulAvailableProducts = document.getElementsByTagName('ul')[1];
      ulAvailableProducts.innerHTML = "";
      const totalPriceH1 = document.getElementsByTagName('h1')[1];
         totalPriceH1.innerHTML = `Total Price: 00.00`;

   })

}