function solve() {
   let table = document.querySelector(".minimalistBlack tbody");

   let lastSelection = null;

   table.addEventListener("click", (e) => {
       // Find the parent row of the clicked element
       let selectedRow = e.target.parentNode;

       // Check if there is a previously selected row and it's not the same as the current one
       if (lastSelection && selectedRow !== lastSelection) {
           lastSelection.style.cssText = ""; // Remove background color from the previous selection
       }

       // Toggle the background color of the current row
       selectedRow.style.cssText = selectedRow.style.cssText
           ? ""
           : "background-color: rgb(65, 63, 94);";

       // Update the last selection to the current row
       lastSelection = selectedRow;
   });
}
