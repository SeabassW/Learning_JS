var data;
var pkmn;
var sel1;
var sel2;
var button;
//var listNames = [];

function preload() {
    data = loadJSON("pkmn.json");

    
    //console.log(data.source);
}

function setup() {
    createCanvas(400,200);
    pkmn = data.pokemon;
    
    /*
    for (var i = 0; i < pkmn.length; i++) {
        listNames.append(pkmn[i].name);
    }
    
    //console.log(data.source);
    
    
    textAlign(CENTER);
    background(235);
    sel1 = createSelect();
    sel1.position(20,50);
    sel1.option('Ekans');
    sel1.option('Growlithe');
    sel1.changed(mySelectEvent);
    
    textSize(24);
    text("vs", 140, 57);
    
    sel2 = createSelect();
    sel2.position(200,50);
    sel2.option('Ivysaur');
    sel2.option('Dewgong');
    sel2.changed(mySelectEvent);
    
    button = createButton("FIGHT!");
    button.position(320, 50);
    button.mousePressed(fight);
    
    */
    
    
    
    for (var i = 0; i < pkmn.length; i++) {
        createElement('h2',pkmn[i].name);
        
        switch(pkmn[i].type1_id) {
            case "1":
                createDiv("Normal");
                break;
            case "2":
                createDiv("Fighting");
                break;
            case "3":
                createDiv("Flying");
                break;
            case "4":
                createDiv("Poison");
                break;
            case "5":
                createDiv("Ground");
                break;
            case "6":
                createDiv("Rock");
                break;
            case "7":
                createDiv("Bug");
                break;
            case "8":
                createDiv("Ghost");
                break;
            case "9":
                createDiv("Steel");
                break;
            case "10":
                createDiv("Fire");
                break;
            case "11":
                createDiv("Water");
                break;
            case "12":
                createDiv("Grass");
                break;
            case "13":
                createDiv("Electric");
                break;
            case "14":
                createDiv("Psychic");
                break;
            case "15":
                createDiv("Ice");
                break;
            case "16":
                createDiv("Dragon");
                break;
            case "17":
                createDiv("Dark");
                break;
            default:
                createDiv("Unknown Type");
        }
        
        if (pkmn[i].type2_id) {
            switch(pkmn[i].type2_id) {
                case "1":
                    createDiv("Normal");
                    break;
                case "2":
                    createDiv("Fighting");
                    break;
                case "3":
                    createDiv("Flying");
                    break;
                case "4":
                    createDiv("Poison");
                    break;
                case "5":
                    createDiv("Ground");
                    break;
                case "6":
                    createDiv("Rock");
                    break;
                case "7":
                    createDiv("Bug");
                    break;
                case "8":
                    createDiv("Ghost");
                    break;
                case "9":
                    createDiv("Steel");
                    break;
                case "10":
                    createDiv("Fire");
                    break;
                case "11":
                    createDiv("Water");
                    break;
                case "12":
                    createDiv("Grass");
                    break;
                case "13":
                    createDiv("Electric");
                    break;
                case "14":
                    createDiv("Psychic");
                    break;
                case "15":
                    createDiv("Ice");
                    break;
                case "16":
                    createDiv("Dragon");
                    break;
                case "17":
                    createDiv("Dark");
                    break;
                default:
                    createDiv("Unknown Type");
            }
        }
    } 
} 

/*
function mySelectEvent() {
    var item1 = sel1.value();
    var item2 = sel2.value();
}

function fight() {
    textSize(32);
    text(item1 + " vs " + item2, 175,150);
} 
*/