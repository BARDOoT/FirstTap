

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
	startsesh();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var text = document.getElementById("plantype")
            if(this.responseText == 0)
                text.innerHTML = "Free";
            else if(this.responseText == "1")
                text.innerHTML = "Silver";
            else if(this.responseText == "2")
                text.innerHTML = "Gold";
            
        }
    };
    xmlhttp.open("GET", "../php/getPlan.php?q=", true);
    xmlhttp.send(); 

}

function callacc() {
	startsesh();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            document.getElementById("accountheadings").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "../php/accountinfo.php?q=", true);
    xmlhttp.send(); 

    getTransactions();
}

function getTransactions(){
    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var table = document.getElementById("transTable");
            var transArray = this.responseText.split("^");
            transArray.pop();
            transArray.forEach(function(transaction){
                var transDetail = transaction.split("*");
                var row = createRow(transDetail);
                table.appendChild(row);
            });
        }
    };
    xmlhttp2.open("GET", "../php/transactionHistory.php", true);
    xmlhttp2.send(); 
}

function createRow(detail){
    var row = document.createElement("TR");
    var counter = 0;
    detail.forEach(function(cell){
        var x = row.insertCell(counter++);
        x.innerHTML = cell;
    });
    return row;
}





