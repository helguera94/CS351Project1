// JavaScript Document

//checks the email and password input is in the correct format if not will give an errror message 
const mail =document.getElementById("email")
const sub = document.getElementById("submit")


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
