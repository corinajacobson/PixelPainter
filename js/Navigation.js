window.onload = function(){
var colorArray = [   //array of colors, in navigation
'#FFFFFF',
'#E60066',
'#FF0000',
'#FF3300',
'#FF6600',
'#FF8000',
'#FF9900',
'#FFCC00',
'#FFE500',
'#FFFF00',
'#CCFF00',
'#99FF00',
'#33FF00',
'#00CC00',
'#00B366',
'#009999',
'#0066B3',
'#0033CC',
'#1919B3',
'#CC0099',
'#990099',
'#660099',
'#400099',
'#330099',
'#000000'
];

//brown div on left that contains swatch
var navigation = document.createElement('div');
//adding class 'nav' to navigation
navigation.classList.add('nav');

//appending nav to main div
pixelPainter.appendChild(navigation);
//represents current color to be used on canvas
var swatchColor = null;
//takes hex color from element id and assigns it to swatchColor, in event listener when
//creating each swatch
var colorSelector = function () {
  swatchColor = this.id;
};
//creating each swatch, assigning background color, and adding event listener to each one
for (var i = 0; i < colorArray.length; i++) {
  var swatch = document.createElement('div');
  swatch.id = colorArray[i];
  swatch.classList.add('swatch');
  swatch.style.backgroundColor = colorArray[i];
  swatch.addEventListener('click', colorSelector);
  navigation.appendChild(swatch);
}

//creating the clear button and adding functionality
var clear = document.createElement('button');
clear.innerHTML = "Clear";
clear.classList.add('clear');
navigation.appendChild(clear);
clear.addEventListener('click', function() {
var selectSquare = document.querySelectorAll('.square');
for (var i = 0; i < selectSquare.length; i++) {
  selectSquare[i].style.backgroundColor = '#FFFFFF';
}
});

//adding the erase button and adding functionality to it
var erase = document.createElement('button');
erase.innerHTML = "Erase";
erase.classList.add('erase');
navigation.appendChild(erase);
erase.addEventListener('click', function () {
  swatchColor = '#FFFFFF';
});


};