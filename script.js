function removeLoader() {
    document.getElementById("loadingScreen").style.display = "none";
}

function presentLoader() {
    document.getElementById("loadingScreen").style.display = "block";
}

// make a function that reloads the page and try to prevent the loadingPage
// from showing again