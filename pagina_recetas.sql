-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-08-2022 a las 03:07:41
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificacion_receta`
--

CREATE TABLE `calificacion_receta` (
  `id_calificacion` int(16) NOT NULL,
  `calificacion` int(16) DEFAULT NULL,
  `id_estado` int(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentario` int(16) NOT NULL,
  `id_usuario` int(16) NOT NULL,
  `fecha` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `id_estado` int(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descripcion_receta`
--

CREATE TABLE `descripcion_receta` (
  `id_descripcion` int(16) NOT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `tiempo` varchar(50) DEFAULT NULL,
  `ingredientes` varchar(200) DEFAULT NULL,
  `detalle` varchar(200) DEFAULT NULL,
  `consejos` varchar(200) DEFAULT NULL,
  `id_estado` int(16) NOT NULL,
  `id_receta` int(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `id_estado` int(16) NOT NULL,
  `estado` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recetarios`
--

CREATE TABLE `recetarios` (
  `id_receta` int(16) NOT NULL,
  `nombre_receta` varchar(50) DEFAULT NULL,
  `imagen` blob DEFAULT NULL,
  `id_calificacion` int(16) DEFAULT NULL,
  `id_usuario` int(16) DEFAULT NULL,
  `id_estado` int(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(16) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `constraseña` varchar(50) DEFAULT NULL,
  `fecha_registro` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `id_estado` int(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `calificacion_receta`
--
ALTER TABLE `calificacion_receta`
  ADD PRIMARY KEY (`id_calificacion`),
  ADD KEY `fk_id_estado_calificacion` (`id_estado`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `fk_id_usuario_comentarios` (`id_usuario`),
  ADD KEY `fk_id_estado_comentarios` (`id_estado`);

--
-- Indices de la tabla `descripcion_receta`
--
ALTER TABLE `descripcion_receta`
  ADD PRIMARY KEY (`id_descripcion`),
  ADD KEY `fk_id_estado_descripcion` (`id_estado`),
  ADD KEY `fk_id_recetarios_descipcion` (`id_receta`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id_estado`);

--
-- Indices de la tabla `recetarios`
--
ALTER TABLE `recetarios`
  ADD PRIMARY KEY (`id_receta`),
  ADD KEY `fk_id_calificacion_recetarios` (`id_calificacion`),
  ADD KEY `fk_id_usuarios_recetarios` (`id_usuario`),
  ADD KEY `fk_id_estado_recetarios` (`id_estado`);

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
-- AUTO_INCREMENT de la tabla `calificacion_receta`
--
ALTER TABLE `calificacion_receta`
  MODIFY `id_calificacion` int(16) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(16) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `descripcion_receta`
--
ALTER TABLE `descripcion_receta`
  MODIFY `id_descripcion` int(16) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `id_estado` int(16) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `recetarios`
--
ALTER TABLE `recetarios`
  MODIFY `id_receta` int(16) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(16) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `calificacion_receta`
--
ALTER TABLE `calificacion_receta`
  ADD CONSTRAINT `fk_id_estado_calificacion` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`);

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `fk_id_estado_comentarios` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`),
  ADD CONSTRAINT `fk_id_usuario_comentarios` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `descripcion_receta`
--
ALTER TABLE `descripcion_receta`
  ADD CONSTRAINT `fk_id_estado_descripcion` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`),
  ADD CONSTRAINT `fk_id_recetarios_descipcion` FOREIGN KEY (`id_receta`) REFERENCES `recetarios` (`id_receta`);

--
-- Filtros para la tabla `recetarios`
--
ALTER TABLE `recetarios`
  ADD CONSTRAINT `fk_id_calificacion_recetarios` FOREIGN KEY (`id_calificacion`) REFERENCES `calificacion_receta` (`id_calificacion`),
  ADD CONSTRAINT `fk_id_estado_recetarios` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`),
  ADD CONSTRAINT `fk_id_usuarios_recetarios` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_id_estado_usuarios` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
