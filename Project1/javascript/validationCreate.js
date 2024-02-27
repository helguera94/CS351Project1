// JavaScript Document
// Validate createAccount input from user if first and last name is too short will say its invalid
const mail =document.getElementById("email")
const sub = document.getElementById("submit")
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

fname.addEventListener("input",(event) => {
	if(fname.validity.tooShort){
	fname.setCustomValidity("Add a valid first name");

}   else{
	fname.setCustomValidity("");
	}				  
} );
lname.addEventListener("input",(event) => {
	if(lname.validity.tooShort){
	lname.setCustomValidity("Add a valid last name");

}   else{
	lname.setCustomValidity("");
	}				  
} );
mail.addEventListener("input",(event) => {
	if(mail.validity.typeMismatch){
	mail.setCustomValidity("Add a valid email address");
		

}   else{
	mail.setCustomValidity("");
	}	
	
} );
const pass = document.getElementById("password");

pass.addEventListener("input",(event) => {
	if(pass.validity.tooShort){
	pass.setCustomValidity("Add a valid password");

}   else{
	pass.setCustomValidity("");
	}				  
} );
sub.addEventListener("submit",(event)=>{
	if(!mail.validity.valid && pass.validity.valid){
		event.preventDefault();
	}
});