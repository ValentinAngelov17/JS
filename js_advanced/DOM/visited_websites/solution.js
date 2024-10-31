const countersMap = new Map([["Softuni", 1], ["Google", 2], ["YouTube", 4], ["Wikipedia", 4], ["Gmail", 7], ["StackOverflow", 6]]);
const names = Array.from(countersMap.keys())
function solve() {
  const divCollection = Array.from(document.getElementsByClassName("link-1"))
  divCollection.forEach((element, i) => {
    element.addEventListener("click", () => {
      const name = names[i];
      countersMap.set(name, countersMap.get(name) + 1);
      const pElement = element.getElementsByTagName("p")[0];
      pElement.innerHTML = `visited ${countersMap.get(name)} times`

    })
  });
}