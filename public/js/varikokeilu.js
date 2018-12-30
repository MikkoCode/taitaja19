var canvas = document.querySelector('canvas'),
    ctx    = canvas.getContext('2d');
fitToContainer(canvas);

ctx.fillStyle='yellow';
for (var i=0;i<5;++i) ctx.fillRect(i*18+2,2,16,16);

function fitToContainer(canvas){
    canvas.style.width='100%';
    canvas.style.height='100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

var selected;

var wall1 = new Path();
wall1.strokeColor = 'black';
wall1.fillColor = 'blue';
wall1.add(new Point(0, 300));
wall1.add(new Point(0, 75));
wall1.add(new Point(150, 25));
wall1.add(new Point(150, 250));
wall1.closed = true;


wall1.onClick = function(event) {
    this.fillColor = 'red';
};

var wall2 = new Path();
wall2.strokeColor = 'black';
wall2.fillColor = 'blue';
wall2.add(new Point(150, 25));
wall2.add(new Point(150, 250));
wall2.add(new Point(300, 300));
wall2.add(new Point(300, 75));
wall2.closed = true;


wall2.onClick = function(event) {
    this.fillColor = 'red';
};

var floor = new Path();
floor.strokeColor = 'black';
floor.fillColor = 'blue';
floor.add(new Point(0, 300));
floor.add(new Point(150, 350));
floor.add(new Point(300, 300));
floor.add(new Point(150, 250));
floor.add(new Point(0, 300));
floor.closed = true;


floor.onClick = function(event) {
    this.fillColor = 'red';
};