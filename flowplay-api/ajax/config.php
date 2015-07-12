<?
 global $db_host, $db_name, $db_user, $db_password, $conn;
 $db_host = "localhost"; // 3306
 $db_name = "flowplay";
 $db_user = "flowplay";
 $db_password = "r4826v12OfD6K0n";
 date_default_timezone_set("Europe/Moscow");

 try {
  $dbh = new PDO('mysql:host='.$db_host.';dbname='.$db_name, $db_user, $db_password, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'set names utf8'));
 }
 catch (PDOException $e) {
  die("Oups... We have some technical problems! Try again later!");
 }

 // Генерируем массив наподобие $_POST, только для метода PUT
 $_PUT = array();
 if($_SERVER['REQUEST_METHOD'] == 'PUT') { 
  $putdata = file_get_contents('php://input'); 
  $exploded = explode('&', $putdata);  

  foreach($exploded as $pair) { 
   $item = explode('=', $pair); 
   if(count($item) == 2) { 
    $_PUT[urldecode($item[0])] = urldecode($item[1]); 
   }
  }
 }
?>