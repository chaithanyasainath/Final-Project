var nameFirsterror = document.getElementById('nameFirstterror');
var nameLastError = document.getElementById('nameLastError');
var passwordError = document.getElementById('password-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var submitError = document.getElementById('submit-error');

function validateFisrtname() {
	var name = document.getElementById('Firstname').value;

	if (name.length == 0) {
		nameFirsterror.innerHTML = 'name is required';
	}
	if (!name.match(/^[A-Za-z]*$/)) {
		nameFirsterror.innerHTML = 'Valid name is required';
		return false;
	}
	nameFirsterror.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
	return true;
}


function validateLastname() {
	var name = document.getElementById('Lastname').value;

	if (name.length == 0) {
		nameLastError.innerHTML = 'name is required';
	}
	if (!name.match(/^[A-Za-z]*$/)) {
		nameLastError.innerHTML = 'Valid name is required';
		return false;
	}
	nameLastError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
	return true;
}


function validatePassword(){
	var password = document.getElementById('password').value;

	if(password.length <= 8)
	{
		passwordError.innerHTML = 'Password must be more 8 Characters';
		return false;
	}

	if(!password.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		passwordError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
		return true;
	}

}

function validatePhone(){
	var phone = document.getElementById('phone').value;

	if(phone.length == 0)
	{
		phoneError.innerHTML = 'Only Numbers Allowed';
		return false;
	}

	if(phone.length !== 10)
	{
		phoneError.innerHTML = 'Phone No should be 10 digits';
		return false;
	}
	if(!phone.match(/^[0-9]{10}$/)) {
		phoneError.innerHTML = 'Only digits';
		return false;
	}

	phoneError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
	return true;
}

function validateEmail(){
	var email = document.getElementById('email').value;

	if(email.length == 0)
	{
		emailError.innerHTML = 'Email is required';
		return false;
	}

	if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		emailError.innerHTML = 'Email Invalid';
		return false;
	}

	emailError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
	return true;
}


function validateForm() {
    
	if(validateFirstname() || validateLastname() || validatePassword() || validatePhone() || validateEmail() ){
        alert("You have created successfully Please Sign In");
    
	}
}

	