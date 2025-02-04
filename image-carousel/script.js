// as per requirement array of image URLs
const imageUrls = ["img1.JPG", "img2.JPG", "img3.JPG", "img4.JPG"];
// get elements in const
let currentIndex = 0;
const carouselImage = document.getElementById("carousel-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
// prev button dissable on first and next button dissable at last
function updateCarousel() {
  carouselImage.src = imageUrls[currentIndex];
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === imageUrls.length - 1;
}
//to move on previous image
function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}
// to move on next image
function nextImage() {
  if (currentIndex < imageUrls.length - 1) {
    currentIndex++;
    updateCarousel();
  }
}
// in this we can set the inetrval of image after 5 seconds the image will update to another image
function autoplayCarousel() {
  setInterval(() => {
    if (currentIndex < imageUrls.length - 1) {
      nextImage();
    } else {
      currentIndex = 0;
      updateCarousel();
    }
  }, 10000);
}

// Initialize carousel
updateCarousel();
autoplayCarousel();
