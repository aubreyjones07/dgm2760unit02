/*jslint node:true*/
"use strict";

/*global alert*/




function loadinspectorImage() {
    
}


var companyTitle = "Inspector Clouseau";
document.getElementById("company").innerHTML = companyTitle;


var companySlogan = "We Are Know-It-Alls";
document.getElementById("slogan").innerHTML = companySlogan;






function myWindowResize() {
    var height = window.innerHeight, width = window.innerWidth, windowwidth = "My Window is " + width + " wide ", documenttitle = document.title, lastupdated = document.lastModified;
    windowwidth += "and " + height + " long";
    document.getElementById("windowsize").innerHTML = windowwidth;
    window.scrollBy(100, 100);
    document.getElementById("windowupperleftoffset").innerHTML = "The Window Page Offset is: <br>" + window.pageXOffset + " for x " + "and " + window.pageYOffset + " for Y.";
    document.getElementById("documenttitle").innerHTML = "This is the Document Title: " + documenttitle; 
    document.getElementById("lastupdated").innerHTML = "This is when the page was last updated: " + lastupdated; 
}

myWindowResize();

document.getElementById("url").innerHTML = "The full URL of this page is: <br>" + window.location.href; 



