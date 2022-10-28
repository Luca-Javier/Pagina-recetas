<?php

/**
 * crear la conexion con la base de datos
 * 
 * @var string $nameDB El nombre de la base de datos
 * @return object $db La conexion a la base de datos
 */
function getConexion(): object
{
  $nameDB = "pagina_recetas";
  $db = new mysqli("localhost", "root", "", $nameDB);
  mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
  if ($db->connect_error)
    echo "Error de conexión" . $db->connect_error;
  else
    return $db;
}
