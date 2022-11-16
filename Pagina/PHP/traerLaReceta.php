<?php

require_once "consultar.php";
$idReceta = $_POST['id'];


$consulta = "CALL traerLaReceta($idReceta);";
consultar($consulta);
