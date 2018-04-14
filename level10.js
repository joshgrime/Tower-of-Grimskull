function lvl10 (){

    //new zone, clear small keys
    
    var haveKeys = $(".bag").find(".key").length;
    var keynumber = (haveKeys / 2);
    for (var i=0; i < keynumber; i++){
    var keySlot = $('.bagcell.full.key').attr('id');
       var keyType = $('#'+keySlot).children('div').attr('id');
       console.log("keyslot: "+keySlot);
       $('#'+keySlot).empty();
       $('#'+keySlot).removeClass('full');
       $('#'+keySlot).removeClass('key');
    }
    //set colours

var black = "black";
var wall = "#414956";
var path = "#d1d1d1";
var secretpath = "#000000";
    
    
//player start
$('#50').append('<div id=\"player\"></div>');
//player end
$('#59').addClass('end');

//enemies

//NPCs
//objects

//hp
$('#7').append('<div class=\"hppickup\" id=\"Banana\"></div>');
$('#70').append('<div class=\"key\" id=\"SmallKey\"></div>');
    
//tiles
$( "#0" ).css( "background-color", black).addClass("black");				
$( "#1" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#2" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#3" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#4" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#5" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#6" ).css( "background-color", black).addClass("black");				
$( "#7" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#8" ).css( "background-color", black).addClass("black");				
$( "#9" ).css( "background-color", black).addClass("black");				
$( "#10" ).css( "background-color", black).addClass("black");				
$( "#11" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#12" ).css( "background-color", black).addClass("black");				
$( "#13" ).css( "background-color", black).addClass("black");				
$( "#14" ).css( "background-color", black).addClass("black");				
$( "#15" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#16" ).css( "background-color", black).addClass("black");				
$( "#17" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#18" ).css( "background-color", black).addClass("black");				
$( "#19" ).css( "background-color", black).addClass("black");				
$( "#20" ).css( "background-color", black).addClass("black");				
$( "#21" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#22" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#23" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#24" ).css( "background-color", black).addClass("black");				
$( "#25" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#26" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#27" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#28" ).css( "background-color", black).addClass("black");				
$( "#29" ).css( "background-color", black).addClass("black");				
$( "#30" ).css( "background-color", black).addClass("black");				
$( "#31" ).css( "background-color", black).addClass("black");				
$( "#32" ).css( "background-color", black).addClass("black");				
$( "#33" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#34" ).css( "background-color", black).addClass("black");				
$( "#35" ).css( "background-color", black).addClass("black");				
$( "#36" ).css( "background-color", black).addClass("black");				
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
$( "#70" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#71" ).css( "background-color", black).addClass("black");				
$( "#72" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#73" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#74" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#75" ).css( "background-color", black).addClass("black");				
$( "#76" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#77" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#78" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#79" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#80" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#81" ).css( "background-color", black).addClass("black");				
$( "#82" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#83" ).css( "background-color", black).addClass("black");				
$( "#84" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#85" ).css( "background-color", black).addClass("black");				
$( "#86" ).css( "background-color", black).addClass("black");				
$( "#87" ).css( "background-color", black).addClass("black");				
$( "#88" ).css( "background-color", black).addClass("black");				
$( "#89" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#90" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#91" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#92" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#93" ).css( "background-color", black).addClass("black");				
$( "#94" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#95" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#96" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#97" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#98" ).css( "background-color", secretpath).addClass("secretpath");				
$( "#99" ).css( "background-color", secretpath).addClass("secretpath");																													
    
//doors

$( "#58" ).addClass("leftdoor");
//start of zone popup 
$('#zonepop').removeClass('hidden');
$('#zonepop').addClass('visible');
$('#zonepop').empty();
$('#zonepop').append("Grimskull Keep: Shadow Caverns");
setTimeout(function(){ 
$('#zonepop').removeClass('visible');
$('#zonepop').addClass('hidden');
}, 4000);
setTimeout(function(){ 
$('#zonepop').empty();
}, 6000);
}

