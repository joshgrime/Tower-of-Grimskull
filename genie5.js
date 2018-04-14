function genie5 (prev, end){
    //set colours
var blue = "#09295e";
var yellow = "#fcf235";
var lava = "#aa0005";
    
    
//player start
if (prev == 2 || prev == 7) {$('#95').append('<div id=\"player\"></div>');}
else if (prev == 1) {$('#5').append('<div id=\"player\"></div>');}
else if (prev == 3 && end == 'north') {$('#5').append('<div id=\"player\"></div>');}
else if (prev == 3 && end == 'east') {$('#63').append('<div id=\"player\"></div>');}
else if (prev == 4){$('#33').append('<div id=\"player\"></div>');}
//player end
if (prev == 2 || prev == 7) {$('#5').addClass('end').addClass('5n');}
else if (prev == 1) {$('#95').addClass('end').addClass('5s')}
else if (prev == 3 && end == 'north') {$('#95').addClass('end').addClass('5s');}
else if (prev == 3 && end == 'east') {$('#66').addClass('end').addClass('5w2');}
else if (prev == 4) {$('#36').addClass('end').addClass('5w1');}
//enemies
//NPCs
//objects
   var haveKey22 = $(".bag").find("#LavaKey").length;
    if (haveKey22 >= 1){}
    else {
$('#65').append('<div class=\"lavakey\" id=\"LavaKey\"></div>');}	
//hp
//keys
//tiles

$( "#0" ).css( "background-color", blue).addClass("blue");				
$( "#1" ).css( "background-color", blue).addClass("blue");				
$( "#2" ).css( "background-color", blue).addClass("blue");				
$( "#3" ).css( "background-color", blue).addClass("blue");				
$( "#4" ).css( "background-color", blue).addClass("blue");				
$( "#5" ).css( "background-color", yellow).addClass("yellow");				
$( "#6" ).css( "background-color", blue).addClass("blue");				
$( "#7" ).css( "background-color", blue).addClass("blue");				
$( "#8" ).css( "background-color", blue).addClass("blue");				
$( "#9" ).css( "background-color", blue).addClass("blue");				
$( "#10" ).css( "background-color", blue).addClass("blue");				
$( "#11" ).css( "background-color", yellow).addClass("yellow");				
$( "#12" ).css( "background-color", yellow).addClass("yellow");				
$( "#13" ).css( "background-color", yellow).addClass("yellow");				
$( "#14" ).css( "background-color", yellow).addClass("yellow");				
$( "#15" ).css( "background-color", yellow).addClass("yellow");				
$( "#16" ).css( "background-color", yellow).addClass("yellow");				
$( "#17" ).css( "background-color", yellow).addClass("yellow");				
$( "#18" ).css( "background-color", yellow).addClass("yellow");				
$( "#19" ).css( "background-color", blue).addClass("blue");				
$( "#20" ).css( "background-color", blue).addClass("blue");				
$( "#21" ).css( "background-color", yellow).addClass("yellow");				
$( "#22" ).css( "background-color", blue).addClass("blue");				
$( "#23" ).css( "background-color", blue).addClass("blue");				
$( "#24" ).css( "background-color", blue).addClass("blue");				
$( "#25" ).css( "background-color", blue).addClass("blue");				
$( "#26" ).css( "background-color", blue).addClass("blue");				
$( "#27" ).css( "background-color", blue).addClass("blue");				
$( "#28" ).css( "background-color", yellow).addClass("yellow");				
$( "#29" ).css( "background-color", blue).addClass("blue");				
$( "#30" ).css( "background-color", blue).addClass("blue");				
$( "#31" ).css( "background-color", yellow).addClass("yellow");				
$( "#32" ).css( "background-color", blue).addClass("blue");				
$( "#33" ).css( "background-color", yellow).addClass("yellow");				
$( "#34" ).css( "background-color", yellow).addClass("yellow");				
$( "#35" ).css( "background-color", yellow).addClass("yellow");				
$( "#36" ).css( "background-color", yellow).addClass("yellow");				
$( "#37" ).css( "background-color", blue).addClass("blue");				
$( "#38" ).css( "background-color", yellow).addClass("yellow");				
$( "#39" ).css( "background-color", blue).addClass("blue");				
$( "#40" ).css( "background-color", blue).addClass("blue");				
$( "#41" ).css( "background-color", yellow).addClass("yellow");				
$( "#42" ).css( "background-color", blue).addClass("blue");				
$( "#43" ).css( "background-color", blue).addClass("blue");				
$( "#44" ).css( "background-color", blue).addClass("blue");				
$( "#45" ).css( "background-color", blue).addClass("blue");				
$( "#46" ).css( "background-color", blue).addClass("blue");				
$( "#47" ).css( "background-color", blue).addClass("blue");				
$( "#48" ).css( "background-color", yellow).addClass("yellow");				
$( "#49" ).css( "background-color", blue).addClass("blue");				
$( "#50" ).css( "background-color", blue).addClass("blue");				
$( "#51" ).css( "background-color", yellow).addClass("yellow");				
$( "#52" ).css( "background-color", blue).addClass("blue");				
$( "#53" ).css( "background-color", blue).addClass("blue");				
$( "#54" ).css( "background-color", blue).addClass("blue");				
$( "#55" ).css( "background-color", blue).addClass("blue");				
$( "#56" ).css( "background-color", blue).addClass("blue");				
$( "#57" ).css( "background-color", blue).addClass("blue");				
$( "#58" ).css( "background-color", yellow).addClass("yellow");				
$( "#59" ).css( "background-color", blue).addClass("blue");				
$( "#60" ).css( "background-color", blue).addClass("blue");				
$( "#61" ).css( "background-color", yellow).addClass("yellow");				
$( "#62" ).css( "background-color", blue).addClass("blue");				
$( "#63" ).css( "background-color", yellow).addClass("yellow");				
$( "#64" ).css( "background-color", yellow).addClass("yellow");				
$( "#65" ).css( "background-color", yellow).addClass("yellow");				
$( "#66" ).css( "background-color", yellow).addClass("yellow");				
$( "#67" ).css( "background-color", blue).addClass("blue");				
$( "#68" ).css( "background-color", yellow).addClass("yellow");				
$( "#69" ).css( "background-color", blue).addClass("blue");				
$( "#70" ).css( "background-color", blue).addClass("blue");				
$( "#71" ).css( "background-color", yellow).addClass("yellow");				
$( "#72" ).css( "background-color", blue).addClass("blue");				
$( "#73" ).css( "background-color", blue).addClass("blue");				
$( "#74" ).css( "background-color", blue).addClass("blue");				
$( "#75" ).css( "background-color", blue).addClass("blue");				
$( "#76" ).css( "background-color", blue).addClass("blue");				
$( "#77" ).css( "background-color", blue).addClass("blue");				
$( "#78" ).css( "background-color", yellow).addClass("yellow");				
$( "#79" ).css( "background-color", blue).addClass("blue");				
$( "#80" ).css( "background-color", blue).addClass("blue");				
$( "#81" ).css( "background-color", yellow).addClass("yellow");				
$( "#82" ).css( "background-color", yellow).addClass("yellow");				
$( "#83" ).css( "background-color", yellow).addClass("yellow");				
$( "#84" ).css( "background-color", yellow).addClass("yellow");				
$( "#85" ).css( "background-color", yellow).addClass("yellow");				
$( "#86" ).css( "background-color", yellow).addClass("yellow");				
$( "#87" ).css( "background-color", yellow).addClass("yellow");				
$( "#88" ).css( "background-color", yellow).addClass("yellow");				
$( "#89" ).css( "background-color", blue).addClass("blue");				
$( "#90" ).css( "background-color", blue).addClass("blue");				
$( "#91" ).css( "background-color", blue).addClass("blue");				
$( "#92" ).css( "background-color", blue).addClass("blue");				
$( "#93" ).css( "background-color", blue).addClass("blue");				
$( "#94" ).css( "background-color", blue).addClass("blue");				
$( "#95" ).css( "background-color", yellow).addClass("yellow");				
$( "#96" ).css( "background-color", blue).addClass("blue");				
$( "#97" ).css( "background-color", blue).addClass("blue");				
$( "#98" ).css( "background-color", blue).addClass("blue");				
$( "#99" ).css( "background-color", blue).addClass("blue");																																													
    
//doors

//start of zone popup 
}
