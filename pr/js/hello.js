const helloForm = document.querySelector("#hello-form");
const helloInput = document.querySelector("#hello-form input");
const hello = document.querySelector("#hello");

function onHelloSubmit(event) {
  event.preventDefault();
  /*새로고침 안됨*/
  const userName = helloInput.value;
  localStorage.setItem("userName", userName);
  helloForm.classList.add("hidden");
  paintname(userName);
}

function paintname(name) {
  hello.innerText = `How are you? ${name}`;
}

const savedName = localStorage.getItem("userName");
if (savedName === null) {
  helloForm.classList.remove("hidden");
  helloForm.addEventListener("submit", onHelloSubmit);
} else {
  paintname(savedName);
}
