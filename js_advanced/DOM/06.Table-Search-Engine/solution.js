function solve() {
   const tableRows = document.getElementsByTagName('tr');
   console.log(tableRows);
   const tableData = document.getElementsByTagName('td');
   const btn = document.getElementById('searchBtn');


   btn.addEventListener('click', () => {


      let search = document.getElementById('searchField');

      for (const person of tableRows) {
         person.className = '';
         let data = person.getElementsByTagName('td');
         for (const element of data) {
            if (element.innerHTML.toLowerCase().includes(search.value.toLowerCase())) {
               person.className = 'select';
            }
         }
      }
      search.value = '';
   })

}