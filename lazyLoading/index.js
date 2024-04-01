// https://source.unsplash.com/random

const Images = document.querySelector(".images");

for (let i = 0; i < 20; i++) {
  let image = document.createElement("img");
  image.classList.add("lazy");
  image.width = 1200;
  image.height = 800;
  Images.appendChild(image);
}
const allImages = document.querySelectorAll("img.lazy");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Image needs to be loaded
      console.log("LOADING A NEW RANDOM IMAGE");
      entry.target.src = "https://source.unsplash.com/random";
      observer.unobserve(entry.target);
    }
  });
});

allImages.forEach((img) => observer.observe(img));
