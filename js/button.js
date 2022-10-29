/*
      window.pageYOffset;
      window.scrollBy(xaxis, yaxis);
 */

window.onload = function() {
    var toTopButton = document.getElementById("toTopButton");


    window.onscroll = function() {

        var toTopButton = document.getElementById("toTopButton");

        var yScrollAxis = window.pageYOffset;

        if (yScrollAxis > 100)
            toTopButton.style.display = "block";
        else
            toTopButton.style.display = "none";


    };
    toTopButton.onclick = function() {
        window.scrollBy(0, -1 * window.pageYOffset);
    };
};