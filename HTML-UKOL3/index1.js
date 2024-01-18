let platno = document.createElement("canvas");
platno.width = 800;
platno.height = 600;
document.body.appendChild(platno);
let kontext = platno.getContext("2d");



kontext.fillstyle = "red";
kontext.srokeStyle = "black";
kontext.lineWidth = 10;
let x = 0;
let y = 0;
let draw = false;

platno.addEventListener("mousemove", (event) => {
    let rect = platno.getBoundingClientRect();
    let newX = event.clientX - rect.x;
    let newY = event.clientY - rect.y;
kontext.beginPath();
kontext.moveTo(x, y);
kontext.lineTo(newX, newY);
kontext.stroke();
x = newX;
y = newY;

    });
kontext.beginPath();
kontext.rect(100, 100, 200, 150)
kontext.fill();
kontext.stroke();

kontext.beginPath();
kontext.fillstyle = "red";
kontext.ellipse(100, 100, 20, 30, )
kontext.fill();
kontext.stroke();


class Platno{
    constructor(width, height) {

        this.platno = document.createdElement("canvas")
        this.platno.width = width
    }
       
}