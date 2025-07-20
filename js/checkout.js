
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

	//NAME
	 if (fName.value.trim().length < 3 || !/^[a-zA-Z]+$/.test(fName.value)) { // ^inici de cadena, $final de cadena, [a-zA-Z] només lletres
        fName.classList.add("is-invalid");
        errorName.textContent =
            "Name must be at least 3 letters and contain only letters.";
        error++;
    } else {
        fName.classList.remove("is-invalid");
        errorName.textContent = "";
    }

	//LAST NAME
	 if (fLastN.value.trim().length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)) { 
        fLastN.classList.add("is-invalid");
        errorLastN.textContent =
            "Last name must be at least 3 letters and contain only letters.";
        error++;
    } else {
        fLastN.classList.remove("is-invalid");
        errorLastN.textContent = "";
    }

	//EMAIL
	    if (
        fEmail.value.trim().length < 3 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value) // Regex per validar email bàsicament: no espais, té @ i un domini
    ) {
        fEmail.classList.add("is-invalid");
        errorEmail.textContent = "Enter a valid email address.";
        error++;
    } else {
        fEmail.classList.remove("is-invalid");
        errorEmail.textContent = "";
    }

	//ADDRESS
	    if (fAddress.value.trim().length < 3) {
        fAddress.classList.add("is-invalid");
        errorAddress.textContent = "Address must be at least 3 characters.";
        error++;
    } else {
        fAddress.classList.remove("is-invalid");
        errorAddress.textContent = "";
    }

	//PASSWORD
if (fPassword.value.trim().length < 6 || !/(?=.*[a-zA-ZçÇ])(?=.*[0-9])/.test(fPassword.value)) { // Comprova que tingui mínim 6 caràcters, lletres (incloent lletres catalanes) i números
    fPassword.classList.add("is-invalid");
    errorPassword.textContent = "La contrasenya ha de tenir mínim 6 caràcters, incloure lletres (poden ser amb ç/Ç) i números.";
    error++;
} else {
    fPassword.classList.remove("is-invalid");
    errorPassword.textContent = "";
}

	//PHONE
	 if (!/^\d{9}$/.test(fPhone.value)) { // Comprova que el telèfon tingui exactament 9 dígits
        fPhone.classList.add("is-invalid");
        errorPhone.textContent = "Phone must be exactly 9 digits.";
        error++;
    } else {
        fPhone.classList.remove("is-invalid");
        errorPhone.textContent = "";
    }

    if (error > 0) {
        alert("Error");
    } else {
        alert("OK");
    }
}
