<?
 /**
 * Ищет объекты.
 *
 * @param string $_GET["q"] - Фраза для поиска.
 * @param int $_GET["page"] - Номер страницы.
 */
 error_reporting(E_ALL);
 ini_set("display_errors", 1);
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 header("Access-Control-Allow-Methods: OPTIONS, GET");
 if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') exit;
 header("Content-type:application/json;charset=utf-8");

 require_once(dirname(__FILE__)."/../../config.php");
 $page = 1; if (isset($_GET["page"])) $page = intval($_GET["page"]);
 $items_per_page = 10; if (isset($_GET["items_per_page"])) $items_per_page = intval($_GET["items_per_page"]);
 try {
  $q =  "select SQL_CALC_FOUND_ROWS * from object ";
  if (isset($_GET["q"]) && $_GET["q"] != "") $q .= "where title like :q1 or text like :q2 ";
  $q .= "limit ".(($page-1)*$items_per_page).", ".$items_per_page;
  $sth = $dbh->prepare($q);
  if (isset($_GET["q"]) && $_GET["q"] != "") {
   $sth->bindValue(":q1", "%".$_GET["q"]."%");
   $sth->bindValue(":q2", "%".$_GET["q"]."%");
  }
  $sth->execute();
  $results = $sth->fetchAll(PDO::FETCH_ASSOC);

  $q = "select FOUND_ROWS() as found;";
  $sth = $dbh->prepare($q);
  $sth->execute();
  $q = $sth->fetch();
  $found = $q["found"];

  echo json_encode(array("Status" => 1, "found" => $found, "items_per_page" => $items_per_page, "page" => $page, "q" => isset($_GET["q"])?$_GET["q"]:"", "results" => $results));
 }
 catch (Exception $e) {
  die(json_encode(array("Status" => -1, "found" => 0, "items_per_page" => $items_per_page, "page" => $page, "q" => isset($_GET["q"])?$_GET["q"]:"",  "Message" => "Ошибка базы данных")));
 }
?>
