<!DOCTYPE html>
<html>
    <head>
        <title>Laucher Ttb</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="../../css/style.css">
        <link rel="stylesheet" type="text/css" href="board/style.css">
    </head>
    <body>
        <header>
            <h1 id="title"></h1>
        </header>
        <hr/>
        <main>
            <canvas id="canvas" style="background-color: black"></canvas>
        </main>
        <hr/>
        <footer>
            <p>© 2025 Laucher Ttb by Đặng Nhân Tâm</p>
        </footer>
        <?php
			if (isset($_GET["path"])) {
				$receviepath = $_GET["path"];
			}
		?>
        <script>
        	var receviepath = "<?php echo $receviepath; ?>"
        	//alert(receviepath);
        </script>
        <script src="board/code.js"></script>
    </body>
</html>
