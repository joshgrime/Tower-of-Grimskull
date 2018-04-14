function lvl8 (){
//set colours
var land = "forestgreen";
var sea = "dodgerblue";
var sand = "darkkhaki";
var wall = "#414956";
var road = "#b2b2ab";
var tree = "#1d590e";
    
//player start
$('#93').append('<div id=\"player\"></div>');
//player end
$('#9').addClass('end');

//enemies
$('#16').append('<div class=\"enemy Nightmare\" id=\"0nightmare\"></div>');
$('#27').append('<div class=\"enemy Nightmare\" id=\"1nightmare\"></div>');
$('#21').append('<div class=\"enemy Nightmare\" id=\"2nightmare\"></div>');
$('#49').append('<div class=\"enemy Nightmare\" id=\"3nightmare\"></div>');
$('#71').append('<div class=\"enemy Skeleton\" id=\"0skeleton\"></div>');
$('#82').append('<div class=\"enemy Skeleton\" id=\"1skeleton\"></div>');
$('#69').append('<div class=\"enemy Skeleton\" id=\"2skeleton\"></div>');
$('#29').append('<div class=\"enemy Skeleton\" id=\"3skeleton\"></div>');
//NPCs
//objects
$('#39').append('<div class=\"keepkey\" id=\"KeepKey\"></div>');
$('#33').append('<div class=\"key\" id=\"SmallKey\"></div>');
$('#13').append('<div class=\"key\" id=\"SmallKey\"></div>');
$('#67').append('<div class=\"nightmarekey\" id=\"NightmareKey\"></div>');

//hp
$('#81').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#89').append('<div class=\"hppickup\" id=\"Apple\"></div>');
    
//tiles
$( "#0" ).css( "background-color", tree).addClass("tree");				
$( "#1" ).css( "background-color", tree).addClass("tree");				
$( "#2" ).css( "background-color", tree).addClass("tree");				
$( "#3" ).css( "background-color", tree).addClass("tree");				
$( "#4" ).css( "background-color", tree).addClass("tree");				
$( "#5" ).css( "background-color", tree).addClass("tree");				
$( "#6" ).css( "background-color", tree).addClass("tree");				
$( "#7" ).css( "background-color", tree).addClass("tree");				
$( "#8" ).css( "background-color", tree).addClass("tree");				
$( "#9" ).css( "background-color", land).addClass("land");				
$( "#10" ).css( "background-color", tree).addClass("tree");				
$( "#11" ).css( "background-color", land).addClass("land");				
$( "#12" ).css( "background-color", land).addClass("land");				
$( "#13" ).css( "background-color", land).addClass("land");				
$( "#14" ).css( "background-color", tree).addClass("tree");				
$( "#15" ).css( "background-color", land).addClass("land");				
$( "#16" ).css( "background-color", land).addClass("land");				
$( "#17" ).css( "background-color", land).addClass("land");				
$( "#18" ).css( "background-color", tree).addClass("tree");				
$( "#19" ).css( "background-color", land).addClass("land");				
$( "#20" ).css( "background-color", tree).addClass("tree");				
$( "#21" ).css( "background-color", land).addClass("land");				
$( "#22" ).css( "background-color", tree).addClass("tree");				
$( "#23" ).css( "background-color", tree).addClass("tree");				
$( "#24" ).css( "background-color", tree).addClass("tree");				
$( "#25" ).css( "background-color", land).addClass("land");				
$( "#26" ).css( "background-color", tree).addClass("tree");				
$( "#27" ).css( "background-color", land).addClass("land");				
$( "#28" ).css( "background-color", tree).addClass("tree");				
$( "#29" ).css( "background-color", land).addClass("land");				
$( "#30" ).css( "background-color", tree).addClass("tree");				
$( "#31" ).css( "background-color", land).addClass("land");				
$( "#32" ).css( "background-color", tree).addClass("tree");				
$( "#33" ).css( "background-color", land).addClass("land");				
$( "#34" ).css( "background-color", tree).addClass("tree");				
$( "#35" ).css( "background-color", land).addClass("land");				
$( "#36" ).css( "background-color", tree).addClass("tree");				
$( "#37" ).css( "background-color", land).addClass("land");				
$( "#38" ).css( "background-color", tree).addClass("tree");				
$( "#39" ).css( "background-color", land).addClass("land");				
$( "#40" ).css( "background-color", tree).addClass("tree");				
$( "#41" ).css( "background-color", land).addClass("land");				
$( "#42" ).css( "background-color", tree).addClass("tree");				
$( "#43" ).css( "background-color", land).addClass("land");				
$( "#44" ).css( "background-color", tree).addClass("tree");				
$( "#45" ).css( "background-color", land).addClass("land");				
$( "#46" ).css( "background-color", tree).addClass("tree");				
$( "#47" ).css( "background-color", land).addClass("land");				
$( "#48" ).css( "background-color", tree).addClass("tree");				
$( "#49" ).css( "background-color", land).addClass("land");				
$( "#50" ).css( "background-color", tree).addClass("tree");				
$( "#51" ).css( "background-color", land).addClass("land");				
$( "#52" ).css( "background-color", land).addClass("land");				
$( "#53" ).css( "background-color", land).addClass("land");				
$( "#54" ).css( "background-color", land).addClass("land");				
$( "#55" ).css( "background-color", land).addClass("land");				
$( "#56" ).css( "background-color", tree).addClass("tree");				
$( "#57" ).css( "background-color", land).addClass("land");				
$( "#58" ).css( "background-color", tree).addClass("tree");				
$( "#59" ).css( "background-color", land).addClass("land");				
$( "#60" ).css( "background-color", tree).addClass("tree");				
$( "#61" ).css( "background-color", land).addClass("land");				
$( "#62" ).css( "background-color", tree).addClass("tree");				
$( "#63" ).css( "background-color", land).addClass("land");				
$( "#64" ).css( "background-color", tree).addClass("tree");				
$( "#65" ).css( "background-color", land).addClass("land");				
$( "#66" ).css( "background-color", tree).addClass("tree");				
$( "#67" ).css( "background-color", land).addClass("land");				
$( "#68" ).css( "background-color", tree).addClass("tree");				
$( "#69" ).css( "background-color", land).addClass("land");				
$( "#70" ).css( "background-color", tree).addClass("tree");				
$( "#71" ).css( "background-color", land).addClass("land");				
$( "#72" ).css( "background-color", tree).addClass("tree");				
$( "#73" ).css( "background-color", land).addClass("land");				
$( "#74" ).css( "background-color", tree).addClass("tree");				
$( "#75" ).css( "background-color", land).addClass("land");				
$( "#76" ).css( "background-color", tree).addClass("tree");				
$( "#77" ).css( "background-color", tree).addClass("tree");				
$( "#78" ).css( "background-color", tree).addClass("tree");				
$( "#79" ).css( "background-color", land).addClass("land");				
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
$( "#93" ).css( "background-color", land).addClass("land");				
$( "#94" ).css( "background-color", tree).addClass("tree");				
$( "#95" ).css( "background-color", tree).addClass("tree");				
$( "#96" ).css( "background-color", tree).addClass("tree");				
$( "#97" ).css( "background-color", tree).addClass("tree");				
$( "#98" ).css( "background-color", tree).addClass("tree");				
$( "#99" ).css( "background-color", tree).addClass("tree");																					
    
//doors

$( "#86" ).addClass("leftdoor");
$( "#88" ).addClass("leftdoor");
$( "#43" ).addClass("bottomdoor nightmaredoor");
    
//start of zone popup 

}
