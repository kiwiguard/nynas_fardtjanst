// General scripts for entire webpage
"use strict";

var isOpen1 = false;
var isOpen2 = false;


function openInfo(id) {
    switch (id) {
        case 1:
            if(isOpen1 != true) {
                document.getElementById("info" + id).style.display = "block";
                document.getElementById("minus" + id).style.display = "block";
                document.getElementById("plus" + id).style.display = "none";
                document.getElementById("infoBtn" + id).setAttribute('aria-expanded', 'true');
                isOpen1 = true;
            } else {
                document.getElementById("info" + id).style.display = "none";
                document.getElementById("minus" + id).style.display = "none";
                document.getElementById("plus" + id).style.display = "block";
                document.getElementById("infoBtn" + id).setAttribute('aria-expanded', 'false');
                isOpen1 = false;
            }
            break;
        case 2:
            if(isOpen2 != true) {
                document.getElementById("info" + id).style.display = "block";
                document.getElementById("minus" + id).style.display = "block";
                document.getElementById("plus" + id).style.display = "none";
                document.getElementById("infoBtn" + id).setAttribute('aria-expanded', 'true');
                isOpen2 = true;
            } else {
                document.getElementById("info" + id).style.display = "none";
                document.getElementById("minus" + id).style.display = "none";
                document.getElementById("plus" + id).style.display = "block";
                document.getElementById("infoBtn" + id).setAttribute('aria-expanded', 'false');
                isOpen2 = false;
            }
            break;   
    }
}