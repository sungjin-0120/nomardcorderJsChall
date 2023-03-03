const imgs = ["0.jpg", "1.jpg", "2.jpg"];
const choosenImgs = imgs[Math.floor(Math.random() * imgs.length)];

const bgi = document.createElement("img");
bgi.src = `2/img/${choosenImgs}`;

document.body.appendChild(bgi);
