function Planet(x, y, width, height, red, green, blue){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.red = red;
    this.green = green;
    this.blue = blue;
    
    this.display = function(){
        fill(this.red, this.green, this.blue);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(this.x, this.y, this.width, this.height);
    }
}