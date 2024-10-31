function createArticle() {
	let title = document.getElementById("createTitle").value;
	let content = document.getElementById("createContent").value;

	let a = document.createElement("article");
	let h3 = document.createElement("h3")
	let p = document.createElement("p")
   
	h3.innerHTML = title;
	p.innerHTML = content;
	a.appendChild(h3);
	a.appendChild(p);

	document.getElementById("articles").appendChild(a)
	
	
}