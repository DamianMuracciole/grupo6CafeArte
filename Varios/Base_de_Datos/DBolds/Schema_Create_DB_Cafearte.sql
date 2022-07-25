CREATE DATABASE  IF NOT EXISTS `cafearte_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `cafearte_db`;
-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: cafearte_db
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `administradores` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `apellido` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `correo` varchar(100) COLLATE utf8_bin NOT NULL,
  `contrasena` varchar(200) COLLATE utf8_bin NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administradores`
--

LOCK TABLES `administradores` WRITE;
/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carrito` (
  `id` int(10) NOT NULL,
  `usuario` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `usuarios_id` int(10) NOT NULL,
  `cantidad` int(10) DEFAULT NULL,
  `nombre_prod` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `precio_prod` decimal(10,2) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `status` varchar(5) COLLATE utf8_bin DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `carrito_usuarios_id_foreign_idx` (`usuarios_id`),
  CONSTRAINT `carrito_usuarios_id_foreign` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compras` (
  `id` int(10) NOT NULL,
  `num_factura` int(10) NOT NULL,
  `fecha` date DEFAULT NULL,
  `usuario` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `cantidad` int(10) DEFAULT NULL,
  `nombre_prod` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `precio_prod` decimal(10,2) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `usuarios_id` int(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `compras_usuario_id_foreign_idx` (`usuarios_id`),
  CONSTRAINT `compras_usuario_id_foreign` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8_bin NOT NULL,
  `peso` int(10) NOT NULL,
  `detalle` varchar(1000) COLLATE utf8_bin NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `categoria` varchar(50) COLLATE utf8_bin NOT NULL,
  `sesion` varchar(50) COLLATE utf8_bin NOT NULL,
  `imagen` varchar(200) COLLATE utf8_bin NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `cantidad` int(10) NOT NULL,
  `status` varchar(5) COLLATE utf8_bin NOT NULL DEFAULT 'A',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Cafe Etiopia nuevo',250,'El café etíope rece a grandes altitudes, lo que produce un grano denso y duro. Los granos más densos tienden a contener una mayor cantidad de azúcares y precursores de sabor, lo cual resulta en más sabores luego del tueste. Para elegir un perfil de tueste efectivo, la clave es conocer la densidad del grano.',500.00,'molido','destacado','cafeEtiopia.jpg',NULL,NULL,0,'A'),(2,'Cafe Etiopia',500,'El café etíope crece a grandes altitudes, lo que produce un grano denso y duro. Los granos más densos tienden a contener una mayor cantidad de azúcares y precursores de sabor, lo cual resulta en más sabores luego del tueste. Para elegir un perfil de tueste efectivo, la clave es conocer la densidad del grano.',999.00,'molido','destacado','cafeEtiopia.jpg',NULL,NULL,0,'A'),(3,'Cafe Brasil Tres',250,'El café de Brasil corresponde a la variedad arábica, por ello predomina el sabor dulzón, similar a los cafés procedentes de África, aunque sin la acidez característica de estos. El café de Brasil se caracteriza por su aroma suave y fino y cuerpo alto.',489.00,'capsulas','oferta','imagenescafeBrasil.jpg',NULL,NULL,0,'A'),(4,'Cafe Brasil',500,'El café de Brasil corresponde a la variedad arábica, por ello predomina el sabor dulzón, similar a los cafés procedentes de África, aunque sin la acidez característica de estos. El café de Brasil se caracteriza por su aroma suave y fino y cuerpo alto.',889.00,'Molido','Destacado','cafeBrasil.jpg',NULL,NULL,0,'A'),(5,'Cafe Colombia',250,'Se trata de una variante de grano 100% arábica. Una de las principales características de este café, es que se siembra a grandes alturas, principalmente en zonas montañosas. ',500.00,'En granos','Destacado','cafeColombia.jpg',NULL,NULL,0,'A'),(6,'Cafe Colombia',500,'Se trata de una variante de grano 100% arábica. Una de las principales características de este café, es que se siembra a grandes alturas, principalmente en zonas montañosas. ',980.00,'En granos','normal','cafeColombia.jpg',NULL,NULL,0,'A'),(7,'Cafe Mexico',250,'Café de especialidad mexicano, de cuerpo equilibrado y de acidez cítrica media. Cultivado a lo largo de la frontera sur, donde las montañas y las selvas le dan a las plantas los nutrientes y la altitud necesaria para un excelente café.',466.00,'Molido','oferta','cafeMexico.jpg',NULL,NULL,0,'A'),(8,'Cafe Mexico',500,'Café de especialidad mexicano, de cuerpo equilibrado y de acidez cítrica media. Cultivado a lo largo de la frontera sur, donde las montañas y las selvas le dan a las plantas los nutrientes y la altitud necesaria para un excelente café.',950.00,'En granos','normal','cafeMexico.jpg',NULL,NULL,0,'A'),(9,'Cafe El Salvador',250,'Café 100% El Salvador es un rico café de cuerpo completo con un sabor suave y sofisticado y un aroma intenso.',488.00,'Molido','Destacado','cafeMexico.jpg',NULL,NULL,0,'A'),(10,'Cafe El Salvador',500,'Café 100% El Salvador es un rico café de cuerpo completo con un sabor suave y sofisticado y un aroma intenso.',899.00,'En granos','normal','cafeMexico.jpg',NULL,NULL,0,'A'),(11,'Cafe Honduras',250,'Se trata de una variante de grano 100% arábica. Se caracteriza por ser más aromático, equilibrado y con una acidez muy agradable. En comparación con el robusta, tiene menos cafeína, entre un 0,7- 1,5%. El nivel de cafeína del robusta oscila entre 2 y 4% o más. Es, sin duda, un café muy elegante con un perfecto equilibrio entre sabor y cuerpo. En el caso del café descafeinado de este tipo de grano, el porcentaje se reduce al mínimo, lo que hace que puedas disfrutar del café hasta por la noche.',399.00,'En granos','normal','cafeMexico.jpg',NULL,NULL,0,'A'),(12,'Cafe Honduras',250,'Se trata de una variante de grano 100% arábica. Se caracteriza por ser más aromático, equilibrado y con una acidez muy agradable. En comparación con el robusta, tiene menos cafeína, entre un 0,7- 1,5%. El nivel de cafeína del robusta oscila entre 2 y 4% o más. Es, sin duda, un café muy elegante con un perfecto equilibrio entre sabor y cuerpo. En el caso del café descafeinado de este tipo de grano, el porcentaje se reduce al mínimo, lo que hace que puedas disfrutar del café hasta por la noche.',399.00,'Molido','normal','cafeMexico.jpg',NULL,NULL,0,'A'),(13,'Pack Trio Varios Paises',500,'Pack compuesto por 250 de Café Colombia, 250 de Café Brasil y 250 de Cafe Etiopia. Se sumo café de Costa Rica.\r\nSigo agregando cosas aca. Sigoooooo',1500.00,'molido','destacado','OfertaPackTrio.jpg',NULL,NULL,0,'A'),(14,'Pack Trio',500,'Pack compuesto por 500 de Cafe Colombia, 500 de Cafe Brasil y 500 de Cafe Etiopia',2699.00,'Molido','oferta','OfertaPackTrio.jpg',NULL,NULL,0,'A'),(15,'Cafe Alajuela',3000,'Es un cafe de Alajuela que sube por el norte',500.00,'granos','normal','imagenCafeAlajuela.jpg',NULL,NULL,0,'A'),(16,'Cafe Tarrazu',350,'Es un cafe de montaña',3000.00,'Capsulas','normal','imagencafeCostaRica.JPG',NULL,NULL,0,'A');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos_carrito`
--

DROP TABLE IF EXISTS `productos_carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos_carrito` (
  `id` int(10) NOT NULL,
  `productos_id` int(10) DEFAULT NULL,
  `carrito_id` int(10) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productos_carrito_productos_id_foreign_idx` (`productos_id`),
  KEY `productos_carrito_carrito_id_foreign_idx` (`carrito_id`),
  CONSTRAINT `productos_carrito_carrito_id_foreign` FOREIGN KEY (`carrito_id`) REFERENCES `carrito` (`id`),
  CONSTRAINT `productos_carrito_productos_id_foreign` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos_carrito`
--

LOCK TABLES `productos_carrito` WRITE;
/*!40000 ALTER TABLE `productos_carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos_carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos_compras`
--

DROP TABLE IF EXISTS `productos_compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos_compras` (
  `id` int(10) NOT NULL,
  `productos_id` int(10) NOT NULL,
  `compras_id` int(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productos_compras_productos_id_foreign_idx` (`productos_id`),
  KEY `productos_compras_compras_id_foreign_idx` (`compras_id`),
  CONSTRAINT `productos_compras_compras_id_foreign` FOREIGN KEY (`compras_id`) REFERENCES `compras` (`id`),
  CONSTRAINT `productos_compras_productos_id_foreign` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos_compras`
--

LOCK TABLES `productos_compras` WRITE;
/*!40000 ALTER TABLE `productos_compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos_compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `apellido` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `usuario` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `correo` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `contrasena` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `dobleContrasena` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `imagen` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` varchar(5) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'A',
  `compras_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarios_compras_id_foreign_idx` (`compras_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Almeda','Shieber','ashieber0','ashieber0@mayoclinic.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(2,'Robena','Hentzeler','rhentzeler1','rhentzeler1@ocn.ne.jp','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(3,'Darelle','Brogiotti','dbrogiotti2','dbrogiotti2@behance.net','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(4,'Paulo','Hutley','phutley3','phutley3@gravatar.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(5,'Lacee','Durrell','ldurrell4','ldurrell4@goo.gl','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(6,'Melamie','Bofield','mbofield5','mbofield5@i2i.jp','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(7,'Dorri','Riseborough','driseborough6','driseborough6@instagram.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(8,'Michaella','Narramore','mnarramore7','mnarramore7@mediafire.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(9,'Gothart','Prestidge','gprestidge8','gprestidge8@rambler.ru','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(10,'Herbert','Skrzynski','hskrzynski9','hskrzynski9@amazon.co.jp','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(11,'Sianna','Landrieu','slandrieua','slandrieua@vinaora.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(12,'Zonda','Di Franceshci','zdifranceshcib','zdifranceshcib@goodreads.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(13,'Ronny','Sleith','rsleithc','rsleithc@scientificamerican.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(14,'Conroy','Geratt','cgerattd','cgerattd@japanpost.jp','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(15,'Giffy','Boggas','gboggase','gboggase@cocolog-nifty.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(16,'Justen','Brooking','jbrookingf','jbrookingf@ifeng.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(17,'Vincents','Jorn','vjorng','vjorng@oaic.gov.au','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(18,'Philly','Cowlam','pcowlamh','pcowlamh@angelfire.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(19,'Zorina','Folonin','zfolonini','zfolonini@ox.ac.uk','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(20,'Regine','Artinstall','rartinstallj','rartinstallj@omniture.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(21,'Benjamen','Marler','bmarlerk','bmarlerk@samsung.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(22,'Lorraine','Fripps','lfrippsl','lfrippsl@godaddy.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(23,'Konstantin','McKitterick','kmckitterickm','kmckitterickm@mashable.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(24,'Nanon','Headford','nheadfordn','nheadfordn@sourceforge.net','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(25,'Hill','Isbell','hisbello','hisbello@berkeley.edu','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(26,'Darb','Thunders','dthundersp','dthundersp@phpbb.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(27,'Demetra','Horlick','dhorlickq','dhorlickq@4shared.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(28,'Ignazio','Kattenhorn','ikattenhornr','ikattenhornr@prweb.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls',NULL,NULL,'A',0),(29,'Harriett','Yacobsohn','hyacobsohns','hyacobsohns@cbc.ca','0000-00-00','2WRTkYQP','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','UtOdioCras.xls',NULL,NULL,'A',0),(30,'Frankie','Celier','fceliert','fceliert@latimes.com','0000-00-00','3XQqalbIUo','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','AmetEratNulla.avi',NULL,NULL,'A',0),(31,'Luis','Martirena','danubio','luismartirena@yahoo.com','2022-05-31','$2a$10$fYTNSQER4W34pVQLeRHs3ub/D/Y1Lzvgflvp0e1IyvbxUCiN5qOBC','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','1655171535756_img.JPG',NULL,NULL,'A',0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-03  8:45:00
