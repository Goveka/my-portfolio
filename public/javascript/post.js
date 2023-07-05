const slides= document.querySelectorAll('.slide');
const prevBtn= document.getElementById('prevBtn');
const nextBtn= document.getElementById('nextBtn');
let currentSlide = 0;
let slideInterval= setInterval(nextSlide, 3000);

// show the initial slide
slides[currentSlide].classList.add('active');

//event listeners for manual navigation
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);


//function to go to the previous slide
function prevSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide= (currentSlide -1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    clearInterval(slideInterval);
    slideInterval= setInterval(nextSlide, 3000);
}

// function to go to the next slide
function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide=(currentSlide +1)% slides.length;
    slides[currentSlide].classList.add('active');
};

// clear automatic sliding interval when hovering over the slider
document.getElementById('slider').addEventListener('mouseover', ()=>{
    clearInterval(slideInterval)
});

//restart the automatic sliding interval when mouse leaves the slider
document.getElementById('slider').addEventListener('mouseout', ()=>{
    clearInterval(slideInterval);
    slideInterval= setInterval(nextSlide, 3000);
})