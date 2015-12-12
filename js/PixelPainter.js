var pixelPainter = document.getElementById('Pixel-Painter');

var navigation = document.createElement('div');
navigation.classList.add('nav');
pixelPainter.appendChild(navigation);
var current_swatch_color = null;

var colorArray = [
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

var swatchColor = null;
var colorSelector = function () {
  swatchColor = this.id;
};

for (var i = 0; i < colorArray.length; i++) {
  var swatch = document.createElement('div');
  swatch.id = colorArray[i];
  swatch.classList.add('swatch');
  swatch.style.backgroundColor = colorArray[i];
  swatch.addEventListener('click', colorSelector);
  navigation.appendChild(swatch);
}


var ppCanvas = document.createElement('div');
ppCanvas.classList.add('pp-canvas');
pixelPainter.appendChild(ppCanvas);

for (var i = 0; i < 800; i++) {
  var square = document.createElement('button');
  square.classList.add('square');
  square.addEventListener('click', function(){
  this.style.backgroundColor = swatchColor;    //qwerty
  });
  ppCanvas.appendChild(square);
}

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

var erase = document.createElement('button');
erase.innerHTML = "Erase";
erase.classList.add('erase');
navigation.appendChild(erase);
erase.addEventListener('click', function () {
  swatchColor = '#FFFFFF';
});
