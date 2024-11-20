let email = document.getElementById('email');
let phone = document.getElementById('phone');
let name = document.getElementById('name');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let submit = document.getElementById('submit');

function showError(inputElement, message) {
    if (inputElement.previousElementSibling && inputElement.previousElementSibling.classList.contains('error')) {
        inputElement.previousElementSibling.remove();
    }

    let errorElement = document.createElement('span'); 
    errorElement.className = 'error';
    errorElement.textContent = message;

    inputElement.before(errorElement); 

}

function removeError(inputElement) {
    if (inputElement.previousElementSibling && inputElement.previousElementSibling.classList.contains('error')) {
        inputElement.previousElementSibling.remove();
    }
}


function validateForm() {
    let isValid = true;

    
    if (name.value.trim() === '') {
        showError(name, "Name is required.");
        isValid = false;
    } else {
        removeError(name);
    }

  
    if (email.value.trim() === '') {
        showError(email, "Email is required.");
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
        showError(email, "Enter a valid email.");
        isValid = false;
    } else {
        removeError(email);
    }

  
    if (phone.value.trim() === '') {
        showError(phone, "Phone is required.");
        isValid = false;
    } else if (!/^\d{10}$/.test(phone.value.trim())) {
        showError(phone, "Enter a valid 10-digit phone number.");
        isValid = false;
    } else {
        removeError(phone);
    }

   
    if (subject.value.trim() === '') {
        showError(subject, "Subject is required.");
        isValid = false;
    } else {
        removeError(subject);
    }

    if (message.value.trim() === '') {
        showError(message, "Message is required.");
        isValid = false;
    } else {
        removeError(message);
    }

    return isValid;
}


submit.addEventListener('click', function () {
    if (validateForm()) {
        
        let successMessage = document.getElementById('success-message');
        successMessage.textContent = "Form submitted successfully!";


        setTimeout(() => {
            successMessage.textContent = '';
        }, 3000);
        
        
        name.value = '';
        email.value = '';
        phone.value = '';
        subject.value = '';
        message.value = '';

    } else {
        document.getElementById('success-message').textContent = '';
    }
});



// let NLemail=document.getElementById('NLemail');