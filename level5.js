function lvl5 (){
    
//set colours
var land = "forestgreen";
var sea = "dodgerblue";
var sand = "darkkhaki";
var wall = "#414956";
var road = "#b2b2ab";
var tree = "#1d590e";
    
//player start
$('#20').append('<div id=\"player\"></div>');
//player end
$('#19').addClass('end');
//enemies

//NPCs
$('#11').append('<div class=\"enemy Skeleton\" id=\"0skeleton\"></div>');
$('#16').append('<div class=\"enemy Skeleton\" id=\"1skeleton\"></div>');
$('#43').append('<div class=\"enemy Skeleton\" id=\"2skeleton\"></div>');
$('#58').append('<div class=\"enemy Skeleton\" id=\"3skeleton\"></div>');
$('#65').append('<div class=\"enemy Skeleton\" id=\"4skeleton\"></div>');
$('#64').append('<div class=\"enemy Skeleton\" id=\"5skeleton\"></div>');
$('#71').append('<div class=\"enemy Skeleton\" id=\"6skeleton\"></div>');
//objects
$('#63').append('<div class=\"weapon\" id=\"Dagger\"></div>');
//keys

//hp
$('#33').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#34').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#66').append('<div class=\"hppickup\" id=\"Banana\"></div>');    
    
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
$( "#9" ).css( "background-color", tree).addClass("tree");				
$( "#10" ).css( "background-color", tree).addClass("tree");				
$( "#11" ).css( "background-color", land).addClass("land");				
$( "#12" ).css( "background-color", land).addClass("land");				
$( "#13" ).css( "background-color", land).addClass("land");				
$( "#14" ).css( "background-color", land).addClass("land");				
$( "#15" ).css( "background-color", land).addClass("land");				
$( "#16" ).css( "background-color", land).addClass("land");				
$( "#17" ).css( "background-color", tree).addClass("tree");				
$( "#18" ).css( "background-color", land).addClass("land");				
$( "#19" ).css( "background-color", land).addClass("land");				
$( "#20" ).css( "background-color", land).addClass("land");				
$( "#21" ).css( "background-color", land).addClass("land");				
$( "#22" ).css( "background-color", tree).addClass("tree");				
$( "#23" ).css( "background-color", tree).addClass("tree");				
$( "#24" ).css( "background-color", tree).addClass("tree");				
$( "#25" ).css( "background-color", tree).addClass("tree");				
$( "#26" ).css( "background-color", land).addClass("land");				
$( "#27" ).css( "background-color", tree).addClass("tree");				
$( "#28" ).css( "background-color", land).addClass("land");				
$( "#29" ).css( "background-color", tree).addClass("tree");				
$( "#30" ).css( "background-color", tree).addClass("tree");				
$( "#31" ).css( "background-color", tree).addClass("tree");				
$( "#32" ).css( "background-color", tree).addClass("tree");				
$( "#33" ).css( "background-color", land).addClass("land");				
$( "#34" ).css( "background-color", land).addClass("land");				
$( "#35" ).css( "background-color", tree).addClass("tree");				
$( "#36" ).css( "background-color", land).addClass("land");				
$( "#37" ).css( "background-color", tree).addClass("tree");				
$( "#38" ).css( "background-color", land).addClass("land");				
$( "#39" ).css( "background-color", tree).addClass("tree");				
$( "#40" ).css( "background-color", tree).addClass("tree");				
$( "#41" ).css( "background-color", land).addClass("land");				
$( "#42" ).css( "background-color", land).addClass("land");				
$( "#43" ).css( "background-color", land).addClass("land");				
$( "#44" ).css( "background-color", land).addClass("land");				
$( "#45" ).css( "background-color", land).addClass("land");				
$( "#46" ).css( "background-color", land).addClass("land");				
$( "#47" ).css( "background-color", tree).addClass("tree");				
$( "#48" ).css( "background-color", land).addClass("land");				
$( "#49" ).css( "background-color", tree).addClass("tree");				
$( "#50" ).css( "background-color", tree).addClass("tree");				
$( "#51" ).css( "background-color", land).addClass("land");				
$( "#52" ).css( "background-color", tree).addClass("tree");				
$( "#53" ).css( "background-color", tree).addClass("tree");				
$( "#54" ).css( "background-color", tree).addClass("tree");				
$( "#55" ).css( "background-color", tree).addClass("tree");				
$( "#56" ).css( "background-color", tree).addClass("tree");				
$( "#57" ).css( "background-color", tree).addClass("tree");				
$( "#58" ).css( "background-color", land).addClass("land");				
$( "#59" ).css( "background-color", tree).addClass("tree");				
$( "#60" ).css( "background-color", tree).addClass("tree");				
$( "#61" ).css( "background-color", land).addClass("land");				
$( "#62" ).css( "background-color", tree).addClass("tree");				
$( "#63" ).css( "background-color", land).addClass("land");				
$( "#64" ).css( "background-color", land).addClass("land");				
$( "#65" ).css( "background-color", land).addClass("land");				
$( "#66" ).css( "background-color", land).addClass("land");				
$( "#67" ).css( "background-color", tree).addClass("tree");				
$( "#68" ).css( "background-color", land).addClass("land");				
$( "#69" ).css( "background-color", tree).addClass("tree");				
$( "#70" ).css( "background-color", tree).addClass("tree");				
$( "#71" ).css( "background-color", land).addClass("land");				
$( "#72" ).css( "background-color", tree).addClass("tree");				
$( "#73" ).css( "background-color", tree).addClass("tree");				
$( "#74" ).css( "background-color", tree).addClass("tree");				
$( "#75" ).css( "background-color", land).addClass("land");				
$( "#76" ).css( "background-color", tree).addClass("tree");				
$( "#77" ).css( "background-color", tree).addClass("tree");				
$( "#78" ).css( "background-color", land).addClass("land");				
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
    
//start of zone popup 
}
