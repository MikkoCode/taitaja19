var selected;

var path = new Path();
path.strokeColor = 'black';
path.fillColor = 'blue';
path.add(new Point(30, 1000));
path.add(new Point(30, 25));
path.add(new Point(80, 25));
path.add(new Point(80, 1000));
path.closed = true;


path.onClick = function(event) {
    this.fillColor = 'red';
};