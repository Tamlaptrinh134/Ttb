<?php

if (isset($_GET['path'])) {
	$path = "../../".$_GET['path'];
	if (file_exists($path)) {
        readfile($path);
    } else {
        echo "File doesn't exists";
    }
};

?>