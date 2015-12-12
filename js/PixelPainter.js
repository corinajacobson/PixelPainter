
var pixelPainter = document.getElementById('Pixel-Painter');

var navigation = document.createElement('div');
navigation.classList.add('nav');
pixelPainter.appendChild(navigation);

var colorArray = [
'#51574a',    '#447c69',    '#74c493',
'#8e8c6d',    '#e4bf80',    '#e9d78e',
'#e2975d',    '#f19670',   '#e16552',
'#c94a53',   '#be5168',    '#a34974',
'#993767',    '#65387d',    '#4e2472',
'#9163b6',    '#e279a3',    '#e0598b',
'#7c9fb0',    '#5698c4',    '#9abf88',
'#1a1334',    '#26294a',    '#01545a',
'#017351',    '#03c383',    '#aad962',
'#fbbf45',    '#ef6a32',    '#ed0345',
'#a12a5e',    '#710162',    '#110141',
'#d53e4f',    '#f46d43',    '#fdae61',
'#fee08b',    '#ffffbf',    '#e6f598',
'#abdda4',    '#66c2a5',    '#3288bd'
];

for (var i = 0; i < colorArray.length; i++) {
  var swatch = document.createElement('button');
  swatch.id = 'swatchN' + i;
  swatch.classList.add('swatch');
  swatch.style.color = '#FF0000';
  navigation.appendChild(swatch);
}

var ppCanvas = document.createElement('div');
ppCanvas.classList.add('pp-canvas');
pixelPainter.appendChild(ppCanvas);

for (var i = 0; i < 800; i++) {
  var square = document.createElement('button');
  square.id = 'square' + i;
  square.classList.add('square');
  ppCanvas.appendChild(square);

  square.addEventListener('click', function () {
    // this.classList.add('');
    console.log(this.id);
  });
}