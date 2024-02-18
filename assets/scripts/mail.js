function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var errorMessage = document.getElementById("errorMessage");
  var successMessage = document.getElementById("successMessage");

  if (name === "" || email === "" || message === "") {
    errorMessage.innerText = "All fields are required!";
    successMessage.innerText = ""; // Clear success message
    return; // Prevent further execution
  }

  var params = {
    name: name,
    email: email,
    message: message,
  };

  const serviceID = "contact_service";
  const templateID = "template_9mtkzps";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      errorMessage.innerText = ""; // Clear error message
      successMessage.innerText = "Your message sent successfully!";
      console.log(res);
    })
    .catch(err => console.log(err));
}
