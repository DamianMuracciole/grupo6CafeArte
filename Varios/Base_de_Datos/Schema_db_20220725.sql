CREATE DATABASE  IF NOT EXISTS `cafearte_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `cafearte_db`;
-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: cafearte_db
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `weight` int NOT NULL,
  `detail` varchar(1000) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `category` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `session` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `image` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL,
  `quantity` int NOT NULL,
  `status` varchar(5) CHARACTER SET utf8mb3 COLLATE utf8_bin NOT NULL DEFAULT 'A',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Cafe Etiopia',250,'El café etíope rece a grandes altitudes, lo que produce un grano denso y duro. Los granos más densos tienden a contener una mayor cantidad de azúcares y precursores de sabor, lo cual resulta en más sabores luego del tueste. Para elegir un perfil de tueste efectivo, la clave es conocer la densidad del grano.',500.00,'molido','destacado','cafeEtiopia.jpg',0,'A',NULL,NULL),(2,'Cafe Etiopia',500,'El café etíope crece a grandes altitudes, lo que produce un grano denso y duro. Los granos más densos tienden a contener una mayor cantidad de azúcares y precursores de sabor, lo cual resulta en más sabores luego del tueste. Para elegir un perfil de tueste efectivo, la clave es conocer la densidad del grano.',999.00,'molido','normal','cafeEtiopia.jpg',0,'A',NULL,NULL),(3,'Cafe Brasil',250,'El café de Brasil corresponde a la variedad arábica, por ello predomina el sabor dulzón, similar a los cafés procedentes de África, aunque sin la acidez característica de estos. El café de Brasil se caracteriza por su aroma suave y fino y cuerpo alto.',489.00,'molido','oferta','cafeBrasil.jpg',0,'A',NULL,NULL),(4,'Cafe Brasil',500,'El café de Brasil corresponde a la variedad arábica, por ello predomina el sabor dulzón, similar a los cafés procedentes de África, aunque sin la acidez característica de estos. El café de Brasil se caracteriza por su aroma suave y fino y cuerpo alto.',889.00,'molido','normal','cafeBrasil.jpg',0,'A',NULL,NULL),(5,'Cafe Colombia',250,'Se trata de una variante de grano 100% arábica. Una de las principales características de este café, es que se siembra a grandes alturas, principalmente en zonas montañosas. ',500.00,'molido','destacado','cafeColombia.jpg',0,'A',NULL,NULL),(6,'Cafe Colombia',500,'Se trata de una variante de grano 100% arábica. Una de las principales características de este café, es que se siembra a grandes alturas, principalmente en zonas montañosas. ',980.00,'molido','normal','cafeColombia.jpg',0,'A',NULL,NULL),(7,'Cafe Mexico',250,'Café de especialidad mexicano, de cuerpo equilibrado y de acidez cítrica media. Cultivado a lo largo de la frontera sur, donde las montañas y las selvas le dan a las plantas los nutrientes y la altitud necesaria para un excelente café.',466.00,'molido','oferta','cafeMexico.jpg',0,'A',NULL,NULL),(8,'Cafe Mexico',500,'Café de especialidad mexicano, de cuerpo equilibrado y de acidez cítrica media. Cultivado a lo largo de la frontera sur, donde las montañas y las selvas le dan a las plantas los nutrientes y la altitud necesaria para un excelente café.',950.00,'molido','normal','cafeMexico.jpg',0,'A',NULL,NULL),(9,'Cafe El Salvador',250,'Café 100% El Salvador es un rico café de cuerpo completo con un sabor suave y sofisticado y un aroma intenso.',488.00,'molido','destacado','ElSalvador.jpg',0,'A',NULL,NULL),(10,'Cafe El Salvador',500,'Café 100% El Salvador es un rico café de cuerpo completo con un sabor suave y sofisticado y un aroma intenso.',899.00,'molido','normal','ElSalvador.jpg',0,'A',NULL,NULL),(11,'Cafe Honduras',250,'Se trata de una variante de grano 100% arábica. Se caracteriza por ser más aromático, equilibrado y con una acidez muy agradable. En comparación con el robusta, tiene menos cafeína, entre un 0,7- 1,5%. El nivel de cafeína del robusta oscila entre 2 y 4% o más. Es, sin duda, un café muy elegante con un perfecto equilibrio entre sabor y cuerpo. En el caso del café descafeinado de este tipo de grano, el porcentaje se reduce al mínimo, lo que hace que puedas disfrutar del café hasta por la noche.',399.00,'molido','normal','CafeHonduras.jpg',0,'A',NULL,NULL),(12,'Cafe Honduras',500,'Se trata de una variante de grano 100% arábica. Se caracteriza por ser más aromático, equilibrado y con una acidez muy agradable. En comparación con el robusta, tiene menos cafeína, entre un 0,7- 1,5%. El nivel de cafeína del robusta oscila entre 2 y 4% o más. Es, sin duda, un café muy elegante con un perfecto equilibrio entre sabor y cuerpo. En el caso del café descafeinado de este tipo de grano, el porcentaje se reduce al mínimo, lo que hace que puedas disfrutar del café hasta por la noche.',399.00,'molido','normal','CafeHonduras.jpg',0,'A',NULL,NULL),(13,'Pack Trio Varios Paises',500,'Pack compuesto por 250 de Café Colombia, 250 de Café Brasil y 250 de Cafe Etiopia. Se sumo café de Costa Rica.\r\nSigo agregando cosas aca. Sigoooooo',1500.00,'molido','oferta','OfertaPackTrio.jpg',0,'A',NULL,NULL),(14,'Pack Trio',500,'Pack compuesto por 500 de Cafe Colombia, 500 de Cafe Brasil y 500 de Cafe Etiopia',2699.00,'molido','oferta','OfertaPackTrio.jpg',0,'A',NULL,NULL),(15,'Cafe Alajuela',3000,'Es un cafe de Alajuela que sube por el norte',500.00,'granos','normal','imagenCafeAlajuela.jpg',0,'A',NULL,NULL),(16,'Cafe Tarrazu',1000,'Es un cafe de montaña',3000.00,'molido','normal','imagencafeCostaRica.JPG',0,'A',NULL,NULL),(17,'Café Salvador Cápsulas',10,'Café Salvador en cápsulas.Cantidad: 16 unidades.',1600.00,'Capsulas','normal','imagencapsula3.jpg',0,'A',NULL,NULL),(18,'Café Honduras',10,'Café Honduras en cápsulas.Cantidad: 16 unidades.',1600.00,'Capsulas','destacado','imagenCapHonduras.jpeg',0,'A',NULL,NULL),(19,'Café Brasil',1000,'El café de Brasil corresponde a la variedad arábica, por ello predomina el sabor dulzón, similar a los cafés procedentes de África, aunque sin la acidez característica de estos. El café de Brasil se caracteriza por su aroma suave y fino y cuerpo alto.',3000.00,'granos','normal','CafeBrasilGrano.jpg',0,'A',NULL,NULL),(20,'Cafe Honduras',1000,'Se trata de una variante de grano 100% arábica. Se caracteriza por ser más aromático, equilibrado y con una acidez muy agradable. En comparación con el robusta, tiene menos cafeína, entre un 0,7- 1,5%. El nivel de cafeína del robusta oscila entre 2 y 4% o más. Es, sin duda, un café muy elegante con un perfecto equilibrio entre sabor y cuerpo. En el caso del café descafeinado de este tipo de grano, el porcentaje se reduce al mínimo, lo que hace que puedas disfrutar del café hasta por la noche.',3000.00,'granos','normal','CafeHonduraGranos.png',0,'A',NULL,NULL),(21,'café01',1000,'café',1000.00,'molido','normal','imagenCafeBrasilGrano.jpg',0,'D',NULL,'2022-07-24 10:55:19'),(22,'café02',1000,'café',1000.00,'granos','normal','bolsa 3.jpg',0,'D',NULL,'2022-07-21 11:32:22'),(23,'café03',1000,'café',1000.00,'granos','normal','bolsa 3.jpg',0,'D',NULL,'2022-07-21 11:32:15'),(24,'café04',1000,'café',1000.00,'granos','normal','bolsa 3.jpg',0,'D',NULL,'2022-07-21 11:32:08'),(25,'café05',1000,'café',1000.00,'molido','normal','imagebolsa 3.jpg',0,'D',NULL,'2022-07-25 11:18:26'),(26,'Café de los Andes',250,'Este café tiene su origen en las cumbres de la cordillera de los Andes. Su caso especial hace que posea un aroma tan fuerte como peculiar. Se centra en la región del norte del Perú pero llega hasta Ecuador. Solo podrán apreciarlo los paladares más refinados.',2000.00,'molido','normal','imagedeLosAndes.png',0,'A','2022-07-24 10:59:10','2022-07-25 11:12:35'),(27,'café chico',1000,'café de alto sabor',100.00,'molido','normal','imagebolsa 4.jpeg',0,'D','2022-07-25 11:19:43','2022-07-25 12:20:17'),(28,'cafe grande',10000,'café de alta calidad',2000.00,'En Granos','normal','imagebolsa 5.jpg',0,'D','2022-07-25 12:20:58','2022-07-25 12:21:10');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_purchases`
--

DROP TABLE IF EXISTS `products_purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_purchases` (
  `id` int NOT NULL,
  `products_id` int NOT NULL,
  `purchases_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productos_compras_productos_id_foreign_idx` (`products_id`),
  KEY `productos_compras_compras_id_foreign_idx` (`purchases_id`),
  CONSTRAINT `products_purchases_products_id_foreign` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  CONSTRAINT `products_purchases_purchases_id_foreign` FOREIGN KEY (`purchases_id`) REFERENCES `purchases` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_purchases`
--

LOCK TABLES `products_purchases` WRITE;
/*!40000 ALTER TABLE `products_purchases` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_purchases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchases`
--

DROP TABLE IF EXISTS `purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchases` (
  `id` int NOT NULL,
  `invoice_num` int NOT NULL,
  `invoice_date` date DEFAULT NULL,
  `username` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `prod_name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `prod_price` decimal(10,2) DEFAULT NULL,
  `total_amt` decimal(10,2) DEFAULT NULL,
  `users_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `compras_usuario_id_foreign_idx` (`users_id`),
  KEY `purchases_users_id_foreign_idx` (`users_id`),
  CONSTRAINT `purchases_users_id_foreign` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchases`
--

LOCK TABLES `purchases` WRITE;
/*!40000 ALTER TABLE `purchases` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rols` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rol_name` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8_bin DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `rols_id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'user',NULL,NULL),(2,'admin',NULL,NULL),(3,'guest',NULL,NULL);
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `birth_date` date DEFAULT NULL,
  `password` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `confirm_password` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` varchar(5) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL DEFAULT 'A',
  `rols_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_rols_id_foreign_idx` (`rols_id`),
  CONSTRAINT `users_rols_id_foreign` FOREIGN KEY (`rols_id`) REFERENCES `rols` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Almeda','Shieber','ashieber0','ashieber0@mayoclinic.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(2,'Robena','Hentzeler','rhentzeler1','rhentzeler1@ocn.ne.jp','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(3,'Darelle','Brogiotti','dbrogiotti2','dbrogiotti2@behance.net','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(4,'Paulo','Hutley','phutley3','phutley3@gravatar.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(5,'Lacee','Durrell','ldurrell4','ldurrell4@goo.gl','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(6,'Melamie','Bofield','mbofield5','mbofield5@i2i.jp','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(7,'Dorri','Riseborough','driseborough6','driseborough6@instagram.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(8,'Michaella','Narramore','mnarramore7','mnarramore7@mediafire.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(9,'Gothart','Prestidge','gprestidge8','gprestidge8@rambler.ru','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(10,'Herbert','Skrzynski','hskrzynski9','hskrzynski9@amazon.co.jp','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(11,'Sianna','Landrieu','slandrieua','slandrieua@vinaora.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(12,'Zonda','Di Franceshci','zdifranceshcib','zdifranceshcib@goodreads.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(13,'Ronny','Sleith','rsleithc','rsleithc@scientificamerican.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(14,'Conroy','Geratt','cgerattd','cgerattd@japanpost.jp','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(15,'Giffy','Boggas','gboggase','gboggase@cocolog-nifty.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(16,'Justen','Brooking','jbrookingf','jbrookingf@ifeng.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(17,'Vincents','Jorn','vjorng','vjorng@oaic.gov.au','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(18,'Philly','Cowlam','pcowlamh','pcowlamh@angelfire.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(19,'Zorina','Folonin','zfolonini','zfolonini@ox.ac.uk','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(20,'Regine','Artinstall','rartinstallj','rartinstallj@omniture.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(21,'Benjamen','Marler','bmarlerk','bmarlerk@samsung.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(22,'Lorraine','Fripps','lfrippsl','lfrippsl@godaddy.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(23,'Konstantin','McKitterick','kmckitterickm','kmckitterickm@mashable.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(24,'Nanon','Headford','nheadfordn','nheadfordn@sourceforge.net','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(25,'Hill','Isbell','hisbello','hisbello@berkeley.edu','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(26,'Darb','Thunders','dthundersp','dthundersp@phpbb.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(27,'Demetra','Horlick','dhorlickq','dhorlickq@4shared.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(28,'Ignazio','Kattenhorn','ikattenhornr','ikattenhornr@prweb.com','0000-00-00','pNalKjyJ','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','TortorSollicitudin.xls','A',NULL,NULL,NULL),(29,'Harriett','Yacobsohn','hyacobsohns','hyacobsohns@cbc.ca','0000-00-00','2WRTkYQP','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','UtOdioCras.xls','A',NULL,NULL,NULL),(30,'Frankie','Celier','fceliert','fceliert@latimes.com','0000-00-00','3XQqalbIUo','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','AmetEratNulla.avi','A',NULL,NULL,NULL),(31,'Luis','Martirena','danubio','luismartirena@yahoo.com','2022-05-31','$2a$10$fYTNSQER4W34pVQLeRHs3ub/D/Y1Lzvgflvp0e1IyvbxUCiN5qOBC','$2a$10$vfBhX6Dqnymv0Ij68O7NZuiiFN9JtcKCCjZR4DzBu7e7ayr63IVw6','1655171535756_img.JPG','A',NULL,NULL,NULL),(32,'Damian','Muracciole','damianmuracciole','damian@email.com','1999-06-23','$2a$10$dCZskVoqtZne3HgprcKIhepYWYRzYF9FuK1sJq1d8ZEzzQIzO.jCe','$2a$10$VHUk99hAZufzaHC07mr8UOZ2R87BOETlfzdSg/hKJEH3NWBAg9Du2','1655985316685_img.jpg','A',NULL,NULL,NULL),(35,'Damian','Muracciole','damianmuracciole','dami@email.com','1999-06-23','$2a$10$dCZskVoqtZne3HgprcKIhepYWYRzYF9FuK1sJq1d8ZEzzQIzO.jCe','$2a$10$VHUk99hAZufzaHC07mr8UOZ2R87BOETlfzdSg/hKJEH3NWBAg9Du2','1655985316685_img.jpg','D',NULL,NULL,NULL),(36,'Damian','Muracciole','damianmuracciole','dami@email.com','1999-06-23','$2a$10$dCZskVoqtZne3HgprcKIhepYWYRzYF9FuK1sJq1d8ZEzzQIzO.jCe','$2a$10$VHUk99hAZufzaHC07mr8UOZ2R87BOETlfzdSg/hKJEH3NWBAg9Du2','1655985316685_img.jpg','D',NULL,NULL,NULL),(37,'damian','muracciole','damian','damian@mail.com','1999-07-20','$2a$10$zUMpriH8TN2Ip7mS6tWKD.CsveM/QyGfu5KrImSqxZQpP/tsh//Li','$2a$10$csI5WNBBtPpAjWK54jNgY.Y4JpaNNm7FzIldJbug8EuoL.3zc5TYu','1658404378849_img.jpg','D',NULL,'2022-07-21 11:52:59','2022-07-21 11:52:59'),(38,'Damian','Mura','Damian','damian@mail.com','1984-07-04','$2a$10$5D0c6lcXBLCbC4yU1nAZdeo7H0vsrjCHI974TXMr2K9wSfA/NbXW.','$2a$10$Pa9nOGhJnfJNelTeyDh6ze6ATU23Bybtvis1igt/KdNTTDJLnZDxi','1658706848673_img.jpg','A',NULL,'2022-07-24 23:54:08','2022-07-24 23:54:08');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'cafearte_db'
--

--
-- Dumping routines for database 'cafearte_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-25 21:42:14
