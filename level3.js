function lvl3 (type){
var playerending = type;    
//set colours
var land = "forestgreen";
var sea = "dodgerblue";
var sand = "darkkhaki";
var wall = "#414956";
var road = "#b2b2ab";
    
//player start
if (playerending == 1) {$('#0').append('<div id=\"player\"></div>');} else {$('#95').append('<div id=\"player\"></div>');}

//player end
if (playerending == 1) {$('#95').addClass('end');} else {$('#59').addClass('end');}

//enemies
//NPCs
if (playerending == 1) {$('#47').append('<div class=\"npc\" id="wizard1"></div>');} else {$('#64').append('<div class=\"npc\" id="wizard3"></div>');}

    
//objects

//keys


//hp
$('#77').append('<div class=\"hppickup\" id=\"Apple\"></div>');
    
//tiles
$( "#0" ).css( "background-color", road).addClass("road");				
$( "#1" ).css( "background-color", land).addClass("land");				
$( "#2" ).css( "background-color", land).addClass("land");				
$( "#3" ).css( "background-color", land).addClass("land");				
$( "#4" ).css( "background-color", land).addClass("land");				
$( "#5" ).css( "background-color", land).addClass("land");				
$( "#6" ).css( "background-color", land).addClass("land");				
$( "#7" ).css( "background-color", land).addClass("land");				
$( "#8" ).css( "background-color", wall).addClass("wall");				
$( "#9" ).css( "background-color", land).addClass("land");				
$( "#10" ).css( "background-color", road).addClass("road");				
$( "#11" ).css( "background-color", road).addClass("road");				
$( "#12" ).css( "background-color", road).addClass("road");				
$( "#13" ).css( "background-color", road).addClass("road");				
$( "#14" ).css( "background-color", land).addClass("land");				
$( "#15" ).css( "background-color", land).addClass("land");				
$( "#16" ).css( "background-color", land).addClass("land");				
$( "#17" ).css( "background-color", land).addClass("land");				
$( "#18" ).css( "background-color", wall).addClass("wall");				
$( "#19" ).css( "background-color", land).addClass("land");				
$( "#20" ).css( "background-color", land).addClass("land");				
$( "#21" ).css( "background-color", land).addClass("land");				
$( "#22" ).css( "background-color", land).addClass("land");				
$( "#23" ).css( "background-color", road).addClass("road");				
$( "#24" ).css( "background-color", land).addClass("land");				
$( "#25" ).css( "background-color", land).addClass("land");				
$( "#26" ).css( "background-color", land).addClass("land");				
$( "#27" ).css( "background-color", land).addClass("land");				
$( "#28" ).css( "background-color", wall).addClass("wall");				
$( "#29" ).css( "background-color", land).addClass("land");				
$( "#30" ).css( "background-color", land).addClass("land");				
$( "#31" ).css( "background-color", land).addClass("land");				
$( "#32" ).css( "background-color", land).addClass("land");				
$( "#33" ).css( "background-color", road).addClass("road");				
$( "#34" ).css( "background-color", land).addClass("land");				
$( "#35" ).css( "background-color", land).addClass("land");				
$( "#36" ).css( "background-color", land).addClass("land");				
$( "#37" ).css( "background-color", land).addClass("land");				
$( "#38" ).css( "background-color", wall).addClass("wall");				
$( "#39" ).css( "background-color", land).addClass("land");				
$( "#40" ).css( "background-color", land).addClass("land");				
$( "#41" ).css( "background-color", land).addClass("land");				
$( "#42" ).css( "background-color", land).addClass("land");				
$( "#43" ).css( "background-color", road).addClass("road");				
$( "#44" ).css( "background-color", land).addClass("land");				
$( "#45" ).css( "background-color", land).addClass("land");				
$( "#46" ).css( "background-color", land).addClass("land");				
$( "#47" ).css( "background-color", land).addClass("land");				
$( "#48" ).css( "background-color", wall).addClass("wall");				
$( "#49" ).css( "background-color", wall).addClass("wall");				
$( "#50" ).css( "background-color", land).addClass("land");				
$( "#51" ).css( "background-color", land).addClass("land");				
$( "#52" ).css( "background-color", land).addClass("land");				
$( "#53" ).css( "background-color", road).addClass("road");				
$( "#54" ).css( "background-color", road).addClass("road");				
$( "#55" ).css( "background-color", road).addClass("road");				
$( "#56" ).css( "background-color", road).addClass("road");				
$( "#57" ).css( "background-color", road).addClass("road");				
$( "#58" ).css( "background-color", road).addClass("road");				
$( "#59" ).css( "background-color", road).addClass("road");				
$( "#60" ).css( "background-color", land).addClass("land");				
$( "#61" ).css( "background-color", land).addClass("land");				
$( "#62" ).css( "background-color", land).addClass("land");				
$( "#63" ).css( "background-color", land).addClass("land");				
$( "#64" ).css( "background-color", land).addClass("land");				
$( "#65" ).css( "background-color", road).addClass("road");				
$( "#66" ).css( "background-color", land).addClass("land");				
$( "#67" ).css( "background-color", land).addClass("land");				
$( "#68" ).css( "background-color", wall).addClass("wall");				
$( "#69" ).css( "background-color", wall).addClass("wall");				
$( "#70" ).css( "background-color", land).addClass("land");				
$( "#71" ).css( "background-color", land).addClass("land");				
$( "#72" ).css( "background-color", land).addClass("land");				
$( "#73" ).css( "background-color", land).addClass("land");				
$( "#74" ).css( "background-color", land).addClass("land");				
$( "#75" ).css( "background-color", road).addClass("road");				
$( "#76" ).css( "background-color", land).addClass("land");				
$( "#77" ).css( "background-color", land).addClass("land");				
$( "#78" ).css( "background-color", wall).addClass("wall");				
$( "#79" ).css( "background-color", land).addClass("land");				
$( "#80" ).css( "background-color", land).addClass("land");				
$( "#81" ).css( "background-color", land).addClass("land");				
$( "#82" ).css( "background-color", land).addClass("land");				
$( "#83" ).css( "background-color", land).addClass("land");				
$( "#84" ).css( "background-color", land).addClass("land");				
$( "#85" ).css( "background-color", road).addClass("road");				
$( "#86" ).css( "background-color", land).addClass("land");				
$( "#87" ).css( "background-color", land).addClass("land");				
$( "#88" ).css( "background-color", wall).addClass("wall");				
$( "#89" ).css( "background-color", land).addClass("land");				
$( "#90" ).css( "background-color", land).addClass("land");				
$( "#91" ).css( "background-color", land).addClass("land");				
$( "#92" ).css( "background-color", land).addClass("land");				
$( "#93" ).css( "background-color", land).addClass("land");				
$( "#94" ).css( "background-color", land).addClass("land");				
$( "#95" ).css( "background-color", road).addClass("road");				
$( "#96" ).css( "background-color", land).addClass("land");				
$( "#97" ).css( "background-color", land).addClass("land");				
$( "#98" ).css( "background-color", wall).addClass("wall");				
$( "#99" ).css( "background-color", land).addClass("land");						
    
//doors
$( "#58" ).addClass("leftdoor keepdoor");
    
//start of zone popup 
$('#zonepop').removeClass('hidden');
$('#zonepop').addClass('visible');
$('#zonepop').empty();
$('#zonepop').append("Grimskull Keep: West Gate");
setTimeout(function(){ 
$('#zonepop').removeClass('visible');
$('#zonepop').addClass('hidden');
}, 4000);
setTimeout(function(){ 
$('#zonepop').empty();
}, 6000);
}