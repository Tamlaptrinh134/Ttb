const canvas = document.getElementById("canvas"); 
const ctx = canvas.getContext("2d");
var status = "loading";
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.centerPosition = { x: canvas.width / 2, y: canvas.height};
    draw()
}
function draw() {
    function loading() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText("Loading...", canvas.centerPosition['x'], canvas.centerPosition['y'] / 2);
    }
    switch (status) {
        case "loading":
            let laststaus = status;
            while (laststaus == status) {
                loading();
            }
            break;
    }
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
draw()