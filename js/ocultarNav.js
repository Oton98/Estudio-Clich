let prevScrollPos = window.scrollY || window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.scrollY || window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-120px";
    }

    prevScrollPos = currentScrollPos;
};