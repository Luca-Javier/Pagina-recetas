<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <input type="text" value="hola" name="ingrediente1">
    <input type="text" value="holhhh fgfgfg" name="ingrediente2">
    <input type="text" value="ss" name="ingrediente3">
    <input type="submit" name="" id="">
  </form>

  <?php
  if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $ar =  array();
    $txt = "";
    for ($i = 1; $i <= 3; $i++) {
      array_push($ar, $_POST["ingrediente$i"]);
      //echo $_POST["ingrediente$i"] . "<br>";
      $txt = $txt . "@" . $_POST["ingrediente$i"];
    }
    $txt = ltrim($txt, "@");
    echo implode(",", $ar) . "<br>";
    echo $txt . "<br>";
    echo json_encode($ar);
  }
  ?>
</body>

</html>