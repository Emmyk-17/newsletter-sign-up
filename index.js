const form = document.getElementById("newsletter-form");
const email = document.querySelector(".email");
const dismissBtn = document.querySelector(".Dismiss");
const error = document.querySelector("#message");
const id = document.querySelector("#submitted-email");
const first = document.querySelector(".first");
const second = document.querySelector(".second");

form.addEventListener("submit", (e) =>{
  e.preventDefault();
  const emailValue = email.value.trim();

  if(emailValue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
     second.classList.remove("hide");
     first.style.display = "none";
     id.innerHTML = emailValue;
     email.value = ""
     email.style = "none"
     error.innerHTML = ""
     }

  else {
    error.innerHTML = "Valid email required";
    email.style.border = "1.5px solid hsl(4, 100%, 67%)";
    email.style.backgroundColor = "hsl(0, 85%, 97%)";
    email.style.color = " hsl(4, 100%, 67%)";
} 
});
dismissBtn.addEventListener("click", () => {
  second.classList.add("hide")
  first.style.display = "flex"
})