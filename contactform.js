document.getElementById("submitbtn").addEventListener("click", function(event) {
  event.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let subject = document.getElementById("subject");
  let message = document.getElementById("message");

  let valid = true;
  let invalidEmail = false;

  // Reset borders
  name.style.border = "1px solid #ccc";
  email.style.border = "1px solid #ccc";
  subject.style.border = "1px solid #ccc";
  message.style.border = "1px solid #ccc";

  // Regex for only letters & spaces
  let onlyLetters = /^[A-Za-z\s]+$/;

  // Name check
  if (name.value.trim() === "" || !onlyLetters.test(name.value.trim())) {
    name.style.border = "2px solid red";
    valid = false;
  }

  // Email check
  if (email.value.trim() === "") {
    email.style.border = "2px solid red";
    valid = false;
  } else {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      email.style.border = "2px solid red";
      valid = false;
      invalidEmail = true;
    }
  }

  // Subject check
  if (subject.value.trim() === "" || !onlyLetters.test(subject.value.trim())) {
    subject.style.border = "2px solid red";
    valid = false;
  }

  // Message check
  if (message.value.trim() === "" || !onlyLetters.test(message.value.trim())) {
    message.style.border = "2px solid red";
    valid = false;
  }

  // Final result
  if (!valid) {
    if (invalidEmail) {
      alert("⚠️ Invalid email address.");
    } else {
      alert("⚠️ Please enter valid text (only letters allowed).");
    }
    return;
  }

  alert("✅ Your message has been sent successfully!");

  // Reset form
  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
});