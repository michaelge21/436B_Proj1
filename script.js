function removeLoader() {
    document.getElementById("loadingScreen").style.display = "none";
}

function presentLoader() {
    document.getElementById("loadingScreen").style.display = "block";
}

function reload(){
    history.go(0);

    window.resizeTo(500,810);
}