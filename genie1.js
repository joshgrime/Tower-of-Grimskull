function genie1 (prev){
    //set colours
var blue = "#09295e";
var yellow = "#fcf235";
var lava = "#aa0005";

//player start
if (prev == 0){$('#95').append('<div id=\"player\"></div>');}
else if (prev == 2 || prev == 6){$('#40').append('<div id=\"player\"></div>');}
else if (prev == 3 || prev == 5){$('#49').append('<div id=\"player\"></div>');}
else if (prev == 4){$('#5').append('<div id=\"player\"></div>');}
    
//player end
if (prev == 0){$('#40').addClass('end').addClass('1e'); $('#49').addClass('end').addClass('1w'); $('#5').addClass('end').addClass('1n');}
else if (prev == 3 || prev == 5){$('#40').addClass('end').addClass('1e'); $('#95').addClass('end').addClass('1s'); $('#5').addClass('end').addClass('1n');}
else if (prev == 4){$('#40').addClass('end').addClass('1e'); $('#49').addClass('end').addClass('1w'); $('#95').addClass('end').addClass('1s');}
else if (prev == 2 || prev == 6){$('#95').addClass('end').addClass('1s'); $('#49').addClass('end').addClass('1w'); $('#5').addClass('end').addClass('1n');}

//enemies
//NPCs
//objects
//hp
//keys
//tiles

$( "#0" ).css( "background-color", blue).addClass("blue");				
$( "#1" ).css( "background-color", blue).addClass("blue");				
$( "#2" ).css( "background-color", blue).addClass("blue");				
$( "#3" ).css( "background-color", blue).addClass("blue");				
$( "#4" ).css( "background-color", blue).addClass("blue");				
$( "#5" ).css( "background-color", yellow).addClass("yellow");				
$( "#6" ).css( "background-color", blue).addClass("blue");				
$( "#7" ).css( "background-color", blue).addClass("blue");				
$( "#8" ).css( "background-color", blue).addClass("blue");				
$( "#9" ).css( "background-color", blue).addClass("blue");				
$( "#10" ).css( "background-color", blue).addClass("blue");				
$( "#11" ).css( "background-color", yellow).addClass("yellow");				
$( "#12" ).css( "background-color", yellow).addClass("yellow");				
$( "#13" ).css( "background-color", yellow).addClass("yellow");				
$( "#14" ).css( "background-color", yellow).addClass("yellow");				
$( "#15" ).css( "background-color", yellow).addClass("yellow");				
$( "#16" ).css( "background-color", yellow).addClass("yellow");				
$( "#17" ).css( "background-color", yellow).addClass("yellow");				
$( "#18" ).css( "background-color", yellow).addClass("yellow");				
$( "#19" ).css( "background-color", blue).addClass("blue");				
$( "#20" ).css( "background-color", blue).addClass("blue");				
$( "#21" ).css( "background-color", yellow).addClass("yellow");						
$( "#24" ).css( "background-color", yellow).addClass("yellow");				
$( "#25" ).css( "background-color", yellow).addClass("yellow");				
$( "#28" ).css( "background-color", yellow).addClass("yellow");				
$( "#29" ).css( "background-color", blue).addClass("blue");				
$( "#30" ).css( "background-color", blue).addClass("blue");				
$( "#31" ).css( "background-color", yellow).addClass("yellow");				
$( "#33" ).css( "background-color", yellow).addClass("yellow");				
$( "#34" ).css( "background-color", yellow).addClass("yellow");				
$( "#35" ).css( "background-color", yellow).addClass("yellow");				
$( "#36" ).css( "background-color", yellow).addClass("yellow");							
$( "#38" ).css( "background-color", yellow).addClass("yellow");				
$( "#39" ).css( "background-color", blue).addClass("blue");				
$( "#40" ).css( "background-color", yellow).addClass("yellow");				
$( "#41" ).css( "background-color", yellow).addClass("yellow");				
$( "#42" ).css( "background-color", yellow).addClass("yellow");				
$( "#43" ).css( "background-color", yellow).addClass("yellow");				
$( "#44" ).css( "background-color", yellow).addClass("yellow");				
$( "#45" ).css( "background-color", yellow).addClass("yellow");				
$( "#46" ).css( "background-color", yellow).addClass("yellow");				
$( "#47" ).css( "background-color", yellow).addClass("yellow");				
$( "#48" ).css( "background-color", yellow).addClass("yellow");				
$( "#49" ).css( "background-color", yellow).addClass("yellow");				
$( "#50" ).css( "background-color", blue).addClass("blue");				
$( "#51" ).css( "background-color", yellow).addClass("yellow");				
$( "#52" ).css( "background-color", yellow).addClass("yellow");				
$( "#53" ).css( "background-color", yellow).addClass("yellow");				
$( "#54" ).css( "background-color", yellow).addClass("yellow");				
$( "#55" ).css( "background-color", yellow).addClass("yellow");				
$( "#56" ).css( "background-color", yellow).addClass("yellow");				
$( "#57" ).css( "background-color", yellow).addClass("yellow");				
$( "#58" ).css( "background-color", yellow).addClass("yellow");				
$( "#59" ).css( "background-color", blue).addClass("blue");				
$( "#60" ).css( "background-color", blue).addClass("blue");				
$( "#61" ).css( "background-color", yellow).addClass("yellow");				
$( "#63" ).css( "background-color", yellow).addClass("yellow");				
$( "#64" ).css( "background-color", yellow).addClass("yellow");				
$( "#65" ).css( "background-color", yellow).addClass("yellow");				
$( "#66" ).css( "background-color", yellow).addClass("yellow");				
$( "#68" ).css( "background-color", yellow).addClass("yellow");				
$( "#69" ).css( "background-color", blue).addClass("blue");				
$( "#70" ).css( "background-color", blue).addClass("blue");				
$( "#71" ).css( "background-color", yellow).addClass("yellow");							
$( "#74" ).css( "background-color", yellow).addClass("yellow");				
$( "#75" ).css( "background-color", yellow).addClass("yellow");							
$( "#78" ).css( "background-color", yellow).addClass("yellow");				
$( "#79" ).css( "background-color", blue).addClass("blue");				
$( "#80" ).css( "background-color", blue).addClass("blue");				
$( "#81" ).css( "background-color", yellow).addClass("yellow");				
$( "#82" ).css( "background-color", yellow).addClass("yellow");				
$( "#83" ).css( "background-color", yellow).addClass("yellow");				
$( "#84" ).css( "background-color", yellow).addClass("yellow");				
$( "#85" ).css( "background-color", yellow).addClass("yellow");				
$( "#86" ).css( "background-color", yellow).addClass("yellow");				
$( "#87" ).css( "background-color", yellow).addClass("yellow");				
$( "#88" ).css( "background-color", yellow).addClass("yellow");				
$( "#89" ).css( "background-color", blue).addClass("blue");				
$( "#90" ).css( "background-color", blue).addClass("blue");				
$( "#91" ).css( "background-color", blue).addClass("blue");				
$( "#92" ).css( "background-color", blue).addClass("blue");				
$( "#93" ).css( "background-color", blue).addClass("blue");				
$( "#94" ).css( "background-color", blue).addClass("blue");				
$( "#95" ).css( "background-color", yellow).addClass("yellow");				
$( "#96" ).css( "background-color", blue).addClass("blue");				
$( "#97" ).css( "background-color", blue).addClass("blue");				
$( "#98" ).css( "background-color", blue).addClass("blue");				
$( "#99" ).css( "background-color", blue).addClass("blue");																																var haveKey = $(".bag").find("#LavaKey").length;
        if (haveKey >= 1){
$( "#22" ).css( "background-color", lava).addClass("land");				
$( "#23" ).css( "background-color", lava).addClass("land");
$( "#26" ).css( "background-color", lava).addClass("land");				
$( "#27" ).css( "background-color", lava).addClass("land");	
$( "#32" ).css( "background-color", lava).addClass("land");	
$( "#37" ).css( "background-color", lava).addClass("land");
$( "#62" ).css( "background-color", lava).addClass("land");
$( "#67" ).css( "background-color", lava).addClass("land");
$( "#72" ).css( "background-color", lava).addClass("land");				
$( "#73" ).css( "background-color", lava).addClass("land");
$( "#76" ).css( "background-color", lava).addClass("land");				
$( "#77" ).css( "background-color", lava).addClass("land");	
        }																					else {
$( "#22" ).css( "background-color", lava).addClass("lava");				
$( "#23" ).css( "background-color", lava).addClass("lava");
$( "#26" ).css( "background-color", lava).addClass("lava");				
$( "#27" ).css( "background-color", lava).addClass("lava");	
$( "#32" ).css( "background-color", lava).addClass("lava");	
$( "#37" ).css( "background-color", lava).addClass("lava");
$( "#62" ).css( "background-color", lava).addClass("lava");
$( "#67" ).css( "background-color", lava).addClass("lava");
$( "#72" ).css( "background-color", lava).addClass("lava");				
$( "#73" ).css( "background-color", lava).addClass("lava");
$( "#76" ).css( "background-color", lava).addClass("lava");				
$( "#77" ).css( "background-color", lava).addClass("lava");	
        }								
    
//doors
if (prev == 0) {
$('#zonepop').removeClass('hidden');
$('#zonepop').addClass('visible');
$('#zonepop').empty();
$('#zonepop').append("Genie Grotto: Mirage Labyrinthe");
setTimeout(function(){ 
$('#zonepop').removeClass('visible');
$('#zonepop').addClass('hidden');
}, 4000);
setTimeout(function(){ 
$('#zonepop').empty();
}, 6000);
}
}
