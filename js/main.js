/*jslint node:true*/
"use strict";

/*global alert*/




function inspectorImage() {
    
}






document.querySelector('#company').innerText = `Inspector Clouseau`
document.querySelector('#slogan').innerText = `This IZ Chief Inspector Clouseau \n speaking on the pheaun`


function reDisplay() {
let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall`
let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} pixels from the top of the display.`

let myWindow = document.querySelector("#myWindow").innerText = `${windowSizes} \n ${offset}`

let windowURL = document.querySelector("#url").innerText = `The full URL of this page is: ${window.location.href}`
let documentTitle = `This is the Document Title: ${document.title}`
let lastPageUpdate = `This is when the page was last updated: ${document.lastModified}`

let myDocument = document.querySelector("#myDocument").innerText = `${documentTitle} \n ${lastPageUpdate}`


window.scrollBy(100, 100);
  

}

reDisplay()


//document.getElementById("url").innerHTML = "The full URL of this page is: <br>" + window.location.href; 

