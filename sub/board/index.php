<!DOCTYPE html>
<html>
    <head>
        <title>Laucher Ttb</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="../../css/style.css">
        <link rel="stylesheet" type="text/css" href="./style.css">
    </head>
    <body>
        <header>
            <h1 id="title"></h1>
        </header>
        <hr/>
        <main>
            <canvas id="canvas" style="background-color: black; display: none;"></canvas>
            <div id="menu">
                <h1>Loại Ngẫu Nhiên: </h1>
                <button class="boxbutton center" id="button-lk-spin" >
                    <img src="./LuckySpin.gif" alt="LuckySpin" class="icon">
                    <h3>Vòng Xoay</h3>
                </button>
                <button class="boxbutton center" id="button-rd-number-id" onclick="ButtonRandomNumberId()">
                    <img src="./RandomNumberId.gif" alt="RandomNumberId" class="icon">
                    <h3>Ngẩu Nhiên Số</h3>
                </button>
                <button class="boxbutton center" id="button-c-diagram" onclick="ButtonClassDiagram()">
                    <img src="./ClassDiagram.gif" alt="ClassDiagram" class="icon">
                    <h3>Sơ Đồ Lớp</h3>
                </button>
                <h1>Thông Tin: </h1>
                <div id="info">
                    <div>
                        <h3>Tiêu đề: <i id="info-title"></i></h3>
                        <h3>Trường: <i id="info-school"></i></h3>
                        <h3>Lớp: <i id="info-class"></i></h3>
                        <h3>GV chủ nhiệm: <i id="info-home-room-teacher"></i></h3>
                        <h3>Môn: <i id="info-subject"></i></h3>
                        <h3>Số học sinh: <i id="info-number-of-students"></i></h3>
                        <h3>Số tổ: <i id="info-number-of-groups"></i></h3>
                    </div>
                </div>
            </div>
        </main>
        <hr/>
        <footer>
            <p>© 2025 Laucher Ttb by Đặng Nhân Tâm</p>
        </footer>
        <div id="loading">
            <div style="display: flex;">
                <h1>Loading...</h1>
                <img style="margin-top: auto; margin-bottom: auto;" src="board/loading.gif" alt="loading" width="50px" height="50px"/>
            </div>
        </div>
        <?php
			if (isset($_GET["path"])) {
				$receviepath = $_GET["path"];
			}
		?>
        <script>
        	var receviepath = "<?php echo $receviepath; ?>"
        	//alert(receviepath);
        </script>
        <script src="./code.js"></script>
    </body>
</html>
