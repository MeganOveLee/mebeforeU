const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;
// bgImage.classList.add("backgroundImg");

// document.body.appendChild(bgImage);

const bgDiv = document.createElement("div");
bgDiv.style.backgroundImage = `url('img/${chosenImage}')`;
bgDiv.classList.add("background");

document.body.appendChild(bgDiv);
