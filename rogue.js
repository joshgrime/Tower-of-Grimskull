//stats

var hp;
var playerDefense;
var playerAttack = 1;
var exp = 0;
var levelUps = [6,8,10,20]; //how much exp for each level
var playerAttackVals = [1,2,3,4,5];
var playerDefenseVals = [0,1,2,3,4,5];
var armourVals = [{"PlateArmor": 20, "LeatherArmour": 5, "StuddedLeatherArmour": 10, "CrusaderArmour": 30, "ShadowArmour": 40,"RegalArmour": 60, "HolyArmour": 80, "RustySteelArmour": 15}];
var weaponVals = [{"OldSword": 4, "LongRedStickOfCleaving": 20, "Dagger": 10, "RegalSword": 20, "FrozenShard": 35, "UnholyBlade": 50, "HellRazer": 80}];
var fruit = [{"apple": 50,"banana": 100}];
var doors = ["topdoor", "bottomdoor", "leftdoor", "rightdoor"];
var skeletons = [];
var necromen = [];
var nightmares = [];
var lordshadowballs = [];
var ghouls = [];
var genies =[];
var feralghouls = [];
var guards = [];
var grimskulls =[];
var statStart = [];
var bagStart = [];
function frankenstein() {
//enemies 
skeletons.length = 0;
var count = (document.getElementsByClassName("enemy Skeleton")).length;
for(var i=0; i < count; i++){
    var skeleton = {
        "id": i,
        "monsterAttack": 0, 
        "monsterHp": 100,
        "monsterDefense": -15,
        "modifier": 1,
        "exp": 2
    };
    skeletons.push(skeleton);
}
necromen.length = 0;
var count1 = (document.getElementsByClassName("enemy Necromancer")).length;
for(var i=0; i < count1; i++){
    var necromancer = {
        "id": i,
        "monsterAttack": 0, 
        "monsterHp": 100,
        "monsterDefense": -10,
        "modifier": 5,
        "exp": 10
    };
    necromen.push(necromancer);
}
nightmares.length = 0;
var count2 = (document.getElementsByClassName("enemy Nightmare")).length;
for(var i=0; i < count2; i++){
    var nightmare = {
        "id": i,
        "monsterAttack": 0, 
        "monsterHp": 100,
        "monsterDefense": -10,
        "modifier": 5,
        "exp": 10
    };
    nightmares.push(nightmare);
}
ghouls.length = 0;
var count3 = (document.getElementsByClassName("enemy Ghoul")).length;
for(var i=0; i < count3; i++){
    var ghoul = {
        "id": i,
        "monsterAttack": 0, 
        "monsterHp": 100,
        "monsterDefense": -10,
        "modifier": 5,
        "exp": 10
    };
    ghouls.push(ghoul);
}
feralghouls.length = 0;
var count5 = (document.getElementsByClassName("enemy FeralGhoul")).length;
for(var i=0; i < count5; i++){
    var feralghoul = {
        "id": i,
        "monsterAttack": 0, 
        "monsterHp": 100,
        "monsterDefense": -10,
        "modifier": 5,
        "exp": 10
    };
    feralghouls.push(feralghoul);
}
lordshadowballs.length = 0;
var count4 = (document.getElementsByClassName("enemy LordShadowball")).length;
for(var i=0; i < count4; i++){
    var lordshadowball = {
        "id": i,
        "monsterAttack": 0, 
        "monsterHp": 100,
        "monsterDefense": -10,
        "modifier": 5,
        "exp": 10
    };
    lordshadowballs.push(lordshadowball);
}
guards.length = 0;
var count6 = (document.getElementsByClassName("enemy Guard")).length;
for(var i=0; i < count6; i++){
    var guard = {
        "id": i,
        "monsterAttack": 0, 
        "monsterHp": 100,
        "monsterDefense": -10,
        "modifier": 5,
        "exp": 10
    };
    guards.push(guard);
}
grimskulls.length = 0;
var count7 = (document.getElementsByClassName("enemy GrimskullElite")).length;
for(var i=0; i < count7; i++){
    var grimskull = {
        "id": i,
        "monsterAttack": 0, 
        "monsterHp": 100,
        "monsterDefense": -10,
        "modifier": 5,
        "exp": 10
    };
    grimskulls.push(grimskull);
}
genies.length = 0;
var count8 = (document.getElementsByClassName("enemy Genie")).length;
for(var i=0; i < count8; i++){
    var genie = {
        "id": i,
        "monsterAttack": 0, 
        "monsterHp": 100,
        "monsterDefense": -10,
        "modifier": 5,
        "exp": 10
    };
    genies.push(genie);
}
}
//terrain & monsters
var upBlock = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var downBlock =  ["90", "91", "92", "93", "94", "95", "96", "97", "98", "99"];
var leftBlock = ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90"];
var rightBlock = ["9", "19", "29", "39", "49", "59", "69", "79", "89", "99"];
var terrain = ["cell sea", "cell black", "cell woodwall", "cell wall", "cell tree", "cell water", "cell blue", "cell lava"];
var monsterZoo = ["enemy Skeleton", "enemy Necromancer", "enemy Nightmare", "enemy Ghoul", "enemy FeralGhoul", "enemy LordShadowball", "enemy Guard", "enemy GrimskullElite", "enemy Genie"];

//engine

$(document).keydown(function engine (e) {
    $('#bubble').remove();
    var keyCode = e.which;

    if (keyCode == 38 || keyCode == 40 || keyCode == 39 || keyCode == 37) { e.preventDefault(); } else {}

    var tableID = $('#player').closest('td').prop('id');
    var cellNum = parseInt(tableID);
    
    //up is - 10
        if (keyCode == 38 && jQuery.inArray(tableID, upBlock) == -1) {
        $("#"+tableID).empty();
        var direction = "up";
        var newId = "#"+((cellNum - 10).toString());
        var newClass = $(newId).attr('class');
        var monsterCheck = $(newId).children('div').attr('class');
        var borderTab = $(newId).attr('class').split(' ');
        var borderCheck = borderTab[2];
        var borderSpecial = borderTab[3];
            moved(direction, newId, newClass, monsterCheck, tableID, borderCheck, borderSpecial);
            }
    //down is + 10
        else if (keyCode == 40 && jQuery.inArray(tableID, downBlock) == -1) {
        $("#"+tableID).empty();
        var direction = "down";
        var newId = "#"+((cellNum + 10).toString());
        var newClass = $(newId).attr('class');
        var monsterCheck = $(newId).children('div').attr('class');
        var borderTab = $(newId).attr('class').split(' ');
        var borderCheck = borderTab[2];
        var borderSpecial = borderTab[3];
            moved(direction, newId, newClass, monsterCheck, tableID, borderCheck, borderSpecial);
            }
    //left is - 1
        else if (keyCode == 37 && jQuery.inArray(tableID, leftBlock) == -1) {
        $("#"+tableID).empty();
        var direction = "left";
        var newId = "#"+((cellNum - 1).toString());
        var newClass = $(newId).attr('class');
        var monsterCheck = $(newId).children('div').attr('class');
        var borderTab = $(newId).attr('class').split(' ');
        var borderCheck = borderTab[2];
        var borderSpecial = borderTab[3];
            moved(direction, newId, newClass, monsterCheck, tableID, borderCheck, borderSpecial);
            }
    //right is + 1
        else if (keyCode == 39 && jQuery.inArray(tableID, rightBlock) == -1) {
        $("#"+tableID).empty();
        var direction = "right";
        var newId = "#"+((cellNum + 1).toString());
        var newClass = $(newId).attr('class');
        var monsterCheck = $(newId).children('div').attr('class');
        var borderTab = $(newId).attr('class').split(' ');
        var borderCheck = borderTab[2];
        var borderSpecial = borderTab[3];
       moved(direction, newId, newClass, monsterCheck, tableID, borderCheck, borderSpecial);
            }
            
            else {
            return tableID;    
            }
            
})

function moved(direction, newId, newClass, monsterCheck, tableID, borderCheck, borderSpecial) {
    console.log('border is: '+borderCheck);
    console.log('border2 is: '+borderSpecial);
if (jQuery.inArray(monsterCheck, monsterZoo) !== -1) {
            $("#"+tableID).append('<div id=\"player\"></div>');
            var monsterId = $(newId).children('div').attr('id');
            monsterFight(monsterId, newId, tableID, direction);
            }
            
    else if (jQuery.inArray(borderCheck, doors) !== -1) {  
        console.log('door here');
        doorUnlock(newId, borderCheck, tableID, borderSpecial);
    }
    else {
        var item = $(newId).children('div').attr('class');
            if (($(newId).children('div').attr('class')) == "hppickup") {
                    var currentHp = parseInt($('#hp').text());
                    var fructu = ($(newId).children('div').attr('id'));
                    if (fructu=="Apple"){var bonusHp = fruit[0].apple;} else if (fructu=="Banana"){var bonusHp = fruit[0].banana;} else {var bonusHp = 0}
                    console.log('currentHP -->'+currentHp);
                    console.log('bonusHP -->'+bonusHp);
                    var newhp = (currentHp + bonusHp);
                    console.log('newhp -->'+newhp);
                    if (newhp > 100) {var newhp = 100;} else {}
                    console.log('100 check -->'+newhp);
                    var exp = parseInt($('#exp').text());
                    var playerDefense = parseInt($('#def').text());
                    $(newId).empty();
                    $(newId).append('<div id=\"player\"></div>');
                hpDisplay(newhp, playerDefense);
                expDisplay(exp);
                combatLog(fructu, bonusHp, null, null, null, null, 4);
                    }
            else if (item == "object" || item == "armour" || item == "weapon" || item == "key" || item == "keepkey" || item == "nightmarekey" || item == "waterkey" || item == "lavakey") {
                var object = $(newId).children('div').attr('id');
                var objectType = $(newId).children('div').attr('class');
                itemPickUp(object, objectType, newId);
            }
            else if (jQuery.inArray(newClass, terrain) !== -1) {
                $("#"+tableID).append('<div id=\"player\"></div>');
            }
            else if ($(newId).children('div').attr('class') == "npc") {
                var npc = $(newId).children('div').attr('id');
                $("#"+tableID).append('<div id=\"player\"></div>');
                npcTalk(npc, newId);
            }
            else {
                  var classTab = $(newId).attr('class').split(' ');
                  var levelEnd = classTab[1];
                  var class3 = classTab[2];
                if (levelEnd == 'end') {
                nextLevel(newId, class3);
                }
                else {
                $(newId).append('<div id=\"player\"></div>');
                }
            }
    }
}

function hpDisplay(newhp){
    $('#hp').empty();
    $('#hp').append(newhp);
}
function expDisplay(newexp){
    $('#exp').empty();
    var currentLvl = (parseInt($('#lvl').text()))-1;
    console.log('current level is '+currentLvl);
    $('#exp').append(newexp+" / "+levelUps[currentLvl]);

    //lvl up function
    if
    (newexp >= levelUps[currentLvl]) {var newlvl = (currentLvl + 2); var expDifference = (newexp - levelUps[currentLvl]); $('#lvl').empty(); $('#lvl').append(newlvl); expDisplay(expDifference);
                    
    if ( $('#armourContainer:empty').length == 0) { //is there an item equipped? yes
    var def7 = currentLvl + 1;
    var def9 = ((parseInt($('#def').text())));
    var def8 = playerDefenseVals[def7];
    var newdef = (def9 + def8);
    console.log('new def '+newdef);
    }
    else {
    var def6 = currentLvl + 1;
    var newdef = playerDefenseVals[def6];
    }
        
    if ( $('#weaponContainer:empty').length == 0) { //is there an item equipped? yes
    var def7 = currentLvl + 1;
    var def9 = ((parseInt($('#atk').text())));
    var def8 = playerAttackVals[def7];
    var newatk = (def9 + def8);
    console.log('new def '+newdef);
    }
    else {
    var def6 = currentLvl + 1;
    var newatk = playerAttackVals[def6];
    }
    
    var newhp = 100;
    hpDisplay(newhp);
    var newLvl = (currentLvl + 2);                             
    questLog(newLvl, 3);
    defDisplay(newdef);
    atkDisplay(newatk);
                                    
}   
else {}  
}
function atkDisplay(newatk){
    $('#atk').empty();
    $('#atk').append(newatk);
}
function defDisplay(newdef){
    $('#def').empty();
    $('#def').append(newdef);
}
function armDisplay(armour){
    $('#armour').empty();
    $('#armour').append(armour);
}
function wepDisplay(weapon){
    $('#weapon').empty();
    $('#weapon').append(armour);
}

function monsterFight(monsterId, newId, tableID, direction){
    
    swordSwing(tableID, direction);
    
    var classTab = $(newId).children('div').attr('class').split(' ');
    var monster = classTab[1];
    
    var monsterIdNumber = parseInt(monsterId, 10);
    
    if (monster == "Skeleton") {
        
        for (var i = 0; i < skeletons.length; i++) {

        if (skeletons[i].id === monsterIdNumber) {
            var NuevoMonsterHp = skeletons[i].monsterHp;
            var NuevoMonsterAttack = skeletons[i].monsterAttack;
            var NuevoMonsterDefense = skeletons[i].monsterDefense;
            var NuevoModifier = skeletons[i].modifier;
            var NuevoExp = skeletons[i].exp;
            
               console.log('monster hp '+NuevoMonsterHp);
            console.log('monster attack '+NuevoMonsterAttack);
            console.log('monster def '+NuevoMonsterDefense);
            console.log('monster modifier '+NuevoModifier);
            console.log('monster exp '+NuevoExp);
            
            
       fightCalculator(NuevoMonsterHp, NuevoMonsterAttack, NuevoMonsterDefense, NuevoModifier, NuevoExp, monsterIdNumber, monsterId, newId, tableID, monster);     
            
    }
            
    else {
    }
    }
    }
    else if (monster == "Necromancer") {
        
        for (var i = 0; i < necromen.length; i++) {

        if (necromen[i].id === monsterIdNumber) {
            var NuevoMonsterHp = necromen[i].monsterHp;
            var NuevoMonsterAttack = necromen[i].monsterAttack;
            var NuevoMonsterDefense = necromen[i].monsterDefense;
            var NuevoModifier = necromen[i].modifier;
            var NuevoExp = necromen[i].exp;
            
            console.log('monster hp '+NuevoMonsterHp);
            console.log('monster attack '+NuevoMonsterAttack);
            console.log('monster def '+NuevoMonsterDefense);
            console.log('monster modifier '+NuevoModifier);
            console.log('monster exp '+NuevoExp);
            
       fightCalculator(NuevoMonsterHp, NuevoMonsterAttack, NuevoMonsterDefense, NuevoModifier, NuevoExp, monsterIdNumber, monsterId, newId, tableID, monster);     
            
    }
            
    else {
    }
    }
    }
    else if (monster == "Nightmare") {
        
        for (var i = 0; i < nightmares.length; i++) {

        if (nightmares[i].id === monsterIdNumber) {
            var NuevoMonsterHp = nightmares[i].monsterHp;
            var NuevoMonsterAttack = nightmares[i].monsterAttack;
            var NuevoMonsterDefense = nightmares[i].monsterDefense;
            var NuevoModifier = nightmares[i].modifier;
            var NuevoExp = nightmares[i].exp;
            
            console.log('monster hp '+NuevoMonsterHp);
            console.log('monster attack '+NuevoMonsterAttack);
            console.log('monster def '+NuevoMonsterDefense);
            console.log('monster modifier '+NuevoModifier);
            console.log('monster exp '+NuevoExp);
            
       fightCalculator(NuevoMonsterHp, NuevoMonsterAttack, NuevoMonsterDefense, NuevoModifier, NuevoExp, monsterIdNumber, monsterId, newId, tableID, monster);     
            
    }
            
    else {
    }
    }
    }
    else if (monster == "Ghoul") {
        
        for (var i = 0; i < ghouls.length; i++) {

        if (ghouls[i].id === monsterIdNumber) {
            var NuevoMonsterHp = ghouls[i].monsterHp;
            var NuevoMonsterAttack = ghouls[i].monsterAttack;
            var NuevoMonsterDefense = ghouls[i].monsterDefense;
            var NuevoModifier = ghouls[i].modifier;
            var NuevoExp = ghouls[i].exp;
            
            console.log('monster hp '+NuevoMonsterHp);
            console.log('monster attack '+NuevoMonsterAttack);
            console.log('monster def '+NuevoMonsterDefense);
            console.log('monster modifier '+NuevoModifier);
            console.log('monster exp '+NuevoExp);
            
       fightCalculator(NuevoMonsterHp, NuevoMonsterAttack, NuevoMonsterDefense, NuevoModifier, NuevoExp, monsterIdNumber, monsterId, newId, tableID, monster);     
            
    }
            
    else {
    }
    }
    }
    else if (monster == "FeralGhoul") {
        
        for (var i = 0; i < feralghouls.length; i++) {

        if (feralghouls[i].id === monsterIdNumber) {
            var NuevoMonsterHp = feralghouls[i].monsterHp;
            var NuevoMonsterAttack = feralghouls[i].monsterAttack;
            var NuevoMonsterDefense = feralghouls[i].monsterDefense;
            var NuevoModifier = feralghouls[i].modifier;
            var NuevoExp = feralghouls[i].exp;
            
            console.log('monster hp '+NuevoMonsterHp);
            console.log('monster attack '+NuevoMonsterAttack);
            console.log('monster def '+NuevoMonsterDefense);
            console.log('monster modifier '+NuevoModifier);
            console.log('monster exp '+NuevoExp);
            
       fightCalculator(NuevoMonsterHp, NuevoMonsterAttack, NuevoMonsterDefense, NuevoModifier, NuevoExp, monsterIdNumber, monsterId, newId, tableID, monster);     
            
    }
            
    else {
    }
    }
    }
    else if (monster == "LordShadowball") {
        
        for (var i = 0; i < lordshadowballs.length; i++) {

        if (lordshadowballs[i].id === monsterIdNumber) {
            var NuevoMonsterHp = lordshadowballs[i].monsterHp;
            var NuevoMonsterAttack = lordshadowballs[i].monsterAttack;
            var NuevoMonsterDefense = lordshadowballs[i].monsterDefense;
            var NuevoModifier = lordshadowballs[i].modifier;
            var NuevoExp = lordshadowballs[i].exp;
            
            console.log('monster hp '+NuevoMonsterHp);
            console.log('monster attack '+NuevoMonsterAttack);
            console.log('monster def '+NuevoMonsterDefense);
            console.log('monster modifier '+NuevoModifier);
            console.log('monster exp '+NuevoExp);
            
       fightCalculator(NuevoMonsterHp, NuevoMonsterAttack, NuevoMonsterDefense, NuevoModifier, NuevoExp, monsterIdNumber, monsterId, newId, tableID, monster);     
            
    }
            
    else {
    }
    }
    }
    else if (monster == "Guard") {
        
        for (var i = 0; i < guards.length; i++) {

        if (guards[i].id === monsterIdNumber) {
            var NuevoMonsterHp = guards[i].monsterHp;
            var NuevoMonsterAttack = guards[i].monsterAttack;
            var NuevoMonsterDefense = guards[i].monsterDefense;
            var NuevoModifier = guards[i].modifier;
            var NuevoExp = guards[i].exp;
            
            console.log('monster hp '+NuevoMonsterHp);
            console.log('monster attack '+NuevoMonsterAttack);
            console.log('monster def '+NuevoMonsterDefense);
            console.log('monster modifier '+NuevoModifier);
            console.log('monster exp '+NuevoExp);
            
       fightCalculator(NuevoMonsterHp, NuevoMonsterAttack, NuevoMonsterDefense, NuevoModifier, NuevoExp, monsterIdNumber, monsterId, newId, tableID, monster);     
            
    }
            
    else {
    }
    }
    }
    else if (monster == "GrimskullElite") {
        
        for (var i = 0; i < grimskulls.length; i++) {

        if (grimskulls[i].id === monsterIdNumber) {
            var NuevoMonsterHp = grimskulls[i].monsterHp;
            var NuevoMonsterAttack = grimskulls[i].monsterAttack;
            var NuevoMonsterDefense = grimskulls[i].monsterDefense;
            var NuevoModifier = grimskulls[i].modifier;
            var NuevoExp = grimskulls[i].exp;
            
            console.log('monster hp '+NuevoMonsterHp);
            console.log('monster attack '+NuevoMonsterAttack);
            console.log('monster def '+NuevoMonsterDefense);
            console.log('monster modifier '+NuevoModifier);
            console.log('monster exp '+NuevoExp);
            
       fightCalculator(NuevoMonsterHp, NuevoMonsterAttack, NuevoMonsterDefense, NuevoModifier, NuevoExp, monsterIdNumber, monsterId, newId, tableID, monster);     
            
    }
            
    else {
    }
    }
    }
    else if (monster == "Genie") {
        
        for (var i = 0; i < genies.length; i++) {

        if (genies[i].id === monsterIdNumber) {
            var NuevoMonsterHp = genies[i].monsterHp;
            var NuevoMonsterAttack = genies[i].monsterAttack;
            var NuevoMonsterDefense = genies[i].monsterDefense;
            var NuevoModifier = genies[i].modifier;
            var NuevoExp = genies[i].exp;
            
            console.log('monster hp '+NuevoMonsterHp);
            console.log('monster attack '+NuevoMonsterAttack);
            console.log('monster def '+NuevoMonsterDefense);
            console.log('monster modifier '+NuevoModifier);
            console.log('monster exp '+NuevoExp);
            
       fightCalculator(NuevoMonsterHp, NuevoMonsterAttack, NuevoMonsterDefense, NuevoModifier, NuevoExp, monsterIdNumber, monsterId, newId, tableID, monster);     
            
    }
            
    else {
    }
    }
    }//copy all of this if for each new monster
    //place here new ones
    else {
        console.log('monster fight didnt work');
    }
}

function doorUnlock(newId, border, tableID, borderSpecial) {
    console.log('reached doorunlock');
    console.log('with borderSpecial: '+borderSpecial);
    if (borderSpecial == 'keepdoor') {
        var haveKey = $(".bag").find(".keepkey").length;
        if (haveKey >= 1) {
       $(newId).removeClass(borderSpecial);
       $(newId).removeClass(border);
       $(newId).append('<div id=\"player\"></div>');
       var keySlot = $('.bagcell.full.keepkey').attr('id');
       var keyType = $('#'+keySlot).children('div').attr('id');
       console.log("keyslot: "+keySlot);
       $('#'+keySlot).empty();
       $('#'+keySlot).removeClass('full');
       $('#'+keySlot).removeClass('keepkey');
       questLog(keyType, 4);
    }
        else {
        $("#"+tableID).append('<div id=\"player\"></div>');
        questLog(null, 5);
        }
    
    
}
    
    else if (borderSpecial == 'nightmaredoor') {
        var haveKey = $(".bag").find(".nightmarekey").length;
        if (haveKey >= 1) {
       $(newId).removeClass(borderSpecial);
       $(newId).removeClass(border);
       $(newId).append('<div id=\"player\"></div>');
       var keySlot = $('.bagcell.full.nightmarekey').attr('id');
       var keyType = $('#'+keySlot).children('div').attr('id');
       console.log("keyslot: "+keySlot);
       $('#'+keySlot).empty();
       $('#'+keySlot).removeClass('full');
       $('#'+keySlot).removeClass('nightmarekey');
       questLog(keyType, 4);
    }
    else {
        $("#"+tableID).append('<div id=\"player\"></div>');
        questLog(null, 5);
    }
    }
    
 else if (borderSpecial == undefined) {
   var haveKey = $(".bag").find(".key").length; //1 = yes, 0 = no
   if (haveKey >= 1) {
       $(newId).removeClass(border);
       $(newId).append('<div id=\"player\"></div>');
       var keySlot = $('.bagcell.full.key').attr('id');
       var keyType = $('#'+keySlot).children('div').attr('id');
       console.log("keyslot: "+keySlot);
       $('#'+keySlot).empty();
       $('#'+keySlot).removeClass('full');
       $('#'+keySlot).removeClass('key');
       questLog(keyType, 4);
       
   }
    else {
        $("#"+tableID).append('<div id=\"player\"></div>');
        questLog(null, 5);
    }
}
    else {}
             
}

function fightCalculator(NuevoMonsterHp, NuevoMonsterAttack, NuevoMonsterDefense, NuevoModifier, NuevoExp, monsterIdNumber, monsterId, newId, tableID, monster) {
    
    var monsterDmgRand = (Math.floor(Math.random() * NuevoModifier + 1));
    
    //player stats
    var currentHP = parseInt($('#hp').text());
    var currentExp = parseInt($('#exp').text());
    var currentAttack = parseInt($('#atk').text());
    var playerDefense = parseInt($('#def').text());
    var dmgRand = (Math.floor(Math.random() * 2) + 1); 

    //player attack
    var playerAttack = ((currentAttack + dmgRand) - NuevoMonsterDefense);
    if (playerAttack <= 0) {var playerAttack = 0;}else{}
    //enemy attack
    var enemyAttack = ((NuevoMonsterAttack + monsterDmgRand) - playerDefense);
    if (enemyAttack <= 0) {var enemyAttack = 0;}else{}
    
    //enemy new hp 
    var enemyNewHp = (NuevoMonsterHp - playerAttack);
    //player new hp
    var newhp = (currentHP - enemyAttack); //player hp
   
    if (newhp <= 0) {
        playerDeath();
        hpDisplay(0);
        expDisplay(currentExp);
        combatLog(monster, null, playerAttack, dmgRand, currentAttack, enemyAttack, 1); //player dies
    }
    else if (enemyNewHp <= 0) {
        var newexp = (NuevoExp + currentExp);
        enemyDeath(monsterId, newId, tableID);
    hpDisplay(newhp);
    expDisplay(newexp);
    combatLog(monster, null, playerAttack, dmgRand, currentAttack, enemyAttack, 2);
    enemyUpdate(monster, monsterIdNumber, enemyNewHp, newId, NuevoMonsterHp); //enemy dies
    }
    else {
    hpDisplay(newhp);
    expDisplay(currentExp);
    combatLog(monster, null, playerAttack, dmgRand, currentAttack, enemyAttack, 3);
    enemyUpdate(monster, monsterIdNumber, enemyNewHp, newId, NuevoMonsterHp) ; //the battle continues
    }
     

}

function swordSwing (tableID, direction) {
    
    if (direction == "up") {
        $("#"+tableID).append('<div id=\"sword_up\"></div>');
        $('#player').addClass("nudge");
        setTimeout(function(){ 
            $('div[id^="sword_up"]').remove();
            $('#player').removeClass("nudge");
                             }, 200);
    }
    else if (direction == "down") {
        $("#"+tableID).append('<div id=\"sword_down\"></div>');
        $('#player').addClass("nudge");
        setTimeout(function(){ 
            $('div[id^="sword_down"]').remove();
            $('#player').removeClass("nudge");
                             }, 200);
    }
    else if (direction == "left") {
        $("#"+tableID).append('<div id=\"sword_left\"></div>');
        $('#player').addClass("nudge");
        setTimeout(function(){ 
            $('div[id^="sword_left"]').remove();
            $('#player').removeClass("nudge");
                             }, 200);
    }
    else if (direction == "right") {
        $("#"+tableID).append('<div id=\"sword_right\"></div>');
        $('#player').addClass("nudge");
        setTimeout(function(){ 
            $('div[id^="sword_right"]').remove();
            $('#player').removeClass("nudge");
                             }, 200);
    }
    else {
        console.log('sword did not swing');
    }
    
}

function enemyUpdate (monster, monsterIdNumber, enemyNewHp, newId, NuevoMonsterHp) {
       if ( $('.hpbar').parent(newId).length == 1) { //is there health bar already there? yes
       enemyHealthBars(enemyNewHp, monsterIdNumber, NuevoMonsterHp);
       console.log('first condition');
    
       if (monster == "Skeleton"){skeletons[monsterIdNumber].monsterHp = enemyNewHp;}
       else if (monster == "Necromancer"){necromen[monsterIdNumber].monsterHp = enemyNewHp;}
       else if (monster == "Nightmare"){nightmares[monsterIdNumber].monsterHp = enemyNewHp;}
       else if (monster == "Ghoul"){ghouls[monsterIdNumber].monsterHp = enemyNewHp;}
       else if (monster == "FeralGhoul"){feralghouls[monsterIdNumber].monsterHp = enemyNewHp;}
       else if (monster == "LordShadowball"){lordshadowballs[monsterIdNumber].monsterHp = enemyNewHp;}
       else if (monster == "Guard"){guards[monsterIdNumber].monsterHp = enemyNewHp;}
       else if (monster == "GrimskullElite"){grimskulls[monsterIdNumber].monsterHp = enemyNewHp;}
       else if (monster == "Genie"){genies[monsterIdNumber].monsterHp = enemyNewHp;}//add new monsters here
       else {console.log('2nd attack did not work');}
}
        else if (enemyNewHp <= 0){ // no because it's dead
        console.log('second condition');
        if ( $(newId).children().length > 0 ) { //is there something there this time?
        }
        else {
        console.log('div check did not work');
        }
        }
        else { // no because it's first time attacking it
        $(newId).append('<div class=\"hpbar\"><div id=\"'+monsterIdNumber+'hpbar\" class=\"enemyCurrentHp\"></div></div>');
        console.log('third condition');
        if (monster == "Skeleton"){skeletons[monsterIdNumber].monsterHp = enemyNewHp;}
        else if (monster == "Necromancer"){necromen[monsterIdNumber].monsterHp = enemyNewHp;}
        else if (monster == "Nightmare"){nightmares[monsterIdNumber].monsterHp = enemyNewHp;}
        else if (monster == "Ghoul"){ghouls[monsterIdNumber].monsterHp = enemyNewHp;}
        else if (monster == "FeralGhoul"){feralghouls[monsterIdNumber].monsterHp = enemyNewHp;}
        else if (monster == "LordShadowball"){lordshadowballs[monsterIdNumber].monsterHp = enemyNewHp;}
        else if (monster == "Guard"){guards[monsterIdNumber].monsterHp = enemyNewHp;}
        else if (monster == "GrimskullElite"){grimskulls[monsterIdNumber].monsterHp = enemyNewHp;}
        else if (monster == "Genie"){genies[monsterIdNumber].monsterHp = enemyNewHp;}
        enemyHealthBars(enemyNewHp, monsterIdNumber, NuevoMonsterHp);
    }
}

function itemPickUp(object, objectType, newId){
    
    if (objectType == "waterkey") {
        console.log('do something'); 
    }
    else {
    console.log('reached item pick up with a '+object);
    var objectDiv = "<div class=\""+objectType+"\" id=\""+object+"\"></div>";
    var bagCell = $('.bag td:not(.full):first');
    $(bagCell).append(objectDiv);
    }
    
    //key list
    if (objectType == "key") {$(bagCell).addClass('full key'); questLog(object, 1);} 
    else if (objectType == "keepkey") {$(bagCell).addClass('full keepkey'); questLog(object, 7);}
    else if (objectType == "nightmarekey") {$(bagCell).addClass('full nightmarekey'); questLog(object, 8);}
    else if (objectType == "waterkey") {questLog(object, 6);
        var lvl = parseInt($('#level').val())
        if (lvl == 14){$('#67').removeClass('water').addClass('path'); $('#68').removeClass('water').addClass('path'); $('#76').removeClass('water').addClass('path'); $('#77').removeClass('water').addClass('path'); $('#78').removeClass('water').addClass('path');}
        else if (lvl == 15){$('#10').removeClass('water').addClass('path'); $('#11').removeClass('water').addClass('path'); $('#12').removeClass('water').removeClass('rightdoor').addClass('path').addClass('rightdoor'); $('#13').removeClass('water').addClass('path'); $('#14').removeClass('water').addClass('path'); $('#15').removeClass('water').addClass('path'); $('#16').removeClass('water').addClass('path'); $('#73').removeClass('water').addClass('path'); $('#74').removeClass('water').addClass('path'); $('#75').removeClass('water').addClass('path'); $('#76').removeClass('water').addClass('path'); $('#77').removeClass('water').addClass('path'); $('#83').removeClass('water').addClass('path'); $('#84').removeClass('water').addClass('path'); $('#85').removeClass('water').addClass('path'); $('#86').removeClass('water').addClass('path'); $('#87').removeClass('water').addClass('path'); $('#93').removeClass('water').addClass('path'); $('#94').removeClass('water').addClass('path'); $('#95').removeClass('water').addClass('path'); $('#96').removeClass('water').addClass('path'); $('#97').removeClass('water').addClass('path');}}
    else if (objectType == "lavakey") {$(bagCell).addClass('full lavakey'); questLog(object, 9);}
    
    else {$(bagCell).addClass('full'); {questLog(object, 2);}}
    
    console.log('object type:'+objectType);
    $(newId).empty();
    $(newId).append('<div id=\"player\"></div>');
    var bagCell2 = $('#'+object).parent().attr('id');
    
    if (objectType == "armour" || objectType == "weapon") {
        addClick(object, bagCell2, objectType);
    }
    else {  
        console.log ('did not add click');
    }
}

function addClick (object, bagCell2, objectType) {
        if (objectType == "weapon") {
        console.log('add click: weapon');
        var handler = function() {
        $('#equipPanel').empty();
        $('#equipHold').empty();
        var div = "<div id=\"equipPanel\"></div>";
        var div2 = "Would you like to equip <span class=\"equipText\">"+object+"</span>?<p /><div id=\"equipButton\" onClick=\"equip('"+object+"', 'weapon');\" class=\"#"+bagCell2+"\">Equip</div>";
        $('#equipHold').append(div);
        $('#equipPanel').append(div2);
        }
        $('#'+bagCell2).bind( "click", handler);
        }
        else if (objectType == "armour") {
            console.log('addclick: armour');
        var handler = function() {
        $('#equipPanel').empty();
        $('#equipHold').empty();
        var div = "<div id=\"equipPanel\"></div>";
        var div2 = "Would you like to equip <span class=\"equipText\">"+object+"</span>?<p /><div id=\"equipButton\" onClick=\"equip('"+object+"', 'armour');\" class=\"#"+bagCell2+"\">Equip</div>";
        $('#equipHold').append(div);
        $('#equipPanel').append(div2);
        }
        $('#'+bagCell2).bind( "click", handler);    
        }
        else if (objectType == "unequip"){
        console.log('addclick: unequip');
        var handler = function() {
        var div = "<div id=\"equipPanel\"></div>";
        var div2 = "Would you like to Unequip <span class=\"equipText\">"+object+"</span>?<p /><div id=\"equipButton\" onClick=\"unequip('"+object+"'); \">Unequip</div>";
        $('#equipHold').append(div);
        $('#equipPanel').append(div2);  
        }
        $('#'+object).bind( "click", handler);    
        }
        else{}
}

function equip (object, objectType, bagCell){
    var item = object;
    console.log("item is:   "+item);
    if ($('#'+objectType+'Container').find('div').length == 1) { //item already in slot
        var bagCell = $('#equipButton').attr('class');
        var oldItem = $('#'+objectType+'Container').find('div').attr('id');
        
        $(bagCell).empty();
        $(bagCell).removeClass('full');
        console.log('bagcell= '+bagCell);    
        $(bagCell).unbind( "click");
        console.log('running unequip with '+oldItem);
        unequip(oldItem);
    }
    
    else {

    var bagCell = $('#equipButton').attr('class');
    $(bagCell).empty();
    $(bagCell).removeClass('full');
    console.log('bagcell= '+bagCell);    
    $(bagCell).unbind( "click");
    
    }
        
    if (objectType == "weapon") {
    $('#weaponContainer').append('<div id="'+item+'" class="weapon"></div>');
    var currentAtk = parseInt($('#atk').text());    
    addClick(object, 'weapon', 'unequip');
        
    if (item == 'OldSword') {var bonusAtk = weaponVals[0].OldSword;}
    else if (item == 'LongRedStickOfCleaving') {var bonusAtk = weaponVals[0].LongRedStickOfCleaving;}
    else if (item == 'Dagger') {var bonusAtk = weaponVals[0].Dagger;}
    else if (item == 'RegalSword') {var bonusAtk = weaponVals[0].RegalSword;}
    else if (item == 'UnholyBlade') {var bonusAtk = weaponVals[0].UnholyBlade;}
    else if (item == 'FrozenShard') {var bonusAtk = weaponVals[0].FrozenShard;}
    else if (item == 'HellRazer') {var bonusAtk = weaponVals[0].HellRazer;} 
        
        else{}
    
    var newatk = (currentAtk + bonusAtk);
    console.log('current atk '+currentAtk);
    console.log('bonus atk '+bonusAtk);
    console.log('new atk '+newatk);
    atkDisplay(newatk);
    }

    
    else if (objectType == "armour") {
    $('#armourContainer').append('<div id="'+item+'" class="armour"></div>');
    var currentDef = parseInt($('#def').text());    
    addClick(object, 'armour', 'unequip');
        
    if (item == 'PlateArmour') {var bonusDef = armourVals[0].PlateArmor;}
    else if (item == 'LeatherArmour') {var bonusDef = armourVals[0].LeatherArmour;}
    else if (item == 'StuddedLeatherArmour') {var bonusDef = armourVals[0].StuddedLeatherArmour;}
    else if (item == 'CrusaderArmour') {var bonusDef = armourVals[0].CrusaderArmour;}
    else if (item == 'ShadowArmour') {var bonusDef = armourVals[0].ShadowArmour;}
    else if (item == 'HolyArmour') {var bonusDef = armourVals[0].HolyArmour;}
    else if (item == 'RegalArmour') {var bonusDef = armourVals[0].RegalArmour;}
    else if (item == 'RustyArmour') {var bonusDef = armourVals[0].RustyArmour;}
        else{}
    
    var newdef = (currentDef + bonusDef);
        console.log('current def '+currentDef);
        console.log('bonus def '+bonusDef);
        console.log('new def '+newdef);
    defDisplay(newdef);
    }
    else{}
    $('#equipHold').empty();
}

function unequip (object) {
    
    var objectType = $('#'+object).attr('class');
    
    $('#equipHold').empty();
    
    var objectDiv = "<div id=\""+object+"\"></div>";
    var bagCell = $('.bag td:not(.full):first');
    var bagCellId = $('.bag td:not(.full):first').attr('id');
    
    $(bagCell).append(objectDiv);
    $(bagCell).addClass('full');

    console.log('bagcell unequip: '+bagCellId);

    if (objectType == "armour") {
     $('#armourContainer').empty();
    var clvl = (parseInt($('#lvl').text())) - 1;
    var newdef = playerDefenseVals[clvl];
    defDisplay(newdef);
    var handler = function() {
        $('#equipPanel').empty();
        $('#equipHold').empty();
        console.log('unequip addclick');
        var div = "<div id=\"equipPanel\"></div>";
        var div2 = "Would you like to equip <span class=\"equipText\">"+object+"</span>?<p /><div id=\"equipButton\" onClick=\"equip('"+object+"', 'armour');\" class=\"#"+bagCellId+"\">Equip</div>";
        $('#equipHold').append(div);
        $('#equipPanel').append(div2);
        }
        $('#'+object).bind( "click", handler);  
        
        }
    else if (objectType == "weapon"){
    $('#weaponContainer').empty();
    var clvl = (parseInt($('#lvl').text())) - 1;
    var newatk = playerAttackVals[clvl];
    atkDisplay(newatk);
    var handler = function() {
        $('#equipPanel').empty();
        $('#equipHold').empty();
        var div = "<div id=\"equipPanel\"></div>";
        var div2 = "Would you like to equip <span class=\"equipText\">"+object+"</span>?<p /><div id=\"equipButton\" onClick=\"equip('"+object+"', 'weapon');\" class=\"#"+bagCellId+"\">Equip</div>";
        $('#equipHold').append(div);
        $('#equipPanel').append(div2);
        }
    $('#'+object).bind( "click", handler); 
        }
    else {}
}
    
function playerDeath(){
    $(document).unbind("keydown");
}

function npcTalk (npc, newId) {
    var cell = newId.slice(1, 3);
    
    if (cell <= 9) {
    var top = 70;
    var cellTab = cell.split("");
    var leftStart = cellTab[0];
    console.log('cell tab is :'+leftStart);
    var left = (200 + (leftStart * 50));
    
    }
    else {
    var cellTab = cell.split("");
    var topStart = cellTab[0];
    var leftStart = cellTab[1];
    var top = ((topStart * 50));
    var left = (200 + (leftStart * 50));
        
    }
    
    if (npc == "marty") {var text = '"Help me! Skeletons are attacking!<p/>Quickly, grab that old washed up sword!\"<p/><span class="narratortext">(To equip an item, click it in your inventory.)</span>';}
    else if (npc == "wizard1") {var text = '"Hello adventurer! You have reached an old, forgotten entrance to Grimskull Keep. However, we appear to be locked out!<p />I have heard rumours that one of the keys was stolen by an  prisoner who then went on to escape through this very gate... he ran into the Nightmare Forest and was never heard of again!"';}
    else if (npc == "wizard2") {var text = '"Hello again! You have been doing very well indeed! Before you lies the Necromancer who has been animating all of these skeletons! Beware, he is much stronger than his subjects, however defeating him will result in a handsome reward for you."';}
    else if (npc == "wizard3") {var text = '"Wow! I can barely believe you made it out alive!"<p />"You have the Keep Key! You should enter the castle. Be warned: Lord Grimskull is not the most welcoming of hosts...<p />Find me inside!';}
    else if (npc == "wizard4") {var text = 'Bravo! You made it!<p />To enter the tower, we will need three keys...<p />The first is held by the Genie King, in his lair not far from here.<p />The second is kept in Grimskull\'s Laboratory.<p />The third... has been lost for years. Go from here to the Grotto - I will continue searching for it.';}
    else {}
    
    if ($('#bubble').length == 1) {}
    
    else {
        $(document.body).append('<div id="bubble" class="bubbletext"></div>');
        $('#bubble').append(text);
        $('#bubble').css( "top", top);
        $('#bubble').css( "left", left);

    }
}

function enemyHealthBars(enemyNewHp, monsterIdNumber, NuevoMonsterHp){
    var healthPercent = (100 - (100 - enemyNewHp));
    if (enemyNewHp >= 0) {
    $('#'+monsterIdNumber+'hpbar').css("width", healthPercent+'%');
    }
    else {
       console.log('enemy hp bars failed');
    }
}

function enemyDeath(monsterId, newId, tableID, NuevoExp){
    $(newId).empty();
    $("#"+tableID).empty();
    $(newId).append('<div id=\"player\"></div>');
    enemyNewHp = 1;
}

function nextLevel(newId, class3) {
    var lvl = (parseInt($('#level').val())) + 1;
    var g = $('#level').val();
    if (lvl == 19){$('#level').val('GENIE GROTTO'); var genieLoad = 1;}
    else if (g == 'GENIE GROTTO') {}
    else {$('#level').val(lvl);}
    
    //var startHp = (parseInt($('#hp').text()));
    //var startLvl = lvl - 2;
    //ar startExp = (parseInt($('#exp').text()));
    //var equippedWep = $('#weaponContainer').children('div').attr('id');
    //var equippedArm = $('#armourContainer').children('div').attr('id');
    //for (i=1;i<21;i++) {
    //var bagsave = $('#'+i+'bag').children('div').attr('id');
    //bagStart.push(bagsave);
    //}
    //statStart.push(startHp, startLvl, startExp, equippedArm, equippedWep);
    
    if (g == 'GENIE GROTTO' && genieLoad == undefined){
        levelLoad(null, class3, null);
    }
    else if (genieLoad == 1) {
        levelLoad(null, class3, 1);
    }
    else {
    levelPick(newId);
    frankenstein();
    }
}

function restart() {
    var lvl = (parseInt($('#level').val()));
    levelPick(lvl);
    frankenstein();
    $(document).bind("keypress");
    $('#weaponContainer').empty();
    $('#armourContainer').empty();
    
}

var outcome;
function questLog(object, outcome){
    if (outcome == 1) { //item pick up
    var words = '<p /><img src="key.png" /> You pick up: <span class="keyText">'+object+'.</span><p />'
    }
    else if (outcome == 2) { //item pick up
    var words = '<p /><image src="'+object+'.png" /> You pick up: <span class="equipText">'+object+'.</span><p />'
    }
    else if (outcome == 3) { //lvl up
    var words = '<p /><image src="lvlup.png" /> <span class="lvlupText">Congratulations! You have reached level '+object+'!</span><p />'
    }
    else if (outcome == 4) { //unlocked door
    var words = '<p /><image src="key.png" /> You unlock the door with your <span class="keyText">'+object+'</span>.<p />'
    }
    else if (outcome == 5) { //locked door
    var words = '<p /><span class="dmgText">The door is locked!</span><p />'
    }
    else if (outcome == 6) { //water key
    var words = '<p /><img src="switch.png" /> You have the <span class="waterKeyText">'+object+'</span>, you can now walk on water in this room!<p />'
    }
    else if (outcome == 7) { //keep key
    var words = '<p /><img src="keepkey.png" /> You have the <span class="keepKeyText">'+object+'</span>! Now you can open the gate to Grimskull Keep...<p />'
    }
    else if (outcome == 8) { //nightmare key
    var words = '<p /><img src="nightmarekey.png" /> You have found the <span class="nightmareKeyText">'+object+'</span>! You can now open the door in the centre of the room...<p />'
    }
    else if (outcome == 9) { //lava key
    var words = '<p /><img src="LavaKey.png" /> You have found the <span class="lavaKeyText">'+object+'</span>! You can now pass over lava unharmed!<p />'
    }
    else if (outcome == 10) { //lava key gone
    var words = '<p /><img src="LavaKey.png" /> The <span class="lavaKeyText">'+object+'</span> disintegrates in your hand. There\'s no going back now...<p />'
    }
    $('#questLog').prepend(words);
}
function combatLog(object, hppickup, playerAttack, dmgRand, attack, enemyAttack, outcome){
    console.log(outcome);
    if (outcome == 1) { //player dies
    var words = '<span class="deadText">You have died.</span><p />The '+object+' deals <span class="dmgText">'+enemyAttack+'</span> damage to you.<br /><img src="player.png" /> You attack the '+object+' for <span class="dmgText">'+attack+'</span> + (<span class="critText">'+dmgRand+'</span>) damage!<p />'
    $('#questLog').prepend(words);
    }
    else if (outcome == 2) { //enemy dies
    var words = '<img src="'+object+'.png" /> <span class="deadText">'+object+' dies.</span><p /><img src="player.png" /> You attack the '+object+' for <span class="dmgText">'+attack+'</span> + (<span class="critText">'+dmgRand+'</span>) damage!<br />The '+object+' deals <span class="dmgText">'+enemyAttack+'</span> damage to you.<p />'
    $('#questLog').prepend(words); 
    }
    else if (outcome == 3) { //the battle continues
    var words = '<img src="player.png" /> <img src="fight_attack.png" /> <img src="'+object+'.png" /> You attack '+object+' for <span class="dmgText">'+attack+'</span> + (<span class="critText">'+dmgRand+'</span>) damage!<br /><img src="'+object+'.png" /> <img src="fight_defend.png" /> <img src="player.png" /> The '+object+' deals <span class="dmgText">'+enemyAttack+'</span> damage to you.<p />'
    $('#questLog').prepend(words);
    }
    else if (outcome == 4) { 
        if (object == "Apple" || object == "Banana") {
    var words = '<p /><image src="'+object+'.png" /> You eat the '+object+' for <span class="hpText">'+hppickup+'</span> health!<p />';
    $('#questLog').prepend(words);
    }
        else{
            
        }
    }
    else{
    }
}
