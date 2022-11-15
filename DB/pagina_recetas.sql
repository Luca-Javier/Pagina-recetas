-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-11-2022 a las 00:59:18
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pagina_recetas`
--
CREATE DATABASE IF NOT EXISTS `pagina_recetas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `pagina_recetas`;

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `logearUsuario` (IN `@nombre` VARCHAR(50), IN `@contrasenia` VARCHAR(50))   BEGIN
    SELECT id_usuario AS "id", nombre AS "name", foto AS "img" from usuarios WHERE nombre = `@nombre` and constraseña = `@contrasenia` and id_estado = 1;
    SELECT "bien" AS "rta";
    END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `registrarUsuario` (IN `@nombre` VARCHAR(50), IN `@correo` VARCHAR(50), IN `@contrasenia` VARCHAR(50))   BEGIN
    INSERT INTO usuarios (nombre,correo,constraseña,id_estado)VALUES(`@nombre`,`@correo`,`@contrasenia`,1);
SELECT "bien" AS "rta";
    
    END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificacion_receta`
--

CREATE TABLE `calificacion_receta` (
  `id_receta` int(16) DEFAULT NULL,
  `calificacion` int(16) DEFAULT NULL,
  `id_usuario` int(16) NOT NULL,
  `id_estado` int(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `comentario` varchar(255) NOT NULL,
  `fecha` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `id_usuario` int(16) NOT NULL,
  `id_receta` int(16) NOT NULL,
  `id_estado` int(16) NOT NULL,
  `mejor_comentario` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `id_estado` int(16) NOT NULL,
  `estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`id_estado`, `estado`) VALUES
(1, 'existe'),
(2, 'eliminado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pasos_por_receta`
--

CREATE TABLE `pasos_por_receta` (
  `id_receta` int(16) NOT NULL,
  `descripcion` varchar(30) NOT NULL,
  `imagen` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recetarios`
--

CREATE TABLE `recetarios` (
  `id_receta` int(16) NOT NULL,
  `nombre_receta` varchar(50) NOT NULL,
  `imagen` blob NOT NULL,
  `tags` varchar(50) DEFAULT NULL,
  `descripcion` varchar(50) NOT NULL,
  `ingredientes` varchar(255) NOT NULL,
  `fecha_creacion` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `id_calificacion` int(16) NOT NULL,
  `id_usuario` int(16) NOT NULL,
  `id_estado` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recetas_favoritas`
--

CREATE TABLE `recetas_favoritas` (
  `id_usuario` int(16) NOT NULL,
  `id_receta` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(16) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `constraseña` varchar(50) NOT NULL,
  `foto` varchar(45) NOT NULL DEFAULT 'default.svg',
  `fecha_registro` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `id_estado` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `correo`, `constraseña`, `foto`, `fecha_registro`, `id_estado`) VALUES
(3, 'Luca Javier', 'luca.jav45@gmail.com', 'j', 'default.svg', '2022-11-11 19:21:13.356703', 1),
(4, 'Benjamin Heredia', 'benjaminheredia@gmail.com', 'j', 'default.svg', '2022-11-11 19:26:05.728289', 1),
(5, 'Aaron Florian', 'aaronblv14@gmail.com', 'j', 'default.svg', '2022-11-11 19:27:16.786821', 1),
(6, 'Alejandro Cisneros', 'aleec@gmail.com', 'j', 'default.svg', '2022-11-11 19:29:12.407505', 1),
(7, 'Leandro Castillo', 'grooky@gmail.com', 'j', 'default.svg', '2022-11-11 19:30:22.636991', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `calificacion_receta`
--
ALTER TABLE `calificacion_receta`
  ADD KEY `fk_id_estado_calificacion` (`id_estado`),
  ADD KEY `fk_id_receta_calificacion` (`id_receta`),
  ADD KEY `fk_id_usuarios_calificacion` (`id_usuario`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD KEY `fk_id_usuario_comentarios` (`id_usuario`),
  ADD KEY `fk_id_estado_comentarios` (`id_estado`),
  ADD KEY `fk_id_receta_comentarios` (`id_receta`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id_estado`);

--
-- Indices de la tabla `pasos_por_receta`
--
ALTER TABLE `pasos_por_receta`
  ADD KEY `FK_id_receta_pasos` (`id_receta`);

--
-- Indices de la tabla `recetarios`
--
ALTER TABLE `recetarios`
  ADD PRIMARY KEY (`id_receta`),
  ADD KEY `fk_id_calificacion_recetarios` (`id_calificacion`),
  ADD KEY `fk_id_usuarios_recetarios` (`id_usuario`),
  ADD KEY `fk_id_estado_recetarios` (`id_estado`);

--
-- Indices de la tabla `recetas_favoritas`
--
ALTER TABLE `recetas_favoritas`
  ADD KEY `fk_id_usuario_favoritas` (`id_usuario`),
  ADD KEY `fk_id_recetas_favoritas` (`id_receta`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `fk_id_estado_usuarios` (`id_estado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `id_estado` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `recetarios`
--
ALTER TABLE `recetarios`
  MODIFY `id_receta` int(16) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `calificacion_receta`
--
ALTER TABLE `calificacion_receta`
  ADD CONSTRAINT `fk_id_estado_calificacion` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`),
  ADD CONSTRAINT `fk_id_receta_calificacion` FOREIGN KEY (`id_receta`) REFERENCES `recetarios` (`id_receta`),
  ADD CONSTRAINT `fk_id_usuarios_calificacion` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `fk_id_estado_comentarios` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`),
  ADD CONSTRAINT `fk_id_receta_comentarios` FOREIGN KEY (`id_receta`) REFERENCES `recetarios` (`id_receta`),
  ADD CONSTRAINT `fk_id_usuario_comentarios` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `pasos_por_receta`
--
ALTER TABLE `pasos_por_receta`
  ADD CONSTRAINT `FK_id_receta_pasos` FOREIGN KEY (`id_receta`) REFERENCES `recetarios` (`id_receta`);

--
-- Filtros para la tabla `recetarios`
--
ALTER TABLE `recetarios`
  ADD CONSTRAINT `fk_id_estado_recetarios` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`),
  ADD CONSTRAINT `fk_id_usuarios_recetarios` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `recetas_favoritas`
--
ALTER TABLE `recetas_favoritas`
  ADD CONSTRAINT `fk_id_recetas_favoritas` FOREIGN KEY (`id_receta`) REFERENCES `recetarios` (`id_receta`),
  ADD CONSTRAINT `fk_id_usuario_favoritas` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_id_estado_usuarios` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
