var star;
var planet, satellite;

var dist_satellite_planet = 50;
var angle_satellite = 0;
var satellite_speed = 0.1;

var dist_planet_sun = 150;
var angle_planet = 0;
var planet_speed = 0.01;

function setup(){
    createCanvas(700, 600);
    star = new Star(width/2, height/2, 20, 20);
}

function draw(){
    background("black");
    star.display();
    star.expand();

    var planetx = star.x + dist_planet_sun * cos(angle_planet);
    var planety = star.y + dist_planet_sun * sin(angle_planet);
    planet = new Planet(planetx, planety, 10, 10, 255, 255, 0);
    planet.display();
    angle_planet += planet_speed;

    var satellitex = planet.x + dist_satellite_planet * cos(angle_satellite);
    var satellitey = planet.y + dist_satellite_planet * sin(angle_satellite);
    satellite = new Satellite(satellitex, satellitey, 6, 6, 255, 255, 255);
    satellite.display();
    angle_satellite += satellite_speed;

    if(star.IsTouching(planet, 50) === true){
        fill(255, 0, 0, 255);
        noStroke();
        ellipse(planetx, planety, 10, 10);
    }

    if(star.IsTouching(satellite, 5) === true){
        fill(255, 0, 0, 255);
        noStroke();
        ellipse(satellitex, satellitey, 6, 6);
    }
}