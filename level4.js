function lvl4 (){
    
//set colours
var land = "forestgreen";
var sea = "dodgerblue";
var sand = "darkkhaki";
var wall = "#414956";
var road = "#b2b2ab";
var tree = "#1d590e";
    
//player start
$('#5').append('<div id=\"player\"></div>');
//player end
$('#19').addClass('end');
$('#39').addClass('end');
//enemies
$('#21').append('<div class=\"enemy Skeleton\" id=\"0skeleton\"></div>');
$('#61').append('<div class=\"enemy Skeleton\" id=\"1skeleton\"></div>');
$('#33').append('<div class=\"enemy Skeleton\" id=\"2skeleton\"></div>');
$('#67').append('<div class=\"enemy Skeleton\" id=\"3skeleton\"></div>');
$('#58').append('<div class=\"enemy Skeleton\" id=\"4skeleton\"></div>');

//NPCs
    
//objects
$('#51').append('<div class=\"armour\" id=\"LeatherArmour\"></div>');
//keys
$('#31').append('<div class=\"key\" id=\"SmallKey\"></div>');

//hp
$('#63').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#57').append('<div class=\"hppickup\" id=\"Apple\"></div>');
    
//tiles
$( "#0" ).css( "background-color", tree).addClass("tree");				
$( "#1" ).css( "background-color", tree).addClass("tree");				
$( "#2" ).css( "background-color", tree).addClass("tree");				
$( "#3" ).css( "background-color", tree).addClass("tree");				
$( "#4" ).css( "background-color", tree).addClass("tree");				
$( "#5" ).css( "background-color", land).addClass("land");				
$( "#6" ).css( "background-color", tree).addClass("tree");				
$( "#7" ).css( "background-color", tree).addClass("tree");				
$( "#8" ).css( "background-color", tree).addClass("tree");				
$( "#9" ).css( "background-color", tree).addClass("tree");				
$( "#10" ).css( "background-color", tree).addClass("tree");				
$( "#11" ).css( "background-color", land).addClass("land");				
$( "#12" ).css( "background-color", land).addClass("land");				
$( "#13" ).css( "background-color", land).addClass("land");				
$( "#14" ).css( "background-color", tree).addClass("tree");				
$( "#15" ).css( "background-color", land).addClass("land");				
$( "#16" ).css( "background-color", tree).addClass("tree");				
$( "#17" ).css( "background-color", land).addClass("land");				
$( "#18" ).css( "background-color", land).addClass("land");				
$( "#19" ).css( "background-color", land).addClass("land");				
$( "#20" ).css( "background-color", tree).addClass("tree");				
$( "#21" ).css( "background-color", land).addClass("land");				
$( "#22" ).css( "background-color", tree).addClass("tree");				
$( "#23" ).css( "background-color", land).addClass("land");				
$( "#24" ).css( "background-color", tree).addClass("tree");				
$( "#25" ).css( "background-color", land).addClass("land");				
$( "#26" ).css( "background-color", land).addClass("land");				
$( "#27" ).css( "background-color", land).addClass("land");				
$( "#28" ).css( "background-color", tree).addClass("tree");				
$( "#29" ).css( "background-color", tree).addClass("tree");				
$( "#30" ).css( "background-color", tree).addClass("tree");				
$( "#31" ).css( "background-color", land).addClass("land");				
$( "#32" ).css( "background-color", tree).addClass("tree");				
$( "#33" ).css( "background-color", land).addClass("land");				
$( "#34" ).css( "background-color", tree).addClass("tree");				
$( "#35" ).css( "background-color", land).addClass("land");				
$( "#36" ).css( "background-color", tree).addClass("tree");				
$( "#37" ).css( "background-color", tree).addClass("tree");				
$( "#38" ).css( "background-color", land).addClass("land");				
$( "#39" ).css( "background-color", land).addClass("land");				
$( "#40" ).css( "background-color", tree).addClass("tree");				
$( "#41" ).css( "background-color", tree).addClass("tree");				
$( "#42" ).css( "background-color", tree).addClass("tree");				
$( "#43" ).css( "background-color", land).addClass("land");				
$( "#44" ).css( "background-color", land).addClass("land");				
$( "#45" ).css( "background-color", land).addClass("land");				
$( "#46" ).css( "background-color", tree).addClass("tree");				
$( "#47" ).css( "background-color", land).addClass("land");				
$( "#48" ).css( "background-color", land).addClass("land");				
$( "#49" ).css( "background-color", tree).addClass("tree");				
$( "#50" ).css( "background-color", tree).addClass("tree");				
$( "#51" ).css( "background-color", land).addClass("land");				
$( "#52" ).css( "background-color", tree).addClass("tree");				
$( "#53" ).css( "background-color", tree).addClass("tree");				
$( "#54" ).css( "background-color", tree).addClass("tree");				
$( "#55" ).css( "background-color", land).addClass("land");				
$( "#56" ).css( "background-color", tree).addClass("tree");				
$( "#57" ).css( "background-color", land).addClass("land");				
$( "#58" ).css( "background-color", land).addClass("land");				
$( "#59" ).css( "background-color", tree).addClass("tree");				
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
$( "#77" ).css( "background-color", land).addClass("land");				
$( "#78" ).css( "background-color", land).addClass("land");				
$( "#79" ).css( "background-color", tree).addClass("tree");				
$( "#80" ).css( "background-color", tree).addClass("tree");				
$( "#81" ).css( "background-color", land).addClass("land");				
$( "#82" ).css( "background-color", land).addClass("land");				
$( "#83" ).css( "background-color", land).addClass("land");				
$( "#84" ).css( "background-color", tree).addClass("tree");				
$( "#85" ).css( "background-color", land).addClass("land");				
$( "#86" ).css( "background-color", land).addClass("land");				
$( "#87" ).css( "background-color", land).addClass("land");				
$( "#88" ).css( "background-color", land).addClass("land");				
$( "#89" ).css( "background-color", tree).addClass("tree");				
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
$( "#26" ).addClass("leftdoor");
$( "#71" ).addClass("bottomdoor");
    
//start of zone popup 
$('#zonepop').removeClass('hidden');
$('#zonepop').addClass('visible');
$('#zonepop').empty();
$('#zonepop').append("The Nightmare Forest");
setTimeout(function(){ 
$('#zonepop').removeClass('visible');
$('#zonepop').addClass('hidden');
}, 4000);
setTimeout(function(){ 
$('#zonepop').empty();
}, 6000);
}

