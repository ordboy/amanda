let imageContainer = document.querySelector("#image-container");

for (let i = 0; i <= 48; i++) {
	let image = document.createElement("img");
	image.setAttribute("src", "images/" + i + ".jpg");
	imageContainer.appendChild(image);
}