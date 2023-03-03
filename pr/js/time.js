const time = document.querySelector("#time");

function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  time.innerText = `${hours}:${minutes}:${seconds}`;
}
getTime();
setInterval(getTime, 1000);
