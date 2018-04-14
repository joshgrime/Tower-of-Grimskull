function lvl13 (){
    //set colours

var black = "black";
var wall = "#414956";
var path = "#d1d1d1";
var path2 = "#b7b7b7";
var path3 = "#919191";
var path4 = "#606060";
var path5 = "#383838";
var secretpath = "#000000";
    
    
//player start
$('#94').append('<div id=\"player\"></div>');
//player end
$('#4').addClass('end');

//enemies
$('#22').append('<div class=\"enemy Ghoul\" id=\"0ghoul\"></div>');
$('#26').append('<div class=\"enemy Ghoul\" id=\"1ghoul\"></div>');
$('#34').append('<div class=\"enemy LordShadowball\" id=\"0lordshadowball\"></div>');

//NPCs
//objects
$('#12').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#16').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#52').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#56').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#14').append('<div class=\"armour\" id=\"ShadowArmour\"></div>');
//hp
//keys    
    
//tiles
$( "#0" ).css( "background-color", black).addClass("black");				
$( "#1" ).css( "background-color", black).addClass("black");				
$( "#2" ).css( "background-color", black).addClass("black");				
$( "#3" ).css( "background-color", black).addClass("black");				
$( "#4" ).css( "background-color", path).addClass("path");				
$( "#5" ).css( "background-color", black).addClass("black");				
$( "#6" ).css( "background-color", black).addClass("black");				
$( "#7" ).css( "background-color", black).addClass("black");				
$( "#8" ).css( "background-color", black).addClass("black");				
$( "#9" ).css( "background-color", black).addClass("black");				
$( "#10" ).css( "background-color", black).addClass("black");				
$( "#11" ).css( "background-color", black).addClass("black");				
$( "#12" ).css( "background-color", path).addClass("path");				
$( "#13" ).css( "background-color", wall).addClass("wall");				
$( "#14" ).css( "background-color", path).addClass("path");				
$( "#15" ).css( "background-color", wall).addClass("wall");				
$( "#16" ).css( "background-color", path).addClass("path");				
$( "#17" ).css( "background-color", black).addClass("black");				
$( "#18" ).css( "background-color", black).addClass("black");				
$( "#19" ).css( "background-color", black).addClass("black");				
$( "#20" ).css( "background-color", black).addClass("black");				
$( "#21" ).css( "background-color", black).addClass("black");				
$( "#22" ).css( "background-color", path).addClass("path");				
$( "#23" ).css( "background-color", wall).addClass("wall");				
$( "#24" ).css( "background-color", path).addClass("path");				
$( "#25" ).css( "background-color", wall).addClass("wall");				
$( "#26" ).css( "background-color", path).addClass("path");				
$( "#27" ).css( "background-color", black).addClass("black");				
$( "#28" ).css( "background-color", black).addClass("black");				
$( "#29" ).css( "background-color", black).addClass("black");				
$( "#30" ).css( "background-color", black).addClass("black");				
$( "#31" ).css( "background-color", black).addClass("black");				
$( "#32" ).css( "background-color", path).addClass("path");				
$( "#33" ).css( "background-color", path).addClass("path");				
$( "#34" ).css( "background-color", path).addClass("path");				
$( "#35" ).css( "background-color", path).addClass("path");				
$( "#36" ).css( "background-color", path).addClass("path");				
$( "#37" ).css( "background-color", black).addClass("black");				
$( "#38" ).css( "background-color", black).addClass("black");				
$( "#39" ).css( "background-color", black).addClass("black");				
$( "#40" ).css( "background-color", black).addClass("black");				
$( "#41" ).css( "background-color", black).addClass("black");				
$( "#42" ).css( "background-color", path).addClass("path");				
$( "#43" ).css( "background-color", wall).addClass("wall");				
$( "#44" ).css( "background-color", path).addClass("path");				
$( "#45" ).css( "background-color", wall).addClass("wall");				
$( "#46" ).css( "background-color", path).addClass("path");				
$( "#47" ).css( "background-color", black).addClass("black");				
$( "#48" ).css( "background-color", black).addClass("black");				
$( "#49" ).css( "background-color", black).addClass("black");				
$( "#50" ).css( "background-color", black).addClass("black");				
$( "#51" ).css( "background-color", black).addClass("black");				
$( "#52" ).css( "background-color", path).addClass("path");				
$( "#53" ).css( "background-color", path).addClass("path");				
$( "#54" ).css( "background-color", path).addClass("path");				
$( "#55" ).css( "background-color", path).addClass("path");				
$( "#56" ).css( "background-color", path).addClass("path");				
$( "#57" ).css( "background-color", black).addClass("black");				
$( "#58" ).css( "background-color", black).addClass("black");				
$( "#59" ).css( "background-color", black).addClass("black");				
$( "#60" ).css( "background-color", black).addClass("black");				
$( "#61" ).css( "background-color", black).addClass("black");				
$( "#62" ).css( "background-color", black).addClass("black");				
$( "#63" ).css( "background-color", black).addClass("black");				
$( "#64" ).css( "background-color", path).addClass("path");				
$( "#65" ).css( "background-color", black).addClass("black");				
$( "#66" ).css( "background-color", black).addClass("black");				
$( "#67" ).css( "background-color", black).addClass("black");				
$( "#68" ).css( "background-color", black).addClass("black");				
$( "#69" ).css( "background-color", black).addClass("black");				
$( "#70" ).css( "background-color", black).addClass("black");				
$( "#71" ).css( "background-color", black).addClass("black");				
$( "#72" ).css( "background-color", black).addClass("black");				
$( "#73" ).css( "background-color", black).addClass("black");				
$( "#74" ).css( "background-color", path).addClass("path");				
$( "#75" ).css( "background-color", black).addClass("black");				
$( "#76" ).css( "background-color", black).addClass("black");				
$( "#77" ).css( "background-color", black).addClass("black");				
$( "#78" ).css( "background-color", black).addClass("black");				
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
//start of zone popup 

}
