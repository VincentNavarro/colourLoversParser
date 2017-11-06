// Global variables

$(document).ready(function(){
   // Grabs JSON file originally saved from colourLovers API pull
   $.getJSON('json/colourLovers.json', function(data){
         // Grabs JSON title and array of colors
         for(let i = 0; i < data.length ; i++) {
            let tempArr = [];

            tempArr.push(String(data[i].title));
            tempArr.push('#'+data[i].colors[0]);
            tempArr.push('#'+data[i].colors[1]);
            tempArr.push('#'+data[i].colors[2]);
            tempArr.push('#'+data[i].colors[3]);
            tempArr.push('#'+data[i].colors[4]);

            palettes[i] = tempArr;
         }
   });


});
