//your JS code here. If required.
const name = document.getElementById("name");
const age = document.getElementById("age");
const btn = document.getElementById("btn");

function onSubmit(e) {
	e.preventDefault();
	if(name.value==="" || age.value==="") {
		return;
	}
	let promise = new Promise((resolve,reject)=> {
		
	})
	if(age.value > 18) {
		alert(`Welcome, ${name.value}. You can vote.`);
		return;
	}
	else {
		alert(`Oh sorry ${name.value}. you aren't old enough.`);
	}
}
btn.addEventListener("click" , onSubmit);
