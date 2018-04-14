function lvl15 (){
    //set colours

var black = "black";
var water = "#4889f2";
var wall = "#414956";
var path = "#d1d1d1";
var secretpath = "#000000";
    
    
//player start
$('#99').append('<div id=\"player\"></div>');
//player end
$('#10').addClass('end');

//enemies
$('#55').append('<div class=\"enemy FeralGhoul\" id=\"0feralghoul\"></div>');
$('#45').append('<div class=\"enemy FeralGhoul\" id=\"1feralghoul\"></div>');
$('#35').append('<div class=\"enemy FeralGhoul\" id=\"2feralghoul\"></div>');
$('#34').append('<div class=\"enemy FeralGhoul\" id=\"3feralghoul\"></div>');
$('#33').append('<div class=\"enemy FeralGhoul\" id=\"4feralghoul\"></div>');
$('#32').append('<div class=\"enemy FeralGhoul\" id=\"5feralghoul\"></div>');
$('#42').append('<div class=\"enemy FeralGhoul\" id=\"6feralghoul\"></div>');
$('#31').append('<div class=\"enemy LordShadowball\" id=\"0lordshadowball\"></div>');


//NPCs
//objects
$('#71').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#38').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#91').append('<div class=\"hppickup\" id=\"Apple\"></div>');
//hp
//keys    
$('#81').append('<div class=\"waterkey\" id=\"WaterKey\"></div>');
$('#52').append('<div class=\"key\" id=\"SmallKey\"></div>');
//tiles
$( "#0" ).css( "background-color", black).addClass("black");				
$( "#1" ).css( "background-color", black).addClass("black");				
$( "#2" ).css( "background-color", black).addClass("black");				
$( "#3" ).css( "background-color", black).addClass("black");				
$( "#4" ).css( "background-color", black).addClass("black");				
$( "#5" ).css( "background-color", black).addClass("black");				
$( "#6" ).css( "background-color", black).addClass("black");				
$( "#7" ).css( "background-color", black).addClass("black");				
$( "#8" ).css( "background-color", black).addClass("black");				
$( "#9" ).css( "background-color", black).addClass("black");				
$( "#10" ).css( "background-color", water).addClass("water");				
$( "#11" ).css( "background-color", water).addClass("water");				
$( "#12" ).css( "background-color", water).addClass("water");				
$( "#13" ).css( "background-color", water).addClass("water");				
$( "#14" ).css( "background-color", water).addClass("water");				
$( "#15" ).css( "background-color", water).addClass("water");				
$( "#16" ).css( "background-color", path).addClass("path");				
$( "#17" ).css( "background-color", path).addClass("path");				
$( "#18" ).css( "background-color", path).addClass("path");				
$( "#19" ).css( "background-color", path).addClass("path");				
$( "#20" ).css( "background-color", black).addClass("black");				
$( "#21" ).css( "background-color", black).addClass("black");				
$( "#22" ).css( "background-color", black).addClass("black");				
$( "#23" ).css( "background-color", black).addClass("black");				
$( "#24" ).css( "background-color", black).addClass("black");				
$( "#25" ).css( "background-color", black).addClass("black");				
$( "#26" ).css( "background-color", black).addClass("black");				
$( "#27" ).css( "background-color", black).addClass("black");				
$( "#28" ).css( "background-color", black).addClass("black");				
$( "#29" ).css( "background-color", path).addClass("path");				
$( "#30" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#31" ).css( "background-color", path).addClass("path");				
$( "#32" ).css( "background-color", path).addClass("path");				
$( "#33" ).css( "background-color", path).addClass("path");				
$( "#34" ).css( "background-color", path).addClass("path");				
$( "#35" ).css( "background-color", path).addClass("path");				
$( "#36" ).css( "background-color", black).addClass("black");				
$( "#37" ).css( "background-color", black).addClass("black");				
$( "#38" ).css( "background-color", path).addClass("path");				
$( "#39" ).css( "background-color", path).addClass("path");				
$( "#40" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#41" ).css( "background-color", black).addClass("black");				
$( "#42" ).css( "background-color", path).addClass("path");				
$( "#43" ).css( "background-color", black).addClass("black");				
$( "#44" ).css( "background-color", black).addClass("black");				
$( "#45" ).css( "background-color", path).addClass("path");				
$( "#46" ).css( "background-color", black).addClass("black");				
$( "#47" ).css( "background-color", black).addClass("black");				
$( "#48" ).css( "background-color", path).addClass("path");				
$( "#49" ).css( "background-color", path).addClass("path");				
$( "#50" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#51" ).css( "background-color", black).addClass("black");				
$( "#52" ).css( "background-color", path).addClass("path");				
$( "#53" ).css( "background-color", black).addClass("black");				
$( "#54" ).css( "background-color", black).addClass("black");				
$( "#55" ).css( "background-color", path).addClass("path");				
$( "#56" ).css( "background-color", path).addClass("path");				
$( "#57" ).css( "background-color", path).addClass("path");				
$( "#58" ).css( "background-color", path).addClass("path");				
$( "#59" ).css( "background-color", path).addClass("path");				
$( "#60" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#61" ).css( "background-color", black).addClass("black");				
$( "#62" ).css( "background-color", black).addClass("black");				
$( "#63" ).css( "background-color", black).addClass("black");				
$( "#64" ).css( "background-color", black).addClass("black");				
$( "#65" ).css( "background-color", black).addClass("black");				
$( "#66" ).css( "background-color", black).addClass("black");				
$( "#67" ).css( "background-color", black).addClass("black");				
$( "#68" ).css( "background-color", path).addClass("path");				
$( "#69" ).css( "background-color", path).addClass("path");				
$( "#70" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#71" ).css( "background-color", path).addClass("path");				
$( "#72" ).css( "background-color", path).addClass("path");				
$( "#73" ).css( "background-color", water).addClass("water");				
$( "#74" ).css( "background-color", water).addClass("water");				
$( "#75" ).css( "background-color", water).addClass("water");				
$( "#76" ).css( "background-color", water).addClass("water");				
$( "#77" ).css( "background-color", water).addClass("water");				
$( "#78" ).css( "background-color", path).addClass("path");				
$( "#79" ).css( "background-color", path).addClass("path");				
$( "#80" ).css( "background-color", black).addClass("black");				
$( "#81" ).css( "background-color", path).addClass("path");				
$( "#82" ).css( "background-color", path).addClass("path");				
$( "#83" ).css( "background-color", water).addClass("water");				
$( "#84" ).css( "background-color", water).addClass("water");				
$( "#85" ).css( "background-color", water).addClass("water");				
$( "#86" ).css( "background-color", water).addClass("water");				
$( "#87" ).css( "background-color", water).addClass("water");				
$( "#88" ).css( "background-color", black).addClass("black");				
$( "#89" ).css( "background-color", path).addClass("path");				
$( "#90" ).css( "background-color", black).addClass("black");				
$( "#91" ).css( "background-color", path).addClass("path");				
$( "#92" ).css( "background-color", path).addClass("path");				
$( "#93" ).css( "background-color", water).addClass("water");				
$( "#94" ).css( "background-color", water).addClass("water");				
$( "#95" ).css( "background-color", water).addClass("water");				
$( "#96" ).css( "background-color", water).addClass("water");				
$( "#97" ).css( "background-color", water).addClass("water");				
$( "#98" ).css( "background-color", black).addClass("black");				
$( "#99" ).css( "background-color", path).addClass("path");																																																					
    
//doors
$( "#12" ).addClass("rightdoor");
//start of zone popup 

}
