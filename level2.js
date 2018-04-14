function lvl2 (){
    
//set colours
var land = "forestgreen";
var sea = "dodgerblue";
var sand = "darkkhaki";
var woodwall = "#472800";
var woodfloor = "#ad7000";
var tree = "#1d590e";

//player start
$('#3').append('<div id=\"player\"></div>');
//player end
$('#99').addClass('end');
//enemies
$('#89').append('<div class=\"enemy Skeleton\" id=\"0skeleton\"></div>');
$('#78').append('<div class=\"enemy Skeleton\" id=\"1skeleton\"></div>');
//NPCs
$('#35').append('<div class=\"npc\" id="marty"></div>');
    
//objects
$('#39').append('<div class=\"weapon\" id=\"OldSword\"></div>');

//keys

//hp
$('#91').append('<div class=\"hppickup\" id=\"Apple\"></div>');
    
//tiles
$( "#0" ).css( "background-color", sea).addClass("sea");				
$( "#1" ).css( "background-color", sea).addClass("sea");				
$( "#2" ).css( "background-color", woodwall).addClass("woodwall");				
$( "#3" ).css( "background-color", woodfloor).addClass("woodfloor");				
$( "#4" ).css( "background-color", woodfloor).addClass("woodfloor");				
$( "#5" ).css( "background-color", sea).addClass("sea");				
$( "#6" ).css( "background-color", sea).addClass("sea");				
$( "#7" ).css( "background-color", sea).addClass("sea");				
$( "#8" ).css( "background-color", sea).addClass("sea");				
$( "#9" ).css( "background-color", sea).addClass("sea");				
$( "#10" ).css( "background-color", sea).addClass("sea");				
$( "#11" ).css( "background-color", sea).addClass("sea");				
$( "#12" ).css( "background-color", woodwall).addClass("woodwall");				
$( "#13" ).css( "background-color", sea).addClass("sea");				
$( "#14" ).css( "background-color", woodfloor).addClass("woodfloor");				
$( "#15" ).css( "background-color", sea).addClass("sea");				
$( "#16" ).css( "background-color", sea).addClass("sea");				
$( "#17" ).css( "background-color", sea).addClass("sea");				
$( "#18" ).css( "background-color", sea).addClass("sea");				
$( "#19" ).css( "background-color", sea).addClass("sea");				
$( "#20" ).css( "background-color", sea).addClass("sea");				
$( "#21" ).css( "background-color", sea).addClass("sea");				
$( "#22" ).css( "background-color", sea).addClass("sea");				
$( "#23" ).css( "background-color", sea).addClass("sea");				
$( "#24" ).css( "background-color", woodfloor).addClass("woodfloor");				
$( "#25" ).css( "background-color", sea).addClass("sea");				
$( "#26" ).css( "background-color", sea).addClass("sea");				
$( "#27" ).css( "background-color", sea).addClass("sea");				
$( "#28" ).css( "background-color", sea).addClass("sea");				
$( "#29" ).css( "background-color", sea).addClass("sea");				
$( "#30" ).css( "background-color", sand).addClass("sand");				
$( "#31" ).css( "background-color", sand).addClass("sand");				
$( "#32" ).css( "background-color", sand).addClass("sand");				
$( "#33" ).css( "background-color", sand).addClass("sand");				
$( "#34" ).css( "background-color", sand).addClass("sand");				
$( "#35" ).css( "background-color", sand).addClass("sand");				
$( "#36" ).css( "background-color", sand).addClass("sand");				
$( "#37" ).css( "background-color", sand).addClass("sand");				
$( "#38" ).css( "background-color", sand).addClass("sand");				
$( "#39" ).css( "background-color", sand).addClass("sand");				
$( "#40" ).css( "background-color", sand).addClass("sand");				
$( "#41" ).css( "background-color", sand).addClass("sand");				
$( "#42" ).css( "background-color", sand).addClass("sand");				
$( "#43" ).css( "background-color", sand).addClass("sand");				
$( "#44" ).css( "background-color", sand).addClass("sand");				
$( "#45" ).css( "background-color", sand).addClass("sand");				
$( "#46" ).css( "background-color", sand).addClass("sand");				
$( "#47" ).css( "background-color", sand).addClass("sand");				
$( "#48" ).css( "background-color", sand).addClass("sand");				
$( "#49" ).css( "background-color", sand).addClass("sand");				
$( "#50" ).css( "background-color", sand).addClass("sand");				
$( "#51" ).css( "background-color", sand).addClass("sand");				
$( "#52" ).css( "background-color", sand).addClass("sand");				
$( "#53" ).css( "background-color", sand).addClass("sand");				
$( "#54" ).css( "background-color", sand).addClass("sand");				
$( "#55" ).css( "background-color", sand).addClass("sand");				
$( "#56" ).css( "background-color", sand).addClass("sand");				
$( "#57" ).css( "background-color", sand).addClass("sand");				
$( "#58" ).css( "background-color", sand).addClass("sand");				
$( "#59" ).css( "background-color", sand).addClass("sand");				
$( "#60" ).css( "background-color", sand).addClass("sand");				
$( "#61" ).css( "background-color", sand).addClass("sand");				
$( "#62" ).css( "background-color", sand).addClass("sand");				
$( "#63" ).css( "background-color", sand).addClass("sand");				
$( "#64" ).css( "background-color", sand).addClass("sand");				
$( "#65" ).css( "background-color", sand).addClass("sand");				
$( "#66" ).css( "background-color", sand).addClass("sand");				
$( "#67" ).css( "background-color", sand).addClass("sand");				
$( "#68" ).css( "background-color", sand).addClass("sand");				
$( "#69" ).css( "background-color", sand).addClass("sand");					
$( "#70" ).css( "background-color", sand).addClass("sand");				
$( "#71" ).css( "background-color", sand).addClass("sand");				
$( "#72" ).css( "background-color", land).addClass("land");				
$( "#73" ).css( "background-color", land).addClass("land");				
$( "#74" ).css( "background-color", sand).addClass("sand");				
$( "#75" ).css( "background-color", land).addClass("land");				
$( "#76" ).css( "background-color", sand).addClass("sand");				
$( "#77" ).css( "background-color", sand).addClass("sand");				
$( "#78" ).css( "background-color", land).addClass("land");				
$( "#79" ).css( "background-color", sand).addClass("sand");				
$( "#80" ).css( "background-color", sand).addClass("sand");				
$( "#81" ).css( "background-color", land).addClass("land");				
$( "#82" ).css( "background-color", land).addClass("land");				
$( "#83" ).css( "background-color", land).addClass("land");				
$( "#84" ).css( "background-color", land).addClass("land");				
$( "#85" ).css( "background-color", land).addClass("land");				
$( "#86" ).css( "background-color", land).addClass("land");				
$( "#87" ).css( "background-color", land).addClass("land");				
$( "#88" ).css( "background-color", land).addClass("land");				
$( "#89" ).css( "background-color", land).addClass("land");	
$( "#90" ).css( "background-color", tree).addClass("tree");				
$( "#91" ).css( "background-color", tree).addClass("tree");				
$( "#92" ).css( "background-color", tree).addClass("tree");				
$( "#93" ).css( "background-color", tree).addClass("tree");				
$( "#94" ).css( "background-color", tree).addClass("tree");				
$( "#95" ).css( "background-color", tree).addClass("tree");				
$( "#96" ).css( "background-color", tree).addClass("tree");				
$( "#97" ).css( "background-color", tree).addClass("tree");				
$( "#98" ).css( "background-color", tree).addClass("tree");				
$( "#99" ).css( "background-color", land).addClass("land");				
    
//doors

//start of zone popup 
$('#zonepop').removeClass('hidden');
$('#zonepop').addClass('visible');
$('#zonepop').empty();
$('#zonepop').append("The Briney Shore");
setTimeout(function(){ 
$('#zonepop').removeClass('visible');
$('#zonepop').addClass('hidden');
}, 4000);
setTimeout(function(){ 
$('#zonepop').empty();
}, 6000);
}
