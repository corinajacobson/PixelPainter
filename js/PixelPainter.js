var module = (function() {
  var pixelPainter = document.getElementById('Pixel-Painter');

  var navigation = document.createElement('div');
  navigation.classList.add('nav');
  pixelPainter.appendChild(navigation);

  var swatchColor = null;
  var colorSelector = function () {
    swatchColor = this.id;
  };
  var gridNumber = 1008;

  function coloring (colors) {
    var colorArray = colors || [
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

  for (var i = 0; i < colorArray.length; i++) {
    var swatch = document.createElement('div');
    swatch.id = colorArray[i];
    swatch.classList.add('swatch');
    swatch.style.backgroundColor = colorArray[i];
    swatch.addEventListener('click', colorSelector);
    navigation.appendChild(swatch);
  }
}
  function renderCanvas (grid) {
    grid = grid || gridNumber;
    var ppCanvas = document.createElement('div');
    ppCanvas.classList.add('pp-canvas');
    pixelPainter.appendChild(ppCanvas);

    for (var i = 0; i < grid; i++) {
      var square = document.createElement('div');
      square.classList.add('square');
      square.addEventListener('click', function(){
      this.style.backgroundColor = swatchColor;
      });
      ppCanvas.appendChild(square);
    }
  }
  function clearCanvas () {
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
  }


  function eraseCanvas () {
    var erase = document.createElement('button');
    erase.innerHTML = "Erase";
    erase.classList.add('erase');
    navigation.appendChild(erase);
    erase.addEventListener('click', function () {
      swatchColor = '#FFFFFF';
    });
  }


  return {
    renderCanvas: renderCanvas,
    clearCanvas: clearCanvas,
    eraseCanvas: eraseCanvas,
    coloring: coloring
  };
})(); //self-invoking function


