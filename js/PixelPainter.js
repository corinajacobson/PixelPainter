var pixelPainter = document.getElementById('Pixel-Painter');

var navigation = document.createElement('div');
navigation.classList.add('nav');
pixelPainter.appendChild(navigation);
var current_swatch_color = null;

var colorArray = [
//black
'#1A1334',
'#110141',
'#26294A',

//purple
'#4E2472',
'#710162',
'#65387D',
'#9163B6',

//green
'#51574A',
'#8E8C6D',
'#017351',
'#447C69',
'#03C383',
'#74C493',
//blue
'#15475A',
'#3288BD',

'#5698C4',
'#66C2A5',


'#7C9FB0',


'#993767',
'#9ABF88',
'#A12A5E',
'#A34974',
'#AAD962',
'#ABDDA4',
'#BE5168',
'#C94A53',
'#D53E4F',
'#E0598B',
'#E16552',
'#E279A3',
'#E2975D',
'#E4BF80',
'#E6F598',
'#E9D78E',
'#ED0345',
'#EF6A32',
'#F19670',
'#F46D43',
'#FBBF45',
'#FDAE61',
'#FEE08B',
'#FFFFBF'
];

var swatchColor = null;
var colorSelector = function () {
  swatchColor = this.id;
};

for (var i = 0; i < colorArray.length; i++) {
  var swatch = document.createElement('button');
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