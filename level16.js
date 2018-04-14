function lvl16 (){
    //set colours
var land = "forestgreen";
var tree = "#1d590e";
var black = "black";
var water = "#4889f2";
var wall = "#414956";
var path = "#d1d1d1";
var secretpath = "#000000";
    
    
//player start
$('#84').append('<div id=\"player\"></div>');
//player end
$('#1').addClass('end');
$('#2').addClass('end');
$('#3').addClass('end');

//enemies
$('#64').append('<div class=\"enemy Guard\" id=\"0guard\"></div>');



//NPCs
$('#22').append('<div class=\"npc\" id="wizard4"></div>');
//objects
//hp
$('#47').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#68').append('<div class=\"hppickup\" id=\"Apple\"></div>');
//keys  
//tiles
$( "#0" ).css( "background-color", wall).addClass("wall");				
$( "#1" ).css( "background-color", land).addClass("land");				
$( "#2" ).css( "background-color", land).addClass("land");				
$( "#3" ).css( "background-color", land).addClass("land");				
$( "#4" ).css( "background-color", wall).addClass("wall");				
$( "#5" ).css( "background-color", wall).addClass("wall");				
$( "#6" ).css( "background-color", wall).addClass("wall");				
$( "#7" ).css( "background-color", wall).addClass("wall");				
$( "#8" ).css( "background-color", wall).addClass("wall");				
$( "#9" ).css( "background-color", wall).addClass("wall");				
$( "#10" ).css( "background-color", wall).addClass("wall");				
$( "#11" ).css( "background-color", land).addClass("land");				
$( "#12" ).css( "background-color", land).addClass("land");				
$( "#13" ).css( "background-color", tree).addClass("tree");				
$( "#14" ).css( "background-color", tree).addClass("tree");				
$( "#15" ).css( "background-color", land).addClass("land");				
$( "#16" ).css( "background-color", land).addClass("land");				
$( "#17" ).css( "background-color", land).addClass("land");				
$( "#18" ).css( "background-color", land).addClass("land");				
$( "#19" ).css( "background-color", wall).addClass("wall");				
$( "#20" ).css( "background-color", wall).addClass("wall");				
$( "#21" ).css( "background-color", land).addClass("land");				
$( "#22" ).css( "background-color", land).addClass("land");				
$( "#23" ).css( "background-color", tree).addClass("tree");				
$( "#24" ).css( "background-color", tree).addClass("tree");				
$( "#25" ).css( "background-color", land).addClass("land");				
$( "#26" ).css( "background-color", land).addClass("land");				
$( "#27" ).css( "background-color", land).addClass("land");				
$( "#28" ).css( "background-color", land).addClass("land");				
$( "#29" ).css( "background-color", wall).addClass("wall");				
$( "#30" ).css( "background-color", wall).addClass("wall");				
$( "#31" ).css( "background-color", land).addClass("land");				
$( "#32" ).css( "background-color", land).addClass("land");				
$( "#33" ).css( "background-color", land).addClass("land");				
$( "#34" ).css( "background-color", land).addClass("land");				
$( "#35" ).css( "background-color", land).addClass("land");				
$( "#36" ).css( "background-color", land).addClass("land");				
$( "#37" ).css( "background-color", land).addClass("land");				
$( "#38" ).css( "background-color", tree).addClass("tree");				
$( "#39" ).css( "background-color", wall).addClass("wall");				
$( "#40" ).css( "background-color", wall).addClass("wall");				
$( "#41" ).css( "background-color", land).addClass("land");				
$( "#42" ).css( "background-color", land).addClass("land");				
$( "#43" ).css( "background-color", land).addClass("land");				
$( "#44" ).css( "background-color", land).addClass("land");				
$( "#45" ).css( "background-color", land).addClass("land");				
$( "#46" ).css( "background-color", land).addClass("land");				
$( "#47" ).css( "background-color", land).addClass("land");				
$( "#48" ).css( "background-color", land).addClass("land");				
$( "#49" ).css( "background-color", wall).addClass("wall");				
$( "#50" ).css( "background-color", wall).addClass("wall");				
$( "#51" ).css( "background-color", land).addClass("land");				
$( "#52" ).css( "background-color", land).addClass("land");				
$( "#53" ).css( "background-color", land).addClass("land");				
$( "#54" ).css( "background-color", land).addClass("land");				
$( "#55" ).css( "background-color", land).addClass("land");				
$( "#56" ).css( "background-color", land).addClass("land");				
$( "#57" ).css( "background-color", tree).addClass("tree");				
$( "#58" ).css( "background-color", land).addClass("land");				
$( "#59" ).css( "background-color", wall).addClass("wall");				
$( "#60" ).css( "background-color", wall).addClass("wall");				
$( "#61" ).css( "background-color", land).addClass("land");				
$( "#62" ).css( "background-color", land).addClass("land");				
$( "#63" ).css( "background-color", land).addClass("land");				
$( "#64" ).css( "background-color", land).addClass("land");				
$( "#65" ).css( "background-color", land).addClass("land");				
$( "#66" ).css( "background-color", land).addClass("land");				
$( "#67" ).css( "background-color", land).addClass("land");				
$( "#68" ).css( "background-color", land).addClass("land");				
$( "#69" ).css( "background-color", wall).addClass("wall");				
$( "#70" ).css( "background-color", wall).addClass("wall");				
$( "#71" ).css( "background-color", land).addClass("land");				
$( "#72" ).css( "background-color", water).addClass("water");				
$( "#73" ).css( "background-color", water).addClass("water");				
$( "#74" ).css( "background-color", water).addClass("land");				
$( "#75" ).css( "background-color", water).addClass("water");				
$( "#76" ).css( "background-color", water).addClass("water");				
$( "#77" ).css( "background-color", water).addClass("water");				
$( "#78" ).css( "background-color", land).addClass("land");				
$( "#79" ).css( "background-color", wall).addClass("wall");				
$( "#80" ).css( "background-color", wall).addClass("wall");				
$( "#81" ).css( "background-color", land).addClass("land");				
$( "#82" ).css( "background-color", water).addClass("water");				
$( "#83" ).css( "background-color", water).addClass("water");				
$( "#84" ).css( "background-color", water).addClass("land");				
$( "#85" ).css( "background-color", water).addClass("water");				
$( "#86" ).css( "background-color", water).addClass("water");				
$( "#87" ).css( "background-color", water).addClass("water");				
$( "#88" ).css( "background-color", land).addClass("land");				
$( "#89" ).css( "background-color", wall).addClass("wall");				
$( "#90" ).css( "background-color", wall).addClass("wall");				
$( "#91" ).css( "background-color", wall).addClass("wall");				
$( "#92" ).css( "background-color", water).addClass("water");				
$( "#93" ).css( "background-color", water).addClass("water");				
$( "#94" ).css( "background-color", black).addClass("black");				
$( "#95" ).css( "background-color", black).addClass("black");				
$( "#96" ).css( "background-color", water).addClass("water");				
$( "#97" ).css( "background-color", water).addClass("water");				
$( "#98" ).css( "background-color", wall).addClass("wall");				
$( "#99" ).css( "background-color", wall).addClass("wall");																																																											
    
//doors
//start of zone popup 
$('#zonepop').removeClass('hidden');
$('#zonepop').addClass('visible');
$('#zonepop').empty();
$('#zonepop').append("Grimskull Keep");
setTimeout(function(){ 
$('#zonepop').removeClass('visible');
$('#zonepop').addClass('hidden');
}, 4000);
setTimeout(function(){ 
$('#zonepop').empty();
}, 6000);
}

