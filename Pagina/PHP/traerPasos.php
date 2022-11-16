<?php

require_once "consultar.php";
$idReceta = $_POST['id'];


$consulta = "CALL traerPasos($idReceta);";
consultar($consulta);
