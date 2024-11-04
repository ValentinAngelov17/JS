const products = document.getElementsByClassName('product');
const buttons = document.getElementsByClassName('add-product');
let textArea = document.getElementsByTagName('textarea')[0];
let shoppingCartProducts = [];
let shoppingCartSum = 0;


function solve() {
   for (let index = 0; index < buttons.length; index++) {
      let btn = buttons[index];
      btn.addEventListener('click', () => {
         let productName = document.getElementsByClassName('product-title')[index].innerHTML;
         let productPrice = +document.getElementsByClassName('product-line-price')[index].innerHTML;

         if (!shoppingCartProducts.includes(productName)) {
            shoppingCartProducts.push(productName);
         } 

         shoppingCartSum += productPrice;

         textArea.innerHTML += `Added ${productName} for ${productPrice} to the cart. \n`



      })
   }

   const checkoutButton = document.getElementsByClassName('checkout')[0];
   checkoutButton.addEventListener('click', () => {
      textArea.innerHTML += `You bought ${shoppingCartProducts.join(', ')} for ${shoppingCartSum.toFixed(2)}.`
      for (const element of buttons) {
         element.disabled = true;
      }
      checkoutButton.disabled = true;
   })
}