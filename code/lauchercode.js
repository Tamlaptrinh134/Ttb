const container = document.getElementById("container");
var path = "data"
var datajson
function new_path(newpath){
    console.log(newpath);
    if (newpath.split('.').length === 2) { 
        window.location.assign(`sub/board?path=${path}/${newpath}`);
    } else {
        if (newpath === "..") {
            if (path.includes("/")) {
                path = path.slice(0, path.lastIndexOf("/"));
            } else {
                path = "data";
            };
        } else {
            path = `${path}/${newpath}`
        }
        dir_path();
    }
}
function dir_path() {
    fetch(`dir.php?dir=${path}`)
        .then(response => response.json()) 
        .then(data => {
            if (path !== "data") {
                var listfolder = data.slice(1, data.length);  
            } else {
                var listfolder = data.slice(2, data.length);
            }
            container.innerHTML = "";
            listfolder.forEach(element => {
                if (element === "..") {
                    element = ".."
                };
                container.innerHTML += `<div class="box"><button class="boxbutton" onclick="new_path('${encodeURIComponent(element)}')")>${element}</button></div>`;
            })
        })
        .catch(error => console.error("Error:", error));
}
dir_path();