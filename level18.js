function lvl18 (){
    //set colours
var land = "forestgreen";
var tree = "#1d590e";
var black = "black";
var water = "#4889f2";
var wall = "#414956";
var path = "#d1d1d1";
var secretpath = "#000000";
var darkergreen = "#093f1c";
var darkgreen = "#118439";
var blue = "#325bff";
    
    
//player start
$('#49').append('<div id=\"player\"></div>');
//player end
$('#23').addClass('end');

//enemies

$('#74').append('<div class=\"enemy Guard\" id=\"0guard\"></div>');
$('#82').append('<div class=\"enemy Guard\" id=\"1guard\"></div>');
$('#86').append('<div class=\"enemy Guard\" id=\"2guard\"></div>');


//NPCs
//objects
//hp
$('#27').append('<div class=\"hppickup\" id=\"Apple\"></div>');
//keys
$('#71').append('<div class=\"key\" id=\"SmallKey\"></div>');
  
//tiles
$( "#0" ).css( "background-color", wall).addClass("wall");				
$( "#1" ).css( "background-color", wall).addClass("wall");				
$( "#2" ).css( "background-color", wall).addClass("wall");				
$( "#3" ).css( "background-color", wall).addClass("wall");				
$( "#4" ).css( "background-color", wall).addClass("wall");				
$( "#5" ).css( "background-color", wall).addClass("wall");				
$( "#6" ).css( "background-color", wall).addClass("wall");				
$( "#7" ).css( "background-color", wall).addClass("wall");				
$( "#8" ).css( "background-color", wall).addClass("wall");				
$( "#9" ).css( "background-color", wall).addClass("wall");				
$( "#10" ).css( "background-color", wall).addClass("wall");				
$( "#11" ).css( "background-color", blue).addClass("blue");				
$( "#12" ).css( "background-color", blue).addClass("blue");				
$( "#13" ).css( "background-color", blue).addClass("blue");				
$( "#14" ).css( "background-color", blue).addClass("blue");				
$( "#15" ).css( "background-color", blue).addClass("blue");				
$( "#16" ).css( "background-color", land).addClass("land");				
$( "#17" ).css( "background-color", land).addClass("land");				
$( "#18" ).css( "background-color", land).addClass("land");				
$( "#19" ).css( "background-color", wall).addClass("wall");				
$( "#20" ).css( "background-color", wall).addClass("wall");				
$( "#21" ).css( "background-color", blue).addClass("blue");				
$( "#22" ).css( "background-color", blue).addClass("blue");				
$( "#23" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#24" ).css( "background-color", blue).addClass("blue");				
$( "#25" ).css( "background-color", blue).addClass("blue");				
$( "#26" ).css( "background-color", land).addClass("land");				
$( "#27" ).css( "background-color", land).addClass("land");				
$( "#28" ).css( "background-color", land).addClass("land");				
$( "#29" ).css( "background-color", wall).addClass("wall");				
$( "#30" ).css( "background-color", wall).addClass("wall");				
$( "#31" ).css( "background-color", blue).addClass("blue");				
$( "#32" ).css( "background-color", blue).addClass("blue");				
$( "#33" ).css( "background-color", darkergreen).addClass("darkergreen");				
$( "#34" ).css( "background-color", blue).addClass("blue");				
$( "#35" ).css( "background-color", blue).addClass("blue");				
$( "#36" ).css( "background-color", land).addClass("land");				
$( "#37" ).css( "background-color", land).addClass("land");				
$( "#38" ).css( "background-color", land).addClass("land");				
$( "#39" ).css( "background-color", wall).addClass("wall");				
$( "#40" ).css( "background-color", wall).addClass("wall");				
$( "#41" ).css( "background-color", blue).addClass("blue");				
$( "#42" ).css( "background-color", blue).addClass("blue");				
$( "#43" ).css( "background-color", darkgreen).addClass("darkgreen");				
$( "#44" ).css( "background-color", blue).addClass("blue");				
$( "#45" ).css( "background-color", blue).addClass("blue");				
$( "#46" ).css( "background-color", land).addClass("land");				
$( "#47" ).css( "background-color", land).addClass("land");				
$( "#48" ).css( "background-color", land).addClass("land");				
$( "#49" ).css( "background-color", land).addClass("land");				
$( "#50" ).css( "background-color", wall).addClass("wall");				
$( "#51" ).css( "background-color", land).addClass("land");				
$( "#52" ).css( "background-color", land).addClass("land");				
$( "#53" ).css( "background-color", land).addClass("land");				
$( "#54" ).css( "background-color", land).addClass("land");				
$( "#55" ).css( "background-color", land).addClass("land");				
$( "#56" ).css( "background-color", land).addClass("land");				
$( "#57" ).css( "background-color", land).addClass("land");				
$( "#58" ).css( "background-color", land).addClass("land");				
$( "#59" ).css( "background-color", wall).addClass("wall");				
$( "#60" ).css( "background-color", wall).addClass("wall");				
$( "#61" ).css( "background-color", wall).addClass("wall");				
$( "#62" ).css( "background-color", wall).addClass("wall");				
$( "#63" ).css( "background-color", wall).addClass("wall");				
$( "#64" ).css( "background-color", wall).addClass("wall");				
$( "#65" ).css( "background-color", wall).addClass("wall");				
$( "#66" ).css( "background-color", wall).addClass("wall");				
$( "#67" ).css( "background-color", land).addClass("land");				
$( "#68" ).css( "background-color", land).addClass("land");				
$( "#69" ).css( "background-color", wall).addClass("wall");				
$( "#70" ).css( "background-color", wall).addClass("wall");				
$( "#71" ).css( "background-color", land).addClass("land");				
$( "#72" ).css( "background-color", wall).addClass("wall");				
$( "#73" ).css( "background-color", land).addClass("land");				
$( "#74" ).css( "background-color", land).addClass("land");				
$( "#75" ).css( "background-color", land).addClass("land");				
$( "#76" ).css( "background-color", wall).addClass("wall");				
$( "#77" ).css( "background-color", land).addClass("land");				
$( "#78" ).css( "background-color", land).addClass("land");				
$( "#79" ).css( "background-color", wall).addClass("wall");				
$( "#80" ).css( "background-color", wall).addClass("wall");				
$( "#81" ).css( "background-color", land).addClass("land");				
$( "#82" ).css( "background-color", land).addClass("land");				
$( "#83" ).css( "background-color", land).addClass("land");				
$( "#84" ).css( "background-color", wall).addClass("wall");				
$( "#85" ).css( "background-color", land).addClass("land");				
$( "#86" ).css( "background-color", land).addClass("land");				
$( "#87" ).css( "background-color", land).addClass("land");				
$( "#88" ).css( "background-color", land).addClass("land");				
$( "#89" ).css( "background-color", wall).addClass("wall");				
$( "#90" ).css( "background-color", wall).addClass("wall");				
$( "#91" ).css( "background-color", wall).addClass("wall");				
$( "#92" ).css( "background-color", wall).addClass("wall");				
$( "#93" ).css( "background-color", wall).addClass("wall");				
$( "#94" ).css( "background-color", wall).addClass("wall");				
$( "#95" ).css( "background-color", wall).addClass("wall");				
$( "#96" ).css( "background-color", wall).addClass("wall");				
$( "#97" ).css( "background-color", wall).addClass("wall");				
$( "#98" ).css( "background-color", wall).addClass("wall");				
$( "#99" ).css( "background-color", wall).addClass("wall");																																																																				
    
//doors

//start of zone popup 
}
