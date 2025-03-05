function addStyleSheet(style){
  var getHead = document.getElementsByTagName("HEAD")[0];
  var cssNode = window.document.createElement( 'style' );
  var elementStyle= getHead.appendChild(cssNode);
  elementStyle.innerHTML = style;
  return elementStyle;
}

addStyleSheet('@import "https://raw.githubusercontent.com/TildeEthDoUsPart/EPITAfterDark/refs/heads/main/DarkMoodle.css";');
