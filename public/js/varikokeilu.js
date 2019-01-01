
var selected;
var stroke = 1;
var borderOpacity = 0.1;


document.getElementById("resetoi").addEventListener("click", function(){
    floor.fillColor = '#d1d1d1';
    wall1.fillColor = '#d1d1d1';
    wall2.fillColor = '#d1d1d1';
});

var defaulttirectangle = new Rectangle(new Point(350, 25), new Point(375, 50));
var defaultti = new Path.Rectangle(defaulttirectangle);
defaultti.fillColor = '#d1d1d1';
defaultti.onClick = function(event) {
    if (selected != null){
        selected.fillColor = '#d1d1d1';
    }
};

var fiestarectangle = new Rectangle(new Point(350, 55), new Point(375, 80));
var fiesta = new Path.Rectangle(fiestarectangle);
fiesta.fillColor = '#DD4132';
fiesta.onClick = function(event) {
    if (selected != null){
        selected.fillColor = '#DD4132';
    }
};

var jesterrectangle = new Rectangle(new Point(380, 55), new Point(405, 80));
var jester = new Path.Rectangle(jesterrectangle);
jester.fillColor = '#9E1030';
jester.onClick = function(event) {
    if (selected != null){
        selected.fillColor = '#9E1030';
    }
};

var turmericrectangle = new Rectangle(new Point(410, 55), new Point(435, 80));
var turmeric = new Path.Rectangle(turmericrectangle);
turmeric.fillColor = '#FE840E';
turmeric.onClick = function(event) {
    if (selected != null){
        selected.fillColor = '#FE840E';
    }
};

var coralrectangle = new Rectangle(new Point(350, 85), new Point(375, 110));
var coral = new Path.Rectangle(coralrectangle);
coral.fillColor = '#FF6F61';
coral.onClick = function(event) {
    if (selected != null){
        selected.fillColor = '#FF6F61';
    }
};

var peacockrectangle = new Rectangle(new Point(380, 85), new Point(405, 110));
var peacock = new Path.Rectangle(peacockrectangle);
peacock.fillColor = '#C62168';
peacock.onClick = function(event) {
    if (selected != null){
        selected.fillColor = '#C62168';
    }
};

var pepperrectangle = new Rectangle(new Point(410, 85), new Point(435, 110));
var pepper = new Path.Rectangle(pepperrectangle);
pepper.fillColor = '#8D9440';
pepper.onClick = function(event) {
    if (selected != null){
        selected.fillColor = '#8D9440';
    }
};

var aspenrectangle = new Rectangle(new Point(350, 115), new Point(375, 140));
var aspen = new Path.Rectangle(aspenrectangle);
aspen.fillColor = '#FFD662';
aspen.onClick = function(event) {
    if (selected != null){
        selected.fillColor = '#FFD662';
    }
};

var princessrectangle = new Rectangle(new Point(380, 115), new Point(405, 140));
var princess = new Path.Rectangle(princessrectangle);
princess.fillColor = '#00539C';
princess.onClick = function(event) {
    if (selected != null){
        selected.fillColor = '#00539C';
    }
};

var toffeerectangle = new Rectangle(new Point(410, 115), new Point(435, 140));
var toffee = new Path.Rectangle(toffeerectangle);
toffee.fillColor = '#755139';
toffee.onClick = function(event) {
    if (selected != null){
        selected.fillColor = '#755139';
    }
};

var mojitorectangle = new Rectangle(new Point(350, 145), new Point(375, 170));
var mojito = new Path.Rectangle(mojitorectangle);
mojito.fillColor = '#D69C2F';
mojito.onClick = function(event) {
    if (selected != null){
        selected.fillColor = '#D69C2F';
    }
};

var mossrectangle = new Rectangle(new Point(380, 145), new Point(405, 170));
var moss = new Path.Rectangle(mossrectangle);
moss.fillColor = '#616247';
moss.onClick = function(event) {
    if (selected != null){
        selected.fillColor = '#616247';
    }
};

var lilacrectangle = new Rectangle(new Point(410, 145), new Point(435, 170));
var lilac = new Path.Rectangle(lilacrectangle);
lilac.fillColor = '#E8B5CE';
lilac.onClick = function(event) {
    if (selected != null){
        selected.fillColor = '#E8B5CE';
    }
};

var soyrectangle = new Rectangle(new Point(350, 175), new Point(375, 200));
var soy = new Path.Rectangle(soyrectangle);
soy.fillColor = '#D2C29D';
soy.onClick = function(event) {
    if (selected != null){
        selected.fillColor = '#D2C29D';
    }
};

var eclipserectangle = new Rectangle(new Point(380, 175), new Point(405, 200));
var eclipse = new Path.Rectangle(eclipserectangle);
eclipse.fillColor = '#343148';
eclipse.onClick = function(event) {
    if (selected != null){
        selected.fillColor = '#343148';
    }
};

var cornrectangle = new Rectangle(new Point(410, 175), new Point(435, 200));
var corn = new Path.Rectangle(cornrectangle);
corn.fillColor = '#F0EAD6';
corn.onClick = function(event) {
    if (selected != null){
        selected.fillColor = '#F0EAD6';
    }
};

var graniterectangle = new Rectangle(new Point(350, 205), new Point(375, 230));
var granite = new Path.Rectangle(graniterectangle);
granite.fillColor = '#615550';
granite.onClick = function(event) {
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
    selected.strokeColor = 'red';
}

function unselectAll(){
    wall1.strokeColor = new Color(0, 0, 0, borderOpacity);
    wall2.strokeColor = new Color(0, 0, 0, borderOpacity);
    floor.strokeColor = new Color(0, 0, 0, borderOpacity);
}




