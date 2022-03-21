const images = document.querySelectorAll(".image");

images.forEach((image) => {                            //for each image
    image.addEventListener("click", () => {
        removeActiveClasses();
        image.classList.add("active");
    })
});

function removeActiveClasses() {
    images.forEach((image) => {
      image.classList.remove("active");  
})}
