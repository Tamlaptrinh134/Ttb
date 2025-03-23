<?php

if (isset($_GET["dir"])) {
    $dir = $_GET["dir"];
    $files = scandir($dir);
    echo json_encode($files);
} else {
    echo "No directory specified";
};

?>