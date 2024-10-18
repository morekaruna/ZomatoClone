var nameError= document.getElementById('name-error');
var phoneError= document.getElementById('phone-error');
var emailError= document.getElementById('email-error');
var passwordError= document.getElementById('pass-error');
var confirmpasswordError = document.getElementById('confirmpass-error');
var submitError= document.getElementById('submit-error');

function validateName(){
    var name= document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Enter Name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true;
}

function validatePhone(){
    var phone= document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Enter Number';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Number cannot be less than 10 digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true;
}

function validateEmail(){
    var email= document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Enter Email';
        return false;
    }
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true;
}

function validatePassword(){
    var password= document.getElementById('contact-password').value;

    if(password.length <8){
        passError.innerHTML = 'More characters requiredPassword should be more than 8 characters'; 
        return false;
    }
    passError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true;
}

function confirmPassword(){

    if (confirmPassword != contactPassword){
        confirmpassError.innerHTML = 'Password does not match';
        return false;
    }
    confirmpassError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validatePassword() || !confirmPassword() ){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
        return false;
    }

}

type="text/javascript"
    (function(){
        emailjs.init("8nQ0wQkpNz6lsTl2R"); // Replace with your EmailJS user ID or public key
    })();

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let name = document.getElementById('contact-name').value;
        let mobile = document.getElementById('contact-phone').value;
        let email = document.getElementById('contact-email').value;
        let password = document.getElementById('contact-password').value;

        let templateParams = {
            name: name,
            mobile: mobile,
            email: email,
            password: password
        };

        emailjs.send('service_ceaujah','template_v691de1', templateParams)
        .then(function(response) {
            document.getElementById('statusMessage').innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
        }, function(error) {
            document.getElementById('statusMessage').innerHTML = '<div class="alert alert-danger">Failed to send message. Please try again later.</div>';
        });
    });