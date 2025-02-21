const contentPrimary = document.getElementById("content-primary");
const contentPrimaryButton = document.getElementById("content-primary-button");
const contentSecondary = document.getElementById("content-secondary");
const contentSecondaryButton = document.getElementById("content-secondary-button");


console.log(contentPrimaryButton);

function showHideText() {

    contentPrimaryButton.addEventListener("click", (e) => {
        e.preventDefault();
        contentPrimary.classList.toggle('hide');
        contentSecondary.classList.toggle('hide');
    })

    contentSecondaryButton.addEventListener("click", (e) => {
        e.preventDefault();
        contentPrimary.classList.toggle('hide');
        contentSecondary.classList.toggle('hide');
    })
}
showHideText(); 


/*-------------------------------------------
Marquee animation 
--------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {

    const duration = 10000; // durata dell'animazione in ms
    const pauseTime = 2000; // tempo di pausa in ms
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
        iterations: 2, // una sola iterazione per volta
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