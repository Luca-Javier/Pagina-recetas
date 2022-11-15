<?php
$ingredientes = "";
$titulo = $_POST['titulo'];
$descripcion = $_POST['descripcion'];
$img = $_FILES['img'];
$id = $_POST['id'];
require_once "consultar.php";

for ($i = 1; $i <= $_POST['num-ingredientes']; $i++)
  $ingredientes = $ingredientes . "@" . $_POST["ingrediente-$i"];

$ingredientes = ltrim($ingredientes, "@");


$archivo = $img['tmp_name'];
$uniqId = uniqid();
$nombreImagen = $uniqId . $img['name'];
$rutaLocalImagenes = "C:/xampp\htdocs\pagina-recetas/imagenes-locales/" . $nombreImagen;
move_uploaded_file($archivo, $rutaLocalImagenes);


$consulta = "CALL agregarReceta('$titulo','$nombreImagen','$descripcion','$ingredientes',$id)";
consultar($consulta);
