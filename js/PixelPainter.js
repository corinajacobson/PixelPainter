var module = (function() {
  var pixelPainter = document.getElementById('Pixel-Painter');
  var ppCanvas = document.createElement('div');
  var swatch;
  var navigation = document.createElement('div');
  var swatches = document.createElement('div');
  var mobileNav = document.createElement('div');


  var swatchColor = '#FFFFFF';
  var colorSelector = function () {
    swatchColor = this.id;
  };
  var gridNumber = 1500;
  var clickDown = false;
  var history = [];

  navigation.classList.add('nav');
  mobileNav.classList.add('mobile-nav');
  swatches.classList.add('swatches');
  pixelPainter.appendChild(navigation);
  navigation.appendChild(mobileNav);
  navigation.appendChild(swatches);

  function coloring (colors) {
    var colorArray = colors || [
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
      '#FFFFFF',
      '#F2F2F2',
      '#BDBDBD',
      '#848484',
      '#585858',
      '#2E2E2E',
      '#000000'
    ];

   for (var i = 0; i < colorArray.length; i++) {
      swatch = document.createElement('div');
      swatch.id = colorArray[i];
      swatch.classList.add('swatch');
      swatch.style.backgroundColor = colorArray[i];
      swatch.addEventListener('click', colorSelector);
      swatches.appendChild(swatch);
    }
  }

  function renderCanvas (grid) {
    grid = grid || gridNumber;

    ppCanvas.classList.add('pp-canvas');
    pixelPainter.appendChild(ppCanvas);

    for (var i = 0; i < grid; i++) {
      var square = document.createElement('div');

      square.classList.add('square');
      square.id = ('square' + i);
      ppCanvas.appendChild(square);
      square.addEventListener('mousedown', function(){

      var obj = {
        pixel: this.id,
        color: this.style.backgroundColor
      };

      history.push(obj);
      this.style.backgroundColor = swatchColor;
      clickDown = true;
    });

    square.addEventListener('mouseup', function(){
      clickDown = false;
    });

    square.addEventListener('mouseover', function(){
       if (clickDown === true){
        var obj = {
          pixel : this.id,
          color : this.style.backgroundColor };
        history.push(obj);
         this.style.backgroundColor = swatchColor;
       }
    });

    }
  }

  function clearCanvas () {

    //creating button
     var clear = document.createElement('div');

     clear.innerHTML = "Clear";
     clear.classList.add('clear');
     navigation.appendChild(clear);

     //action
     clear.addEventListener('click', function() {

     var selectSquare = document.querySelectorAll('.square');

     for (var i = 0; i < selectSquare.length; i++) {
       selectSquare[i].style.backgroundColor = '#FFFFFF ';
     }
     });
  }
 function eraseCanvas () {
  //creating button
   var erase = document.createElement('div');

   erase.innerHTML = "Erase";
   erase.classList.add('clear');
   navigation.appendChild(erase);

   //action
   erase.addEventListener('click', function () {
     swatchColor = '#FFFFFF';
   });
 }


    function createUndo () {
      //creating button
      var undo = document.createElement('div');
      undo.innerHTML = "Undo";
      undo.classList.add('clear');
      navigation.appendChild(undo);

      //action
      undo.addEventListener('click', function () {

        if(history.length > 0) {
          var undoSquare = history[history.length-1].pixel;
          var undoColor = history[history.length-1].color;
          var undoThis = document.getElementById(undoSquare);
          undoThis.style.background = undoColor;
          history.pop();

        } else {
          console.log("no more undo's in history");
        }

      });

 }
  function mobileSwatch () {
    var mobileMenu = document.getElementsByClassName('mobile-nav')[0];
    mobileMenu.addEventListener('click', function () {
      ppCanvas.classList.toggle('no-display');
      swatches.classList.toggle('show');
      navigation.classList.toggle('full-width');

    });

  }

  return {
   renderCanvas: renderCanvas,
   clearCanvas: clearCanvas,
   eraseCanvas: eraseCanvas,
   coloring: coloring,
   createUndo: createUndo,
   mobileSwatch: mobileSwatch
  };

})(); //self-invoking function