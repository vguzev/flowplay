<?
/**
 * Выводит список слайдов.
 */
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 header("Access-Control-Allow-Methods: OPTIONS, GET");
 if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') exit;
 header("Content-type:application/json;charset=utf-8");
 $slides = array(
  array(
   "id" => 1,
   "header" => "Заголовок слайда",
   "description" => "Yesterday (рус. «Вчера») — песня группы The Beatles с альбома Help! («На помощь!»), выпущенного в августе 1965 года (в США песня не вошла в альбом, однако вышла в виде сингла в сентябре 1965 года)",
   "link" => "Дыж-бдыжь!",
   "image" => "/app/img/slides/1.jpg"
  ),
  array(
   "id" => 2,
   "header" => "Заголовок слайда 2",
   "description" => "Yesterday (рус. «Вчера») — песня группы The Beatles с альбома Help! («На помощь!»), выпущенного в августе 1965 года (в США песня не вошла в альбом, однако вышла в виде сингла в сентябре 1965 года) 2",
   "link" => "Дыж-бдыжь 2!",
   "image" => "/app/img/slides/2.jpg"
  ),
  array(
   "id" => 3,
   "header" => "Заголовок слайда 3",
   "description" => "Yesterday (рус. «Вчера») — песня группы The Beatles с альбома Help! («На помощь!»), выпущенного в августе 1965 года (в США песня не вошла в альбом, однако вышла в виде сингла в сентябре 1965 года) 3",
   "link" => "Дыж-бдыжь 3!",
   "image" => "/app/img/slides/3.jpg"
  ),
 );
 echo json_encode(array("Status" => 1, "found" => count($slides), "results" => $slides));
?>
