
// Exercise 6
const validate = () => {
	let error = 0;
	// Get the input fields
	const fName = document.getElementById("fName");
	const fLastN = document.getElementById("fLastN");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
  	const fPassword = document.getElementById("fPassword");
  	const fPhone = document.getElementById("fPhone");

	// Get the error elements
	const errorName = document.getElementById("errorName");
	const errorLastN = document.getElementById("errorLastN");
	const errorEmail = document.getElementById("errorEmail");  
	const errorAddress = document.getElementById("errorAddress");
	const errorPassword = document.getElementById("errorPassword");
  	const errorPhone = document.getElementById("errorPhone");
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value.trim() == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Please fill in all required fields.");
	}else{
		alert("Form submitted successfully");
	}

}
