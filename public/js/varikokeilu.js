
var selected;
var stroke = 1;
var borderOpacity = 0.1;
var borderColor = '#00d120';


document.getElementById("resetoi").addEventListener("click", function(){
    $("#kkona").text("Paina väriä");
    floor.fillColor = '#d1d1d1';
    wall1.fillColor = '#d1d1d1';
    wall2.fillColor = '#d1d1d1';
});

var defaulttirectangle = new Rectangle(new Point(350, 25), new Point(375, 50));
var defaultti = new Path.Rectangle(defaulttirectangle);
defaultti.fillColor = '#d1d1d1';
defaultti.onClick = function(event) {
    $("#kkona").text("Vakioväri");
    if (selected != null){
        selected.fillColor = '#d1d1d1';
    }
};

var fiestarectangle = new Rectangle(new Point(350, 55), new Point(375, 80));
var fiesta = new Path.Rectangle(fiestarectangle);
fiesta.fillColor = '#DD4132';
fiesta.onClick = function(event) {
    $("#kkona").text("Fiesta");
    if (selected != null){
        selected.fillColor = '#DD4132';
    }
};
var jesterrectangle = new Rectangle(new Point(380, 55), new Point(405, 80));
var jester = new Path.Rectangle(jesterrectangle);
jester.fillColor = '#9E1030';
jester.onClick = function(event) {
    $("#kkona").text("Jester Red");
    if (selected != null){
        selected.fillColor = '#9E1030';
    }
};

var turmericrectangle = new Rectangle(new Point(410, 55), new Point(435, 80));
var turmeric = new Path.Rectangle(turmericrectangle);
turmeric.fillColor = '#FE840E';
turmeric.onClick = function(event) {
    $("#kkona").text("Turmeric");
    if (selected != null){
        selected.fillColor = '#FE840E';
    }
};
var coralrectangle = new Rectangle(new Point(350, 85), new Point(375, 110));
var coral = new Path.Rectangle(coralrectangle);
coral.fillColor = '#FF6F61';
coral.onClick = function(event) {
    $("#kkona").text("Living Coral");
    if (selected != null){
        selected.fillColor = '#FF6F61';
    }
};

var peacockrectangle = new Rectangle(new Point(380, 85), new Point(405, 110));
var peacock = new Path.Rectangle(peacockrectangle);
peacock.fillColor = '#C62168';
peacock.onClick = function(event) {
    $("#kkona").text("Pink Peacock");
    if (selected != null){
        selected.fillColor = '#C62168';
    }
};

var pepperrectangle = new Rectangle(new Point(410, 85), new Point(435, 110));
var pepper = new Path.Rectangle(pepperrectangle);
pepper.fillColor = '#8D9440';
pepper.onClick = function(event) {
    $("#kkona").text("Pepper Stem");
    if (selected != null){
        selected.fillColor = '#8D9440';
    }
};

var aspenrectangle = new Rectangle(new Point(350, 115), new Point(375, 140));
var aspen = new Path.Rectangle(aspenrectangle);
aspen.fillColor = '#FFD662';
aspen.onClick = function(event) {
    $("#kkona").text("Aspen Gold");
    if (selected != null){
        selected.fillColor = '#FFD662';
    }
};

var princessrectangle = new Rectangle(new Point(380, 115), new Point(405, 140));
var princess = new Path.Rectangle(princessrectangle);
princess.fillColor = '#00539C';
princess.onClick = function(event) {
    $("#kkona").text("Princess Blue");
    if (selected != null){
        selected.fillColor = '#00539C';
    }
};

var toffeerectangle = new Rectangle(new Point(410, 115), new Point(435, 140));
var toffee = new Path.Rectangle(toffeerectangle);
toffee.fillColor = '#755139';
toffee.onClick = function(event) {
    $("#kkona").text("Toffee");
    if (selected != null){
        selected.fillColor = '#755139';
    }
};

var mojitorectangle = new Rectangle(new Point(350, 145), new Point(375, 170));
var mojito = new Path.Rectangle(mojitorectangle);
mojito.fillColor = '#D69C2F';
mojito.onClick = function(event) {
    $("#kkona").text("Mango Mojito");
    if (selected != null){
        selected.fillColor = '#D69C2F';
    }
};

var mossrectangle = new Rectangle(new Point(380, 145), new Point(405, 170));
var moss = new Path.Rectangle(mossrectangle);
moss.fillColor = '#616247';
moss.onClick = function(event) {
    $("#kkona").text("Terrarium Moss");
    if (selected != null){
        selected.fillColor = '#616247';
    }
};

var lilacrectangle = new Rectangle(new Point(410, 145), new Point(435, 170));
var lilac = new Path.Rectangle(lilacrectangle);
lilac.fillColor = '#E8B5CE';
lilac.onClick = function(event) {
    $("#kkona").text("Sweet Lical");
    if (selected != null){
        selected.fillColor = '#E8B5CE';
    }
};

var soyrectangle = new Rectangle(new Point(350, 175), new Point(375, 200));
var soy = new Path.Rectangle(soyrectangle);
soy.fillColor = '#D2C29D';
soy.onClick = function(event) {
    $("#kkona").text("Soybean");
    if (selected != null){
        selected.fillColor = '#D2C29D';
    }
};

var eclipserectangle = new Rectangle(new Point(380, 175), new Point(405, 200));
var eclipse = new Path.Rectangle(eclipserectangle);
eclipse.fillColor = '#343148';
eclipse.onClick = function(event) {
    $("#kkona").text("Eclipse");
    if (selected != null){
        selected.fillColor = '#343148';
    }
};

var cornrectangle = new Rectangle(new Point(410, 175), new Point(435, 200));
var corn = new Path.Rectangle(cornrectangle);
corn.fillColor = '#F0EAD6';
corn.onClick = function(event) {
    $("#kkona").text("Sweet Corn");
    if (selected != null){
        selected.fillColor = '#F0EAD6';
    }
};

var graniterectangle = new Rectangle(new Point(350, 205), new Point(375, 230));
var granite = new Path.Rectangle(graniterectangle);
granite.fillColor = '#615550';
granite.onClick = function(event) {
    $("#kkona").text("Brown Granite");
    if (selected != null){
        selected.fillColor = '#615550';
    }
};


var floor = new Path();
floor.fillColor = '#d1d1d1';
floor.strokeColor = new Color(0, 0, 0, borderOpacity);
floor.strokeWidth = stroke;
floor.add(new Point(0, 300));
floor.add(new Point(150, 350));
floor.add(new Point(300, 300));
floor.add(new Point(150, 250));
floor.add(new Point(0, 300));
floor.closed = true;


floor.onClick = function(event) {
    unselectAll();
    if (selected === floor){
        selected = null;
        return;
    }
    selected = floor;
    selectPiece();
};



var wall1 = new Path();
wall1.fillColor = '#d1d1d1';
wall1.strokeColor = new Color(0, 0, 0, borderOpacity);
wall1.strokeWidth = stroke;
wall1.add(new Point(0, 300));
wall1.add(new Point(0, 75));
wall1.add(new Point(150, 25));
wall1.add(new Point(150, 250));
wall1.closed = true;


wall1.onClick = function(event) {
    unselectAll();
    if (selected === wall1){
        selected = null;
        return;
    }
    selected = wall1;
    selectPiece();
};

var wall2 = new Path();
wall2.fillColor = '#d1d1d1';
wall2.strokeColor = new Color(0, 0, 0, borderOpacity);
wall2.strokeWidth = stroke;
wall2.add(new Point(150, 25));
wall2.add(new Point(150, 250));
wall2.add(new Point(300, 300));
wall2.add(new Point(300, 75));
wall2.closed = true;

var ikkuna = new Path();
ikkuna.fillColor = '#80cbff';
ikkuna.strokeColor = new Color(0.7, 0.7, 0.7, 1);
ikkuna.strokeWidth = 3;
ikkuna.add(new Point(200, 125));
ikkuna.add(new Point(200, 200));
ikkuna.add(new Point(250, 218));
ikkuna.add(new Point(250, 142));
ikkuna.closed = true;

ikkuna.onClick = function(event) {
    unselectAll();
    if (selected === wall2){
        selected = null;
        return;
    }
    selected = wall2;
    selectPiece();
};

var tablefoot1 = new Path();
tablefoot1.fillColor = '#f9f9f9';
tablefoot1.strokeColor = new Color(0, 0, 0, borderOpacity);
tablefoot1.strokeWidth = stroke;
tablefoot1.add(new Point(45, 304));
tablefoot1.add(new Point(45, 254));
tablefoot1.add(new Point(48, 258));
tablefoot1.add(new Point(48, 308));
tablefoot1.add(new Point(48, 258));
tablefoot1.add(new Point(53, 255));
tablefoot1.add(new Point(53, 305));
tablefoot1.add(new Point(48, 308));
tablefoot1.closed = true;


var tablefoot2 = new Path();
tablefoot2.fillColor = '#f9f9f9';
tablefoot2.strokeColor = new Color(0, 0, 0, borderOpacity);
tablefoot2.strokeWidth = stroke;
tablefoot2.add(new Point(85, 314));
tablefoot2.add(new Point(85, 264));
tablefoot2.add(new Point(89, 269));
tablefoot2.add(new Point(89, 319));
tablefoot2.add(new Point(89, 269));
tablefoot2.add(new Point(93, 266));
tablefoot2.add(new Point(93, 315));
tablefoot2.add(new Point(89, 318));
tablefoot2.closed = true;


tablefoot2.onClick = function(event) {
    unselectAll();
    if (selected === floor){
        selected = null;
        return;
    }
    selected = floor;
    selectPiece();
};

var tablefoot3 = new Path();
tablefoot3.fillColor = '#f9f9f9';
tablefoot3.strokeColor = new Color(0, 0, 0, borderOpacity);
tablefoot3.strokeWidth = stroke;
tablefoot3.add(new Point(145, 291));
tablefoot3.add(new Point(145, 241));
tablefoot3.add(new Point(150, 243));
tablefoot3.add(new Point(150, 293));
tablefoot3.add(new Point(150, 243));
tablefoot3.add(new Point(152, 243));
tablefoot3.add(new Point(152, 291));
tablefoot3.add(new Point(150, 293));
tablefoot3.closed = true;

tablefoot3.onClick = function(event) {
    unselectAll();
    if (selected === floor){
        selected = null;
        return;
    }
    selected = floor;
    selectPiece();
};

var tablefoot4 = new Path();
tablefoot4.fillColor = '#f9f9f9';
tablefoot4.strokeColor = new Color(0, 0, 0, borderOpacity);
tablefoot4.strokeWidth = stroke;
tablefoot4.add(new Point(110, 280));
tablefoot4.add(new Point(110, 230));
tablefoot4.add(new Point(115, 235));
tablefoot4.add(new Point(115, 285));
tablefoot4.add(new Point(115, 235));
tablefoot4.add(new Point(120, 232));
tablefoot4.add(new Point(120, 282));
tablefoot4.add(new Point(115, 285));
tablefoot4.closed = true;

var table = new Path();
table.fillColor = '#efefef';
table.strokeColor = new Color(0, 0, 0, borderOpacity);
table.strokeWidth = stroke;
table.add(new Point(40, 255));
table.add(new Point(90, 270));
table.add(new Point(155, 245));
table.add(new Point(115, 230));
table.add(new Point(115, 230));
table.closed = true;


table.onClick = function(event) {
    unselectAll();
    if (selected === wall1){
        selected = null;
        return;
    }
    selected = wall1;
    selectPiece();
};




wall2.onClick = function(event) {
    unselectAll();
    if (selected === wall2){
        selected = null;
        return;
    }
    selected = wall2;
    selectPiece();
};


function selectPiece(){
    selected.strokeColor = borderColor;
}

function unselectAll(){
    wall1.strokeColor = new Color(0, 0, 0, borderOpacity);
    wall2.strokeColor = new Color(0, 0, 0, borderOpacity);
    floor.strokeColor = new Color(0, 0, 0, borderOpacity);
}




