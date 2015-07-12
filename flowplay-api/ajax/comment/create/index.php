<?
 /**
 * Создаёт комментарий.
 *
 * @param int $_POST["user_id"] - ID пользователя
 * @param int $_POST["message"] - Комментарий
 */
// error_reporting(E_ALL);
// ini_set("display_errors", 1);

 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') exit;
 header("Content-type:application/json;charset=utf-8");
 require_once(dirname(__FILE__)."/../../config.php");
 // Fake POST, т.к. данные передаются через payload
 $request_body = file_get_contents('php://input');
 $POST = json_decode($request_body);

 if (!isset($POST->user_id))
  die(json_encode(array("Status" => -1, "Message" => "user_id not set")));
 if (!isset($POST->text))
  die(json_encode(array("Status" => -2, "Message" => "text not set")));
 try {
  $q =  "insert into comment (user_id, user_name, text) values (:user_id, :user_name, :text)";
  $sth = $dbh->prepare($q);
  $sth->execute(array(
   ":user_id" => $POST->user_id,
   ":user_name" => "Mr.Freeman",
   ":text" => $POST->text));
  echo json_encode(array("Status" => 1, "comment_id" => $dbh->lastInsertId()));
 }
 catch (Exception $e) {
  die(json_encode(array("Status" => -3, "Message" => "Ошибка базы данных")));
 }
?>
