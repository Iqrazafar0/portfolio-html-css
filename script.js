const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#fullname");
const email = document.querySelector("#email");
const projectType = document.querySelector("#project-type");
const message = document.querySelector("#message");
const formStatus = document.querySelector("#form-status");
 

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    if (
        fullName.value.trim() === "" ||
        email.value.trim() === "" ||
        projectType.value.trim() === "" ||
        message.value.trim() === ""
    ) {
       formStatus.textContent = "Please fill all fields.";
       formStatus.style.color = "red";
        return;
    }
     
    //Email validation
    if(!emailValue.includes("@") && !emailValue.includes(".")) {
        formStatus.textContent = "Please enter valid email address.";
        formStatus.style.color = Red;
        return;
    }

    //Disable button
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    //Success message
    formStatus.textContent = "Thank you! Your message has been sent.";
    formStatus.style.color = "green";
    contactForm.reset();

    //Re-enable button
    setTimeout (() => {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
    }, 3000);

}); 