let menuBtn = document.getElementById('mobile-menu-btn');

menuBtn.addEventListener('click', (event) => {

    let modalMobile = document.getElementById('modal-mobile');

    modalMobile.style = "display: block;";

    event.preventDefault();
    modalMobile.classList.add('modal-active');

}, false);

// ------------------------------------------------------------
let mobileCloseBtn = document.getElementById('mobile-close-btn');

mobileCloseBtn.addEventListener('click', (event) => {

    let modalMobile = document.getElementById('modal-mobile');

    // event.preventDefault();
    modalMobile.classList.remove('modal-active');

}, false);
// ---------------------------------------------------------
let menuItems = document.getElementsByClassName('mobile-menu-item');

console.log(menuItems[2]);

for (let i = 0; i < menuItems.length; i++) {

    menuItems[i].addEventListener('click', (event) => {

        let modalMobile = document.getElementById('modal-mobile');

        // event.preventDefault();
        modalMobile.classList.remove('modal-active');

    }, false);

}

// ------------------------------------------------------------

let idName = document.getElementById('id-calback-name');
let idEmail = document.getElementById('id-calback-email');
let idPhone = document.getElementById('id-calback-phone');
let idSendButton = document.getElementById('id-send-btn');



idSendButton.addEventListener('click', (event) => {

    event.preventDefault();

    if (!idName.value.trim()) {
        idName.classList.add('error-input');
    }

    if (!idEmail.value.trim()) {
        idEmail.classList.add('error-input');
    }

    if (!idPhone.value.trim()) {
        idPhone.classList.add('error-input');
    }

    return;

}, false);


idName.addEventListener('focus', (event) => {

    idName.classList.remove('error-input');

});

idEmail.addEventListener('focus', (event) => {

    idEmail.classList.remove('error-input');

});
idPhone.addEventListener('focus', (event) => {

    idPhone.classList.remove('error-input');

});