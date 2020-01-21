

function startsesh() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("headings").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "../php/session.php?q=", true);
    xmlhttp.send(); 
}

function getPlan() {