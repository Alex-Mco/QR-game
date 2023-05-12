//This is the javascript file for the feeding game //number of rolls before output
function CheckLocal(){
    if((localStorage.getItem("Habitat")) == null){
        localStorage.setItem("Habitat","Water");
        localStorage.setItem("Diet","Carnivore");
        localStorage.setItem("Legs", "Four-Legs");
        localStorage.setItem("Flight","Flightless");
        localStorage.setItem("Size", "7");
        localStorage.setItem("sizeWord", "Small");
        localStorage.setItem("ExtinctModifier", "0");
        localStorage.setItem("PageTitle", document.title);//
        localStorage.setItem("yourDie", "0");
        localStorage.setItem("theirDie", "0");
    }
    if((localStorage.getItem("Habitat")) == "Water"){
        switch(document.title){
            case"Coloring Page":
            case"Introduction Page":
            case"Dice Game":
            case"Dice Game Show":
                document.body.style.backgroundColor = "rgb(50,98,140)";
                document.body.style.color = "rgb(242,213,196)";
                break;
            case "Mass Extinction":
                document.body.style.backgroundColor = "rgb(1,28,38)";
                document.body.style.color = "rgb(242,213,196)";
                document.getElementById("EvolveBtn").style.color = "white";
                document.getElementById("EvolveBtn").style.boxShadow = "3px 3px rgb(194,103,28)";
                document.getElementById("EvolveBtn").style.borderColor = "rgb(242,152,41)";
                document.getElementById("EvolveBtn").style.backgroundColor = "rgb(140,28,3)";
                document.getElementById("stayBtn").style.backgroundColor = "rgb(80,37,18)";
                document.getElementById("stayBtn").style.boxShadow = "3px 3px rgb(194,103,28)";
                document.getElementById("stayBtn").style.borderColor = "rgb(242,152,41)";
                break;
            case "Mass Extinction Form":
            case "Mass Extinction Herbivore":
                document.body.style.backgroundColor = "rgb(1,28,38)";
                document.body.style.color = "rgb(242,213,196)";
                if((localStorage.getItem("Diet")) == "Herbivore"){
                    document.getElementById("OptionA").style.backgroundColor = "rgb(140,28,3)";
                    document.getElementById("OptionA").style.color = "white";
                    document.getElementById("OptionA").style.borderColor = "rgb(140,28,3)";
                    document.getElementById("OptionB").style.backgroundColor = "rgb(140,28,3)";
                    document.getElementById("OptionB").style.color = "white";
                    document.getElementById("OptionB").style.borderColor = "white";
                    document.getElementById("OptionC").style.backgroundColor = "rgb(140,28,3)";
                    document.getElementById("OptionC").style.color = "white";
                    document.getElementById("OptionC").style.borderColor = "white";
                }
                break;
            case "Feeding Game Jurassic":
            case "Feeding Game Permian":
            case "Feeding Game Cretaceous":
                document.body.style.backgroundColor = "rgb(50,98,140)";
                document.body.style.color = "rgb(242,213,196)";
                if((localStorage.getItem("Diet")) == "Herbivore"){
                    document.getElementById("OptionA").style.backgroundColor = "rgb(25,70,180)";
                    document.getElementById("OptionA").style.color = "white";
                    document.getElementById("OptionA").style.borderColor = "black";
                    document.getElementById("OptionA").style.boxShadow = "3px 3px rgb(1,28,38)";
                    document.getElementById("OptionB").style.backgroundColor = "rgb(25,70,180)";
                    document.getElementById("OptionB").style.color = "white";
                    document.getElementById("OptionB").style.borderColor = "black";
                    document.getElementById("OptionB").style.boxShadow = "3px 3px rgb(1,28,38)";
                    document.getElementById("OptionC").style.backgroundColor = "rgb(25,70,180)";
                    document.getElementById("OptionC").style.color = "white";
                    document.getElementById("OptionC").style.borderColor = "black";
                    document.getElementById("OptionC").style.boxShadow = "3px 3px rgb(1,28,38)";
                }
                else{
                    document.getElementById("buttonA").style.backgroundColor = "rgb(25,70,180)";
                    document.getElementById("buttonA").style.color = "white";
                    document.getElementById("buttonA").style.borderColor = "black";
                    document.getElementById("buttonA").style.boxShadow = "3px 3px rgb(1,28,38)";
                    document.getElementById("buttonB").style.backgroundColor = "rgb(25,70,180)";
                    document.getElementById("buttonB").style.color = "white";
                    document.getElementById("buttonB").style.borderColor = "black";
                    document.getElementById("buttonB").style.boxShadow = "3px 3px rgb(1,28,38)";
                    document.getElementById("buttonC").style.backgroundColor = "rgb(25,70,180)";
                    document.getElementById("buttonC").style.color = "white";
                    document.getElementById("buttonC").style.borderColor = "black";
                    document.getElementById("buttonC").style.boxShadow = "3px 3px rgb(1,28,38)";
                    document.getElementById("buttonD").style.backgroundColor = "rgb(25,70,180)";
                    document.getElementById("buttonD").style.color = "white";
                    document.getElementById("buttonD").style.borderColor = "black";
                    document.getElementById("buttonD").style.boxShadow = "3px 3px rgb(1,28,38)";
                }
                break;
            default:
                document.body.style.backgroundColor = "rgb(50,98,140)";
                document.body.style.color = "rgb(242,213,196)";
                document.getElementById("EvolveBtn").style.backgroundColor = "rgb(25,70,180)";
                document.getElementById("EvolveBtn").style.color = "white";
        }
    }
    else{
        if(document.title == "Mass Extinction" || document.title == "Mass Extinction Form" || document.title == "Mass Extinction Herbivore"){
            document.body.style.backgroundColor = "rgb(1,28,38)";
            document.body.style.color = "rgb(242,213,196)";
            if(document.title == "Mass Extinction"){
                document.getElementById("EvolveBtn").style.color = "white";
                document.getElementById("EvolveBtn").style.backgroundColor = "rgb(140,28,3)";
                document.getElementById("stayBtn").style.backgroundColor = "rgb(80,37,18)";
                document.getElementById("EvolveBtn").style.borderColor = "white";
                document.getElementById("stayBtn").style.borderColor = "white";
            }
            if(document.title == "Mass Extinction Herbivore"){
                document.getElementById("OptionA").style.color = "white";
                document.getElementById("OptionB").style.color = "white";
                document.getElementById("OptionC").style.color = "white";
            }
        }
        else{
            document.body.style.backgroundColor = "#D97823";
        }
    }
}
var habitatVar = localStorage.getItem("Habitat");
var dietVar = localStorage.getItem("Diet");
var legsVar = localStorage.getItem("Legs");
var flightVar = localStorage.getItem("Flight");
var sizeVar = localStorage.getItem("Size");
var preySizeVar = localStorage.getItem("PreySize");
var extinctModifier = localStorage.getItem("ExtinctModifier")
var sizeVarString = localStorage.getItem("SizeWord");
var extinctModifier = localStorage.getItem("ExtinctModifier");
var sizeModifier = 0;//
var habitatModifier = 0;//
var dietModifier = 0;//
var flightModifier = 0;//
var camoModifier = 0;//
var pageTitle = localStorage.getItem("PageTitle");
var plantType = localStorage.getItem("plantType");

function ClearLocal(){
    localStorage.clear();
    document.body.style.backgroundColor = "#D97823";
}
function StartGame(){
    document.location.href = '/QR-game_html/ColoringPage.html';
}
function CheckDead(){
    let sizeVar = localStorage.getItem("Size");
    if(Number(sizeVar) <= 0){
        document.location.href='./DeathPage.html';
    }
}
function sizeBarChange(){
    let sizebar = localStorage.getItem("Size");
    document.getElementsByClassName("sizeBarIMG")[0].src= `/IMG/sizebar/sizebar_${sizebar}.png`;
    if (Number(sizebar) <= 0){
        document.getElementById("Dead").classList.remove("hide");
        localStorage.setItem("SizeWord", "Dead");
    }
    else if(Number(sizeVar) > 0 && Number(sizeVar) <= 7){
        document.getElementById("Small").classList.remove("hide");
        localStorage.setItem("SizeWord", "Small");
    }
    else if(Number(sizeVar) > 7 && Number(sizeVar) <= 14){
        document.getElementById("Medium").classList.remove("hide");
        localStorage.setItem("SizeWord", "Medium");
    }
    else if(Number(sizeVar) > 14 && Number(sizeVar) <= 21){
        document.getElementById("Large").classList.remove("hide");
        localStorage.setItem("SizeWord", "Large");
    }
    else{
        document.getElementById("Colossal").classList.remove("hide");
        localStorage.setItem("SizeWord", "Colossal");
    }
}
function sizeWordChange(){
    let sizebar = localStorage.getItem("Size");
    if (Number(sizebar) <= 0){
        localStorage.setItem("SizeWord", "Dead");
    }
    else if(Number(sizeVar) > 0 && Number(sizeVar) <= 7){
        localStorage.setItem("SizeWord", "Small");
    }
    else if(Number(sizeVar) > 7 && Number(sizeVar) <= 14){
        localStorage.setItem("SizeWord", "Medium");
    }
    else if(Number(sizeVar) > 14 && Number(sizeVar) <= 21){
        localStorage.setItem("SizeWord", "Large");
    }
    else{
        localStorage.setItem("SizeWord", "Colossal");
    }
}
/*QR code pages javascrpt*/
function GreenPlanetChange(){
    localStorage.setItem("Diet","Herbivore");
    document.location.href='/QR-game_html/ColoringPage.html';
}
function GottaGoFastChange(){
    localStorage.setItem("Legs","Two-Legs");
    document.location.href='/QR-game_html/ColoringPage.html';
}
function VertebrateLandInvasionChange(){
    localStorage.setItem("Habitat","Land");
    document.location.href='/QR-game_html/ColoringPage.html';
}
function HeavyIsTheHeadChange(){
    localStorage.setItem("Legs","Four-Legs");
    document.location.href='/QR-game_html/ColoringPage.html';
}
function IslandRuleChange(){
    localStorage.setItem("Flight","Flightless");
    let num =localStorage.getItem("Size");
    if ((Number(num) + 7) >= 28){
        localStorage.setItem("Size", "28")
    }
    else{
        num = Number(num) + 7;
        let sizeText= num.toString();
        localStorage.setItem("Size", sizeText); // add 7 to the size
    }
    sizeWordChange();
    document.location.href='/QR-game_html/ColoringPage.html';
}
function TakingFlightChange(){
    localStorage.setItem("Flight","Flighted");
    document.location.href='/QR-game_html/ColoringPage.html';
}
function ReturnToTheSeaChange(){
    localStorage.setItem("Habitat","Water");
    document.location.href='/QR-game_html/ColoringPage.html';
}
function MutationChange(){
    var randValPrev1;
    var randValPrev2;
    var LIMITMUTATION = 10;
    var randomValTraitOne;
    var randomValTraitTwo
    let flipCoin;
    for (var i=0;i<=LIMITMUTATION;i++){
        (function(ind) {
            setTimeout(function(){
                randomValTraitOne = Math.floor(Math.random() * 4);
                while (randomValTraitOne == randValPrev1) { //track the last two dice rolls...
                    randomValTraitOne = Math.floor(Math.random() * 4); //...and prevent the current roll from landing on them
                }
                randValPrev1 = randomValTraitOne;
                switch(randomValTraitOne){
                    case 0:
                        if(habitatVar == "Land"){
                            document.getElementById('TraitA').innerHTML = habitatVar;
                            document.getElementById('TraitB').innerHTML = "Water";
                            //localStorage.setItem('Habitat', 'Water');
                        }
                        else{
                            document.getElementById('TraitA').innerHTML = habitatVar;
                            document.getElementById('TraitB').innerHTML = "Land";
                            //localStorage.setItem('Habitat', 'Land');
                        }
                        break;
                    case 1:
                        if(dietVar == "Carnivore"){
                            document.getElementById('TraitA').innerHTML = dietVar;
                            document.getElementById('TraitB').innerHTML = "Herbivore";
                            //localStorage.setItem('Diet', 'Herbivore');
                        }
                        else{
                            document.getElementById('TraitA').innerHTML = dietVar;
                            document.getElementById('TraitB').innerHTML = "Carnivore";
                            //localStorage.setItem('Diet', 'Carnivore');
                        }
                        break;
                    case 2:
                        if(legsVar == "Two"){
                            document.getElementById('TraitA').innerHTML = legsVar;
                            document.getElementById('TraitB').innerHTML = "Four-Legs";
                            //localStorage.setItem('Legs', 'Four');
                        }
                        else{
                            document.getElementById('TraitA').innerHTML = legsVar;
                            document.getElementById('TraitB').innerHTML = "Two-Legs";
                            //localStorage.setItem('Legs', 'Two');
                        }
                        break;
                    case 3:
                        if(flightVar == "Flightless"){
                            document.getElementById('TraitA').innerHTML = flightVar;
                            document.getElementById('TraitB').innerHTML = "Flighted";
                            //localStorage.setItem('Flight', 'Flighted');
                        }
                        else{
                            document.getElementById('TraitA').innerHTML = flightVar;
                            document.getElementById('TraitB').innerHTML = "Flightless";
                            //localStorage.setItem('Flight', 'Flightless');
                        }
                        break;
                }
                randomValTraitTwo = Math.floor(Math.random() * 4);
                flipCoin = Math.floor(Math.random() * 2);
                //Can Pass same value on both sides
                while (randomValTraitTwo == randomValTraitOne || randomValTraitTwo == randValPrev2) { //track the last two dice rolls...
                    randomValTraitTwo = Math.floor(Math.random() * 4); //...and prevent the current roll from landing on them
                }
                randValPrev2 = randomValTraitTwo;
                switch(randomValTraitTwo){
                    case 0:
                        document.getElementById('TraitC').innerHTML = habitatVar;
                        if(flipCoin == 1){
                            document.getElementById('TraitD').innerHTML = "Land";
                        }
                        else{
                            document.getElementById('TraitD').innerHTML = "Water";
                        }
                        break;
                    case 1:
                        document.getElementById('TraitC').innerHTML = dietVar;
                        if(flipCoin == 1){
                            document.getElementById('TraitD').innerHTML = "Herbivore";
                        }
                        else{
                            document.getElementById('TraitD').innerHTML = "Carnivore";
                        }
                        break;
                    case 2:
                        document.getElementById('TraitC').innerHTML = legsVar;
                        if(flipCoin == 1){
                            document.getElementById('TraitD').innerHTML = "Four-Legs";
                        }
                        else{
                            document.getElementById('TraitD').innerHTML = "Two-Legs";
                        }
                        break;
                    case 3:
                        document.getElementById('TraitC').innerHTML = flightVar;
                        if(flipCoin == 1){
                            document.getElementById('TraitD').innerHTML = "Flighted";
                        }
                        else{
                            document.getElementById('TraitD').innerHTML = "Flightless";
                        }
                        break;
                }
                if(ind == LIMITMUTATION){
                    switch(randomValTraitOne){
                        case 0:
                            localStorage.setItem('Habitat', document.getElementById('TraitB').innerHTML)
                            break;
                        case 1:
                            localStorage.setItem('Diet', document.getElementById('TraitB').innerHTML)
                            break;
                        case 2:
                            localStorage.setItem('Legs', document.getElementById('TraitB').innerHTML)
                            break;
                        case 3:
                            localStorage.setItem('Flight', document.getElementById('TraitB').innerHTML)
                            break;
                    }
                    switch(randomValTraitTwo){
                        case 0:
                            localStorage.setItem('Habitat', document.getElementById('TraitD').innerHTML)
                            break;
                        case 1:
                            localStorage.setItem('Diet', document.getElementById('TraitD').innerHTML)
                            break;
                        case 2:
                            localStorage.setItem('Legs', document.getElementById('TraitD').innerHTML)
                            break;
                        case 3:
                            localStorage.setItem('Flight', document.getElementById('TraitD').innerHTML)
                            break;
                    }
                }
            }, (200 * ind)); //speed of rolls
        })(i);
    }
    setTimeout(() => {
        document.location.href='/QR-game_html/ColoringPage.html';}, 4000);
      
}
function ReturnToColoringPage(){
    document.location.href='/QR-game_html/ColoringPage.html';
}

/*MassExtinction CSS*/
function MassExtinction(){
    let dietVar = localStorage.getItem("Diet");
    if(dietVar == "Carnivore"){
        document.location.href='/QR-game_html/MassExtinctionForm.html';
    }
    else{
        document.location.href='/QR-game_html/MassExtinctionHerb.html';
        localStorage.setItem("plantType", "noPlantType");
    }
}
function submitMassExtinctionForm(){
    localStorage.setItem("PageTitle", document.title)
    var extinctNum = (sizeModifier + habitatModifier + dietModifier + flightModifier + camoModifier).toString()
    localStorage.setItem("ExtinctModifier", extinctNum);
    document.location.href='./DiceGame.html';
}
function MassExtinctionSize(){
    //Need to pull all stats from the inputs and push them to local storage
    var sizeRadios = document.getElementsByName('size');
    for (var radio of sizeRadios){
        if(radio.checked){
            if(sizeVarString == radio.value){
                switch(sizeVarString){
                    case "Small":
                        sizeModifier = 1;
                        localStorage.setItem("PreySize", "Small");
                        break;
                    case "Medium":
                        sizeModifier = 1;
                        localStorage.setItem("PreySize", "Medium");
                        break;
                    case "Large":
                        sizeModifier = 2;
                        localStorage.setItem("PreySize", "Large");
                        break;
                    case "Colossal":
                        localStorage.setItem("PreySize", "Colossal");
                        break;
                }
            }
            else{
                switch(sizeVarString){
                    case "Small":
                        switch(radio.value){
                            case "Medium":
                                localStorage.setItem("PreySize", "Medium");
                                break;
                            case "Large":
                                localStorage.setItem("PreySize", "Large");
                                break;
                            case "Colossal":
                                localStorage.setItem("PreySize", "Colossal");
                                break;
                        }
                        break;
                    case "Medium":
                        switch(radio.value){
                            case "Small":
                                localStorage.setItem("PreySize", "Small");
                                break;
                            case "Large":
                                localStorage.setItem("PreySize", "Large");
                                break;
                            case "Colossal":
                                localStorage.setItem("PreySize", "Colossal");
                                break;
                        }
                        break;
                    case "Large":
                        switch(radio.value){
                            case "Small":
                                sizeModifier = -1;
                                localStorage.setItem("PreySize", "Small");
                                break
                            case "Medium":
                                localStorage.setItem("PreySize", "Medium");
                                break
                            case "Colossal":
                                localStorage.setItem("PreySize", "Colossal");
                                break
                        }
                        break;
                    case "Colossal":
                        switch(radio.value){
                            case "Small":
                                localStorage.setItem("PreySize", "Small");
                                break
                            case "Medium":
                                localStorage.setItem("PreySize", "Medium");
                                break
                            case "Large":
                                localStorage.setItem("PreySize", "Large");
                                break
                        }
                        break;
                }
            }
        }
    }
}
function MassExtinctionFormHabitat(){
    var habitatRadios = document.getElementsByName('habitat');
    for (var radio of habitatRadios){
        if(radio.checked){
            if(habitatVar == radio.value){
                if(habitatVar == "Water"){
                    document.getElementById("ModifierWL").innerHTML = "You are well adapted to hunt other animals in your preferred habitat.";
                    habitatModifier = 0;
                }
                else{
                    document.getElementById("ModifierWL").innerHTML = "You are well adapted to hunt other animals in your preferred habitat.";
                    habitatModifier = 0;
                }
            }
            else{
                if(habitatVar == "Water"){
                    document.getElementById("ModifierWL").innerHTML = "Water animals can ambush land animals when they drink.";
                    habitatModifier = 0;
                }
                else{
                    document.getElementById("ModifierWL").innerHTML = "-1! Water animals are difficult for land animals to catch!";
                    habitatModifier = -1;
                }
            }
            break;
        }
    }
}
function MassExtinctionDiet(){
    var dietRadios = document.getElementsByName('diet');
    for (var radio of dietRadios){
        if(radio.checked){
            //automatically carnivore
            if(radio.value == "Herbivore"){
                document.getElementById("ModifierCH").innerHTML = "While herbivores might have defensive structures, like horns or armor, they are less heavily armed than carnivores."
                dietModifier = 0; 
            }
            else{
                if(habitatVar == 'Water'){
                    document.getElementById("ModifierCH").innerHTML = "Most aquatic animals are carnivorous, so you are well adapted to hunt other carnivores."
                    dietModifier = 0; 
                }
                else{
                    document.getElementById("ModifierCH").innerHTML = "-1! Carnivores are well-armed with sharp claws and teeth!"
                    dietModifier = -1;
                }
            }
            break;
        }
    }
}
function MassExtinctionFlight(){
    var flightRadios = document.getElementsByName('flight');
    for (var radio of flightRadios){
        if(radio.checked){
            if(flightVar == radio.value){
                if(flightVar == "Flightless"){
                    document.getElementById("ModifierFY").innerHTML = "You are well adapted to hunt other flightless animals."
                    flightModifier = 0;
                }
                else{
                    document.getElementById("ModifierFY").innerHTML = "Some flying animals, like falcons and Harpactognathus, are specially adapted to catch prey on the wing."
                    flightModifier = 0;
                }
            }
            else{
                if(flightVar == "Flightless"){
                    document.getElementById("ModifierFY").innerHTML = "-2! Flying animals are much more difficult for flightless animals to catch!"
                    flightModifier = -1;
                }
                else{
                    document.getElementById("ModifierFY").innerHTML = "Flying animals are lightly built, but can use their flight to ambush and outmaneuver terrestrial prey – using hunting strategies like dragging prey off cliffs."
                    flightModifier = 0;
                }
            }
            break;
        }
    }
}
function MassExtinctionCamo(){
    var camoRadios = document.getElementsByName('camo');
    for (var radio of camoRadios){
        if(radio.checked){
            if(radio.value == "No"){
                document.getElementById("ModifierCam").innerHTML = "Animals without camaoflage must rely on their speed, ferocity, and intimidation to survive."
                camoModifier = 0;
            }
            else{
                document.getElementById("ModifierCam").innerHTML = "-1! Camouflaged animals are good at hiding from predators."
                camoModifier = -1;
            }
            break;
        }
    }
}

/*Feeding game javascript*/
function FeedingGameLoad(){
    //Hide and show the different divs based on current stats. Doesn't work currently
    let sizeVar = localStorage.getItem("Size");
    let dietVar = localStorage.getItem("Diet");
    localStorage.setItem("PageTitle", document.title);
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
        if(Number(sizeVar) > 0 && Number(sizeVar) <= 7){
            document.getElementById("carnivoreTextCretaceous").innerHTML = `Time to feed! As a small carnivore, 
            you are highly specialized to hunt other small prey.`
        }
        else if(Number(sizeVar) >= 8 && Number(sizeVar) <= 14){
            document.getElementById('carnivoreTextCretaceous').innerHTML = `Time to feed! As a medium carnivore, 
            you are best adapted to hunt smaller prey or prey your own size. While you may use pack 
            hunting or ambush to bring down prey larger than yourself, it is difficult and dangerous.`
        }
        else if(Number(sizeVar) >= 15 && Number(sizeVar) <= 21){
            document.getElementById('carnivoreTextCretaceous').innerHTML = `Time to feed! As a large carnivore,
             you are best adapted to hunt other large animals. 
            Small prey is nimble and difficult to catch, while colossal prey is too 
            formidable to risk.`
        }
        else if(Number(sizeVar) == 0){
            document.location.href='./DeathPage.html';
        }
        else{
            document.getElementById('carnivoreTextCretaceous').innerHTML = `Time to feed! As a colossal carnivore, 
            you prefer to feed on a wide array of smaller 
            animals. While you are capable of bringing down any animal, colossal prey 
            is usually not worth the risk. This feeding strategy is taken to the extreme 
            in baleen whales – the largest animal on Earth is sustained by eating billions 
            of tiny krill.`
        }
    }
}
function FeedingPermian(){
    let habitatVar = localStorage.getItem("Habitat");
    let dietVar = localStorage.getItem("Diet");
    if(dietVar == "Carnivore"){
        if(habitatVar == "Land"){
            document.getElementById("buttonA").innerHTML = "Dicynodont - Attack!";
            document.getElementById("buttonB").innerHTML = "Scutosaurus - Attack!";
            document.getElementById("buttonC").innerHTML = "Aulacephalodon - Attack!";
        }
        else{
            document.getElementById("buttonA").innerHTML = "Aenigamacaris - Attack!";
            document.getElementById("buttonB").innerHTML = "Mooreceras - Attack!";
            document.getElementById("buttonC").innerHTML = "Eurypterid - Attack!";
        }
    }
}
function FeedingJurassic(){
    let habitatVar = localStorage.getItem("Habitat");
    let dietVar = localStorage.getItem("Diet");
    if(dietVar == "Carnivore"){
        if(habitatVar == "Land"){
            document.getElementById("buttonA").innerHTML = "Othenlia - Attack!";
            document.getElementById("buttonB").innerHTML = "Camptosaurus - Attack!";
            document.getElementById("buttonC").innerHTML = "Hesperosaurus - Attack!";
            document.getElementById("buttonD").innerHTML = "Camarasaurus - Attack!";
        }
        else{
            document.getElementById("buttonA").innerHTML = "Belemnite - Attack!";
            document.getElementById("buttonB").innerHTML = "Ammonite - Attack!";
            document.getElementById("buttonC").innerHTML = "Ichthyosaur - Attack!";
            document.getElementById("buttonD").style.display = "none";
        }
    }
}
function FeedingCretaceous(){
    let habitatVar = localStorage.getItem("Habitat");
    let dietVar = localStorage.getItem("Diet");
    if(dietVar == "Carnivore"){
        if(habitatVar == "Land"){
            document.getElementById("buttonA").innerHTML = "Psittacosaurus - Attack!";
            document.getElementById("buttonB").innerHTML = "Struthiomimus - Attack!";
            document.getElementById("buttonC").innerHTML = "Chasmosaurus - Attack!";
            document.getElementById("buttonD").innerHTML = "Edmontosaurus - Attack!";
        }
        else{
            document.getElementById("buttonA").innerHTML = "Acitelmessus - Attack!";
            document.getElementById("buttonB").innerHTML = "Baculites - Attack!";
            document.getElementById("buttonC").innerHTML = "Pachyrhizodus - Attack!";
            document.getElementById("buttonD").innerHTML = "Archelon - Attack!";
        }
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
function thornyPlants(){
    localStorage.setItem("plantType", "thorny");
    document.location.href='./DiceGame.html';
}
function toxicPlants(){
    localStorage.setItem("plantType", "toxic");
    document.location.href='./DiceGame.html';
}
function fruitPlants(){
    localStorage.setItem("plantType", "fruit");
    document.location.href='./DiceGame.html';
}
/*Dice games Javascript*/
function DiceGameChange(){
    var sizeVar = localStorage.getItem("Size");
    let sizeVarNum = Number(sizeVar);
    let dietVar = localStorage.getItem("Diet");
    if(dietVar == "Carnivore"){
        document.getElementById("diceBtn").innerHTML = "Attack!";
        let theirSizeNum = localStorage.getItem("PreySize");
        if(pageTitle == "Mass Extinction Form"){
            //coming from the mass extinction
            document.getElementById("diceBtn").onclick = DiceGameCarnivoreExtinct;
        }
        else{
            //Comming from the feeding games
            document.getElementById("diceBtn").onclick = DiceGameCarnivore;
        }
        //NEED TO DO THEIR DICE
        if(sizeVarNum <= 0){//dead
            CheckDead();
            localStorage.setItem("yourDie", "0");
            localStorage.setItem("yourLoss", "0");
            document.getElementById("img_green").src = `/IMG/dice/greenD4_1.png`;
        }
        else if(sizeVarNum > 0 && sizeVarNum <= 7){//small
            localStorage.setItem("yourDie", "4");
            localStorage.setItem("yourLoss", "-4");
            document.getElementById("img_green").src = `/IMG/dice/greenD4_1.png`;
        }
        else if(sizeVarNum > 7 && sizeVarNum <= 14){//medium
            localStorage.setItem("yourDie", "6");
            localStorage.setItem("yourLoss", "-6");
            document.getElementById("img_green").src = `/IMG/dice/greenD6_1.png`;
        }
        else if(sizeVarNum > 14 && sizeVarNum <= 21){//large
            localStorage.setItem("yourDie", "8");
            localStorage.setItem("yourLoss", "-8");
            document.getElementById("img_green").src = `/IMG/dice/greenD8_1.png`;
        }
        else{//colossal
            localStorage.setItem("yourDie", "10");
            localStorage.setItem("yourLoss", "-10");
            document.getElementById("img_green").src = `/IMG/dice/greenD10_1.png`;
        }
        switch(theirSizeNum){
            case "Small":
                localStorage.setItem("theirDie", "4");
                localStorage.setItem("yourGain", "4");
                document.getElementById("img_red").src = `/IMG/dice/redD4_1.png`;
                break;
            case "Medium":
                localStorage.setItem("theirDie", "6");
                localStorage.setItem("yourGain", "6");
                document.getElementById("img_red").src = `/IMG/dice/redD6_1.png`;
                break;
            case "Large":
                localStorage.setItem("theirDie", "8");
                localStorage.setItem("yourGain", "8");
                document.getElementById("img_red").src = `/IMG/dice/redD8_1.png`;
                break;
            case "Colossal":
                localStorage.setItem("theirDie", "10");
                localStorage.setItem("yourGain", "10");
                document.getElementById("img_red").src = `/IMG/dice/redD10_1.png`;
                break;
        }
    }
    else{
        document.getElementById("themName").innerHTML = "Plant";
        document.getElementById("diceBtn").innerHTML = "Feed!";
        let plantType = localStorage.getItem("plantType");
        if(pageTitle == "Mass Extinction Herbivore"){
            if(plantType == 'thorny'){
                document.getElementById("img_red").src = "/IMG/dice/redD6_1.png";
                document.getElementById("diceBtn").onclick = DiceGameHerbivoreMassThorny;
                if(sizeVarNum <= 0){//dead
                    localStorage.setItem("yourDie", "0");
                    localStorage.setItem("yourLoss", "0");
                    document.getElementById("img_green").src = `/IMG/dice/greenD4_1.png`;
                    localStorage.setItem("theirDie", "0");
                    document.getElementById("img_red").src = `/IMG/dice/redD4_1.png`;
                }
                else if(sizeVarNum > 0 && sizeVarNum <= 7){//small
                    localStorage.setItem("yourDie", "4");
                    localStorage.setItem("yourLoss", "-4");
                    document.getElementById("img_green").src = `/IMG/dice/greenD4_1.png`;
                    localStorage.setItem("theirDie", "6");
                    document.getElementById("img_red").src = `/IMG/dice/redD6_1.png`;
                }
                else if(sizeVarNum > 7 && sizeVarNum <= 14){//medium
                    localStorage.setItem("yourDie", "6");
                    localStorage.setItem("yourLoss", "-6");
                    document.getElementById("img_green").src = `/IMG/dice/greenD6_1.png`;
                    localStorage.setItem("theirDie", "8");
                    document.getElementById("img_red").src = `/IMG/dice/redD8_1.png`;
                }
                else if(sizeVarNum > 14 && sizeVarNum <= 21){//large
                    localStorage.setItem("yourDie", "8");
                    localStorage.setItem("yourLoss", "-8");
                    document.getElementById("img_green").src = `/IMG/dice/greenD8_1.png`;
                    localStorage.setItem("theirDie", "10");
                    document.getElementById("img_red").src = `/IMG/dice/redD10_1.png`;
                }
                else{//colossal
                    localStorage.setItem("yourDie", "10");
                    localStorage.setItem("yourLoss", "-10");
                    document.getElementById("img_green").src = `/IMG/dice/greenD10_1.png`;
                    localStorage.setItem("theirDie", "12");
                    document.getElementById("img_red").src = `/IMG/dice/redD12_1.png`;
                }
            }
            else if(plantType == 'toxic'){
                document.getElementById("img_green").src = "/IMG/dice/greenD8_1.png";
                document.getElementById("img_red").src = "/IMG/dice/redD10_1.png";
                document.getElementById("diceBtn").onclick = DiceGameHerbivoreMassToxic;
            }
            else if(plantType == 'fruit'){
                document.getElementById("img_green").src = "/IMG/dice/greenD6_1.png";
                document.getElementById("img_red").src = "/IMG/dice/redD8_1.png";
                document.getElementById("diceBtn").onclick = DiceGameHerbivoreMassFruit;
            }
        }
        else{
            if(plantType == 'thorny'){
                document.getElementById("img_red").src = "/IMG/dice/redD6_1.png";
                document.getElementById("diceBtn").onclick = DiceGameHerbivoreThorny;
                if(sizeVarNum <= 0){//dead
                    localStorage.setItem("yourDie", "0");
                    localStorage.setItem("yourLoss", "0");
                    document.getElementById("img_green").src = `/IMG/dice/greenD4_1.png`;
                }
                else if(sizeVarNum > 0 && sizeVarNum <= 7){//small
                    localStorage.setItem("yourDie", "4");
                    localStorage.setItem("yourLoss", "-4");
                    document.getElementById("img_green").src = `/IMG/dice/greenD4_1.png`;
                }
                else if(sizeVarNum > 7 && sizeVarNum <= 14){//medium
                    localStorage.setItem("yourDie", "6");
                    localStorage.setItem("yourLoss", "-6");
                    document.getElementById("img_green").src = `/IMG/dice/greenD6_1.png`;
                }
                else if(sizeVarNum > 14 && sizeVarNum <= 21){//large
                    localStorage.setItem("yourDie", "8");
                    localStorage.setItem("yourLoss", "-8");
                    document.getElementById("img_green").src = `/IMG/dice/greenD8_1.png`;
                }
                else{//colossal
                    localStorage.setItem("yourDie", "10");
                    localStorage.setItem("yourLoss", "-10");
                    document.getElementById("img_green").src = `/IMG/dice/greenD10_1.png`;
                }
            }
            else if(plantType == 'toxic'){
                document.getElementById("img_green").src = "/IMG/dice/greenD10_1.png";
                document.getElementById("img_red").src = "/IMG/dice/redD8_1.png";
                document.getElementById("diceBtn").onclick = DiceGameHerbivoreToxic;
            }
            else{
                document.getElementById("img_green").src = "/IMG/dice/greenD6_1.png";
                document.getElementById("img_red").src = "/IMG/dice/redD6_1.png";
                document.getElementById("diceBtn").onclick = DiceGameHerbivoreFruit;
            }
        }
    }
}
function DiceGameShow(){
    let sizeBar = localStorage.getItem("Size");
    document.getElementById("sizeBarIMG").src = `/IMG/sizebar/SizeBar_${sizeBar}.png`;
    let sizeChange = Number(localStorage.getItem("sizeChange"));
    var increment = 0;
    if((sizeChange) < 0){
        if((Number(sizeBar) + sizeChange) <= 0){
            increment = 0;
        }
        else{
            increment = (Number(sizeBar) + sizeChange);
        }
        for(let i = Number(sizeBar); i >= increment; i--){
            (function(ind){
                setTimeout(function(){
                    document.getElementById("sizeBarIMG").src = `/IMG/sizebar/SizeBar_${i}.png`;
                }, 2000 - (140 * ind));
            })(i);//MIGHT NEED TO FIX THIS
        }
    }
    else{
        if((Number(sizeBar) + sizeChange) >= 28){
            increment = 28;
        }
        else if(sizeChange == 1){//SCHWING MAGIC
            document.getElementById("sizeBarIMG").src = `/IMG/sizebar/SizeBar_${sizeBar}.png`;
            setTimeout(function(){
                document.getElementById("sizeBarIMG").src = `/IMG/sizebar/SizeBar_${Number(sizeBar)+1}.png`;
                let sizeText = (Number(sizeBar)+1)
                localStorage.setItem("Size", sizeText.toString());
                sizeWordChange();
                setTimeout(() => {
                    CheckDead();
                    document.location.href='/QR-game_html/ColoringPage.html';}, 1000 * Math.abs(sizeChange));
            }, 280);
        }
        else{
            increment = (Number(sizeBar) + sizeChange);
        }
        for(let i = Number(sizeBar); i <= increment; i++){
            (function(ind){
                setTimeout(function(){
                    document.getElementById("sizeBarIMG").src = `/IMG/sizebar/SizeBar_${i}.png`;
                }, (140 * ind));
            })(i);
        }
    }
    let sizeText = increment.toString();
    localStorage.setItem("Size", sizeText);
    sizeWordChange()
    setTimeout(() => {
            CheckDead();
            document.location.href='/QR-game_html/ColoringPage.html';}, 1000 * Math.abs(sizeChange));
}
function DiceGameCarnivore(){
    var yourDie = localStorage.getItem("yourDie");
    var theirDie = localStorage.getItem("theirDie");
    var sizeVarString = localStorage.getItem("SizeWord");
    var rndNum;
    var rndNum_prev0;
    var rndNum_prev1;
    var rndNum2;
    var rndNum2_prev0;
    var rndNum2_prev1;
    var LIMIT = 12;
    for (var i=0;i<=LIMIT;i++) {
    (function(ind) {
        setTimeout(() =>{
            //Player
            rndNum = Math.floor(Math.random() * Number(yourDie)) + 1;
            while (rndNum == rndNum_prev0 || rndNum == rndNum_prev1) { //track the last two dice rolls...
                rndNum = Math.floor(Math.random() * Number(yourDie)) + 1; //...and prevent the current roll from landing on them
            }
            rndNum_prev1 = rndNum_prev0; //fake random looks more random than real random: AKA the iPod Shuffle Dilemma
            rndNum_prev0 = rndNum;
            if(rndNum == 1){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_1.png`;
            }
            else if (rndNum == 2){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_2.png`;
            }
            else if (rndNum == 3){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_3.png`;
            }
            else if (rndNum == 4){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_4.png`;
            }
            else if (rndNum == 5){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_5.png`;
            }
            else if (rndNum == 6){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_6.png`;
            }
            else if (rndNum == 7){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_7.png`;
            }
            else if (rndNum == 8){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_8.png`;
            }
            else if (rndNum == 9){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_9.png`;
            }
            else {
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_10.png`;
            }
            //Prey
            rndNum2 = Math.floor(Math.random() * Number(theirDie)) + 1;
            while (rndNum2 == rndNum2_prev0 || rndNum2 == rndNum2_prev1) { //track the last two dice rolls...
                rndNum2 = Math.floor(Math.random() * Number(theirDie)) + 1; //...and prevent the current roll from landing on them
            }
            rndNum2_prev1 = rndNum2_prev0; //fake random looks more random than real random: AKA the iPod Shuffle Dilemma
            rndNum2_prev0 = rndNum2;
            if(rndNum2 == 1){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_1.png`;
            }
            else if (rndNum2 == 2){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_2.png`;
            }
            else if (rndNum2 == 3){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_3.png`;
            }
            else if (rndNum2 == 4){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_4.png`;
            }
            else if (rndNum2 == 5){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_5.png`;
            }
            else if (rndNum2 == 6){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_6.png`;
            }
            else if (rndNum2 == 7){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_7.png`;
            }
            else if (rndNum2 == 8){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_8.png`;
            }
            else if (rndNum2 == 9){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_9.png`;
            }
            else {
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_10.png`;
            }
            if(ind == LIMIT){
                //apply modifiers, play animations, and pass values
                let youMod = document.getElementById("youMod");
                let themMod = document.getElementById("themMod");
                switch(sizeVarString){
                    case "Small":
                        if(preySizeVar == "Small"){
                            rndNum += 1;
                            youMod.innerHTML = "Bonus +1";
                        }
                        break;
                    case "Medium":
                        if(preySizeVar == "Medium"){
                            rndNum += 1;
                            youMod.innerHTML = "Bonus +1";
                        }
                        break;
                    case "Large":
                        if(preySizeVar == "Small"){
                            //apply +0 modifier 
                            rndNum += -1;
                            themMod.innerHTML = "Bonus +1";
                        }
                        else if(preySizeVar == "Large"){
                            rndNum += 2;
                            youMod.innerHTML = "Bonus +2";
                        }
                        break;
                }
                if((rndNum - rndNum2) == 0){
                    document.getElementById("slash1").classList.add("hide");
                    document.getElementById("slash2").classList.add("hide");
                }
                else if((rndNum - rndNum2) < 0){
                    document.getElementById("slash2").classList.add("hide");
                    document.getElementById("slash1").classList.remove("hide");
                }
                else{
                    document.getElementById("slash1").classList.add("hide");
                    document.getElementById("slash2").classList.remove("hide");
                }
                let sizeChange = (rndNum - rndNum2);
                let yourLoss = localStorage.getItem("yourLoss");
                let yourGain = localStorage.getItem("yourGain");
                if(sizeChange <=0){//lower than 0 (loose)
                    if(sizeChange <=  Number(yourLoss)){
                        sizeChange = yourLoss;
                    }
                    else{
                        sizeChange = sizeChange.toString();
                    }
                }
                else{//higher than 0 (win)
                    if(sizeChange >= Number(yourGain)){
                        sizeChange = yourGain;
                    }
                    else{
                        sizeChange = sizeChange.toString();
                    }
                }
                localStorage.setItem("sizeChange", sizeChange);
                setTimeout(() =>{
                    document.location.href = "/QR-game_html/DiceGameShow.html";},2000);
            }
        }, (140 * ind)); //speed of rolls
    })(i);
    }
}
function DiceGameCarnivoreExtinct(){
    var yourDie = localStorage.getItem("yourDie");
    var theirDie = localStorage.getItem("theirDie");
    var extinctModifier = localStorage.getItem("ExtinctModifier");
    var rndNum;
    var rndNum_prev0;
    var rndNum_prev1;
    var rndNum2; 
    var rndNum2_prev0;
    var rndNum2_prev1;
    var LIMIT = 12;
    for (var i=0;i<=LIMIT;i++) {
    (function(ind) {
        setTimeout(function(){
            //Player
            rndNum = Math.floor(Math.random() * Number(yourDie)) + 1;
            while (rndNum == rndNum_prev0 || rndNum == rndNum_prev1) { //track the last two dice rolls...
                rndNum = Math.floor(Math.random() * Number(yourDie)) + 1; //...and prevent the current roll from landing on them
            }
            rndNum_prev1 = rndNum_prev0; //fake random looks more random than real random: AKA the iPod Shuffle Dilemma
            rndNum_prev0 = rndNum;
            if(rndNum == 1){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_1.png`;
            }
            else if (rndNum == 2){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_2.png`;
            }
            else if (rndNum == 3){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_3.png`;
            }
            else if (rndNum == 4){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_4.png`;
            }
            else if (rndNum == 5){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_5.png`;
            }
            else if (rndNum == 6){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_6.png`;
            }
            else if (rndNum == 7){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_7.png`;
            }
            else if (rndNum == 8){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_8.png`;
            }
            else if (rndNum == 9){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_9.png`;
            }
            else {
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_10.png`;
            }
            //Prey
            rndNum2 = Math.floor(Math.random() * Number(theirDie)) + 1;
            while (rndNum2 == rndNum2_prev0 || rndNum2 == rndNum2_prev1) { //track the last two dice rolls...
                rndNum2 = Math.floor(Math.random() * Number(theirDie)) + 1; //...and prevent the current roll from landing on them
            }
            rndNum2_prev1 = rndNum2_prev0; //fake random looks more random than real random: AKA the iPod Shuffle Dilemma
            rndNum2_prev0 = rndNum2;
            if(rndNum2 == 1){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_1.png`;
            }
            else if (rndNum2 == 2){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_2.png`;
            }
            else if (rndNum2 == 3){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_3.png`;
            }
            else if (rndNum2 == 4){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_4.png`;
            }
            else if (rndNum2 == 5){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_5.png`;
            }
            else if (rndNum2 == 6){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_6.png`;
            }
            else if (rndNum2 == 7){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_7.png`;
            }
            else if (rndNum2 == 8){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_8.png`;
            }
            else if (rndNum2 == 9){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_9.png`;
            }
            else {
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_10.png`;
            }
            if(ind == LIMIT){
                //apply modifiers, play animations, and pass values
                let youMod = document.getElementById("youMod");
                let themMod = document.getElementById("themMod");
                if(extinctModifier <= 0){
                    themMod.innerHTML = "Bonus +" + extinctModifier.toString();
                }
                else{
                    youMod.innerHTML = "Bonus +" + extinctModifier.toString();
                }
                rndNum += Number(extinctModifier);
                if((rndNum - rndNum2) == 0){
                    document.getElementById("slash1").classList.add("hide");
                    document.getElementById("slash2").classList.add("hide");
                }
                else if((rndNum - rndNum2) < 0){
                    document.getElementById("slash2").classList.add("hide");
                    document.getElementById("slash1").classList.remove("hide");
                }
                else{
                    document.getElementById("slash1").classList.add("hide");
                    document.getElementById("slash2").classList.remove("hide");
                }
                let sizeChange = (rndNum - rndNum2);
                let yourLoss = localStorage.getItem("yourLoss");
                let yourGain = localStorage.getItem("yourGain");
                if(sizeChange <=0){//lower than 0 (loose)
                    if(sizeChange <=  Number(yourLoss)){
                        sizeChange = yourLoss;
                    }
                    else{
                        sizeChange = sizeChange.toString();
                    }
                }
                else{//higher than 0 (win)
                    if(sizeChange >= Number(yourGain)){
                        sizeChange = yourGain;
                    }
                    else{
                        sizeChange = sizeChange.toString();
                    }
                }
                localStorage.setItem("sizeChange", sizeChange);
                setTimeout(() =>{
                    document.location.href = "/QR-game_html/DiceGameShow.html";},2000);
            }
        }, (140 * ind)); //speed of rolls
    })(i);
    }
}
function DiceGameHerbivoreThorny(){
    var yourDie = localStorage.getItem("yourDie");
    var rndNum;
    var rndNum_prev0;
    var rndNum_prev1;
    var rndNum2;
    var rndNum2_prev0;
    var rndNum2_prev1;
    var LIMIT = 12;
    for (var i=0;i<=LIMIT;i++) {
    (function(ind) {
        setTimeout(function(){
            //Player
            rndNum = Math.floor(Math.random() * Number(yourDie)) + 1;
            while (rndNum == rndNum_prev0 || rndNum == rndNum_prev1) { //track the last two dice rolls...
                rndNum = Math.floor(Math.random() * Number(yourDie)) + 1; //...and prevent the current roll from landing on them
            }
            rndNum_prev1 = rndNum_prev0; //fake random looks more random than real random: AKA the iPod Shuffle Dilemma
            rndNum_prev0 = rndNum;
            if(rndNum == 1){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_1.png`;
            }
            else if (rndNum == 2){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_2.png`;
            }
            else if (rndNum == 3){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_3.png`;
            }
            else if (rndNum == 4){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_4.png`;
            }
            else if (rndNum == 5){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_5.png`;
            }
            else if (rndNum == 6){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_6.png`;
            }
            else if (rndNum == 7){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_7.png`;
            }
            else if (rndNum == 8){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_8.png`;
            }
            else if (rndNum == 9){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_9.png`;
            }
            else {
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_10.png`;
            }
            //Prey
            rndNum2 = Math.floor(Math.random() * 6) + 1;
            while (rndNum2 == rndNum2_prev0 || rndNum2 == rndNum2_prev1) { //track the last two dice rolls...
                rndNum2 = Math.floor(Math.random() * 6) + 1; //...and prevent the current roll from landing on them
            }
            rndNum2_prev1 = rndNum2_prev0; //fake random looks more random than real random: AKA the iPod Shuffle Dilemma
            rndNum2_prev0 = rndNum2;
            if(rndNum2 == 1){
            document.getElementById("img_red").src = "/IMG/dice/redD6_1.png";
            }
            else if (rndNum2 == 2){
                document.getElementById("img_red").src = "/IMG/dice/redD6_2.png";
            }
            else if (rndNum2 == 3){
                document.getElementById("img_red").src = "/IMG/dice/redD6_3.png";
            }
            else if (rndNum2 == 4){
                document.getElementById("img_red").src = "/IMG/dice/redD6_4.png";
            }
            else if (rndNum2 == 5){
                document.getElementById("img_red").src = "/IMG/dice/redD6_5.png";
            }
            else{
                document.getElementById("img_red").src = "/IMG/dice/redD6_6.png";
            }
            if(ind == LIMIT){
                let youMod = document.getElementById("youMod");
                if(Number(sizeVar) > 0 && Number(sizeVar) <= 7){
                    rndNum += 0;
                }
                else if(Number(sizeVar) >= 8 && Number(sizeVar) <= 14){
                    rndNum += 1;
                    youMod.innerHTML = "Bonus +1";
                }
                else if(Number(sizeVar) >= 15 && Number(sizeVar) <= 21){
                    rndNum += 2;
                    youMod.innerHTML = "Bonus +2";
                }
                else if(Number(sizeVar) == 0){
                    document.location.href='./DeathPage.html';
                }
                else{
                    rndNum += 3;
                    youMod.innerHTML = "Bonus +3";
                }
                if((rndNum - rndNum2) == 0){
                    document.getElementById("slash1").classList.add("hide");
                    document.getElementById("slash2").classList.add("hide");
                }
                else if((rndNum - rndNum2) < 0){
                    document.getElementById("slash2").classList.add("hide");
                    document.getElementById("slash1").classList.remove("hide");
                }
                else{
                    document.getElementById("slash1").classList.add("hide");
                    document.getElementById("slash2").classList.remove("hide");
                }
                let sizeChange = (rndNum - rndNum2);
                let yourLoss = localStorage.getItem("yourLoss");
                if(sizeChange <= 0){//lower than 0 (loose)
                    if(sizeChange <=  Number(yourLoss)){
                        sizeChange = yourLoss;
                    }
                    else{
                        sizeChange = sizeChange.toString();
                    }
                }
                else{
                    sizeChange = sizeChange.toString();
                }
                localStorage.setItem("sizeChange", sizeChange);
                setTimeout(() =>{
                    document.location.href = "/QR-game_html/DiceGameShow.html";},2000);
            }
        }, (140 * ind)); //speed of rolls
    })(i);
    }
}
function DiceGameHerbivoreToxic(){
    //d10 vs d8
    //increase size by how much you win
    var rndNum;
    var rndNum_prev0;
    var rndNum_prev1;
    var rndNum2;
    var rndNum2_prev0;
    var rndNum2_prev1;
    var LIMIT = 12;
    for (var i=0;i<=LIMIT;i++) {
    (function(ind) {
        setTimeout(function(){
            //Player
            rndNum = Math.floor(Math.random() * 10) + 1;
            while (rndNum == rndNum_prev0 || rndNum == rndNum_prev1) { //track the last two dice rolls...
                rndNum = Math.floor(Math.random() * 10) + 1; //...and prevent the current roll from landing on them
            }
            rndNum_prev1 = rndNum_prev0; //fake random looks more random than real random: AKA the iPod Shuffle Dilemma
            rndNum_prev0 = rndNum;
            if(rndNum == 1){
            document.getElementById("img_green").src = "greenD10_1.png";
            }
            else if (rndNum == 2){
                document.getElementById("img_green").src = "greenD10_2.png";
            }
            else if (rndNum == 3){
                document.getElementById("img_green").src = "greenD10_3.png";
            }
            else if (rndNum == 4){
                document.getElementById("img_green").src = "greenD10_4.png";
            }
            else if (rndNum == 5){
                document.getElementById("img_green").src = "greenD10_5.png";
            }
            else if (rndNum == 6){
                document.getElementById("img_green").src = "greenD10_6.png";
            }
            else if (rndNum == 7){
                document.getElementById("img_green").src = "greenD10_7.png";
            }
            else if (rndNum == 8){
                document.getElementById("img_green").src = "greenD10_8.png";
            }
            else if (rndNum == 9){
                document.getElementById("img_green").src = "greenD10_9.png";
            }
            else {
                document.getElementById("img_green").src = "greenD10_10.png";
            }
            //Plants
            rndNum2 = Math.floor(Math.random() * 8) + 1;
            while (rndNum2 == rndNum2_prev0 || rndNum2 == rndNum2_prev1) { //track the last two dice rolls...
                rndNum2 = Math.floor(Math.random() * 8) + 1; //...and prevent the current roll from landing on them
            }
            rndNum2_prev1 = rndNum2_prev0; //fake random looks more random than real random: AKA the iPod Shuffle Dilemma
            rndNum2_prev0 = rndNum2;
            if(rndNum2 == 1){
            document.getElementById("img_red").src = "/IMG/dice/redD8_1.png";
            }
            else if (rndNum2 == 2){
                document.getElementById("img_red").src = "/IMG/dice/redD8_2.png";
            }
            else if (rndNum2 == 3){
                document.getElementById("img_red").src = "/IMG/dice/redD8_3.png";
            }
            else if (rndNum2 == 4){
                document.getElementById("img_red").src = "/IMG/dice/redD8_4.png";
            }
            else if (rndNum2 == 5){
                document.getElementById("img_red").src = "/IMG/dice/redD8_5.png";
            }
            else if (rndNum2 == 6){
                document.getElementById("img_red").src = "/IMG/dice/redD8_6.png";
            }
            else if (rndNum2 == 7){
                document.getElementById("img_red").src = "/IMG/dice/redD8_7.png";
            }
            else {
                document.getElementById("img_red").src = "/IMG/dice/redD8_8.png";
            }
            if(ind == LIMIT){
                if((rndNum - rndNum2) == 0){
                    document.getElementById("slash1").classList.add("hide");
                    document.getElementById("slash2").classList.add("hide");
                }
                else if((rndNum - rndNum2) < 0){
                    document.getElementById("slash2").classList.add("hide");
                    document.getElementById("slash1").classList.remove("hide");
                }
                else{
                    document.getElementById("slash1").classList.add("hide");
                    document.getElementById("slash2").classList.remove("hide");
                }
                let sizeChange = (rndNum - rndNum2).toString();
                localStorage.setItem("sizeChange", sizeChange);
                setTimeout(() =>{
                    document.location.href = "/QR-game_html/DiceGameShow.html";},2000);
            }
        }, (140 * ind)); //speed of rolls
    })(i);
    }
}
function DiceGameHerbivoreFruit(){
    //apply size modifier based on time period.
    //Scales with time period 1/2/3 0/1/2?
    //increase size by how much you win
    var rndNum;
    var rndNum_prev0;
    var rndNum_prev1;
    var rndNum2;
    var rndNum2_prev0;
    var rndNum2_prev1;
    var LIMIT = 12;
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
            document.getElementById("img_green").src = "/IMG/dice/greenD6_1.png";
            }
            else if (rndNum == 2){
                document.getElementById("img_green").src = "/IMG/dice/greenD6_2.png";
            }
            else if (rndNum == 3){
                document.getElementById("img_green").src = "/IMG/dice/greenD6_3.png";
            }
            else if (rndNum == 4){
                document.getElementById("img_green").src = "/IMG/dice/greenD6_4.png";
            }
            else if (rndNum == 5){
                document.getElementById("img_green").src = "/IMG/dice/greenD6_5.png";
            }
            else {
                document.getElementById("img_green").src = "/IMG/dice/greenD6_6.png";
            }
            //Prey
            rndNum2 = Math.floor(Math.random() * 6) + 1;
            while (rndNum2 == rndNum2_prev0 || rndNum2 == rndNum2_prev1) { //track the last two dice rolls...
                rndNum2 = Math.floor(Math.random() * 6) + 1; //...and prevent the current roll from landing on them
            }
            rndNum2_prev1 = rndNum2_prev0; //fake random looks more random than real random: AKA the iPod Shuffle Dilemma
            rndNum2_prev0 = rndNum2;
            if(rndNum2 == 1){
            document.getElementById("img_red").src = "/IMG/dice/redD6_1.png";
            }
            else if (rndNum2 == 2){
                document.getElementById("img_red").src = "/IMG/dice/redD6_2.png";
            }
            else if (rndNum2 == 3){
                document.getElementById("img_red").src = "/IMG/dice/redD6_3.png";
            }
            else if (rndNum2 == 4){
                document.getElementById("img_red").src = "/IMG/dice/redD6_4.png";
            }
            else if (rndNum2 == 5){
                document.getElementById("img_red").src = "/IMG/dice/redD6_5.png";
            }
            else{
                document.getElementById("img_red").src = "/IMG/dice/redD6_6.png";
            }
            if(ind == LIMIT){
                let youMod = document.getElementById("youMod");
                var feedingTitle = document.getElementById("feedingTitle");
                switch(feedingTitle){
                    case 'Permian':
                        rndNum += 0;
                        break
                    case 'Jurassic':
                        rndNum += 1;
                        youMod.innerHTML = "Bonus +1";
                        break
                    case 'Cretaceous':
                        rndNum += 2;
                        youMod.innerHTML = "Bonus +2";
                        break
                }
                if((rndNum - rndNum2) == 0){
                    document.getElementById("slash1").classList.add("hide");
                    document.getElementById("slash2").classList.add("hide");
                }
                else if((rndNum - rndNum2) < 0){
                    document.getElementById("slash2").classList.add("hide");
                    document.getElementById("slash1").classList.remove("hide");
                }
                else{
                    document.getElementById("slash1").classList.add("hide");
                    document.getElementById("slash2").classList.remove("hide");
                }
                let sizeChange = (rndNum - rndNum2).toString();
                localStorage.setItem("sizeChange", sizeChange);
                setTimeout(() =>{
                    document.location.href = "/QR-game_html/DiceGameShow.html";},2000);
            }
        }, (140 * ind)); //speed of rolls
    })(i);
    }
}
function DiceGameHerbivoreMassThorny(){
    var yourDie = localStorage.getItem("yourDie");
    var theirDie = localStorage.getItem("theirDie");
    var rndNum;
    var rndNum_prev0;
    var rndNum_prev1;
    var rndNum2;
    var rndNum2_prev0;
    var rndNum2_prev1;
    var LIMIT = 12;
    for (var i=0;i<=LIMIT;i++) {
    (function(ind) {
        setTimeout(function(){
            //Player
            rndNum = Math.floor(Math.random() * Number(yourDie)) + 1;
            while (rndNum == rndNum_prev0 || rndNum == rndNum_prev1) { //track the last two dice rolls...
                rndNum = Math.floor(Math.random() * Number(yourDie)) + 1; //...and prevent the current roll from landing on them
            }
            rndNum_prev1 = rndNum_prev0; //fake random looks more random than real random: AKA the iPod Shuffle Dilemma
            rndNum_prev0 = rndNum;
            if(rndNum == 1){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_1.png`;
            }
            else if (rndNum == 2){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_2.png`;
            }
            else if (rndNum == 3){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_3.png`;
            }
            else if (rndNum == 4){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_4.png`;
            }
            else if (rndNum == 5){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_5.png`;
            }
            else if (rndNum == 6){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_6.png`;
            }
            else if (rndNum == 7){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_7.png`;
            }
            else if (rndNum == 8){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_8.png`;
            }
            else if (rndNum == 9){
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_9.png`;
            }
            else {
                document.getElementById("img_green").src = `/IMG/dice/greenD${yourDie}_10.png`;
            }
            //Plants
            rndNum2 = Math.floor(Math.random() * Number(theirDie)) + 1;
            while (rndNum2 == rndNum2_prev0 || rndNum2 == rndNum2_prev1) { //track the last two dice rolls...
                rndNum2 = Math.floor(Math.random() * Number(theirDie)) + 1; //...and prevent the current roll from landing on them
            }
            rndNum2_prev1 = rndNum2_prev0; //fake random looks more random than real random: AKA the iPod Shuffle Dilemma
            rndNum2_prev0 = rndNum2;
            if(rndNum2 == 1){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_1.png`;
            }
            else if (rndNum2 == 2){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_2.png`;
            }
            else if (rndNum2 == 3){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_3.png`;
            }
            else if (rndNum2 == 4){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_4.png`;
            }
            else if (rndNum2 == 5){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_5.png`;
            }
            else if (rndNum2 == 6){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_6.png`;
            }
            else if (rndNum2 == 7){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_7.png`;
            }
            else if (rndNum2 == 8){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_8.png`;
            }
            else if (rndNum2 == 9){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_9.png`;
            }
            else if (rndNum2 == 10){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_10.png`;
            }
            else if (rndNum2 == 11){
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_11.png`;
            }
            else {
                document.getElementById("img_red").src = `/IMG/dice/redD${theirDie}_12.png`;
            }
            if(ind == LIMIT){
                if((rndNum - rndNum2) == 0){
                    document.getElementById("slash1").classList.add("hide");
                    document.getElementById("slash2").classList.add("hide");
                }
                else if((rndNum - rndNum2) < 0){
                    document.getElementById("slash2").classList.add("hide");
                    document.getElementById("slash1").classList.remove("hide");
                }
                else{
                    document.getElementById("slash1").classList.add("hide");
                    document.getElementById("slash2").classList.remove("hide");
                }
                let sizeChange = (rndNum - rndNum2);
                let yourLoss = localStorage.getItem("yourLoss");
                if(sizeChange <=0){//lower than 0 (loose)
                    if(sizeChange <=  Number(yourLoss)){
                        sizeChange = yourLoss;
                    }
                    else{
                        sizeChange = sizeChange.toString();
                    }
                }
                localStorage.setItem("sizeChange", sizeChange);
                setTimeout(() =>{
                    document.location.href = "/QR-game_html/DiceGameShow.html";},2000);
            }
        }, (140 * ind)); //speed of rolls
    })(i);
    }
}
function DiceGameHerbivoreMassToxic(){
    var rndNum;
    var rndNum_prev0;
    var rndNum_prev1;
    var rndNum2;
    var rndNum2_prev0;
    var rndNum2_prev1;
    var LIMIT = 12;
    for (var i=0;i<=LIMIT;i++) {
    (function(ind) {
        setTimeout(function(){
            //Player
            rndNum = Math.floor(Math.random() * 8) + 1;
            while (rndNum == rndNum_prev0 || rndNum == rndNum_prev1) { //track the last two dice rolls...
                rndNum = Math.floor(Math.random() * 8) + 1; //...and prevent the current roll from landing on them
            }
            rndNum_prev1 = rndNum_prev0; //fake random looks more random than real random: AKA the iPod Shuffle Dilemma
            rndNum_prev0 = rndNum;
            if(rndNum == 1){
            document.getElementById("img_green").src = "/IMG/dice/greenD8_1.png";
            }
            else if (rndNum == 2){
                document.getElementById("img_green").src = "/IMG/dice/greenD8_2.png";
            }
            else if (rndNum == 3){
                document.getElementById("img_green").src = "/IMG/dice/greenD8_3.png";
            }
            else if (rndNum == 4){
                document.getElementById("img_green").src = "/IMG/dice/greenD8_4.png";
            }
            else if (rndNum == 5){
                document.getElementById("img_green").src = "/IMG/dice/greenD8_5.png";
            }
            else if (rndNum == 6){
                document.getElementById("img_green").src = "/IMG/dice/greenD8_6.png";
            }
            else if (rndNum == 7){
                document.getElementById("img_green").src = "/IMG/dice/greenD8_7.png";
            }
            else {
                document.getElementById("img_green").src = "/IMG/dice/greenD8_8.png";
            }
            //Plants
            rndNum2 = Math.floor(Math.random() * 10) + 1;
            while (rndNum2 == rndNum2_prev0 || rndNum2 == rndNum2_prev1) { //track the last two dice rolls...
                rndNum2 = Math.floor(Math.random() * 10) + 1; //...and prevent the current roll from landing on them
            }
            rndNum2_prev1 = rndNum2_prev0; //fake random looks more random than real random: AKA the iPod Shuffle Dilemma
            rndNum2_prev0 = rndNum2;
            if(rndNum2 == 1){
            document.getElementById("img_red").src = "/IMG/dice/redD10_1.png";
            }
            else if (rndNum2 == 2){
                document.getElementById("img_red").src = "/IMG/dice/redD10_2.png";
            }
            else if (rndNum2 == 3){
                document.getElementById("img_red").src = "/IMG/dice/redD10_3.png";
            }
            else if (rndNum2 == 4){
                document.getElementById("img_red").src = "/IMG/dice/redD10_4.png";
            }
            else if (rndNum2 == 5){
                document.getElementById("img_red").src = "/IMG/dice/redD10_5.png";
            }
            else if (rndNum2 == 6){
                document.getElementById("img_red").src = "/IMG/dice/redD10_6.png";
            }
            else if (rndNum2 == 7){
                document.getElementById("img_red").src = "/IMG/dice/redD10_7.png";
            }
            else if (rndNum2 == 8){
                document.getElementById("img_red").src = "/IMG/dice/redD10_8.png";
            }
            else if (rndNum2 == 9){
                document.getElementById("img_red").src = "/IMG/dice/redD10_9.png";
            }
            else {
                document.getElementById("img_red").src = "/IMG/dice/redD10_10.png";
            }
            if(ind == LIMIT){
                if((rndNum - rndNum2) == 0){
                    document.getElementById("slash1").classList.add("hide");
                    document.getElementById("slash2").classList.add("hide");
                }
                else if((rndNum - rndNum2) < 0){
                    document.getElementById("slash2").classList.add("hide");
                    document.getElementById("slash1").classList.remove("hide");
                }
                else{
                    document.getElementById("slash1").classList.add("hide");
                    document.getElementById("slash2").classList.remove("hide");
                }
                let sizeChange = (rndNum - rndNum2);
                if(sizeChange <=0){//lower than 0 (loose)
                    if(sizeChange <= -8){//schwing magic
                        sizeChange = "-8";
                    }
                    else{
                        sizeChange = sizeChange.toString();
                    }
                }
                localStorage.setItem("sizeChange", sizeChange);
                setTimeout(() =>{
                    document.location.href = "/QR-game_html/DiceGameShow.html";},2000);
            }
        }, (140 * ind)); //speed of rolls
    })(i);
    }
}
function DiceGameHerbivoreMassFruit(){
    var rndNum;
    var rndNum_prev0;
    var rndNum_prev1;
    var rndNum2;
    var rndNum2_prev0;
    var rndNum2_prev1;
    var LIMIT = 12;
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
            document.getElementById("img_green").src = "/IMG/dice/greenD6_1.png";
            }
            else if (rndNum == 2){
                document.getElementById("img_green").src = "/IMG/dice/greenD6_2.png";
            }
            else if (rndNum == 3){
                document.getElementById("img_green").src = "/IMG/dice/greenD6_3.png";
            }
            else if (rndNum == 4){
                document.getElementById("img_green").src = "/IMG/dice/greenD6_4.png";
            }
            else if (rndNum == 5){
                document.getElementById("img_green").src = "/IMG/dice/greenD6_5.png";
            }
            else {
                document.getElementById("img_green").src = "/IMG/dice/greenD6_6.png";
            }
            //Plants
            rndNum2 = Math.floor(Math.random() * 8) + 1;
            while (rndNum2 == rndNum2_prev0 || rndNum2 == rndNum2_prev1) { //track the last two dice rolls...
                rndNum2 = Math.floor(Math.random() * 8) + 1; //...and prevent the current roll from landing on them
            }
            rndNum2_prev1 = rndNum2_prev0; //fake random looks more random than real random: AKA the iPod Shuffle Dilemma
            rndNum2_prev0 = rndNum2;
            if(rndNum2 == 1){
            document.getElementById("img_red").src = "/IMG/dice/redD8_1.png";
            }
            else if (rndNum2 == 2){
                document.getElementById("img_red").src = "/IMG/dice/redD8_2.png";
            }
            else if (rndNum2 == 3){
                document.getElementById("img_red").src = "/IMG/dice/redD8_3.png";
            }
            else if (rndNum2 == 4){
                document.getElementById("img_red").src = "/IMG/dice/redD8_4.png";
            }
            else if (rndNum2 == 5){
                document.getElementById("img_red").src = "/IMG/dice/redD8_5.png";
            }
            else if (rndNum2 == 6){
                document.getElementById("img_red").src = "/IMG/dice/redD8_6.png";
            }
            else if (rndNum2 == 7){
                document.getElementById("img_red").src = "/IMG/dice/redD8_7.png";
            }
            else{
                document.getElementById("img_red").src = "/IMG/dice/redD8_8.png";
            }
            if(ind == LIMIT){
                let youMod = document.getElementById("youMod");
                let themMod = document.getElementById("themMod");
                if(Number(sizeVar) > 0 && Number(sizeVar) <= 7){
                    rndNum += 1;
                    youMod.innerHTML = "Bonus +1";
                }
                else if(Number(sizeVar) >= 8 && Number(sizeVar) <= 14){
                    rndNum += 0;
                    youMod.innerHTML = "Bonus +0";
                }
                else if(Number(sizeVar) >= 15 && Number(sizeVar) <= 21){
                    rndNum -= 1;
                    youMod.innerHTML = "Bonus -1";
                }
                else if(Number(sizeVar) == 0){
                    document.location.href='./DeathPage.html';
                }
                else{
                    rndNum -= 2;
                }
                if((rndNum - rndNum2) == 0){
                    document.getElementById("slash1").classList.add("hide");
                    document.getElementById("slash2").classList.add("hide");
                }
                else if((rndNum - rndNum2) < 0){
                    document.getElementById("slash2").classList.add("hide");
                    document.getElementById("slash1").classList.remove("hide");
                }
                else{
                    document.getElementById("slash1").classList.add("hide");
                    document.getElementById("slash2").classList.remove("hide");
                }
                let sizeChange = (rndNum - rndNum2);
                if(sizeChange <=0){//lower than 0 (loose)
                    if(sizeChange <= -6){//schwing magic
                        sizeChange = "-6";
                    }
                    else{
                        sizeChange = sizeChange.toString();
                    }
                }
                localStorage.setItem("sizeChange", sizeChange);
                setTimeout(() =>{
                    document.location.href = "/QR-game_html/DiceGameShow.html";},2000);
            }
        }, (140 * ind)); //speed of rolls
    })(i);
    }
}