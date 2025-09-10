const canvas = document.getElementById("canvas"); 
const ctx = canvas.getContext("2d");
const loadingDiv = document.getElementById("loading");
const infoTitle = document.getElementById("info-title");
const infoHomeRoomTeacher = document.getElementById("info-home-room-teacher");
const infoSchool = document.getElementById("info-school");
const infoClass = document.getElementById("info-class");
const infoSubject = document.getElementById("info-subject");
const infoNumberOfStudent = document.getElementById("info-number-of-students");
const infoNumberOfGroup = document.getElementById("info-number-of-groups");
const menuDiv = document.getElementById("menu");
function randomInt(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}
var status = "loading";
var typeofrandom = "wait";
var tick = 0;
var status = "paused";
var datafile;
var datarandomtype = {
    "luckyspin": {
        "name": "Lucky Spin",
        "icon": "board/LuckySpin.gif",
    },
    "randomnumberid": {
        "name": "Random Number Id",
        "icon": "board/RandomNumberId.gif",
        "randomIndex": randomInt(0, datafile ? datafile.liststudents.length : 1),
        "tickgrow": 1,
    },
    "classdiagram": {
        "name": "Class Diagram Random",
        "icon": "board/ClassDiagram.gif"
    }
};
//Sounds
const rollSound = new Audio("../../source/roll.mp3");
fetch(`../../readfile.php?path=${receviepath}`)
    .then(response => response.json()) 
    .then(data => {
        datafile = data;
        infoTitle.innerText = datafile.title;
        infoHomeRoomTeacher.innerText = datafile.homeroomteacher;
        infoSchool.innerText = datafile.school;
        infoClass.innerText = datafile.class;
        infoSubject.innerText = datafile.subject;
        infoNumberOfStudent.innerText = `${datafile.liststudents.length}/${datafile.totalstudents} students` + (datafile.liststudents.length == datafile.totalstudents ? '✅' : '❌');
    })
    .catch(error => console.error("Error:", error));
    let opacity = 1;

const fadeOut = setInterval(() => {
    opacity -= 0.0001;
    if (opacity <= 0) {
        clearInterval(fadeOut);
        loadingDiv.style.display = "none";
    } else {
        loadingDiv.style.opacity = opacity;
    }
}, 10);
loadingDiv.style.display = "none"
console.log(datafile);
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.centerPosition = { x: canvas.width / 2, y: canvas.height / 2};
    draw()
}
canvas.style.display = "block";
let sparkleLeaves = Array.from({ length: 40 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 2 + 1,
    speed: 0.3 + Math.random() * 0.7
}));
//Button commands
function ButtonLuckySpin() {
    typeofrandom = "luckyspin";
    menuDiv.style.display = "none";
}
function ButtonRandomNumberId() {
    typeofrandom = "randomnumberid";
    menuDiv.style.display = "none"; 
}   
function ButtonClassDiagram() {
    typeofrandom = "classdiagram";
    menuDiv.style.display = "none";
}
//Event listenerss
function startRandom() {
    if (status === "paused") {
        status = "started";
    }
};
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        startRandom();
    }
});
canvas.addEventListener("click", (event) => {
    if (event.buttons === 1) {
        startRandom();
    }
});
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (typeofrandom) {
        case "wait":
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, "#56ab2f");  // xanh lá nhạt
            gradient.addColorStop(1, "#a8e063");  // xanh lá tươi sáng
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            sparkleLeaves.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
                ctx.fill();
                p.x += p.speed;
                if (p.x > canvas.width) {
                    p.x = -10;
                    p.y = Math.random() * canvas.height;
                }
            });
            break;
        case "randomnumberid":
            if (datafile) {
                const studentIndex = datarandomtype.randomnumberid.randomIndex;
                //console.log(studentIndex);
                ctx.fillStyle = "black";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                if (status === "done") {
                    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                    gradient.addColorStop(0, "#56ab2f");  // xanh lá nhạt
                    gradient.addColorStop(1, "#a8e063");  // xanh lá tươi sáng
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    if (tick % 600 === 0) {
                        status = "paused";
                    }
                } else if (status === "paused") {
                    sparkleLeaves.forEach(p => {
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
                        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
                        ctx.fill();
                        p.x += p.speed;
                        if (p.x > canvas.width) {
                            p.x = -10;
                            p.y = Math.random() * canvas.height;
                        }
                    });
                    ctx.font = "20px Arial Italic";
                    ctx.fillText("[Nhấn phím cách để bắt đầu]", canvas.centerPosition.x, canvas.centerPosition.y + 90);
                    ctx.font = "15px Arial";
                    ctx.fillText(`${Math.round(1/datafile.liststudents.length*100)}% Bạn sẽ trả bài`, canvas.centerPosition.x, canvas.centerPosition.y + 120);
                    if (tick % 20 == 0) {
                        datarandomtype.randomnumberid.randomIndex = randomInt(0, datafile.liststudents.length);
                    };
                } else if (status === "started") {
                    sparkleLeaves.forEach(p => {
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
                        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
                        ctx.fill();
                        p.x += 0.3 + Math.random() * 3;
                        if (p.x > canvas.width) {
                            p.x = -10;
                            p.y = Math.random() * canvas.height;
                        }
                    });
                    if (tick % datarandomtype.randomnumberid.tickgrow == 0) {
                        if (datarandomtype.randomnumberid.tickgrow < 60) {
                            //rollSound.pause();
                            //rollSound.currentTime = 0; 
                            datarandomtype.randomnumberid.randomIndex = randomInt(0, datafile.liststudents.length);
                            rollSound.play();
                            datarandomtype.randomnumberid.tickgrow += 5;
                            console.log(datarandomtype.randomnumberid.tickgrow);
                        } else {
                            status = "done";
                            datarandomtype.randomnumberid.tickgrow = 1;
                        };
                    };
                     
                };
                ctx.fillStyle = "white";
                ctx.font = "100px Arial";
                ctx.textAlign = "center";
                ctx.fillText(`${studentIndex}`, canvas.centerPosition.x, canvas.centerPosition.y - 50);
                ctx.font = "70px Arial";
                ctx.fillText(`${datafile.liststudents[studentIndex]}`, canvas.centerPosition.x, canvas.centerPosition.y + 50);
            } else {
                ctx.fillStyle = "red";
                ctx.font = "40px Arial";
                ctx.textAlign = "center";
                ctx.fillText("Error loading data file", canvas.centerPosition.x, canvas.centerPosition.y);
            }
            break;
    }
    tick++;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
setInterval(draw, 1000 / 60);