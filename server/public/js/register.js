var nameFirsterror = document.getElementById('nameFirstterror');
var nameLastError = document.getElementById('nameLastError');

var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var addressError = document.getElementById('address-error');
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



function validatePhone() {
	var phone = document.getElementById('phone').value;

	if (phone.length == 0) {
		phoneError.innerHTML = 'Phone no is required';
		return false;
	}

	if (phone.length !== 10) {
		phoneError.innerHTML = 'Phone no should be 10 digits';
		return false;
	}
	if (!phone.match(/^[0-9]{10}$/)) {
		phoneError.innerHTML = 'Only digits';
		return false;
	}

	phoneError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
	return true;
}

function validateEmail() {
	var email = document.getElementById('email').value;

	if (email.length == 0) {
		emailError.innerHTML = 'City is required';
		return false;
	}

	

	emailError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
	return true;
}

function validateAddress() {
	var address = document.getElementById('address').value;
	var required = 10;
	var left = required - address.length;

	if (left > 0) {
		addressError.innerHTML = left + 'more characters required';
		return false;
	}

	addressError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
	return true;

}

function validateForm() {
	if (!validatename() || validateLastname() || validatePhone() || validateEmail() || validateAddress()) {
		alert("Your Form has been Submitted ");
		
	}

}