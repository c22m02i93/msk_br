<?
if (isset($_REQUEST[session_name()])) session_start ();
$auth=$_SESSION['auth'];
$name_user=$_SESSION['name_user'];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<?
include 'head.php';
?>
<title>˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜</title>

</head>
<body>

<div style="box-shadow: 0 0 20px rgba(0,0,0,0.5);">
<?
include 'golova.php';
$new = yes;
include 'menu.php';
include 'function.php';

include 'content.php';

?>
<div id="osnovnoe">

<h1>˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜</h1>

 <?   if(!isset($_GET['page'])){
  $p = 1;
}
else{
  $p = addslashes(strip_tags(trim($_GET['page'])));
  if($p < 1) $p = 1;
}
$num_elements = 10;
$total = mysql_result(mysql_query("SELECT COUNT(*) FROM host1409556_barysh.news_eparhia"),0,0); //˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜
$num_pages = ceil($total / $num_elements); //˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜
if ($p > $num_pages) $p = $num_pages;
$start = ($p - 1) * $num_elements; //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜ ˜˜
                    
					
  echo GetNav($p, $num_pages, "news").'<hr style="width: 100%" />';
            $sel = "SELECT * FROM host1409556_barysh.news_eparhia ORDER BY data DESC LIMIT ".$start.", ".$num_elements;
            $query = mysql_query($sel);
            if(mysql_num_rows($query)>0){

			while($res = mysql_fetch_array($query)){


$dtn = $res[data]; 
$yyn = substr($dtn,0,4); // ˜˜˜
$mmn = substr($dtn,5,2); // ˜˜˜˜˜
$ddn = substr($dtn,8,2); // ˜˜˜˜

// ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
if ($mmn == "01") $mm1n="˜˜˜˜˜˜";
if ($mmn == "02") $mm1n="˜˜˜˜˜˜˜";
if ($mmn == "03") $mm1n="˜˜˜˜˜";
if ($mmn == "04") $mm1n="˜˜˜˜˜˜";
if ($mmn == "05") $mm1n="˜˜˜";
if ($mmn == "06") $mm1n="˜˜˜˜";
if ($mmn == "07") $mm1n="˜˜˜˜";
if ($mmn == "08") $mm1n="˜˜˜˜˜˜˜";
if ($mmn == "09") $mm1n="˜˜˜˜˜˜˜˜";
if ($mmn == "10") $mm1n="˜˜˜˜˜˜˜";
if ($mmn == "11") $mm1n="˜˜˜˜˜˜";
if ($mmn == "12") $mm1n="˜˜˜˜˜˜˜";

if ($ddn == "01") $ddn="1";
if ($ddn == "02") $ddn="2";
if ($ddn == "03") $ddn="3";
if ($ddn == "04") $ddn="4";
if ($ddn == "05") $ddn="5";
if ($ddn == "06") $ddn="6";
if ($ddn == "07") $ddn="7";
if ($ddn == "08") $ddn="8";
if ($ddn == "09") $ddn="9";

$hours = substr($dtn,11,5); // ˜˜˜˜˜ 

$ddttn = '<span class="date">'.$ddn.' '.$mm1n.' '.$yyn.' ˜. '.$hours.'</span>'; // ˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜

	$patterns = array ('/(?:\{{3})(http:\/\/[^\s\[<\(\)\|]+)(?:\}{3})-(?:\{{3})([^}]+)(?:\}{3})/i', '/\n/', '/(?:\/{3})/', '/(?:\|{3})/', '/@[^@]+@/', '/(?:\{{3})/', '/(?:\}{3})/');
	$replace = array ('${2}', '</p><p>', '', '', '', '', '');
	$text = preg_replace($patterns, $replace, $res[kratko]);

echo '<div style="float: left; margin-bottom: 10px; border-bottom: 1px #D7D7D7 solid"><div class="block_title"><span class="title"><a href="news_show.php?data='.$res[data].'">'.$res[tema].'</a></span><br />'.$ddttn;
 if ($res['video']) echo '<span style="color: #777"> (+ ˜˜˜˜˜)</span>';

echo '</div><div>';

if ($res[oblozka]) echo '<div><img style="box-shadow: 2px 2px 5px rgba(0,0,0,0.3); display: inline;float: left;border: 1px solid #C3D7D4; margin: 0 10px 5px 10px; padding: 10px" src="FOTO_MINI/'.$res[oblozka].'.jpg" /></div>';

echo '<div style="margin-right: 5px"><p>'.$text.'</p><div class="zakladka" style="margin: 0 0 0 20px"><span class="views">˜˜˜˜˜˜˜˜˜˜: '.$res[views].'.<br /><br /></span></div></div></div></div>';
}
}

  echo '<table width="100%"><tr><td>'.GetNav($p, $num_pages, "news").'</td></tr></table><hr style="width: 100%" />';

?>

</div>

<?
include 'footer.php';
?>

 </div>
</body>
</html>