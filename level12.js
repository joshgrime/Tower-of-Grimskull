function lvl12 (){
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
$('#90').append('<div id=\"player\"></div>');
//player end
$('#4').addClass('end');

//enemies
$('#22').append('<div class=\"enemy Ghoul\" id=\"0ghoul\"></div>');
$('#23').append('<div class=\"enemy Ghoul\" id=\"1ghoul\"></div>');
$('#34').append('<div class=\"enemy Ghoul\" id=\"2ghoul\"></div>');
$('#35').append('<div class=\"enemy Ghoul\" id=\"3ghoul\"></div>');
$('#36').append('<div class=\"enemy Ghoul\" id=\"4ghoul\"></div>');
$('#66').append('<div class=\"enemy Ghoul\" id=\"5ghoul\"></div>');
$('#67').append('<div class=\"enemy Ghoul\" id=\"6ghoul\"></div>');
$('#68').append('<div class=\"enemy Ghoul\" id=\"7ghoul\"></div>');
$('#57').append('<div class=\"enemy Ghoul\" id=\"8ghoul\"></div>');
//NPCs
//objects
$('#41').append('<div class=\"hppickup\" id=\"Banana\"></div>');
$('#11').append('<div class=\"weapon\" id=\"UnholyBlade\"></div>');
//hp
//keys    
$('#86').append('<div class=\"key\" id=\"SmallKey\"></div>');
    
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
$( "#11" ).css( "background-color", path).addClass("path");				
$( "#12" ).css( "background-color", path).addClass("path");				
$( "#13" ).css( "background-color", black).addClass("black");				
$( "#14" ).css( "background-color", path).addClass("path");				
$( "#15" ).css( "background-color", black).addClass("black");				
$( "#16" ).css( "background-color", path).addClass("path");				
$( "#17" ).css( "background-color", path).addClass("path");				
$( "#18" ).css( "background-color", path).addClass("path");				
$( "#19" ).css( "background-color", black).addClass("black");				
$( "#20" ).css( "background-color", black).addClass("black");				
$( "#21" ).css( "background-color", path).addClass("path");				
$( "#22" ).css( "background-color", path).addClass("path");				
$( "#23" ).css( "background-color", path).addClass("path");				
$( "#24" ).css( "background-color", path).addClass("path");				
$( "#25" ).css( "background-color", wall).addClass("wall");				
$( "#26" ).css( "background-color", path).addClass("path");				
$( "#27" ).css( "background-color", path).addClass("path");				
$( "#28" ).css( "background-color", path).addClass("path");				
$( "#29" ).css( "background-color", black).addClass("black");				
$( "#30" ).css( "background-color", black).addClass("black");				
$( "#31" ).css( "background-color", wall).addClass("wall");				
$( "#32" ).css( "background-color", wall).addClass("wall");				
$( "#33" ).css( "background-color", wall).addClass("wall");				
$( "#34" ).css( "background-color", path).addClass("path");				
$( "#35" ).css( "background-color", path).addClass("path");				
$( "#36" ).css( "background-color", path).addClass("path");				
$( "#37" ).css( "background-color", path).addClass("path");				
$( "#38" ).css( "background-color", path).addClass("path");				
$( "#39" ).css( "background-color", black).addClass("black");				
$( "#40" ).css( "background-color", black).addClass("black");				
$( "#41" ).css( "background-color", path).addClass("path");				
$( "#42" ).css( "background-color", path).addClass("path");				
$( "#43" ).css( "background-color", wall).addClass("wall");				
$( "#44" ).css( "background-color", path).addClass("path");				
$( "#45" ).css( "background-color", wall).addClass("wall");				
$( "#46" ).css( "background-color", path).addClass("path");				
$( "#47" ).css( "background-color", path).addClass("path");				
$( "#48" ).css( "background-color", path).addClass("path");				
$( "#49" ).css( "background-color", black).addClass("black");				
$( "#50" ).css( "background-color", black).addClass("black");				
$( "#51" ).css( "background-color", path).addClass("path");				
$( "#52" ).css( "background-color", path).addClass("path");				
$( "#53" ).css( "background-color", wall).addClass("wall");				
$( "#54" ).css( "background-color", path).addClass("path");				
$( "#55" ).css( "background-color", wall).addClass("wall");				
$( "#56" ).css( "background-color", path).addClass("path");				
$( "#57" ).css( "background-color", path).addClass("path");				
$( "#58" ).css( "background-color", path).addClass("path");				
$( "#59" ).css( "background-color", black).addClass("black");				
$( "#60" ).css( "background-color", black).addClass("black");				
$( "#61" ).css( "background-color", path).addClass("path");				
$( "#62" ).css( "background-color", path).addClass("path");				
$( "#63" ).css( "background-color", path).addClass("path");				
$( "#64" ).css( "background-color", path).addClass("path");				
$( "#65" ).css( "background-color", wall).addClass("wall");				
$( "#66" ).css( "background-color", path).addClass("path");				
$( "#67" ).css( "background-color", path).addClass("path");				
$( "#68" ).css( "background-color", path).addClass("path");				
$( "#69" ).css( "background-color", black).addClass("black");				
$( "#70" ).css( "background-color", black).addClass("black");				
$( "#71" ).css( "background-color", black).addClass("black");				
$( "#72" ).css( "background-color", black).addClass("black");				
$( "#73" ).css( "background-color", black).addClass("black");				
$( "#74" ).css( "background-color", path).addClass("path");				
$( "#75" ).css( "background-color", black).addClass("black");				
$( "#76" ).css( "background-color", black).addClass("black");				
$( "#77" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#78" ).css( "background-color", black).addClass("black");				
$( "#79" ).css( "background-color", black).addClass("black");				
$( "#80" ).css( "background-color", black).addClass("black");				
$( "#81" ).css( "background-color", black).addClass("black");				
$( "#82" ).css( "background-color", black).addClass("black");				
$( "#83" ).css( "background-color", black).addClass("black");				
$( "#84" ).css( "background-color", path).addClass("path");				
$( "#85" ).css( "background-color", black).addClass("black");				
$( "#86" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#87" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#88" ).css( "background-color", black).addClass("black");				
$( "#89" ).css( "background-color", black).addClass("black");				
$( "#90" ).css( "background-color", path5).addClass("path5");				
$( "#91" ).css( "background-color", path4).addClass("path4");				
$( "#92" ).css( "background-color", path3).addClass("path3");				
$( "#93" ).css( "background-color", path2).addClass("path2");				
$( "#94" ).css( "background-color", path).addClass("path");				
$( "#95" ).css( "background-color", black).addClass("black");				
$( "#96" ).css( "background-color", black).addClass("black");				
$( "#97" ).css( "background-color", black).addClass("black");				
$( "#98" ).css( "background-color", black).addClass("black");				
$( "#99" ).css( "background-color", black).addClass("black");																																											
    
//doors
$( "#14" ).addClass("bottomdoor");
//start of zone popup 
}
