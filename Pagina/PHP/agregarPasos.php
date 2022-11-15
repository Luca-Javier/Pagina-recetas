<?php
require_once "consultar.php";

for ($i = 1; $i <= $_POST['num-pasos']; $i++) {
  $consulta = "CALL agregarPaso('" . $_POST["paso-$i"] . "')";
  consultar($consulta);
}
