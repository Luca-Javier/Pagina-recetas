<?php

require_once "consultar.php";
$consulta = "CALL traerRecetas();";

consultar($consulta);
