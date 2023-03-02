

document.getElementById("stayBtn").onclick = function () {
    location.href = "./coloring_page.html"
};
function myFunction(){
    var sizeStat = "5";
    var habitatStat = "Land";
    var typeStat = "Flightless";
    var dietStat = "Herbivore";
    var stanceStat = "Two-leg";
    document.getElementById("sizeStat").innerHTML = sizeStat;
    document.getElementById("habitatStat").innerHTML = habitatStat;
    document.getElementById("typeStat").innerHTML = typeStat;
    document.getElementById("dietStat").innerHTML = dietStat;
    document.getElementById("stanceStat").innerHTML = stanceStat;
}
let sizeOfAnimal = 0;



/*let contentSections = [{nav: "walk", ref:"", refName: ""}, 
{nav:"flight", ref: "", refName: ""},
{nav: "swim", ref:"", refName: ""}];
let navElements=document.querySelectorAll('nav > button');

for (let i = 0; i < navElements.length; i++) {
    navElements[i].addEventListener("click", function(ev){
        for (let i=0; i< navElements.length; i++){
            navElements[i].classList.remove("selected");
        }
        let el = ev.currentTarget;
        el.classList.add('selected');
        for(sections of contentSections){
            let el=document.getElementById(`${sections.nav}Section`);
            el.classList.remove("show");
            el.classList.add("hide");
        }
        let name = `${el.name}Section`
        let showEl=document.getElementById(name);
        showEl.classList.add('show');
        showEl.classList.remove("hide");
        //document.getElementById("Footer").href = `${contentSections[i].ref}`
        //document.getElementById("Footer").innerHTML = `${contentSections[i].refName}`
    });
}*/