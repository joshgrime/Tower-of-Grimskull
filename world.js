function god() {
    //build table
 
$('#universe').empty();
var table = $('<table></table>').addClass('map');
for(i=0; i<10; i++){
    var row = $('<tr></tr>').addClass('row');
    table.append(row);
        for(j=0; j<10; j++){
            if (i== 0) {
            var cell = $('<td id="'+j+'"></td>').addClass('cell');
            row.append(cell);   
            }
            else {
            var cell = $('<td id="'+i+j+'"></td>').addClass('cell');
            row.append(cell);
                }
    }
    
$('#universe').append(table);
    
}
}

function levelPick(newId){
    var lvl = parseInt($('#level').val());
    console.log('new ID on level LOAD--->   '+newId);
    levelLoad(lvl, newId);
}

function levelLoad(lvl, newId, genieLoad) {
    console.log('new ID on level LOAD--->   '+newId);
    $('#universe').empty();
    god();
    var g = $('#level').val();
    //genie grotto levels
    if (g == 'GENIE GROTTO' && genieLoad == undefined){
        var prev = newId;
        if (prev == '1n') {genie6(1);}
        else if (prev == '1s') {genie5(1);}
        else if (prev == '1e') {genie2(1);}
        else if (prev == '1w') {genie3(1);}
        else if (prev == '2n') {genie5(2);}
        else if (prev == '2s') {genie5(2);}
        else if (prev == '2e') {genie1(2);}
        else if (prev == '2w') {genie4(2);}
        else if (prev == '3s') {genie5(3, 'north');}
        else if (prev == '3e') {genie1(3);}
        else if (prev == '3w') {genie5(3, 'east');}
        else if (prev == '4s' || prev == '4e') {genie1(4);}
        else if (prev == '4w') {genie5(4);}
        else if (prev == '5n') {genie4(5);}
        else if (prev == '5s') {genie2(5);}
        else if (prev == '5e') {genie2(4);}
        else if (prev == '5w1') {genie7();}
        else if (prev == '5w2') {genie1(5);}
        else if (prev == '6e') {genie1(6);}
        else if (prev == '6n') {genie8();}
        else if (prev == '7') {genie5(7);}
        else if (prev == '8') {$('#level').val('20'); levelLoad(20, null, null); $(".bag").find("#LavaKey").parent('td').empty(); questLog('LavaKey', 10); frankenstein();}
        }
    else if (g == 'GENIE GROTTO' && genieLoad == 1) {
        genie1(0);
    }
    else {
    if (lvl == 1) {
        lvl1();
    }
    else if (lvl == 2) {
        lvl2();
    }
    else if (lvl == 3) {
        lvl3(1);
    }
    else if (lvl == 4) {
        lvl4();
    }
    else if (lvl == 5) {
        lvl5();
    }
    else if (lvl == 6) {
        lvl6();
    }
    else if (lvl == 7) {
        if (newId == "#80") {lvl7(1);} else {lvl7(2);}
    }
    else if (lvl == 8) {
        lvl8();
    }
    else if (lvl == 9) {
        lvl3(2);
    }
    else if (lvl == 10) {
        lvl10();
    }
    else if (lvl == 11){
        lvl11();
    }
    else if (lvl == 12){
        lvl12();
    }
    else if (lvl == 13){
        lvl13();
    }
    else if (lvl == 14){
        lvl14();
    }
    else if (lvl == 15){
        lvl15();
    }
    else if (lvl == 16){
        lvl16();
    }
    else if (lvl == 17) {
        if (newId == "#80") {lvl17(1);} else {lvl17(2);}
    }
    else if (lvl == 18){
        lvl18();
    }
    else if (lvl == 20){
        lvl20();
    }
    else {
        alert("Level loader not working");
    }
    }
}

function bag() {

   if ($('.bag').attr('id') == "inventory") {$('#bag').empty(); hpDisplay(100); expDisplay(0); atkDisplay(1); defDisplay(0);}
  else {
      hpDisplay(100); expDisplay(0); atkDisplay(1); defDisplay(0);
  }
    
    //build inventory


var table = $('<table></table>').addClass('bag').attr('id', 'inventory');
for(i=0; i<10; i++){
    var row = $('<tr></tr>').addClass('bagrow').attr('id', 'inventoryrow');
    table.append(row);
        for(j=0; j<2; j++){
            if (i == 0) {
            var cell = $('<td id="'+j+'bag"></td>').addClass('bagcell');
            row.append(cell);   
            }
            else {
            var cell = $('<td id="'+i+j+'bag"></td>').addClass('bagcell');
            row.append(cell);
                }
    }
    
$('#bag').append(table);
    
}
}