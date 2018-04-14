function lvl7 (type){
var starter = type;
//set colours
var land = "forestgreen";
var sea = "dodgerblue";
var sand = "darkkhaki";
var wall = "#414956";
var road = "#b2b2ab";
var tree = "#1d590e";
    
//player start
if (starter == 1) {$('#89').append('<div id=\"player\"></div>');} else {$('#59').append('<div id=\"player\"></div>');}
//player end
$('#2').addClass('end');
$('#3').addClass('end');
$('#4').addClass('end');
//enemies
$('#47').append('<div class=\"enemy Necromancer\" id=\"0necromancer\"></div>');
$('#38').append('<div class=\"enemy Necromancer\" id=\"1necromancer\"></div>');
$('#12').append('<div class=\"enemy Necromancer\" id=\"2necromancer\"></div>');
$('#13').append('<div class=\"enemy Necromancer\" id=\"3necromancer\"></div>');
$('#14').append('<div class=\"enemy Necromancer\" id=\"4necromancer\"></div>');
$('#34').append('<div class=\"enemy Skeleton\" id=\"0skeleton\"></div>');
$('#21').append('<div class=\"enemy Skeleton\" id=\"1skeleton\"></div>');
//NPCs
//objects
$('#64').append('<div class=\"armour\" id=\"RustyArmour\"></div>');
$('#18').append('<div class=\"armour\" id=\"StuddedLeatherArmour\"></div>');
//keys
$('#63').append('<div class=\"key\" id=\"SmallKey\"></div>');
//hp
$('#11').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#65').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#68').append('<div class=\"hppickup\" id=\"Banana\"></div>');
   
    
//tiles
$( "#0" ).css( "background-color", tree).addClass("tree");				
$( "#1" ).css( "background-color", tree).addClass("tree");				
$( "#2" ).css( "background-color", land).addClass("land");				
$( "#3" ).css( "background-color", land).addClass("land");				
$( "#4" ).css( "background-color", land).addClass("land");				
$( "#5" ).css( "background-color", tree).addClass("tree");				
$( "#6" ).css( "background-color", tree).addClass("tree");				
$( "#7" ).css( "background-color", tree).addClass("tree");				
$( "#8" ).css( "background-color", tree).addClass("tree");				
$( "#9" ).css( "background-color", tree).addClass("tree");				
$( "#10" ).css( "background-color", tree).addClass("tree");				
$( "#11" ).css( "background-color", land).addClass("land");				
$( "#12" ).css( "background-color", land).addClass("land");				
$( "#13" ).css( "background-color", land).addClass("land");				
$( "#14" ).css( "background-color", land).addClass("land");				
$( "#15" ).css( "background-color", land).addClass("land");				
$( "#16" ).css( "background-color", land).addClass("land");				
$( "#17" ).css( "background-color", land).addClass("land");				
$( "#18" ).css( "background-color", land).addClass("land");				
$( "#19" ).css( "background-color", tree).addClass("tree");				
$( "#20" ).css( "background-color", tree).addClass("tree");				
$( "#21" ).css( "background-color", land).addClass("land");				
$( "#22" ).css( "background-color", land).addClass("land");				
$( "#23" ).css( "background-color", land).addClass("land");				
$( "#24" ).css( "background-color", land).addClass("land");				
$( "#25" ).css( "background-color", land).addClass("land");				
$( "#26" ).css( "background-color", land).addClass("land");				
$( "#27" ).css( "background-color", land).addClass("land");				
$( "#28" ).css( "background-color", land).addClass("land");				
$( "#29" ).css( "background-color", tree).addClass("tree");				
$( "#30" ).css( "background-color", tree).addClass("tree");				
$( "#31" ).css( "background-color", land).addClass("land");				
$( "#32" ).css( "background-color", land).addClass("land");				
$( "#33" ).css( "background-color", land).addClass("land");				
$( "#34" ).css( "background-color", land).addClass("land");				
$( "#35" ).css( "background-color", land).addClass("land");				
$( "#36" ).css( "background-color", land).addClass("land");				
$( "#37" ).css( "background-color", land).addClass("land");				
$( "#38" ).css( "background-color", land).addClass("land");				
$( "#39" ).css( "background-color", tree).addClass("tree");				
$( "#40" ).css( "background-color", tree).addClass("tree");				
$( "#41" ).css( "background-color", land).addClass("land");				
$( "#42" ).css( "background-color", land).addClass("land");				
$( "#43" ).css( "background-color", land).addClass("land");				
$( "#44" ).css( "background-color", land).addClass("land");				
$( "#45" ).css( "background-color", land).addClass("land");				
$( "#46" ).css( "background-color", land).addClass("land");				
$( "#47" ).css( "background-color", land).addClass("land");				
$( "#48" ).css( "background-color", land).addClass("land");				
$( "#49" ).css( "background-color", tree).addClass("tree");				
$( "#50" ).css( "background-color", tree).addClass("tree");				
$( "#51" ).css( "background-color", land).addClass("land");				
$( "#52" ).css( "background-color", tree).addClass("tree");				
$( "#53" ).css( "background-color", tree).addClass("tree");				
$( "#54" ).css( "background-color", tree).addClass("tree");				
$( "#55" ).css( "background-color", tree).addClass("tree");				
$( "#56" ).css( "background-color", tree).addClass("tree");				
$( "#57" ).css( "background-color", land).addClass("land");				
$( "#58" ).css( "background-color", land).addClass("land");				
$( "#59" ).css( "background-color", land).addClass("land");				
$( "#60" ).css( "background-color", tree).addClass("tree");				
$( "#61" ).css( "background-color", land).addClass("land");				
$( "#62" ).css( "background-color", tree).addClass("tree");				
$( "#63" ).css( "background-color", land).addClass("land");				
$( "#64" ).css( "background-color", land).addClass("land");				
$( "#65" ).css( "background-color", land).addClass("land");				
$( "#66" ).css( "background-color", tree).addClass("tree");				
$( "#67" ).css( "background-color", land).addClass("land");				
$( "#68" ).css( "background-color", land).addClass("land");				
$( "#69" ).css( "background-color", tree).addClass("tree");				
$( "#70" ).css( "background-color", tree).addClass("tree");				
$( "#71" ).css( "background-color", land).addClass("land");				
$( "#72" ).css( "background-color", tree).addClass("tree");				
$( "#73" ).css( "background-color", land).addClass("land");				
$( "#74" ).css( "background-color", land).addClass("land");				
$( "#75" ).css( "background-color", land).addClass("land");				
$( "#76" ).css( "background-color", tree).addClass("tree");				
$( "#77" ).css( "background-color", tree).addClass("tree");				
$( "#78" ).css( "background-color", tree).addClass("tree");				
$( "#79" ).css( "background-color", tree).addClass("tree");				
$( "#80" ).css( "background-color", tree).addClass("tree");				
$( "#81" ).css( "background-color", land).addClass("land");				
$( "#82" ).css( "background-color", land).addClass("land");				
$( "#83" ).css( "background-color", land).addClass("land");				
$( "#84" ).css( "background-color", land).addClass("land");				
$( "#85" ).css( "background-color", land).addClass("land");				
$( "#86" ).css( "background-color", land).addClass("land");				
$( "#87" ).css( "background-color", land).addClass("land");				
$( "#88" ).css( "background-color", land).addClass("land");				
$( "#89" ).css( "background-color", land).addClass("land");				
$( "#90" ).css( "background-color", tree).addClass("tree");				
$( "#91" ).css( "background-color", tree).addClass("tree");				
$( "#92" ).css( "background-color", tree).addClass("tree");				
$( "#93" ).css( "background-color", tree).addClass("tree");				
$( "#94" ).css( "background-color", tree).addClass("tree");				
$( "#95" ).css( "background-color", tree).addClass("tree");				
$( "#96" ).css( "background-color", tree).addClass("tree");				
$( "#97" ).css( "background-color", tree).addClass("tree");				
$( "#98" ).css( "background-color", tree).addClass("tree");				
$( "#99" ).css( "background-color", tree).addClass("tree");																		
    
//doors
$( "#61" ).addClass("bottomdoor");
    
//start of zone popup 

}
