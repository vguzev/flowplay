<?
 /**
 * Выводит список комментариев с разбивкой по страницам.
 *
 * @param int $_GET["start_from"] - С какого номера выдавать записи.
 * @param int $_GET["number_of_comments"] - Количество записей, которые нужно выдать.
 */
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') exit;
 header("Content-type:application/json;charset=utf-8");

 require_once(dirname(__FILE__)."/../../config.php");
 $start_from = 0; if (isset($_GET["start_from"])) $start_from = intval($_GET["start_from"]);
 $number_of_comments = 3; if (isset($_GET["number_of_comments"])) $number_of_comments = intval($_GET["number_of_comments"]);
 try {
  $q = "select SQL_CALC_FOUND_ROWS * from comment order by create_date desc, comment_id desc ";
  $q .= "limit ".$start_from.", ".$number_of_comments;
  $sth = $dbh->prepare($q);
  $sth->execute();
  $results = $sth->fetchAll(PDO::FETCH_ASSOC);

  $q = "select FOUND_ROWS() as found;";
  $sth = $dbh->prepare($q);
  $sth->execute();
  $q = $sth->fetch();
  $found = $q["found"];

  echo json_encode(array(
   "Status" => 1, "found" => $found, "number_of_comments" => $number_of_comments, "start_from" => $start_from, "results" => $results));
 }
 catch (Exception $e) {
  die(json_encode(array("Status" => -1, "found" => 0, "items_per_page" => $items_per_page, "page" => $page, "Message" => "Ошибка базы данных")));
 }
?>
