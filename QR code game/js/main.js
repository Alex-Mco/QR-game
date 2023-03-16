//This is the javascript file for the feeding game
localStorage.setItem("Habitat","Water");
localStorage.setItem("Diet","Carnivore");
localStorage.setItem("Legs", "Two");
localStorage.setItem("Flight","Flightless");
localStorage.setItem("Size", "1");
localStorage.setItem("PreySize", "Small");
var habitatVar = localStorage.getItem("Habitat");
var dietVar = localStorage.getItem("Diet");
var legsVar = localStorage.getItem("Legs");
var flightVar = localStorage.getItem("Flight");
var sizeVar = localStorage.getItem("Size");
var preySizeVar = localStorage.getItem("PreySize");
if(Number(sizeVar) > 0 && Number(sizeVar) <= 7){
    var sizeVarString = 'Small';
}
else if(Number(sizeVar) >= 8 && Number(sizeVar) <= 14){
    var sizeVarString = 'Medium';
}
else if(Number(sizeVar) >= 15 && Number(sizeVar) <= 21){
    var sizeVarString = 'Large';
}
else if(Number(sizeVar) == 0){
    //This animal is dead
}
else{
    var sizeVarString = 'Colossal';
}
var coloringPageStatsString = habitatVar + dietVar + legsVar + flightVar + sizeVarString;
document.getElementById("testPara").innerHTML = coloringPageStatsString;
var rndNum;
var rndNum_prev0;
var rndNum_prev1;
var rndNum2;
var rndNum2_prev0;
var rndNum2_prev1;
const LIMIT = 12; //number of rolls before output

/*QR code pages javascrpt*/
function GreenPlanetChange(){
    localStorage.removeItem("Diet");
    localStorage.setItem("Diet","Herbivore");
}
function GottaGoFastChange(){
    localStorage.removeItem("Legs");
    localStorage.setItem("Legs","Two");
}
function VertebrateLandInvasionChange(){
    localStorage.removeItem("Habitat");
    localStorage.setItem("Habitat","Land");
}
function HeavyIsTheHeadChange(){
    localStorage.removeItem("Legs");
    localStorage.setItem("Legs","Four");
}
function IslandRuleChange(){
    localStorage.setItem("Flight","Flightless");
    let num =localStorage.getItem("Size");
    num = Number(num) + 7;
    let sizeText= num.toString();
    localStorage.removeItem("Size");
    localStorage.setItem("Size", sizeText); // add 7 to the size
}
function TakingFlightChange(){
    localStorage.removeItem("Flight");
    localStorage.setItem("Flight","Flying");
}
function ReturnToTheSeaChange(){
    localStorage.removeItem("Habitat");
    localStorage.setItem("Habitat","Water");
}
function MutationChange(){
    pass
    //1-2 stats are randomly flipped
}
/*Feeding game javascript*/
function FeedingGameChange(){
    document.getElementById().classList.add();
    //uselocalStorage.getItem() to pull stats to figure out the coloring page.
    //dice roll feeding game
}
function FeedingGameLoad(){
    //Hide and show the different divs based on current stats. Doesn't work currently
    if (dietVar == "Herbivore"){
        document.getElementById("feedCarnivore").classList.add("hide");
        document.getElementById("feedCarnivore").classList.remove("show");
        document.getElementById("feedHerbivore").classList.add("show");
        document.getElementById("feedHerbivore").classList.remove("hide");
    }
    else{
        document.getElementById("feedHerbivore").classList.add("hide");
        document.getElementById("feedHerbivore").classList.remove("show");
        document.getElementById("feedCarnivore").classList.add("show");
        document.getElementById("feedCarnivore").classList.remove("hide");   
    }
    if(Number(sizeVar) > 0 && Number(sizeVar) <= 7){
        document.getElementById("smallCarnivore").classList.add("show");
        document.getElementById("smallCarnivore").classList.remove("hide");
        document.getElementById("mediumCarnivore").classList.add("hide");
        document.getElementById("mediumCarnivore").classList.remove("show");
        document.getElementById("largeCarnivore").classList.add("hide");
        document.getElementById("largeCarnivore").classList.remove("show");
        document.getElementById("colossalCarnivore").classList.add("hide");
        document.getElementById("colossalCarnivore").classList.remove("show");
    }
    else if(Number(sizeVar) >= 8 && Number(sizeVar) <= 14){
        document.getElementById("smallCarnivore").classList.add("hide");
        document.getElementById("smallCarnivore").classList.remove("show");
        document.getElementById("mediumCarnivore").classList.add("show");
        document.getElementById("mediumCarnivore").classList.remove("hide");
        document.getElementById("largeCarnivore").classList.add("hide");
        document.getElementById("largeCarnivore").classList.remove("show");
        document.getElementById("colossalCarnivore").classList.add("hide");
        document.getElementById("colossalCarnivore").classList.remove("show");
    }
    else if(Number(sizeVar) >= 15 && Number(sizeVar) <= 21){
        document.getElementById("smallCarnivore").classList.add("hide");
        document.getElementById("smallCarnivore").classList.remove("show");
        document.getElementById("mediumCarnivore").classList.add("hide");
        document.getElementById("mediumCarnivore").classList.remove("show");
        document.getElementById("largeCarnivore").classList.add("show");
        document.getElementById("largeCarnivore").classList.remove("hide");
        document.getElementById("colossalCarnivore").classList.add("hide");
        document.getElementById("colossalCarnivore").classList.remove("show");
    }
    else{
        document.getElementById("smallCarnivore").classList.add("hide");
        document.getElementById("smallCarnivore").classList.remove("show");
        document.getElementById("mediumCarnivore").classList.add("hide");
        document.getElementById("mediumCarnivore").classList.remove("show");
        document.getElementById("largeCarnivore").classList.add("hide");
        document.getElementById("largeCarnivore").classList.remove("show");
        document.getElementById("colossalCarnivore").classList.add("show");
        document.getElementById("colossalCarnivore").classList.remove("hide");
    }
}
function FeedingPermian(){
    if(habitatVar == "Land"){
        document.getElementById("permianA").innerHTML = "Dicynodont - Attack!";
        document.getElementById("permianB").innerHTML = "Scutosaurus - Attack!";
        document.getElementById("permianC").innerHTML = "Aulacephalodon - Attack!";
        document.getElementById("permianD").style.display = "none";
    }
    else{
        document.getElementById("permianA").innerHTML = "Aenigamacaris - Attack!";
        document.getElementById("permianB").innerHTML = "Mooreceras - Attack!";
        document.getElementById("permianC").innerHTML = "Eurypterid - Attack!";
        document.getElementById("permianD").style.display = "none";
    }
}
function FeedingJurassic(){
    if(habitatVar == "Land"){
        document.getElementById("jurrasicA").innerHTML = "Othenlia - Attack!";
        document.getElementById("jurrasicB").innerHTML = "Camptosaurus - Attack!";
        document.getElementById("jurrasicC").innerHTML = "Hesperosaurus - Attack!";
        document.getElementById("jurrasicD").innerHTML = "Camarasaurus - Attack!";
    }
    else{
        document.getElementById("jurrasicA").innerHTML = "Belemnite - Attack!";
        document.getElementById("jurrasicB").innerHTML = "Ammonite - Attack!";
        document.getElementById("jurrasicC").innerHTML = "Ichthyosaur - Attack!";
        document.getElementById("jurrasicD").style.display = "none";
    }
}
function FeedingCretaceous(){
    if(habitatVar == "Land"){
        document.getElementById("cretaceousA").innerHTML = "Psittacosaurus - Attack!";
        document.getElementById("cretaceousB").innerHTML = "Struthiomimus - Attack!";
        document.getElementById("cretaceousC").innerHTML = "Chasmosaurus - Attack!";
        document.getElementById("cretaceousD").innerHTML = "Edmontosaurus - Attack!";
    }
    else{
        document.getElementById("cretaceousA").innerHTML = "Acitelmessus - Attack!";
        document.getElementById("cretaceousB").innerHTML = "Baculites - Attack!";
        document.getElementById("cretaceousC").innerHTML = "Pachyrhizodus - Attack!";
        document.getElementById("cretaceousD").innerHTML = "Archelon - Attack!";
    }
}
function SmallFeeding(){
    document.location.href='./DiceGame.html';
    localStorage.removeItem("PreySize");
    localStorage.setItem("PreySize","Small");
}
function MediumFeeding(){
    document.location.href='./DiceGame.html';
    localStorage.removeItem("PreySize");
    localStorage.setItem("PreySize","Medium");
}
function LargeFeeding(){
    document.location.href='./DiceGame.html';
    localStorage.removeItem("PreySize");
    localStorage.setItem("PreySize","Large");
}
function ColossalFeeding(){
    document.location.href='./DiceGame.html';
    localStorage.removeItem("PreySize");
    localStorage.setItem("PreySize","Colossal");
}
/*Coloring book javascript*/
function ColoringPageChange(){
    //change coloring page using stats 
    //Still not changing
    switch(coloringPageStatsString){
        case "WaterCarnivoreTwoFlightlessSmall":
            //Camarillasaurus
            document.getElementById("coloringPagePicture").src = "/IMG/coloringPages/cpA_Camarillasaurus.png";
            break;
        case 'WaterCarnivoreTwoFlightlessMedium':
            //Irritator
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Irritator.png";
            break;
        case 'WaterCarnivoreTwoFlightlessLarge':
            //Suchomimus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Suchomimus.png";
            break;
        case 'WaterCarnivoreTwoFlightlessColossal':
            //Spinosaurus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Spinosaurus.png";
            break;
        case 'WaterCarnivoreTwoFlightedSmall':
            //LeastBittern
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_LeastBittern";
            break;
        case 'WaterCarnivoreTwoFlightedMedium':
            //SnowyEgret
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_SnowyEgret";
            break;
        case 'WaterCarnivoreTwoFlightedLarge':
            //GreatEgret
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_GreatEgret";
            break;
        case 'WaterCarnivoreTwoFlightedColossal':
            //GreatBlueHeron
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_GreatBlueHeron";
            break;
        case "WaterCarnivoreFourFlightlessSmall":
            //Keichousaurus
            document.getElementById("coloringPage").src = "/IMG/coloringPages/cpA_Keichousaurus.png";
            break;
        case 'WaterCarnivoreFourFlightlessMedium':
            //Dallasaurus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Dallasaurus";
            break;
        case 'WaterCarnivoreFourFlightlessLarge':
            //Clidastes
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Clidastes";
            break;
        case 'WaterCarnivoreFourFlightlessColossal':
            //Tylosaurus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Tylosaurus";
            break;
        case 'WaterCarnivoreFourFlightedSmall':
            //Rhamphorhynchus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Rhamphorhynchus";
            break;
        case 'WaterCarnivoreFourFlightedMedium':
            //Pterodactylus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Pterodactylus";
            break;
        case 'WaterCarnivoreFourFlightedLarge':
            //Anhanguera
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Anhanguera";
            break;
        case 'WaterCarnivoreFourFlightedColossal':
            //Pteranodon
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Pteranodon";
            break;
        case 'WaterHerbivoreTwoFlightlessSmall':
            //Takahe
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Takahe";
            break;
        case 'WaterHerbivoreTwoFlightlessMedium':
            //Garganornis
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Garganornis";
            break;
        case 'WaterHerbivoreTwoFlightlessLarge':
            //Dromornis
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Dromornis";
            break;
        case 'WaterHerbivoreTwoFlightlessColossal':
            //Deinocheirus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Deinocheirus";
            break;
        case 'WaterHerbivoreTwoFlightedSmall':
            //SilverTeal
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_SilverTeal";
            break;
        case 'WaterHerbivoreTwoFlightedMedium':
            //AmericanWigeon
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_AmericanWigeon";
            break;
        case 'WaterHerbivoreTwoFlightedLarge':
            //SnowGoose
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_SnowGoose";
            break;
        case 'WaterHerbivoreTwoFlightedColossal':
            //TundraSwan
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_TundraSwan";
            break;
        case 'WaterHerbivoreFourFlightlessSmall':
            //Ashoroa
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Ashoroa";
            break;
        case 'WaterHerbivoreFourFlightlessMedium':
            //Desmostylus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Desmostylus";
            break;
        case 'WaterHerbivoreFourFlightlessLarge':
            //Paleoparadoxia
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Paleoparadoxia";
            break;
        case 'WaterHerbivoreFourFlightlessColossal':
            //Behemotops
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Behemotops";
            break;
        case 'WaterHerbivoreFourFlightedSmall':
            //Tapejara 
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Tapejara ";
            break;
        case 'WaterHerbivoreFourFlightedMedium':
            //Tupuxuara
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Tupuxuara";
            break;
        case 'WaterHerbivoreFourFlightedLarge':
            //Tupandactylus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Tupandactylus";
            break;
        case 'WaterHerbivoreFourFlightedColossal':
            //Bakonydraco
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Bakonydraco";
            break;
        case 'LandCarnivoreTwoFlightlessSmall':
            //Compsognathus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Compsognathus";
            break;
        case 'LandCarnivoreTwoFlightlessMedium':
            //Tanycolagreus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Tanycolagreus";
            break;
        case 'LandCarnivoreTwoFlightlessLarge':
            //Gorgosaurus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Gorgosaurus";
            break;
        case 'LandCarnivoreTwoFlightlessColossal':
            //Trex
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Trex";
            break;
        case 'LandCarnivoreTwoFlightedSmall':
            //WhitetailedKite
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_WhitetailedKite";
            break;
        case 'LandCarnivoreTwoFlightedMedium':
            //NorthernGoshawk
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_NorthernGoshawk";
            break;
        case 'LandCarnivoreTwoFlightedLarge':
            //GoldenEagle
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_GoldenEagle";
            break;
        case 'LandCarnivoreTwoFlightedColossal':
            //WoodwardsEagle
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_WoodwardsEagle";
            break;
        case 'LandCarnivoreFourFlightlessSmall':
            //Hoplophoneus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Hoplophoneus";
            break;
        case 'LandCarnivoreFourFlightlessMedium':
            //Eusmilus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Eusmilus";
            break;
        case 'LandCarnivoreFourFlightlessLarge':
            //Xenosmilus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Xenosmilus";
            break;
        case 'LandCarnivoreFourFlightlessColossal':
            //Smilodon
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Smilodon";
            break;
        case 'LandCarnivoreFourFlightedSmall':
            //Anurognathus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Anurognathus";
            break;
        case 'LandCarnivoreFourFlightedMedium':
            //Dimorphodon
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Dimorphodon";
            break;
        case 'LandCarnivoreFourFlightedLarge':
            //Harpactognathus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Harpactognathus";
            break;
        case 'LandCarnivoreFourFlightedColossal':
            //Quetzalcoatlus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Quetzalcoatlus";
            break;
        case 'LandHerbivoreTwoFlightlessSmall':
            //Thescelosaurus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Thescelosaurus";
            break;
        case 'LandHerbivoreTwoFlightlessMedium':
            //Camptosaurus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Camptosaurus";
            break;
        case 'LandHerbivoreTwoFlightlessLarge':
            //Iguanodon
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Iguanodon";
            break;
        case 'LandHerbivoreTwoFlightlessColossal':
            //Edmontosaurus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Edmontosaurus";
            break;
        case 'LandHerbivoreTwoFlightedSmall':
            //CalliopeHummingbird
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_";
            break;
        case 'LandHerbivoreTwoFlightedMedium':
            //ClarksNutcracker
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_CalliopeHummingbird";
            break;
        case 'LandHerbivoreTwoFlightedLarge':
            //BroadbilledParrot
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_BroadbilledParrot";
            break;
        case 'LandHerbivoreTwoFlightedColossal':
            //Hoatzin
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Hoatzin";
            break;
        case 'LandHerbivoreFourFlightlessSmall':
            //Protoceratops
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Protoceratops";
            break;
        case 'LandHerbivoreFourFlightlessMedium':
            //Zuniceratops
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Zuniceratops";
            break;
        case 'LandHerbivoreFourFlightlessLarge':
            //Chasmosaurus
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Chasmosaurus";
            break;
        case 'LandHerbivoreFourFlightlessColossal':
            //Triceratops
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_Triceratops";
            break;
        case 'LandHerbivoreFourFlightedSmall':
            //CaveNectarBat
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_CaveNectarBat";
            break;
        case 'LandHerbivoreFourFlightedMedium':
            //IslandFlyingFox
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_IslandFlyingFox";
            break;
        case 'LandHerbivoreFourFlightedLarge':
            //HammerheadedFruitBat
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_HammerheadedFruitBat";
            break;
        case 'LandHerbivoreFourFlightedColossal':
            //GoldencappedFruitBat
            document.getElementById('coloringPage').src = "/IMG/coloringPages/cpA_GoldencappedFruitBat";
            break;
    }
    switch(sizeVar){
        case '0':
            //pass
        case '1':
            //pass
        case '2':
            //pass
        case '3':
            //pass
        case '4':
            //pass
        case '5':
            //pass
        case '6':
            //pass
        case '7':
            //pass
        case '8':
            //pass
        case '9':
            //pass
        case '10':
            //pass
        case '11':
            //pass
        case '12':
            //pass
        case '13':
            //pass
        case '14':
            //pass
        case '15':
            //pass
        case '16':
            //pass
        case '17':
            //pass
        case '18':
            //pass
        case '19':
            //pass
        case '20':
            //pass
        case '21':
            //pass
        case '22':
            //pass
        case '23':
            //pass
        case '24':
            //pass
        case '25':
            //pass
        case '26':
            //pass
        case '27':
            //pass
        case '28':
            //pass
    }
}
function DiceGameChange(){
    if(dietVar == "Carnivore"){
        document.getElementById("diceBtn").innerHTML = "Attack!";
    }
    else{
        document.getElementById("diceBtn").innerHTML = "Feed!";
    }
}
function DiceGameCarnivore(){
    for (var i=0;i<=LIMIT;i++) {
    (function(ind) {
        setTimeout(function(){
            //Player
            rndNum = Math.floor(Math.random() * 6) + 1;
            while (rndNum == rndNum_prev0 || rndNum == rndNum_prev1) { //track the last two dice rolls...
                rndNum = Math.floor(Math.random() * 6) + 1; //...and prevent the current roll from landing on them
            }
            rndNum_prev1 = rndNum_prev0; //fake random looks more random than real random: AKA the iPod Shuffle Dilemma
            rndNum_prev0 = rndNum;
            if(rndNum == 1){
            document.getElementById("img_greenD6").src = "/IMG/greenD6_1.png";
            }
            if (rndNum == 2){
                document.getElementById("img_greenD6").src = "/IMG/greenD6_2.png";
            }
            if (rndNum == 3){
                document.getElementById("img_greenD6").src = "/IMG/greenD6_3.png";
            }
            if (rndNum == 4){
                document.getElementById("img_greenD6").src = "/IMG/greenD6_4.png";
            }
            if (rndNum == 5){
                document.getElementById("img_greenD6").src = "/IMG/greenD6_5.png";
            }
            if (rndNum == 6){
                document.getElementById("img_greenD6").src = "/IMG/greenD6_6.png";
            }
            if(ind == LIMIT){
                //apply modifiers, play animations, and pass values
            }
            //Prey
            rndNum2 = Math.floor(Math.random() * 6) + 1;
            while (rndNum2 == rndNum2_prev0 || rndNum2 == rndNum2_prev1) { //track the last two dice rolls...
                rndNum2 = Math.floor(Math.random() * 6) + 1; //...and prevent the current roll from landing on them
            }
            rndNum2_prev1 = rndNum2_prev0; //fake random looks more random than real random: AKA the iPod Shuffle Dilemma
            rndNum2_prev0 = rndNum2;
            if(rndNum2 == 1){
            document.getElementById("img_redD6").src = "/IMG/redD6_1.png";
            }
            if (rndNum2 == 2){
                document.getElementById("img_redD6").src = "/IMG/redD6_2.png";
            }
            if (rndNum2 == 3){
                document.getElementById("img_redD6").src = "/IMG/redD6_3.png";
            }
            if (rndNum2 == 4){
                document.getElementById("img_redD6").src = "/IMG/redD6_4.png";
            }
            if (rndNum2 == 5){
                document.getElementById("img_redD6").src = "/IMG/redD6_5.png";
            }
            if (rndNum2 == 6){
                document.getElementById("img_redD6").src = "/IMG/redD6_6.png";
            }
            if(ind == limit){
                //apply modifiers, play animations, and pass values
            }
        }, (120 * ind)); //speed of rolls
    })(i);
    }
}



