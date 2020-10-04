/*---------------------------------------------*/
/* NAV */
/*---------------------------------------------*/

var openBtn = document.getElementById('menu');
var fadeSections = document.querySelectorAll('.fade_group');
let isMenuOpen = false;

function toggleNav(e) {
    var id = e.path[0].id;

    if (isMenuOpen == false) {
        openBtn.classList.add('open');
        fadeSections.forEach(fadeSection =>
            fadeSection.style["opacity"] = "0.5");

        isMenuOpen = !isMenuOpen;
    }
    if (isMenuOpen == true && id == "close_menu") {
        openBtn.classList.remove('open');
        fadeSections.forEach(fadeSection =>
            fadeSection.style["opacity"] = "1");

        isMenuOpen = !isMenuOpen;
    }
}

openBtn.addEventListener('click', toggleNav);

/*---------------------------------------------*/
/* ABOUT PANELS */
/*---------------------------------------------*/

// const hobbyPanels = document.querySelectorAll('.meInfo');

// function toggleOpen() {
//     this.classList.toggle('open');
// }

// function toggleActive(e) {
//     if (e.propertyName.includes('flex')) {
//         this.classList.toggle('open-active');
//     }
// }

// hobbyPanels.forEach(panel => panel.addEventListener('click', toggleOpen));
// hobbyPanels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


/*---------------------------------------------*/
/* ABOUT CONTENT */
/*---------------------------------------------*/
