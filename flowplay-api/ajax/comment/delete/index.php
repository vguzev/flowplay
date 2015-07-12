<?
 /**
 * Удаляет комментарий.
 *
 * @param int $_POST["comment_id"] - ID комментария
 */
  error_reporting(E_ALL);
  ini_set("display_errors", 1);
 
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 header("Access-Control-Allow-Methods: OPTIONS, DELETE");
 if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') exit;
 header("Content-type:application/json;charset=utf-8");
 // Fake POST, т.к. данные передаются через payload
 $request_body = file_get_contents('php://input');
 $POST = json_decode($request_body);
 require_once(dirname(__FILE__)."/../../config.php");
 try {
  $sth = $dbh->prepare("delete from comment where comment_id=:comment_id");
  $sth->execute(array(":comment_id" => $POST->comment_id));
  echo json_encode(array("Status" => 1));
 }
 catch (Exception $e) {
  die(json_encode(array("Status" => -1, "Message" => "Ошибка базы данных")));
 }
?>
