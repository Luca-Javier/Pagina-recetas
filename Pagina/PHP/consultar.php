<?php
$rta;
/**
 * Crear la conexión y hace la consulta que le pasemos y genera el aviso de proceso exitoso o fallido
 * 
 * @param $consulta la consulta que queremos hacer
 * 
 * @return object $json devuelvo un JSON con el resultado de la consulta
 * 
 */
function consultar(string $consulta): void
{
  require_once "conexion.php";
  $db = getConexion();

  $rta = $db->query($consulta);

  $json = array();
  while ($row = $rta->fetch_assoc()) {
    array_push($json, $row);
  }
  echo json_encode($json);
}
