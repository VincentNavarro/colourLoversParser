// global variables and functions
const palettes = [];
var currentPalette = 0;
var nextPalette = 0;
var backPalette = 0;

function setPalette(){
   // Set backPalette
   if(currentPalette - 1 < 0){
      backPalette = palettes.length - 1;
   }
   else{
      backPalette = currentPalette - 1;
   }

   // Set nextPalette
   if(currentPalette + 1 > palettes.length - 1){
      nextPalette = 0;
   }
   else{
      nextPalette = currentPalette + 1;
   }
}

function changeColors(){
   for (var j = 1; j < 6; j++) {
      var barCol = "#colorBar"+[j].toString();
      $(barCol).css("background-color", palettes[currentPalette][j].toString());
   }

   $(colorName).fadeOut('fast', function(){
      $(this).text(palettes[currentPalette][0].toUpperCase())
   }).fadeIn('fast');
}
