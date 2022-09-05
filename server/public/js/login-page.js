
function clearErrors() {
    errors = document.getElementById('email-error');
    for(let item of errors) {
        item.innerHTML = " ";
    }
}

function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementById('email-error')[0].innerHTML = error;
}



function validateForm(){
    var returnval = true;
    clearErrors();
    if(!validateName() || validatePassword() || validatePhone() || validateEmail() ){
        submitError.style.display='block';
        submitError.innerHTML = 'Login details are incorrect';
        
        returnval = false;
    }
    else {
        returnval = false;
    }
    
   

    return returnval;

}

function validateEmail(){
    var returnval = true;
    clearErrors();
    var email= document.forms['bykform']["remail"].value;
    
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        seterror("email", "*Email format is invalid");
        returnval = false;
    }
    if(email.match(/^[0-9]/)) {
        seterror("email", "*Email format is invalid");
        returnval = false;
    }
    if(email.length>30){
        seterror("email","*Email Length is too long");
        returnval=false;
    }
    if(email.length==0){
        seterror("email","*Email cannot be null");
        returnval=false;
    }
    return returnval;
}