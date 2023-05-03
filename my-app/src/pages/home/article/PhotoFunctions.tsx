export const showSlides = (slideIndex: number, ) => {
    console.log(slideIndex)
    let i;
    let slides = document.getElementsByClassName("image-container") as HTMLCollectionOf<HTMLElement>;
    // let slides = document.querySelector(".article-content");
    console.log(slides)

    // let dots = document.getElementsByClassName("dot");
    // if (n > slides.length) {slideIndex = 1}    
    // if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";  
    }
    // for (i = 0; i < dots.length; i++) {
        //   dots[i].className = dots[i].className.replace(" active", "");
        // }
    // slides[0].style.display = "block";
    // slides[slideIndex-1].setAttribute("style","display:block");  
    // slides[slideIndex-1].className = slides[slideIndex-1].className.replace(" active", "");
    // dots[slideIndex-1].className += " active";
}

// export const plusSlides = (slideIndex: number, n:number) => {
//     showSlides(slideIndex += n);
// }

// export const currentSlide = (n:number) => {
//     showSlides(slideIndex = n);
// }


