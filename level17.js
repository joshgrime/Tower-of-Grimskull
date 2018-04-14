function lvl17 (playerending){
    //set colours
var land = "forestgreen";
var tree = "#1d590e";
var black = "black";
var water = "#4889f2";
var wall = "#414956";
var path = "#d1d1d1";
var secretpath = "#000000";
    
    
//player start
if (playerending == 1) {$('#20').append('<div id=\"player\"></div>');} else {$('#95').append('<div id=\"player\"></div>');}
//player end
if (playerending == 1) {$('#13').addClass('end');} else {$('#20').addClass('end');}

//enemies
$('#13').append('<div class=\"enemy GrimskullElite\" id=\"0grimskull\"></div>');



//NPCs
//objects
//hp

//keys  
//tiles
$( "#0" ).css( "background-color", wall).addClass("wall");				
$( "#1" ).css( "background-color", land).addClass("land");				
$( "#2" ).css( "background-color", land).addClass("land");				
$( "#3" ).css( "background-color", land).addClass("land");				
$( "#4" ).css( "background-color", land).addClass("land");				
$( "#5" ).css( "background-color", water).addClass("water");				
$( "#6" ).css( "background-color", water).addClass("water");				
$( "#7" ).css( "background-color", land).addClass("land");				
$( "#8" ).css( "background-color", land).addClass("land");				
$( "#9" ).css( "background-color", wall).addClass("wall");				
$( "#10" ).css( "background-color", wall).addClass("wall");				
$( "#11" ).css( "background-color", wall).addClass("wall");				
$( "#12" ).css( "background-color", wall).addClass("wall");				
$( "#13" ).css( "background-color", land).addClass("land");				
$( "#14" ).css( "background-color", wall).addClass("wall");				
$( "#15" ).css( "background-color", water).addClass("water");				
$( "#16" ).css( "background-color", water).addClass("water");				
$( "#17" ).css( "background-color", land).addClass("land");				
$( "#18" ).css( "background-color", wall).addClass("wall");				
$( "#19" ).css( "background-color", wall).addClass("wall");				
$( "#20" ).css( "background-color", land).addClass("land");				
$( "#21" ).css( "background-color", land).addClass("land");				
$( "#22" ).css( "background-color", land).addClass("land");				
$( "#23" ).css( "background-color", land).addClass("land");				
$( "#24" ).css( "background-color", land).addClass("land");				
$( "#25" ).css( "background-color", water).addClass("water");				
$( "#26" ).css( "background-color", water).addClass("water");				
$( "#27" ).css( "background-color", land).addClass("land");				
$( "#28" ).css( "background-color", wall).addClass("wall");				
$( "#29" ).css( "background-color", wall).addClass("wall");				
$( "#30" ).css( "background-color", wall).addClass("wall");				
$( "#31" ).css( "background-color", land).addClass("land");				
$( "#32" ).css( "background-color", land).addClass("land");				
$( "#33" ).css( "background-color", land).addClass("land");				
$( "#34" ).css( "background-color", land).addClass("land");				
$( "#35" ).css( "background-color", water).addClass("water");				
$( "#36" ).css( "background-color", water).addClass("water");				
$( "#37" ).css( "background-color", land).addClass("land");				
$( "#38" ).css( "background-color", wall).addClass("wall");				
$( "#39" ).css( "background-color", wall).addClass("wall");				
$( "#40" ).css( "background-color", wall).addClass("wall");				
$( "#41" ).css( "background-color", land).addClass("land");				
$( "#42" ).css( "background-color", land).addClass("land");				
$( "#43" ).css( "background-color", land).addClass("land");				
$( "#44" ).css( "background-color", land).addClass("land");				
$( "#45" ).css( "background-color", water).addClass("water");				
$( "#46" ).css( "background-color", water).addClass("water");				
$( "#47" ).css( "background-color", land).addClass("land");				
$( "#48" ).css( "background-color", wall).addClass("wall");				
$( "#49" ).css( "background-color", wall).addClass("wall");				
$( "#50" ).css( "background-color", wall).addClass("wall");				
$( "#51" ).css( "background-color", land).addClass("land");				
$( "#52" ).css( "background-color", land).addClass("land");				
$( "#53" ).css( "background-color", land).addClass("land");				
$( "#54" ).css( "background-color", land).addClass("land");				
$( "#55" ).css( "background-color", land).addClass("land");				
$( "#56" ).css( "background-color", water).addClass("water");				
$( "#57" ).css( "background-color", water).addClass("water");				
$( "#58" ).css( "background-color", land).addClass("land");				
$( "#59" ).css( "background-color", land).addClass("land");				
$( "#60" ).css( "background-color", wall).addClass("wall");				
$( "#61" ).css( "background-color", land).addClass("land");				
$( "#62" ).css( "background-color", land).addClass("land");				
$( "#63" ).css( "background-color", land).addClass("land");				
$( "#64" ).css( "background-color", land).addClass("land");				
$( "#65" ).css( "background-color", land).addClass("land");				
$( "#66" ).css( "background-color", land).addClass("land");				
$( "#67" ).css( "background-color", water).addClass("water");				
$( "#68" ).css( "background-color", water).addClass("water");				
$( "#69" ).css( "background-color", land).addClass("land");				
$( "#70" ).css( "background-color", wall).addClass("wall");				
$( "#71" ).css( "background-color", land).addClass("land");				
$( "#72" ).css( "background-color", land).addClass("land");				
$( "#73" ).css( "background-color", land).addClass("land");				
$( "#74" ).css( "background-color", land).addClass("land");				
$( "#75" ).css( "background-color", land).addClass("land");				
$( "#76" ).css( "background-color", land).addClass("land");				
$( "#77" ).css( "background-color", land).addClass("land");				
$( "#78" ).css( "background-color", water).addClass("water");				
$( "#79" ).css( "background-color", water).addClass("water");				
$( "#80" ).css( "background-color", wall).addClass("wall");				
$( "#81" ).css( "background-color", land).addClass("land");				
$( "#82" ).css( "background-color", land).addClass("land");				
$( "#83" ).css( "background-color", land).addClass("land");				
$( "#84" ).css( "background-color", land).addClass("land");				
$( "#85" ).css( "background-color", land).addClass("land");				
$( "#86" ).css( "background-color", land).addClass("land");				
$( "#87" ).css( "background-color", land).addClass("land");				
$( "#88" ).css( "background-color", land).addClass("land");				
$( "#89" ).css( "background-color", water).addClass("water");				
$( "#90" ).css( "background-color", wall).addClass("wall");				
$( "#91" ).css( "background-color", wall).addClass("wall");				
$( "#92" ).css( "background-color", wall).addClass("wall");				
$( "#93" ).css( "background-color", wall).addClass("wall");				
$( "#94" ).css( "background-color", wall).addClass("wall");				
$( "#95" ).css( "background-color", land).addClass("land");				
$( "#96" ).css( "background-color", wall).addClass("wall");				
$( "#97" ).css( "background-color", wall).addClass("wall");				
$( "#98" ).css( "background-color", wall).addClass("wall");				
$( "#99" ).css( "background-color", wall).addClass("wall");																																	
    
//doors
//start of zone popup 
}

