something = 2;
let counter = 0;
let colors = ["blue", "green", "red"]
function growingWord() {
  let word = document.getElementsByTagName("p")[2];

  word.style.fontSize = `${something}px`;
  something += 2;
  word.style.color = colors[counter];
  counter++;
  if (counter == 3) {
    counter = 0;
  }

}