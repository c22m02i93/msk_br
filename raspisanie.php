<?php
if (isset($_REQUEST[session_name()])) session_start();
$auth = $_SESSION['auth'];
$name_user = $_SESSION['name_user'];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<?php include 'head.php'; ?>
<title>Архиерейское служение</title>
</head>
<body>
<div style="box-shadow: 0 0 20px rgba(0,0,0,0.5);">
<?php
include 'golova.php';
$raspisanie = true;
include 'menu.php';
include 'function.php';
include 'content.php';
?>

<div id="osnovnoe">
<h1>Архиерейское служение</h1>
<?php
// Настройки
$num_elements = 10;
$table = "host1409556_barysh.news_mitropolia";
$section = "arhipastry"; // берём данные из парсера архипастырского служения

// Пагинация
if (!isset($_GET['page'])) $p = 1;
else {
    $p = intval($_GET['page']);
    if ($p < 1) $p = 1;
}

$total = mysql_result(mysql_query("SELECT COUNT(*) FROM $table WHERE section='arhipastry'"), 0, 0);
$num_pages = ceil($total / $num_elements);
if ($p > $num_pages) $p = $num_pages;
$start = ($p - 1) * $num_elements;

echo GetNav($p, $num_pages, "raspisanie") . '<hr />';

// Выборка данных
$q = mysql_query("SELECT * FROM $table WHERE section='arhipastry' ORDER BY data DESC LIMIT $start, $num_elements");
if (mysql_num_rows($q) > 0) {
    while ($res = mysql_fetch_assoc($q)) {

        // Формат даты
        $dtn = $res['data'];
        $yyn = substr($dtn, 0, 4);
        $mmn = substr($dtn, 5, 2);
        $ddn = substr($dtn, 8, 2);
        $hours = substr($dtn, 11, 5);
        $monthes = array("01"=>"января","02"=>"февраля","03"=>"марта","04"=>"апреля","05"=>"мая","06"=>"июня","07"=>"июля","08"=>"августа","09"=>"сентября","10"=>"октября","11"=>"ноября","12"=>"декабря");
        if ($ddn[0] == '0') $ddn = substr($ddn, 1);
        $mm1n = $monthes[$mmn];
        $ddttn = '<span class="date">'.$ddn.' '.$mm1n.' '.$yyn.' г. '.$hours.'</span>';

        // Текст — 25 слов
        $plain = strip_tags($res['kratko']);
        $words = explode(' ', $plain);
        $short = implode(' ', array_slice($words, 0, 25));
        if (count($words) > 25) $short .= '...';

        // --- Вывод записи ---
        echo '<div class="block_title">';
        echo '<span class="title"><a href="news_show.php?link='.urlencode($res['link']).'">'.$res['tema'].'</a></span><br />'.$ddttn;
        echo '</div>';

        echo '<div style="float:left; margin-bottom:10px; border-bottom:1px #D7D7D7 solid">';

        if (!empty($res['oblozka'])) {
            echo '<div><img style="
                box-shadow:2px 2px 5px rgba(0,0,0,0.3);
                float:left;
                border:1px solid #C3D7D4;
                margin:0 10px 5px 10px;
                padding:10px;
                max-width:150px; height:auto;" src="'.$res['oblozka'].'" /></div>';
        }

        echo '<div style="margin-right:5px"><p>'.$short.'</p>';
        echo '<div class="zakladka" style="margin:0 0 0 20px"><br /></div></div></div>';
    }
}

echo GetNav($p, $num_pages, "raspisanie") . '<hr />';
?>
</div>
<?php include 'footer.php'; ?>
</div>
</body>
</html>