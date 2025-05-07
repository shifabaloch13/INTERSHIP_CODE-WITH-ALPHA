const galleryImages = document.querySelectorAll(".gallery img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const close = document.getElementById("close");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentIndex = 0;

function openPopup(index) {
  popup.style.display = "flex";
  popupImg.src = galleryImages[index].src;
  currentIndex = index;
}

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => openPopup(index));
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  popupImg.src = galleryImages[currentIndex].src;
});

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  popupImg.src = galleryImages[currentIndex].src;
});
