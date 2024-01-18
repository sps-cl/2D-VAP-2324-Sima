
let platno = document.getElementById("platno")
let kontext = platno.getContext("2d");


platno.addEventListener("mousemove", (event) => {
    let rect = platno.getBoundingClientRect();
    let stredKruhuX = event.clientX - stredKruhuX;
    let stredKruhuY = event.clientY - stredKruhuY;
});
platno.width = 800;
platno.height = 600;
document.body.appendChild(platno);

let stredKruhuX = 50;
let stredKruhuY = 50;




function nakresli () {
kontext.clearRect(0, 0, 800, 600);
kontext.beginPath(stredKruhuX, stredKruhuY)
kontext.arc(0, 0, width, height)
kontext.fill()
kontext.closePath()
kontext.fillRect(100, 100)
requestAnimationFrame(nakresli)
}
nakresli