<?php
require_once "consultar.php";
/**
 * Código PHP que ejecutamos con AJAX para registar un usuario con un Store Procedure
 * 
 * @param string $nombre nombre del usuario
 * @param string $contrasenia contraseña del usuario
 */
$nombre = $_POST['usuario'];
$contrasenia = $_POST['contrasenia'];


$consulta = "CALL logearUsuario('$nombre','$contrasenia');";

consultar($consulta);
