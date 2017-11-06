$(document).ready(function(){

// Set first color palette initially
for (var j = 1; j < 6; j++) {
   var barCol = "#colorBar"+[j].toString();
   $(colorName).text(palettes[currentPalette][0].toUpperCase());
   $(barCol).css("background-color", palettes[currentPalette][j].toString());
}

// Call setPalette which changes currentPalette, nextPalette, and backPalette
setPalette();

// Handles the back button click
$('.buttonBack').click(function(){
   currentPalette = backPalette;
   setPalette();
   changeColors();
});

// Handles forward button click
$('.buttonForward').click(function(){
   currentPalette = nextPalette;
   setPalette();
   changeColors();
});

// Handles random button click
$('.buttonRandom').click(function(){
   currentPalette = Math.floor(Math.random() * (palettes.length));
   setPalette();
   changeColors();
})




});
