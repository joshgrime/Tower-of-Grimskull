function lvl8 (){
//set colours
var wall = "#414956";
var path = "#d1d1d1";
var secretpath = "#000000";
    
    
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
$('#33').append('<div class=\"keepkey\" id=\"KeepKey\"></div>');
$('#47').append('<div class=\"key\" id=\"SmallKey\"></div>');
$('#13').append('<div class=\"key\" id=\"SmallKey\"></div>');
$('#67').append('<div class=\"nightmarekey\" id=\"NightmareKey\"></div>');

//hp
$('#81').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#89').append('<div class=\"hppickup\" id=\"Apple\"></div>');
    
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
$( "#10" ).css( "background-color", black).addClass("black");				
$( "#11" ).css( "background-color", black).addClass("black");				
$( "#12" ).css( "background-color", black).addClass("black");				
$( "#13" ).css( "background-color", black).addClass("black");				
$( "#14" ).css( "background-color", black).addClass("black");				
$( "#15" ).css( "background-color", black).addClass("black");				
$( "#16" ).css( "background-color", black).addClass("black");				
$( "#17" ).css( "background-color", black).addClass("black");				
$( "#18" ).css( "background-color", black).addClass("black");				
$( "#19" ).css( "background-color", black).addClass("black");				
$( "#20" ).css( "background-color", black).addClass("black");				
$( "#21" ).css( "background-color", black).addClass("black");				
$( "#22" ).css( "background-color", black).addClass("black");				
$( "#23" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#24" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#25" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#26" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#27" ).css( "background-color", black).addClass("black");				
$( "#28" ).css( "background-color", black).addClass("black");				
$( "#29" ).css( "background-color", black).addClass("black");				
$( "#30" ).css( "background-color", black).addClass("black");				
$( "#31" ).css( "background-color", black).addClass("black");				
$( "#32" ).css( "background-color", black).addClass("black");				
$( "#33" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#34" ).css( "background-color", black).addClass("black");				
$( "#35" ).css( "background-color", black).addClass("black");				
$( "#36" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#37" ).css( "background-color", black).addClass("black");				
$( "#38" ).css( "background-color", black).addClass("black");				
$( "#39" ).css( "background-color", black).addClass("black");				
$( "#40" ).css( "background-color", wall).addClass("wall");				
$( "#41" ).css( "background-color", wall).addClass("wall");				
$( "#42" ).css( "background-color", wall).addClass("wall");				
$( "#43" ).css( "background-color", path).addClass("path");				
$( "#44" ).css( "background-color", wall).addClass("wall");				
$( "#45" ).css( "background-color", wall).addClass("wall");				
$( "#46" ).css( "background-color", wall).addClass("wall");				
$( "#47" ).css( "background-color", wall).addClass("wall");				
$( "#48" ).css( "background-color", wall).addClass("wall");				
$( "#49" ).css( "background-color", wall).addClass("wall");				
$( "#50" ).css( "background-color", path).addClass("path");				
$( "#51" ).css( "background-color", path).addClass("path");				
$( "#52" ).css( "background-color", path).addClass("path");				
$( "#53" ).css( "background-color", path).addClass("path");				
$( "#54" ).css( "background-color", path).addClass("path");				
$( "#55" ).css( "background-color", path).addClass("path");				
$( "#56" ).css( "background-color", path).addClass("path");				
$( "#57" ).css( "background-color", path).addClass("path");				
$( "#58" ).css( "background-color", path).addClass("path");				
$( "#59" ).css( "background-color", path).addClass("path");				
$( "#60" ).css( "background-color", wall).addClass("wall");				
$( "#61" ).css( "background-color", wall).addClass("wall");				
$( "#62" ).css( "background-color", wall).addClass("wall");				
$( "#63" ).css( "background-color", wall).addClass("wall");				
$( "#64" ).css( "background-color", wall).addClass("wall");				
$( "#65" ).css( "background-color", wall).addClass("wall");				
$( "#66" ).css( "background-color", path).addClass("path");				
$( "#67" ).css( "background-color", wall).addClass("wall");				
$( "#68" ).css( "background-color", wall).addClass("wall");				
$( "#69" ).css( "background-color", wall).addClass("wall");				
$( "#70" ).css( "background-color", black).addClass("black");				
$( "#71" ).css( "background-color", black).addClass("black");				
$( "#72" ).css( "background-color", black).addClass("black");				
$( "#73" ).css( "background-color", black).addClass("black");				
$( "#74" ).css( "background-color", black).addClass("black");				
$( "#75" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#76" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#77" ).css( "background-color", black).addClass("black");				
$( "#78" ).css( "background-color", black).addClass("black");				
$( "#79" ).css( "background-color", black).addClass("black");				
$( "#80" ).css( "background-color", black).addClass("black");				
$( "#81" ).css( "background-color", black).addClass("black");				
$( "#82" ).css( "background-color", black).addClass("black");				
$( "#83" ).css( "background-color", black).addClass("black");				
$( "#84" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#85" ).css( "background-color", secretpath).addClass("secretpath");				
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

$( "#86" ).addClass("leftdoor");
$( "#88" ).addClass("leftdoor");
$( "#43" ).addClass("bottomdoor nightmaredoor");
    
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

