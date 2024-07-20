document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const confirmationMsg = document.getElementById("confirmationMsg");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
            sendFormData();
        }
    });

    function validateForm() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Por favor llene todos los campos.");
            return false;
        }

        if (!isValidEmail(email)) {
            alert("Por favor ingresa un correo electrónico válido.");
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function sendFormData() {
        setTimeout(function() {
            form.reset();
            confirmationMsg.style.display = "block";
        }, 1000);
    }
});