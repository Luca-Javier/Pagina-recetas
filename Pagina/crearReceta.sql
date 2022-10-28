--Archivo para ir armandolo nada mas

-- http://localhost/phpmyadmin/index.php?route=/database/structure&db=pagina_recetas

DELIMITER $$

CREATE PROCEDURE crearReceta(
  `@nombre` varchar(50),
  `@imagen` blob,
  `@tags` varchar(100),
  `@descripcion` varchar(255)
)
BEGIN

END $$