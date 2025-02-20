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