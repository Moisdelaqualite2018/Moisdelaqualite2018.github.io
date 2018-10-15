window.addEventListener("load", function(){

	var welcomeElements = document.querySelectorAll(".container.welcome");

	welcomeElements[0].parentNode.removeChild(welcomeElements[0]);
	welcomeElements[1].parentNode.removeChild(welcomeElements[1]);

	welcomeElements[0].classList.remove("hiddn");
	welcomeElements[1].classList.remove("hiddn");

	welcomeElements[0].querySelector("#btn-welcome").addEventListener("click", function(){

		document.body.removeChild(welcomeElements[0]);
		document.body.appendChild(welcomeElements[1]);
	});


	document.body.appendChild(welcomeElements[0]);
	window.localStorage.clear();
});