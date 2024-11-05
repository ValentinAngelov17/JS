function solve() {
  const generateButton = document.getElementsByTagName('button')[0];
  const buyButton = document.getElementsByTagName('button')[1];
  const textarea = document.getElementsByTagName('textarea')[0];
  let table = document.getElementsByTagName('tbody')[0];

  fetch("furniture.json")
    .then(response => { return response.json() })
    .then(json => {
      let firstObject = {}
      firstObject.img = document.getElementsByTagName('img')[0].src;
      firstObject.name = document.getElementsByTagName('p')[0].innerHTML;
      firstObject.price = document.getElementsByTagName('p')[1].innerHTML;
      firstObject.decFactor = document.getElementsByTagName('p')[2].innerHTML;

      generateButton.addEventListener('click', () => {
        for (const element of json) {
          const image = element.img;
          const name = element.name;
          const price = element.price;
          const decFactor = element.decFactor;

          let tr = table.appendChild(document.createElement('tr'));
          let imgTd = tr.appendChild(document.createElement('td'));
          imgTd.appendChild(document.createElement('img')).src = image;

          let nameP = tr.appendChild(document.createElement('td'));
          nameP.appendChild(document.createElement('p'));
          nameP.innerHTML = name;

          let priceP = tr.appendChild(document.createElement('td'));
          priceP.appendChild(document.createElement('p'));
          priceP.innerHTML = price;

          let decFactorP = tr.appendChild(document.createElement('td'));
          decFactorP.appendChild(document.createElement('p'));
          decFactorP.innerHTML = decFactor;

          let checkbox = tr.appendChild(document.createElement('td'));
          let chk = document.createElement('input');
          chk.type = "checkbox";
          checkbox.appendChild(chk);

        }
        json.unshift(firstObject);
        console.log(json);

      })
      textarea.innerHTML = JSON.stringify(json);

      buyButton.addEventListener('click', () => {
        let boughtFurnitures = [];
        let totalSum = 0;
        let averageDecFactor = 0;
        
        const inputs = document.getElementsByTagName('input');
        for (let index = 0; index < inputs.length; index++) {
          const input = inputs[index];
          if (input.checked) {
            boughtFurnitures.push(json[index].name);
            totalSum += +json[index].price;
            averageDecFactor += +json[index].decFactor;
          }
          
        }
        let buyArea = document.getElementsByTagName('textarea')[1];
        buyArea.innerHTML = `Bought furniture: ${boughtFurnitures.join(', ')}\nTotal price: ${totalSum.toFixed(2)}\nAverage decoration factor: ${(averageDecFactor / boughtFurnitures.length).toFixed(2)}`
      })

    })

}
