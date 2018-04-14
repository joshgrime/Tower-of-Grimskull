function lvl14 (){
    //set colours

var black = "black";
var water = "#4889f2";
var wall = "#414956";
var path = "#d1d1d1";
var secretpath = "#000000";
    
    
//player start
$('#94').append('<div id=\"player\"></div>');
//player end
$('#7').addClass('end');
$('#8').addClass('end');

//enemies
$('#44').append('<div class=\"enemy Ghoul\" id=\"0ghoul\"></div>');
$('#41').append('<div class=\"enemy Ghoul\" id=\"1ghoul\"></div>');
$('#62').append('<div class=\"enemy Ghoul\" id=\"2ghoul\"></div>');
$('#21').append('<div class=\"enemy Nightmare\" id=\"0nightmare\"></div>');
$('#13').append('<div class=\"enemy Nightmare\" id=\"1nightmare\"></div>');
$('#24').append('<div class=\"enemy Nightmare\" id=\"2nightmare\"></div>');


//NPCs
//objects
$('#72').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#11').append('<div class=\"hppickup\" id=\"Apple\"></div>');
//hp
//keys    
$('#15').append('<div class=\"waterkey\" id=\"WaterKey\"></div>');
//tiles
$( "#0" ).css( "background-color", black).addClass("black");				
$( "#1" ).css( "background-color", black).addClass("black");				
$( "#2" ).css( "background-color", black).addClass("black");				
$( "#3" ).css( "background-color", black).addClass("black");				
$( "#4" ).css( "background-color", black).addClass("black");				
$( "#5" ).css( "background-color", black).addClass("black");				
$( "#6" ).css( "background-color", black).addClass("black");				
$( "#7" ).css( "background-color", path).addClass("path");				
$( "#8" ).css( "background-color", path).addClass("path");				
$( "#9" ).css( "background-color", black).addClass("black");				
$( "#10" ).css( "background-color", black).addClass("black");				
$( "#11" ).css( "background-color", path).addClass("path");				
$( "#12" ).css( "background-color", path).addClass("path");				
$( "#13" ).css( "background-color", path).addClass("path");				
$( "#14" ).css( "background-color", path).addClass("path");				
$( "#15" ).css( "background-color", path).addClass("path");				
$( "#16" ).css( "background-color", black).addClass("black");				
$( "#17" ).css( "background-color", path).addClass("path");				
$( "#18" ).css( "background-color", path).addClass("path");				
$( "#19" ).css( "background-color", black).addClass("black");				
$( "#20" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#21" ).css( "background-color", path).addClass("path");				
$( "#22" ).css( "background-color", path).addClass("path");				
$( "#23" ).css( "background-color", path).addClass("path");				
$( "#24" ).css( "background-color", path).addClass("path");				
$( "#25" ).css( "background-color", path).addClass("path");				
$( "#26" ).css( "background-color", black).addClass("black");				
$( "#27" ).css( "background-color", path).addClass("path");				
$( "#28" ).css( "background-color", path).addClass("path");				
$( "#29" ).css( "background-color", black).addClass("black");				
$( "#30" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#31" ).css( "background-color", black).addClass("black");				
$( "#32" ).css( "background-color", black).addClass("black");				
$( "#33" ).css( "background-color", black).addClass("black");				
$( "#34" ).css( "background-color", black).addClass("black");				
$( "#35" ).css( "background-color", black).addClass("black");				
$( "#36" ).css( "background-color", black).addClass("black");				
$( "#37" ).css( "background-color", black).addClass("black");				
$( "#38" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#39" ).css( "background-color", black).addClass("black");				
$( "#40" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#41" ).css( "background-color", path).addClass("path");				
$( "#42" ).css( "background-color", path).addClass("path");				
$( "#43" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#44" ).css( "background-color", path).addClass("path");				
$( "#45" ).css( "background-color", path).addClass("path");				
$( "#46" ).css( "background-color", path).addClass("path");				
$( "#47" ).css( "background-color", black).addClass("black");				
$( "#48" ).css( "background-color", path).addClass("path");				
$( "#49" ).css( "background-color", black).addClass("black");				
$( "#50" ).css( "background-color", black).addClass("black");				
$( "#51" ).css( "background-color", path).addClass("path");				
$( "#52" ).css( "background-color", path).addClass("path");				
$( "#53" ).css( "background-color", black).addClass("black");				
$( "#54" ).css( "background-color", path).addClass("path");				
$( "#55" ).css( "background-color", path).addClass("path");				
$( "#56" ).css( "background-color", path).addClass("path");				
$( "#57" ).css( "background-color", black).addClass("black");				
$( "#58" ).css( "background-color", path).addClass("path");				
$( "#59" ).css( "background-color", black).addClass("black");				
$( "#60" ).css( "background-color", black).addClass("black");				
$( "#61" ).css( "background-color", path).addClass("path");				
$( "#62" ).css( "background-color", path).addClass("path");				
$( "#63" ).css( "background-color", black).addClass("black");				
$( "#64" ).css( "background-color", path).addClass("path");				
$( "#65" ).css( "background-color", path).addClass("path");				
$( "#66" ).css( "background-color", path).addClass("path");				
$( "#67" ).css( "background-color", water).addClass("water");				
$( "#68" ).css( "background-color", water).addClass("water");				
$( "#69" ).css( "background-color", black).addClass("black");				
$( "#70" ).css( "background-color", black).addClass("black");				
$( "#71" ).css( "background-color", path).addClass("path");				
$( "#72" ).css( "background-color", path).addClass("path");				
$( "#73" ).css( "background-color", black).addClass("black");				
$( "#74" ).css( "background-color", path).addClass("path");				
$( "#75" ).css( "background-color", path).addClass("path");				
$( "#76" ).css( "background-color", water).addClass("water");				
$( "#77" ).css( "background-color", water).addClass("water");				
$( "#78" ).css( "background-color", water).addClass("water");				
$( "#79" ).css( "background-color", black).addClass("black");				
$( "#80" ).css( "background-color", black).addClass("black");				
$( "#81" ).css( "background-color", black).addClass("black");				
$( "#82" ).css( "background-color", black).addClass("black");				
$( "#83" ).css( "background-color", black).addClass("black");				
$( "#84" ).css( "background-color", path).addClass("path");				
$( "#85" ).css( "background-color", black).addClass("black");				
$( "#86" ).css( "background-color", black).addClass("black");				
$( "#87" ).css( "background-color", black).addClass("black");				
$( "#88" ).css( "background-color", black).addClass("black");				
$( "#89" ).css( "background-color", black).addClass("black");				
$( "#90" ).css( "background-color", black).addClass("black");				
$( "#91" ).css( "background-color", black).addClass("black");				
$( "#92" ).css( "background-color", black).addClass("black");				
$( "#93" ).css( "background-color", black).addClass("black");				
$( "#94" ).css( "background-color", path).addClass("path");				
$( "#95" ).css( "background-color", black).addClass("black");				
$( "#96" ).css( "background-color", black).addClass("black");				
$( "#97" ).css( "background-color", black).addClass("black");				
$( "#98" ).css( "background-color", black).addClass("black");				
$( "#99" ).css( "background-color", black).addClass("black");																																														
    
//doors

}
