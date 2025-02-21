/*-------------------------------------------
Animation text primary / secondary 
--------------------------------------------*/
const contentWrapper = document.querySelector('.content-wrapper');
const contentPrimary = document.getElementById("content-primary");
const contentPrimaryButton = document.getElementById("content-primary-button");
const contentSecondary = document.getElementById("content-secondary");
const contentSecondaryButton = document.getElementById("content-secondary-button");

function showHideText() {
    contentPrimaryButton.addEventListener("click", (e) => {
        e.preventDefault();
        toggleContent(contentPrimary, contentSecondary);
    });

    contentSecondaryButton.addEventListener("click", (e) => {
        e.preventDefault();
        toggleContent(contentSecondary, contentPrimary);
    });
}

function toggleContent(hideElement, showElement) {
    contentWrapper.style.height = hideElement.offsetHeight + "px"; // Mantiene l'altezza attuale
    contentWrapper.style.opacity = "0"; // Fade out

    setTimeout(() => {
        hideElement.classList.add("hide");
        showElement.classList.remove("hide");
        
        contentWrapper.style.height = showElement.offsetHeight + "px"; // Anima la nuova altezza
        contentWrapper.style.opacity = "1"; // Fade in
    }, 500);
}

showHideText();


/*-------------------------------------------
Marquee animation 
--------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {

    const duration = 20000; // durata dell'animazione in ms
    const pauseTime = 300; // tempo di pausa in ms
    const directionAnimation = 'left';  // direzione dello scorrimento: left or right  

    const marquee = document.querySelector('.marquee');
    const span = marquee.querySelector('span');

    const marqueeWidth = marquee.offsetWidth;
    const spanWidth = span.offsetWidth;

    let keyframes = [];
    if ('left' === directionAnimation) {
        keyframes = [
            { transform: `translateX(${marqueeWidth}px)` },
            { transform: `translateX(${-spanWidth}px)` }
        ];
    } else if ('right' === directionAnimation) {
        keyframes = [
            { transform: `translateX(${-spanWidth}px)` },
            { transform: `translateX(${marqueeWidth}px)` }
        ];
    }

    let options = {
        duration: duration,
        iterations: 1, // una sola iterazione per volta
        easing: "linear"
    };

    function startAnimation() {
        const marqueeAnimation = span.animate(keyframes, options);

        marqueeAnimation.onfinish = function () {
            setTimeout(startAnimation, pauseTime); // Dopo la pausa, riavvia l'animazione
        };
    }

    startAnimation();
});