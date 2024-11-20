let email1 = document.getElementById('email1');
let phone1 = document.getElementById('phone1');
let name1 = document.getElementById('name1');
let subject1 = document.getElementById('subject1');
let message1 = document.getElementById('message1');
let submit1 = document.getElementById('submit1');

function showError1(inputElement, message) {
    removeError1(inputElement);

    let errorElement = document.createElement('span'); 
    errorElement.className = 'error'; // Fixed typo.
    errorElement.textContent = message;
    inputElement.before(errorElement); 
}

function removeError1(inputElement) {
    if (inputElement.previousElementSibling && inputElement.previousElementSibling.classList.contains('error')) {
        inputElement.previousElementSibling.remove();
    }
}

function validateForm1() {
    let isValid = true;

    if (name1.value.trim() === '') {
        showError1(name1, "Name is required.");
        isValid = false;
    } else {
        removeError1(name1);
    }

    if (email1.value.trim() === '') {
        showError1(email1, "Email is required.");
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email1.value.trim())) {
        showError1(email1, "Enter a valid email.");
        isValid = false;
    } else {
        removeError1(email1);
    }

    if (phone1.value.trim() === '') {
        showError1(phone1, "Phone is required.");
        isValid = false;
    } else if (!/^\d{10}$/.test(phone1.value.trim())) {
        showError1(phone1, "Enter a valid 10-digit phone number.");
        isValid = false;
    } else {
        removeError1(phone1);
    }

    if (subject1.value.trim() === '') {
        showError1(subject1, "Subject is required.");
        isValid = false;
    } else {
        removeError1(subject1);
    }

    if (message1.value.trim() === '') {
        showError1(message1, "Message is required.");
        isValid = false;
    } else {
        removeError1(message1);
    }

    return isValid;
}

submit1.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default form submission.

    let successmessage1 = document.getElementById('success-message1');

    if (validateForm1()) {
        successmessage1.textContent = "Form submitted successfully!";

        setTimeout(() => {
            successmessage1.textContent = '';
        }, 3000);

        name1.value = '';
        email1.value = '';
        phone1.value = '';
        subject1.value = '';
        message1.value = '';
    } else {
        successmessage1.textContent = '';
    }
});
