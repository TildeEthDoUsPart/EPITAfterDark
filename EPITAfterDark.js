// ==UserScript==
// @name         EPTAfterDark
// @namespace    http://tampermonkey.net/
// @version      2025-03-05
// @description  Dark Mode for EPITA's moodle. Feel free to contribute!
// @author       TildeEth
// @match        https://moodle.epita.fr/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=epita.fr
// @grant        none
// ==/UserScript==

function addStyleSheet(style){
  var getHead = document.getElementsByTagName("HEAD")[0];
  var cssNode = window.document.createElement( 'style' );
  var elementStyle= getHead.appendChild(cssNode);
  elementStyle.innerHTML = style;
  return elementStyle;
}

addStyleSheet('@import "https://raw.githubusercontent.com/TildeEthDoUsPart/EPITAfterDark/refs/heads/main/DarkMoodle.css";');
