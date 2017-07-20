function myFunction() {
    var x = document.getElementById("navId");
    if (x.className === "navbar navbar-static-top") {
        x.className += " responsive";
    } else {
        x.className = "navbar navbar-static-top";
    }
}