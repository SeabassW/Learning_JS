var birds;

function preload() {
    data = loadJSON("birds.json");
}

function setup() {
    noCanvas();
    //createCanvas(400,400);
    ///var bird = data.birds[6].members[6];
    
    var birds = data.birds;
    
    for (var i = 0; i < birds.length; i++) {
        createElement('h1', birds[i].family);
        var members = birds[i].members;
        
        for (var j = 0; j < members.length; j++) {
            createDiv(members[j]);
        }
    }
    
}

