<?php
require_once "consultar.php";
/**
 * Código PHP que ejecutamos con AJAX para registar un usuario con un Store Procedure
 * 
 * @param string $nombre nombre del usuario
 * @param string $contrasenia contraseña del usuario
 * @param string $correo correo del usuario
 */
$nombre = $_POST['usuario'];
$contrasenia = $_POST['contrasenia'];
$correo = $_POST['correo'];


$consulta = "CALL registrarUsuario('$nombre','$correo','$contrasenia');";

consultar($consulta);
