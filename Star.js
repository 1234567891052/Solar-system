function Star(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.rate_of_expansion = 0.5;

    this.display = function(){
        fill("red");
        noStroke();
        ellipseMode(RADIUS);
        ellipse(this.x, this.y, this.width, this.height);
    }

    this.expand = function(){
        this.width += this.rate_of_expansion;
        this.height += this.rate_of_expansion;
    }

    this.IsTouching = function(object, offset){
        if(this.x - object.x < (object.width - offset) + this.width
        && object.x - this.x < (object.width - offset) + this.width
        && this.y - object.y < (object.height - offset) + this.height
        && object.y - this.y < (object.height - offset) + this.height){
            return true;
        }
        else{
            return false;
        }
    }
}