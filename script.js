//your JS code here. If required.
const name = document.getElementById("name");
const age = document.getElementById("age");
const btn = document.getElementById("btn");

function onSubmit(e) {
	e.preventDefault();
	if(name.value==="" || age.value==="") {
		return;
	}
	if(age.value > 18) {
		alert(`Welcome, ${name.innerText}. You can vote.`);
		return;
	}
	else {
		alert(`Oh sorry ${name.innerText}. you aren't old enough.`);
	}
}
btn.addEventListener("click" , onSubmit);
