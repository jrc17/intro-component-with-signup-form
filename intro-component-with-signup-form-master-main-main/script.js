const inputs = document.querySelectorAll(".input-field");
const submit = document.querySelector("#submit");

let mailRegex =
  /^[a-zA-Z0-9]([-_]?[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]([-_]?[a-zA-Z0-9]+)*)*@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

submit.addEventListener("click", function () {
  inputs.forEach((input) => {
    const errorMsg = input.querySelector(".error-msg");
    const errorIcon = input.querySelector(".icon-error");
    const inputText = input.querySelector(".input-text");
    const email = input.querySelector("#email");
    // if the input field is empty
    if (inputText.value === "") {
      // display errors
      errorMsg.classList.remove("remove");
      errorIcon.classList.remove("remove");
      inputText.classList.add("error");
      inputText.placeholder = "";
      // if email is not valid
    } else if (!email.value.match(mailRegex)) {
      // change error message
      errorMsg.innerText = "Looks like this is not an email";
      email.style.color = "rgba(255, 122, 122, 0.9)";
      errorMsg.classList.remove("remove");
      inputText.classList.add("error");
      errorIcon.classList.remove("remove");
    }
  });
});
