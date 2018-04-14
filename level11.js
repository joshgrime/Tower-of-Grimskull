function lvl11 (){
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
$('#40').append('<div id=\"player\"></div>');
//player end
$('#99').addClass('end');

//enemies
$('#47').append('<div class=\"enemy Ghoul\" id=\"0ghoul\"></div>');
$('#21').append('<div class=\"enemy Ghoul\" id=\"1ghoul\"></div>');
$('#91').append('<div class=\"enemy Ghoul\" id=\"2ghoul\"></div>');
$('#69').append('<div class=\"enemy Ghoul\" id=\"3ghoul\"></div>');
$('#9').append('<div class=\"enemy Ghoul\" id=\"4ghoul\"></div>');
//NPCs
//objects
$('#5').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#71').append('<div class=\"hppickup\" id=\"Apple\"></div>');
//hp
    
//tiles
$( "#0" ).css( "background-color", black).addClass("black");				
$( "#1" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#2" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#3" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#4" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#5" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#6" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#7" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#8" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#9" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#10" ).css( "background-color", black).addClass("black");				
$( "#11" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#12" ).css( "background-color", black).addClass("black");				
$( "#13" ).css( "background-color", black).addClass("black");				
$( "#14" ).css( "background-color", black).addClass("black");				
$( "#15" ).css( "background-color", black).addClass("black");				
$( "#16" ).css( "background-color", black).addClass("black");				
$( "#17" ).css( "background-color", black).addClass("black");				
$( "#18" ).css( "background-color", black).addClass("black");				
$( "#19" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#20" ).css( "background-color", black).addClass("black");				
$( "#21" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#22" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#23" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#24" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#25" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#26" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#27" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#28" ).css( "background-color", black).addClass("black");				
$( "#29" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#30" ).css( "background-color", black).addClass("black");				
$( "#31" ).css( "background-color", black).addClass("black");				
$( "#32" ).css( "background-color", black).addClass("black");				
$( "#33" ).css( "background-color", black).addClass("black");				
$( "#34" ).css( "background-color", black).addClass("black");				
$( "#35" ).css( "background-color", black).addClass("black");				
$( "#36" ).css( "background-color", black).addClass("black");				
$( "#37" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#38" ).css( "background-color", black).addClass("black");				
$( "#39" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#40" ).css( "background-color", path).addClass("path");				
$( "#41" ).css( "background-color", path2).addClass("path2");				
$( "#42" ).css( "background-color", path3).addClass("path3");				
$( "#43" ).css( "background-color", path4).addClass("path4");				
$( "#44" ).css( "background-color", path5).addClass("path5");				
$( "#45" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#46" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#47" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#48" ).css( "background-color", black).addClass("black");				
$( "#49" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#50" ).css( "background-color", black).addClass("black");				
$( "#51" ).css( "background-color", black).addClass("black");				
$( "#52" ).css( "background-color", black).addClass("black");				
$( "#53" ).css( "background-color", black).addClass("black");				
$( "#54" ).css( "background-color", black).addClass("black");				
$( "#55" ).css( "background-color", black).addClass("black");				
$( "#56" ).css( "background-color", black).addClass("black");				
$( "#57" ).css( "background-color", black).addClass("black");				
$( "#58" ).css( "background-color", black).addClass("black");				
$( "#59" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#60" ).css( "background-color", black).addClass("black");				
$( "#61" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#62" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#63" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#64" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#65" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#66" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#67" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#68" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#69" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#70" ).css( "background-color", black).addClass("black");				
$( "#71" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#72" ).css( "background-color", black).addClass("black");				
$( "#73" ).css( "background-color", black).addClass("black");				
$( "#74" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#75" ).css( "background-color", black).addClass("black");				
$( "#76" ).css( "background-color", black).addClass("black");				
$( "#77" ).css( "background-color", black).addClass("black");				
$( "#78" ).css( "background-color", black).addClass("black");				
$( "#79" ).css( "background-color", black).addClass("black");				
$( "#80" ).css( "background-color", black).addClass("black");				
$( "#81" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#82" ).css( "background-color", black).addClass("black");				
$( "#83" ).css( "background-color", black).addClass("black");				
$( "#84" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#85" ).css( "background-color", black).addClass("black");				
$( "#86" ).css( "background-color", black).addClass("black");				
$( "#87" ).css( "background-color", black).addClass("black");				
$( "#88" ).css( "background-color", black).addClass("black");				
$( "#89" ).css( "background-color", black).addClass("black");				
$( "#90" ).css( "background-color", black).addClass("black");				
$( "#91" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#92" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#93" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#94" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#95" ).css( "background-color", path5).addClass("path5");				
$( "#96" ).css( "background-color", path4).addClass("path4");				
$( "#97" ).css( "background-color", path3).addClass("path3");				
$( "#98" ).css( "background-color", path2).addClass("path2");				
$( "#99" ).css( "background-color", path).addClass("path");																																	
    
//doors
//start of zone popup 

}
