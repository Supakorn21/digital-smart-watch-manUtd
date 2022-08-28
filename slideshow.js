const slideshowImage = document.querySelectorAll(".circle .slideshow-img");

const nextImageDelay = 3000;
let currentImageCounter = 0;

// slideshowImage[currentImageCounter].style.display = "block";
slideshowImage[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  //   slideshowImage[currentImageCounter].style.display = "none";
  slideshowImage[currentImageCounter].style.opacity = 0;
  currentImageCounter = (currentImageCounter + 1) % slideshowImage.length;
  //   slideshowImage[currentImageCounter].style.display = "block";
  slideshowImage[currentImageCounter].style.opacity = 1;
}
