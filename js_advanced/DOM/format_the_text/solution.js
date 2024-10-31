function solve() {
  let paragraph = document.getElementById("input").innerHTML.split(".");
  let div = document.getElementById("output");
  console.log(paragraph);
  paragraph.pop();
  let newParagraph = ``;
  for (let index = 1; index < paragraph.length+1; index++) {
    const element = paragraph[index-1];
    newParagraph += element + "."
    if (index % 3 == 0 || index == paragraph.length) {
      let innerParagraph = document.createElement("p");
      innerParagraph.innerHTML = newParagraph;
      div.appendChild(innerParagraph);
      newParagraph = '';

    }
  }

}