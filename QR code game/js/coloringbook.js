"use strict";
customElements.define('jl-coloringbook', class extends HTMLElement 
{
    constructor() 
    {
        super();
        this.shadow = this.attachShadow({mode: 'open'}); 
        this.loadIcons();
        this.ImgSourcePage
    }

    init()
    {
        jQuery(this).css('display','block');
        //default colors
        this.paletteColors=[
            //color pallete as well.
                'rgb(255, 169, 169)',
                'rgb(235, 108, 130)',
                'rgb(128, 0, 0)',
                'rgb(233, 56, 65)',
                'rgb(241, 137, 45)',
                'rgb(255, 205, 157)',
                'rgb(255, 233, 71)',
                'rgb(90, 225, 80)',
                'rgb(30, 138, 76)',
                'rgb(77, 128, 201)',
                'rgb(5, 68, 148)',
                'rgb(125, 62, 191)',
                'rgb(81, 30, 67)',
                'rgb(130, 62, 44)',
                'rgb(174, 181, 189)',
                'rgb(16, 8, 32)',
                'white']; // last color is eraser
        this.dragging=false;
        this.paths = [];
        let me=this;
        this.slots=jQuery(`<div class="slots" style="display:none"><slot></slot></div>`).appendTo(this.shadowRoot)
        me.colorPageChange()
        me.drawTemplate()
    }

    connectedCallback()
    {
        let auto =jQuery(this).attr('autoinit');

        if (auto!=='0')
        {
            this.init();
        } 
    
    }

    loadIcons()
    {
        //load Material Icons.
        try
        {
            let material = new FontFace('Material Icons', 'url(https://fonts.gstatic.com/s/materialicons/v50/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf)');
            material.load().then(function(loaded_face) {
                document.fonts.add(loaded_face);
            }).catch(function(error) {
                // error occurred
            });
        } 
        catch(err)
        {

        }
    }
    drawTemplate()
    {
        jQuery(this).on('click', function(e) {e.preventDefault; e.stopPropagation()})
        jQuery(`
       
        <style>
            /*icons*/
            @font-face {
              font-family: 'Material Icons';
              font-style: normal;
              font-weight: 400;
              src: url(https://fonts.gstatic.com/s/materialicons/v50/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf) format('truetype');
            }
            .material-icons {
              font-family: 'Material Icons';
              font-weight: normal;
              font-style: normal;
              font-size: 18px;
              line-height: 1;
              letter-spacing: normal;
              text-transform: none;
              display: inline-block;
              white-space: nowrap;
              word-wrap: normal;
              direction: ltr;
            }
            .wrapper { width:100%; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}
            
            /*default theme*/
            .toolbar {
                z-index:100000;
                position: sticky;  position: -webkit-sticky; 
                top: 0;
                background-color: rgba(200,200,200,.1) 
            }
            .tools {
                display:flex;
                justify-content:flex-end;
                flex-wrap:wrap;
                max-width:100%;
            }
            .sizerTool {
                cursor:inherit;
                align-self:flex-start;
                width:150px;
            }
            .spacer {
                flex-basis:0;
                flex-grow:1;
            }
            .tools > * {margin:2px}
            .palette {
                display:inline-block;
            }
            .paletteColor {
                text-align:center; 
                height:22px;
                width:22px;
                margin:2px;
                border-radius:50%;
                box-sizing:border-box; 
                border:3px solid rgba(232,232,232,1); 
                display:inline-block; 
                overflow:hidden;
            }
            .paletteColor.selected {
                border-color:black;
                transform: scale(1.2);
            }
            .paletteColor.eraser { 
                border-color: red; 
                background-image: linear-gradient(135deg,white 43%, red 45%, red 55%, white 57%, white);
            }
            .canvasWrapper {
                display:inline-block;
                position: relative;
                width:100%
            }
            .canvas {
                z-index:1000;
                position:absolute;
                top:0;
                left:0;
                width:100%;
            }
            .activeCanvas {
                z-index:1002;
                position:absolute;
                top:0;
                left:0;
                width:100%;
            }
            .canvasBackgroundImage{
                width:100%;
                z-index:1001;
                position: relative;
            }
            .undoButton > i::after{ content: "undo"}
            .clearButton > i::after{ content: "clear"}
            .saveButton > i::after{ content: "save"}
        </style>`).appendTo(this.shadowRoot);
            if (jQuery(this).attr('css')) {
                jQuery(`<link href="${jQuery(this).attr('css')}" rel="stylesheet" type="text/css" />`).appendTo(this.shadowRoot);
            }       
            
            jQuery(`
            <div class="wrapper">
                <div class="imageNav"></div>
                <div class="toolbar">
                    <div class="tools">
                        <input class="sizerTool input" type="range" min="1" max="${jQuery(this).attr('maxbrushsize') || 32}">
                        <div class="spacer"></div>
                        <button class="undoButton button"><i class="material-icons"></i></button>
                        <button class="clearButton button"><i class="material-icons"></i></button>
                        <button class="saveButton  button"><i class="material-icons"></i></button>
                    </div>
                    <div class="palette"></div>
                </div>
                <div class="canvasWrapper"></div>
            </div>
        `).appendTo(this.shadowRoot);
        this.sizer=jQuery('.sizerTool',this.shadowRoot);
        this.wrapper=jQuery('.wrapper',this.shadowRoot);
        this.generatePalette();// Generates palette
        this.drawImageNav(); 
        let me = this;
        jQuery('.sizerTool',this.shadowRoot).on('input', function(){me.updateSize()});
        jQuery(`.undoButton`,this.shadowRoot).on('click', function(){me.paths.pop(); me.refresh();});
        jQuery(`.clearButton`,this.shadowRoot).on('click', function(){me.paths=[];localStorage.setItem('v2:'+jQuery(me).attr('src'),JSON.stringify(me.paths));me.refresh();});
        jQuery(`.saveButton`,this.shadowRoot).on('click', function() {me.save()});
    
    }

    generatePalette()
    {
        let paletteColors=[];
        let list= jQuery('slot',this.slots)[0].assignedElements();
        
        for (const x of list)
        {
            if (x.tagName=='I')
            {
                paletteColors.push(jQuery(x).attr('color'));
            }
        }
        if (paletteColors.length) this.paletteColors=paletteColors;
      
        let palette=jQuery(`.palette`,this.shadowRoot);
        let i=0;
        let className='';
        for (let value of this.paletteColors)
        {
            className='';
            if (i==(this.paletteColors.length-1)) className="eraser";
            let me=this;

            jQuery(`<div class="paletteColor ${className}  color${i}" style="background-color:${value};"><i class="material-icons"></i></div>`).data('color',i)
                .on('click',function(){
                me.color=jQuery(this).data('color');
                me.setCursor();
                jQuery(this).parent().children().removeClass('selected');
                jQuery(this).addClass('selected');
            }).appendTo(palette);
             i++;
        }
    }
    colorPageChange()
    {
        //change coloring page using stats 
        
        var habitatVar = localStorage.getItem("Habitat");
        var dietVar = localStorage.getItem("Diet");
        var legsVar = localStorage.getItem("Legs");
        var flightVar = localStorage.getItem("Flight");
        var sizeVar = localStorage.getItem("Size");
        if(Number(sizeVar) > 0 && Number(sizeVar) <= 7){
            var sizeVarString = 'Small';
        }
        else if(Number(sizeVar) >= 8 && Number(sizeVar) <= 14){
            var sizeVarString = 'Medium';
        }
        else if(Number(sizeVar) >= 15 && Number(sizeVar) <= 21){
            var sizeVarString = 'Large';
        }
        else if(Number(sizeVar) <= 0){
            document.location.href='./DeathPage.html';
        }
        else{
            var sizeVarString = 'Colossal';
        }
        localStorage.setItem("SizeWord", sizeVarString);
        var coloringPageStatsString = habitatVar + dietVar + legsVar + flightVar + sizeVarString;
        switch(coloringPageStatsString){
            case "WaterCarnivoreTwo-LegsFlightlessSmall":
                //Camarillasaurus
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                //this.ImgSourcePage = '/IMG/coloringPages/cpA_Camarillasaurus.png';
                document.getElementById('animalTitle').innerHTML = 'Camarillasaurus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Camarillasaurus.png'>");
                break;
            case 'WaterCarnivoreTwo-LegsFlightlessMedium':
                //Irritator
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Irritator.png';
                document.getElementById('animalTitle').innerHTML = 'Irritator';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Irritator.png'>");
                break;
            case 'WaterCarnivoreTwo-LegsFlightlessLarge':
                //Suchomimus
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Suchomimus.png';
                document.getElementById('animalTitle').innerHTML = 'Suchomimus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Suchomimus.png'>");
                break;
            case 'WaterCarnivoreTwo-LegsFlightlessColossal':
                //Spinosaurus
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Spinosaurus.png';
                document.getElementById('animalTitle').innerHTML = 'Spinosaurus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Spinosaurus.png'>");
                break;
            case 'WaterCarnivoreTwo-LegsFlightedSmall':
                //LeastBittern
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_LeastBittern.png';
                document.getElementById('animalTitle').innerHTML = 'Least Bittern';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_LeastBittern.png'>");
                break;
            case 'WaterCarnivoreTwo-LegsFlightedMedium':
                //SnowyEgret
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_SnowyEgret.png';
                document.getElementById('animalTitle').innerHTML = 'Snowy Egret';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_SnowyEgret.png'>");
                break;
            case 'WaterCarnivoreTwo-LegsFlightedLarge':
                //GreatEgret
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_GreatEgret.png';
                document.getElementById('animalTitle').innerHTML = 'Great Egret';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_GreatEgret.png'>");
                break;
            case 'WaterCarnivoreTwo-LegsFlightedColossal':
                //GreatBlueHeron
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = 'IMG/coloringPages/cpA_GreatBlueHeron.png';
                document.getElementById('animalTitle').innerHTML = 'Great Blue Heron';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='IMG/coloringPages/cpA_GreatBlueHeron.png'>");
                break;
            case "WaterCarnivoreFour-LegsFlightlessSmall":
                //Keichousaurus
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Keichousaurus.png';
                document.getElementById('animalTitle').innerHTML = 'Keichousaurus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Keichousaurus.png'>");
                break;
            case 'WaterCarnivoreFour-LegsFlightlessMedium':
                //Dallasaurus
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Dallasaurus.png';
                document.getElementById('animalTitle').innerHTML = 'Dallasaurus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Dallasaurus.png'>");
                break;
            case 'WaterCarnivoreFour-LegsFlightlessLarge':
                //Clidastes
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Clidastes.png';
                document.getElementById('animalTitle').innerHTML = 'Clidastes';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Clidastes.png'>");
                break;
            case 'WaterCarnivoreFour-LegsFlightlessColossal':
                //Tylosaurus
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Tylosaurus.png';
                document.getElementById('animalTitle').innerHTML = 'Tylosaurus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Tylosaurus.png'>");
                break;
            case 'WaterCarnivoreFour-LegsFlightedSmall':
                //Rhamphorhynchus
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Rhamphorhynchus.png';
                document.getElementById('animalTitle').innerHTML = 'Rhamphorhynchus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Rhamphorhynchus.png'>");
                break;
            case 'WaterCarnivoreFour-LegsFlightedMedium':
                //Pterodactylus
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Pterodactylus.png';
                document.getElementById('animalTitle').innerHTML = 'Pterodactylus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Pterodactylus.png'>");
                break;
            case 'WaterCarnivoreFour-LegsFlightedLarge':
                //Anhanguera
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Anhanguera.png';
                document.getElementById('animalTitle').innerHTML = 'Anhanguera';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Anhanguera.png'>");
                break;
            case 'WaterCarnivoreFour-LegsFlightedColossal':
                //Pteranodon
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Pteranodon.png';
                document.getElementById('animalTitle').innerHTML = 'Pteranodon';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Pteranodon.png'>");
                break;
            case 'WaterHerbivoreTwo-LegsFlightlessSmall':
                //Takahe
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Takahe.png';
                document.getElementById('animalTitle').innerHTML = 'Takahe';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Takahe.png'>");
                break;
            case 'WaterHerbivoreTwo-LegsFlightlessMedium':
                //Garganornis
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Garganornis.png';
                document.getElementById('animalTitle').innerHTML = 'Garganornis';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Garganornis.png'>");
                break;
            case 'WaterHerbivoreTwo-LegsFlightlessLarge':
                //Dromornis
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Dromornis.png';
                document.getElementById('animalTitle').innerHTML = 'Dromornis';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Dromornis.png'>");
                break;
            case 'WaterHerbivoreTwo-LegsFlightlessColossal':
                //Deinocheirus
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Deinocheirus.png';
                document.getElementById('animalTitle').innerHTML = 'Deinocheirus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Deinocheirus.png'>");
                break;
            case 'WaterHerbivoreTwo-LegsFlightedSmall':
                //SilverTeal
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_SilverTeal.png';
                document.getElementById('animalTitle').innerHTML = 'Silver Teal';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_SilverTeal.png'>");
    
                break;
            case 'WaterHerbivoreTwo-LegsFlightedMedium':
                //AmericanWigeon
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_AmericanWigeon.png';
                document.getElementById('animalTitle').innerHTML = 'American Wigeon';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_AmericanWigeon.png'>");
                break;
            case 'WaterHerbivoreTwo-LegsFlightedLarge':
                //SnowGoose
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_SnowGoose.png';
                document.getElementById('animalTitle').innerHTML = 'Snow Goose';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_SnowGoose.png'>");
                break;
            case 'WaterHerbivoreTwo-LegsFlightedColossal':
                //TundraSwan
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_TundraSwan.png';
                document.getElementById('animalTitle').innerHTML = 'Tundra Swan';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_TundraSwan.png'>");
                break;
            case 'WaterHerbivoreFour-LegsFlightlessSmall':
                //Ashoroa
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Ashoroa.png';
                document.getElementById('animalTitle').innerHTML = 'Ashoroa';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Ashoroa.png'>");
                break;
            case 'WaterHerbivoreFour-LegsFlightlessMedium':
                //Desmostylus
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Desmostylus.png';
                document.getElementById('animalTitle').innerHTML = 'Desmostylus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Desmostylus.png'>");
                break;
            case 'WaterHerbivoreFour-LegsFlightlessLarge':
                //Paleoparadoxia
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Paleoparadoxia.png';
                document.getElementById('animalTitle').innerHTML = 'Paleoparadoxia';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Paleoparadoxia.png'>");
                break;
            case 'WaterHerbivoreFour-LegsFlightlessColossal':
                //Behemotops
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Behemotops.png';
                document.getElementById('animalTitle').innerHTML = 'Behemotops';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Behemotops.png'>");
                break;
            case 'WaterHerbivoreFour-LegsFlightedSmall':
                //Tapejara 
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Tapejara.png';
                document.getElementById('animalTitle').innerHTML = 'Tapejara';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Tapejara.png'>");
                break;
            case 'WaterHerbivoreFour-LegsFlightedMedium':
                //Tupuxuara
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Tupuxuara.png';
                document.getElementById('animalTitle').innerHTML = 'Tupuxuara';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Tupuxuara.png'>");
                break;
            case 'WaterHerbivoreFour-LegsFlightedLarge':
                //Tupandactylus
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Tupandactylus.png';
                document.getElementById('animalTitle').innerHTML = 'Tupandactylus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Tupandactylus.png'>");
                break;
            case 'WaterHerbivoreFour-LegsFlightedColossal':
                //Bakonydraco
                document.getElementById('Water').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Bakonydraco.png';
                document.getElementById('animalTitle').innerHTML = 'Bakonydraco';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Bakonydraco.png'>");
                break;
            case 'LandCarnivoreTwo-LegsFlightlessSmall':
                //Compsognathus
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Compsognathus.png';
                document.getElementById('animalTitle').innerHTML = 'Compsognathus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Compsognathus.png'>");
                break;
            case 'LandCarnivoreTwo-LegsFlightlessMedium':
                //Tanycolagreus
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Tanycolagreus.png';
                document.getElementById('animalTitle').innerHTML = 'Tanycolagreus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Tanycolagreus.png'>");
                break;
            case 'LandCarnivoreTwo-LegsFlightlessLarge':
                //Gorgosaurus
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Gorgosaurus.png';
                document.getElementById('animalTitle').innerHTML = 'Gorgosaurus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Gorgosaurus.png'>");
                break;
            case 'LandCarnivoreTwo-LegsFlightlessColossal':
                //Trex
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Trex.png';
                document.getElementById('animalTitle').innerHTML = 'Tyrannosaurus rex';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Trex.png'>");
                break;
            case 'LandCarnivoreTwo-LegsFlightedSmall':
                //WhitetailedKite
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_WhitetailedKite.png';
                document.getElementById('animalTitle').innerHTML = 'White-tailed Kite';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_WhitetailedKite.png'>");
                break;
            case 'LandCarnivoreTwo-LegsFlightedMedium':
                //NorthernGoshawk
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_NorthernGoshawk.png';
                document.getElementById('animalTitle').innerHTML = 'Northern Goshawk';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_NorthernGoshawk.png'>");
                break;
            case 'LandCarnivoreTwo-LegsFlightedLarge':
                //GoldenEagle
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_GoldenEagle.png';
                document.getElementById('animalTitle').innerHTML = 'Golden Eagle';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_GoldenEagle.png'>");
                break;
            case 'LandCarnivoreTwo-LegsFlightedColossal':
                //WoodwardsEagle
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_WoodwardsEagle.png';
                document.getElementById('animalTitle').innerHTML = "Woodward's Eagle";
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_WoodwardsEagle.png'>");
                break;
            case 'LandCarnivoreFour-LegsFlightlessSmall':
                //Hoplophoneus
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Hoplophoneus.png';
                document.getElementById('animalTitle').innerHTML = 'Hoplophoneus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Hoplophoneus.png'>");
                break;
            case 'LandCarnivoreFour-LegsFlightlessMedium':
                //Eusmilus
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Eusmilus.png';
                document.getElementById('animalTitle').innerHTML = 'Eusmilus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Eusmilus.png'>");
                break;
            case 'LandCarnivoreFour-LegsFlightlessLarge':
                //Xenosmilusdocument.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Xenosmilus.png';
                document.getElementById('animalTitle').innerHTML = 'Xenosmilus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Xenosmilus.png'>");
                break;
            case 'LandCarnivoreFour-LegsFlightlessColossal':
                //Smilodon
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Smilodon.png';
                document.getElementById('animalTitle').innerHTML = 'Smilodon';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Smilodon.png'>");
                break;
            case 'LandCarnivoreFour-LegsFlightedSmall':
                //Anurognathus
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Anurognathus.png';
                document.getElementById('animalTitle').innerHTML = 'Anurognathus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Anurognathus.png'>");
                break;
            case 'LandCarnivoreFour-LegsFlightedMedium':
                //Dimorphodon
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Dimorphodon.png';
                document.getElementById('animalTitle').innerHTML = 'Dimorphodon';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Dimorphodon.png'>");
                break;
            case 'LandCarnivoreFour-LegsFlightedLarge':
                //Harpactognathus
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Harpactognathus.png';
                document.getElementById('animalTitle').innerHTML = 'Harpactognathus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Harpactognathus.png'>");
                break;
            case 'LandCarnivoreFour-LegsFlightedColossal':
                //Quetzalcoatlus
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Carnivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Quetzalcoatlus.png';
                document.getElementById('animalTitle').innerHTML = 'Quetzalcoatlus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Quetzalcoatlus.png'>");
                break;
            case 'LandHerbivoreTwo-LegsFlightlessSmall':
                //Thescelosaurus
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Thescelosaurus.png';
                document.getElementById('animalTitle').innerHTML = 'Thescelosaurus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Thescelosaurus.png'>");
                break;
            case 'LandHerbivoreTwo-LegsFlightlessMedium':
                //Camptosaurus
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Camptosaurus.png';
                document.getElementById('animalTitle').innerHTML = 'Camptosaurus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Camptosaurus.png'>");
                break;
            case 'LandHerbivoreTwo-LegsFlightlessLarge':
                //Iguanodon
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Iguanodon.png';
                document.getElementById('animalTitle').innerHTML = 'Iguanodon';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Iguanodon.png'>");
                break;
            case 'LandHerbivoreTwo-LegsFlightlessColossal':
                //Edmontosaurus
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Edmontosaurus.png';
                document.getElementById('animalTitle').innerHTML = 'Edmontosaurus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Edmontosaurus.png'>");
                break;
            case 'LandHerbivoreTwo-LegsFlightedSmall':
                //CalliopeHummingbird
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_CalliopeHummingbird.png';
                document.getElementById('animalTitle').innerHTML = 'Calliope Hummingbird';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_CalliopeHummingbird.png'>");
                break;
            case 'LandHerbivoreTwo-LegsFlightedMedium':
                //ClarksNutcracker
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_ClarksNutcracker.png';
                document.getElementById('animalTitle').innerHTML = "Clark's Nutcracker";
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_ClarksNutcracker.png'>");
                break;
            case 'LandHerbivoreTwo-LegsFlightedLarge':
                //BroadbilledParrot
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_BroadbilledParrot.png';
                document.getElementById('animalTitle').innerHTML = 'Broadbilled Parrot';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_BroadbilledParrot.png'>");
                break;
            case 'LandHerbivoreTwo-LegsFlightedColossal':
                //Hoatzin
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Two-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Hoatzin.png';
                document.getElementById('animalTitle').innerHTML = 'Hoatzin';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Hoatzin.png'>");
                break;
            case 'LandHerbivoreFour-LegsFlightlessSmall':
                //Protoceratops
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Protoceratops.png';
                document.getElementById('animalTitle').innerHTML = 'Protoceratops';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Protoceratops.png'>");
                break;
            case 'LandHerbivoreFour-LegsFlightlessMedium':
                //Zuniceratops
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Zuniceratops.png';
                document.getElementById('animalTitle').innerHTML = 'Zuniceratops';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Zuniceratops.png'>");
                break;
            case 'LandHerbivoreFour-LegsFlightlessLarge':
                //Chasmosaurus
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Chasmosaurus.png';
                document.getElementById('animalTitle').innerHTML = 'Chasmosaurus';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Chasmosaurus.png'>");
                break;
            case 'LandHerbivoreFour-LegsFlightlessColossal':
                //Triceratops
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flightless').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_Triceratops.png';
                document.getElementById('animalTitle').innerHTML = 'Triceratops';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_Triceratops.png'>");
                break;
            case 'LandHerbivoreFour-LegsFlightedSmall':
                //CaveNectarBat
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_CaveNectarBat.png';
                document.getElementById('animalTitle').innerHTML = 'Cave Nectar Bat';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_CaveNectarBat.png'>");
                break;
            case 'LandHerbivoreFour-LegsFlightedMedium':
                //IslandFlyingFox
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_IslandFlyingFox.png';
                document.getElementById('animalTitle').innerHTML = 'Island Flying Fox';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_IslandFlyingFox.png'>");
                break;
            case 'LandHerbivoreFour-LegsFlightedLarge':
                //HammerheadedFruitBat
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_HammerheadedFruitBat.png';
                document.getElementById('animalTitle').innerHTML = 'Hammer-headed Fruit Bat';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_HammerheadedFruitBat.png'>");
                break;
            case 'LandHerbivoreFour-LegsFlightedColossal':
                //GoldencappedFruitBat
                document.getElementById('Land').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Herbivore').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Four-Legs').style = "background-image: url('/IMG/circled.png')";
                document.getElementById('Flighted').style = "background-image: url('/IMG/circled.png')";
                this.ImgSourcePage = '/IMG/coloringPages/cpA_GoldencappedFruitBat.png';
                document.getElementById('animalTitle').innerHTML = 'Golden-capped Fruit Bat';
                $("#coloringPagePicture").replaceWith("<img id='coloringPagePicture' src='/IMG/coloringPages/cpA_GoldencappedFruitBat.png'>");
                break;
        }
    }
    drawImageNav()
    {
        this.images=[];
        let list= jQuery('slot',this.slots)[0].assignedElements();
        this.images.push(jQuery(list).attr('data-lazy-src')||jQuery(list).attr('src'));
        let me = this;
        let imageNav=jQuery('.imageNav',this.shadowRoot);
        jQuery(imageNav).empty();
        //imageNav=jQuery(`<div style="max-width:100%">`);
        let sel=0;
        let i=0;
        if (jQuery(this).attr('randomize')) sel = Math.floor(Math.random()*this.images.length);
        this.selectImage(jQuery(`<img src="${this.images}" />`));
    }
    drawCanvas() //IMG tag
    {
        let me =this;
        jQuery(this).attr('src',this.img.attr('src'));
        let canvasWrapper=jQuery('.canvasWrapper',this.shadowRoot).empty().append(this.img);
        this.canvas=jQuery(`<canvas class="canvas"/>`).appendTo(canvasWrapper);
        this.activeCanvas=jQuery(`<canvas class="activeCanvas"/>`).appendTo(canvasWrapper);
        
        this.ctx=this.canvas[0].getContext('2d');
        this.activeCtx=this.activeCanvas[0].getContext('2d');
        this.img.off('load').on('load', function() {
            me.sizeCanvas();
            let x = window.localStorage.getItem('v2:'+jQuery(this).attr('src'));
            if (x){
                me.paths=JSON.parse(x);
                me.refresh();
            } else
            {
                me.paths=[];
                me.refresh();
            }
            if (!me.color)
            {
                jQuery('.paletteColor.color1',me.shadowRoot).trigger('click');
            }
        });
        
        this.activeCanvas.on('mousedown', function(e) {me.mouseDown(e);})
            .on('mouseup', function(e) {me.mouseUp(e);})
            .on('mousemove', function(e) {me.mouseMove(e);})
            .on('touchstart', function(e) {return me.touchStart(e);})
            .on('touchend', function(e) {return me.touchEnd(e);})
            .on('touchmove', function(e) {return me.touchMove(e);})

    }

    selectImage(sourceImg)//IMG tag
    {
        //change this function for sourceIMG
        this.src=jQuery(sourceImg).attr('src');
        this.img=jQuery(`<img class="canvasBackgroundImage" src="${this.src}">`)
        jQuery(sourceImg).siblings().removeClass('selected')
        jQuery(sourceImg).addClass('selected');
        this.drawCanvas();
    }

    touchStart(oe)
    {   
        let e= oe.originalEvent;
        
        let touch = e.touches[0];
        e.clientX=touch.clientX;
        e.clientY=touch.clientY;
        this.mouseDown(e)

    }
    touchEnd(oe)
    {

        let e=oe.originalEvent;
        this.mouseUp(e);

    }
    touchMove(oe)
    {   
        let e= oe.originalEvent;
        if (e.touches.length >=2) return true; // allow 2 finger gestures through
        e.preventDefault();
        e.stopPropagation();
        
        let touch = e.touches[0];

        e.clientX=touch.clientX;
        e.clientY=touch.clientY;
        this.mouseMove(e)
    }
    loadImage(url) {
        return new  Promise(resolve => {
            const image = new Image();
            image.addEventListener('load', () => {
                resolve(image);
            });
            image.src = url; 
        });
    }
    async getImageData()//IMG tag
    {
        let height=this.img[0].naturalHeight;
        let width=this.img[0].naturalWidth
        let cv = jQuery(`<canvas height="${height}" width="${width}" />`)[0];
        let c = cv.getContext('2d');
        c.fillStyle = "white";
        c.fillRect(0, 0, width, height);
        let i = await this.loadImage(this.canvas[0].toDataURL('image/png'));
        c.drawImage(i,0,0);
        c.drawImage(this.img[0],0,0,width,height);
        return cv.toDataURL('image/png');
    }

    async save()
    {
        //NEED TO ADJUST SAVE SETTINGS
        let link=await this.getImageData();

        let x =jQuery(`<a download="ColoringBook.png">Download</a>`).attr('href',link).appendTo(this.wrapper)
        x[0].click();
        x.remove();

    }

    sizeCanvas()//IMG tag
    {
        this.canvasPos = this.canvas[0].getBoundingClientRect();
        this.canvas.attr('height',this.img[0].naturalHeight);
        this.canvas.attr('width',this.img[0].naturalWidth);
        this.activeCanvas.attr('height',this.img[0].naturalHeight);
        this.activeCanvas.attr('width',this.img[0].naturalWidth);
    }

    getCursorPosition(e) 
    {
        this.canvasPos = this.canvas[0].getBoundingClientRect();
        let adj=this.canvas.attr('width')/this.canvas.width();
        return {
            x: (e.clientX - this.canvasPos.left)*adj,
            y: (e.clientY - this.canvasPos.top)*adj,
        };
    }   

    mouseDown(e)
    {
        let pos = this.getCursorPosition(e);               
        this.dragging = true;
        pos.c=this.color;
        pos.s=this.sizer.val(); ///cursor drawing size
        this.paths.push([pos]);
        this.setCursor();
    }

    mouseUp(e) 
    {
        this.commitActivePath();
        if (this.dragging) localStorage.setItem('v2:'+jQuery(this).attr('src'),JSON.stringify(this.paths));
        this.dragging = false;
    }

    mouseMove(e)
    {
        let pos;
         if (!this.dragging) return;

        pos = this.getCursorPosition(e);
        this.paths[this.paths.length-1].push(pos); // Append point tu current path.
        this.drawActivePath();
    }

    commitActivePath()
    {
        this.drawActivePath(true);
    }

    clearActivePath()//IMG tag
    {
        let height=this.img[0].naturalHeight;
        let width=this.img[0].naturalWidth;
        let ctx=this.activeCtx;
        ctx.clearRect(0, 0, width, height);
    }

    drawActivePath(saveToCanvas=false) //
    {
        this.clearActivePath();
        let ctx;
        let path=this.paths[this.paths.length-1];
        if (saveToCanvas==true || path[0].c==(this.paletteColors.length-1)) {ctx=this.ctx;} 
            else {ctx=this.activeCtx;}

        if (!path[0].c) {  path[0].c=0;}
            ctx.strokeStyle = `${this.paletteColors[path[0].c]}`;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.lineWidth = path[0].s * (this.img[0].naturalWidth/this.img.width());
            if (path[0].c==(this.paletteColors.length-1)) 
            {
                /*eraser*/
                ctx.globalCompositeOperation="destination-out";
                ctx.strokeStyle = `white`;
            } else  ctx.globalCompositeOperation="source-over";
            ctx.beginPath();
            ctx.moveTo(path[0].x, path[0].y);
            for (let j=1; j<path.length; ++j)
                ctx.lineTo(path[j].x, path[j].y);
            ctx.stroke();
    }

    refresh()//IMG tag
    {
        this.clearActivePath()
        let height=this.img[0].naturalHeight;
        let width=this.img[0].naturalWidth;
        let ctx=this.ctx;
        ctx.clearRect(0, 0, width, height);
        for (let i=0; i<this.paths.length; ++i) {
            let path = this.paths[i];
            if (path.length<1) continue;
            if (!path[0].c) { path[0].c=0;}
            ctx.strokeStyle = `${this.paletteColors[path[0].c]}`;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.lineWidth = path[0].s * (this.img[0].naturalWidth/this.img.width());
            if (path[0].c==(this.paletteColors.length-1)) 
            {
                /* eraser*/
                ctx.globalCompositeOperation="destination-out";
                ctx.strokeStyle = `white`;
            }
            else ctx.globalCompositeOperation="source-over";
            ctx.beginPath();
            ctx.moveTo(path[0].x, path[0].y);
            for (let j=1; j<path.length; ++j)
                ctx.lineTo(path[j].x, path[j].y);
            ctx.stroke();
        }
    }
    updateSize()
    {
        this.setCursor();
    }
    setCursor()
    {
        let size = this.sizer.val(); // This sets visible cursor size
        if (size < 2) size=2;
        if (size > 32) size=32;
        let canvas=jQuery(`<canvas height="32" width="32"/>`);
        let context = canvas[0].getContext('2d');

        context.beginPath();
        context.arc(16, 16, size/2, 0, 2 * Math.PI, false);
        context.fillStyle = this.paletteColors[this.color];
        context.fill();
        context.strokeStyle='black'
        context.strokeWidth=2;
        context.stroke();
        context.strokeStyle='rgba(0, 0, 0, 0.5)';
        context.strokeWidth=2;
        context.beginPath();
        context.moveTo(0,16)
        context.lineTo(32,16)
        context.moveTo(16,0)
        context.lineTo(16,32)
        context.stroke();
        let url=canvas[0].toDataURL();
        this.wrapper.css('cursor', `url(${url}) 16 16, pointer`);
    }
});
