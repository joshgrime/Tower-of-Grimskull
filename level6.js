function lvl6 (){
    
//set colours
var land = "forestgreen";
var sea = "dodgerblue";
var sand = "darkkhaki";
var wall = "#414956";
var road = "#b2b2ab";
var tree = "#1d590e";
    
//player start
$('#0').append('<div id=\"player\"></div>');
//player end
$('#50').addClass('end');
$('#80').addClass('end');
//enemies
$('#53').append('<div class=\"enemy Skeleton\" id=\"0skeleton\"></div>');
$('#77').append('<div class=\"enemy Skeleton\" id=\"1skeleton\"></div>');
$('#32').append('<div class=\"enemy Necromancer\" id=\"0necromancer\"></div>');
//NPCs
$('#6').append('<div class=\"npc\" id="wizard2"></div>');

//objects
//keys
$('#17').append('<div class=\"key\" id=\"SmallKey\"></div>');
$('#21').append('<div class=\"key\" id=\"SmallKey\"></div>');
//hp
$('#23').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#2').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#41').append('<div class=\"hppickup\" id=\"Apple\"></div>');
$('#28').append('<div class=\"hppickup\" id=\"Banana\"></div>');
   
    
//tiles
$( "#0" ).css( "background-color", land).addClass("land");				
$( "#1" ).css( "background-color", land).addClass("land");				
$( "#2" ).css( "background-color", land).addClass("land");				
$( "#3" ).css( "background-color", land).addClass("land");				
$( "#4" ).css( "background-color", land).addClass("land");				
$( "#5" ).css( "background-color", land).addClass("land");				
$( "#6" ).css( "background-color", land).addClass("land");				
$( "#7" ).css( "background-color", tree).addClass("tree");				
$( "#8" ).css( "background-color", tree).addClass("tree");				
$( "#9" ).css( "background-color", tree).addClass("tree");				
$( "#10" ).css( "background-color", tree).addClass("tree");				
$( "#11" ).css( "background-color", tree).addClass("tree");				
$( "#12" ).css( "background-color", tree).addClass("tree");				
$( "#13" ).css( "background-color", tree).addClass("tree");				
$( "#14" ).css( "background-color", tree).addClass("tree");				
$( "#15" ).css( "background-color", land).addClass("land");				
$( "#16" ).css( "background-color", tree).addClass("tree");				
$( "#17" ).css( "background-color", land).addClass("land");				
$( "#18" ).css( "background-color", land).addClass("land");				
$( "#19" ).css( "background-color", tree).addClass("tree");				
$( "#20" ).css( "background-color", tree).addClass("tree");				
$( "#21" ).css( "background-color", land).addClass("land");				
$( "#22" ).css( "background-color", land).addClass("land");				
$( "#23" ).css( "background-color", land).addClass("land");				
$( "#24" ).css( "background-color", tree).addClass("tree");				
$( "#25" ).css( "background-color", land).addClass("land");				
$( "#26" ).css( "background-color", tree).addClass("tree");				
$( "#27" ).css( "background-color", land).addClass("land");				
$( "#28" ).css( "background-color", land).addClass("land");				
$( "#29" ).css( "background-color", tree).addClass("tree");				
$( "#30" ).css( "background-color", tree).addClass("tree");				
$( "#31" ).css( "background-color", tree).addClass("tree");				
$( "#32" ).css( "background-color", land).addClass("land");				
$( "#33" ).css( "background-color", tree).addClass("tree");				
$( "#34" ).css( "background-color", tree).addClass("tree");				
$( "#35" ).css( "background-color", land).addClass("land");				
$( "#36" ).css( "background-color", tree).addClass("tree");				
$( "#37" ).css( "background-color", land).addClass("land");				
$( "#38" ).css( "background-color", tree).addClass("tree");				
$( "#39" ).css( "background-color", tree).addClass("tree");				
$( "#40" ).css( "background-color", tree).addClass("tree");				
$( "#41" ).css( "background-color", land).addClass("land");				
$( "#42" ).css( "background-color", land).addClass("land");				
$( "#43" ).css( "background-color", land).addClass("land");				
$( "#44" ).css( "background-color", tree).addClass("tree");				
$( "#45" ).css( "background-color", land).addClass("land");				
$( "#46" ).css( "background-color", tree).addClass("tree");				
$( "#47" ).css( "background-color", land).addClass("land");				
$( "#48" ).css( "background-color", land).addClass("land");				
$( "#49" ).css( "background-color", tree).addClass("tree");				
$( "#50" ).css( "background-color", land).addClass("land");				
$( "#51" ).css( "background-color", land).addClass("land");				
$( "#52" ).css( "background-color", land).addClass("land");				
$( "#53" ).css( "background-color", land).addClass("land");				
$( "#54" ).css( "background-color", land).addClass("land");				
$( "#55" ).css( "background-color", land).addClass("land");				
$( "#56" ).css( "background-color", land).addClass("land");				
$( "#57" ).css( "background-color", land).addClass("land");				
$( "#58" ).css( "background-color", land).addClass("land");				
$( "#59" ).css( "background-color", tree).addClass("tree");				
$( "#60" ).css( "background-color", tree).addClass("tree");				
$( "#61" ).css( "background-color", tree).addClass("tree");				
$( "#62" ).css( "background-color", tree).addClass("tree");				
$( "#63" ).css( "background-color", tree).addClass("tree");				
$( "#64" ).css( "background-color", land).addClass("land");				
$( "#65" ).css( "background-color", land).addClass("land");				
$( "#66" ).css( "background-color", land).addClass("land");				
$( "#67" ).css( "background-color", land).addClass("land");				
$( "#68" ).css( "background-color", land).addClass("land");				
$( "#69" ).css( "background-color", tree).addClass("tree");				
$( "#70" ).css( "background-color", tree).addClass("tree");				
$( "#71" ).css( "background-color", land).addClass("land");				
$( "#72" ).css( "background-color", tree).addClass("tree");				
$( "#73" ).css( "background-color", land).addClass("land");				
$( "#74" ).css( "background-color", land).addClass("land");				
$( "#75" ).css( "background-color", land).addClass("land");				
$( "#76" ).css( "background-color", land).addClass("land");				
$( "#77" ).css( "background-color", land).addClass("land");				
$( "#78" ).css( "background-color", land).addClass("land");				
$( "#79" ).css( "background-color", tree).addClass("tree");				
$( "#80" ).css( "background-color", land).addClass("land");				
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
$( "#37" ).addClass("bottomdoor");
$( "#81" ).addClass("rightdoor");
    
//start of zone popup 
}
