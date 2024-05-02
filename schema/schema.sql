-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           11.3.2-MariaDB - mariadb.org binary distribution
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour myclassroom
DROP DATABASE IF EXISTS `myclassroom`;
CREATE DATABASE IF NOT EXISTS `myclassroom` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `myclassroom`;

-- Listage de la structure de la table myclassroom. bulletin
DROP TABLE IF EXISTS `bulletin`;
CREATE TABLE IF NOT EXISTS `bulletin` (
  `id_bulletin` int(11) NOT NULL,
  `commentaire` varchar(255) DEFAULT NULL,
  `moyenneep` double NOT NULL,
  `moyenne_francais` double NOT NULL,
  `moyenne_histoire` double NOT NULL,
  `moyenne_math` double NOT NULL,
  PRIMARY KEY (`id_bulletin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table myclassroom.bulletin : ~0 rows (environ)
INSERT INTO `bulletin` (`id_bulletin`, `commentaire`, `moyenneep`, `moyenne_francais`, `moyenne_histoire`, `moyenne_math`) VALUES
	(2, NULL, 0, 0, 0, 0);

-- Listage de la structure de la table myclassroom. bulletin_seq
DROP TABLE IF EXISTS `bulletin_seq`;
CREATE TABLE IF NOT EXISTS `bulletin_seq` (
  `next_not_cached_value` bigint(21) NOT NULL,
  `minimum_value` bigint(21) NOT NULL,
  `maximum_value` bigint(21) NOT NULL,
  `start_value` bigint(21) NOT NULL COMMENT 'start value when sequences is created or value if RESTART is used',
  `increment` bigint(21) NOT NULL COMMENT 'increment value',
  `cache_size` bigint(21) unsigned NOT NULL,
  `cycle_option` tinyint(1) unsigned NOT NULL COMMENT '0 if no cycles are allowed, 1 if the sequence should begin a new cycle when maximum_value is passed',
  `cycle_count` bigint(21) NOT NULL COMMENT 'How many cycles have been done'
) ENGINE=InnoDB SEQUENCE=1;

-- Listage des données de la table myclassroom.bulletin_seq : ~1 rows (environ)
INSERT INTO `bulletin_seq` (`next_not_cached_value`, `minimum_value`, `maximum_value`, `start_value`, `increment`, `cache_size`, `cycle_option`, `cycle_count`) VALUES
	(101, 1, 9223372036854775806, 1, 50, 0, 0, 0);

-- Listage de la structure de la table myclassroom. eleve
DROP TABLE IF EXISTS `eleve`;
CREATE TABLE IF NOT EXISTS `eleve` (
  `student_id` int(11) NOT NULL,
  `genre` char(1) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `nom_figure_parentale` varchar(255) DEFAULT NULL,
  `num_tel_parentale` int(11) NOT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `bulletin_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `UK_mxi3n1rhuq1ohfhqe4mbowt4b` (`bulletin_id`),
  CONSTRAINT `FKowj1sdp6kxp6solcbhs9kei2p` FOREIGN KEY (`bulletin_id`) REFERENCES `bulletin` (`id_bulletin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table myclassroom.eleve : ~0 rows (environ)
INSERT INTO `eleve` (`student_id`, `genre`, `nom`, `nom_figure_parentale`, `num_tel_parentale`, `prenom`, `bulletin_id`) VALUES
	(2, 'f', 'sd', 'sd', 14515445, 's', 2);

-- Listage de la structure de la table myclassroom. eleve_seq
DROP TABLE IF EXISTS `eleve_seq`;
CREATE TABLE IF NOT EXISTS `eleve_seq` (
  `next_not_cached_value` bigint(21) NOT NULL,
  `minimum_value` bigint(21) NOT NULL,
  `maximum_value` bigint(21) NOT NULL,
  `start_value` bigint(21) NOT NULL COMMENT 'start value when sequences is created or value if RESTART is used',
  `increment` bigint(21) NOT NULL COMMENT 'increment value',
  `cache_size` bigint(21) unsigned NOT NULL,
  `cycle_option` tinyint(1) unsigned NOT NULL COMMENT '0 if no cycles are allowed, 1 if the sequence should begin a new cycle when maximum_value is passed',
  `cycle_count` bigint(21) NOT NULL COMMENT 'How many cycles have been done'
) ENGINE=InnoDB SEQUENCE=1;

-- Listage des données de la table myclassroom.eleve_seq : ~1 rows (environ)
INSERT INTO `eleve_seq` (`next_not_cached_value`, `minimum_value`, `maximum_value`, `start_value`, `increment`, `cache_size`, `cycle_option`, `cycle_count`) VALUES
	(101, 1, 9223372036854775806, 1, 50, 0, 0, 0);

-- Listage de la structure de la table myclassroom. prof
DROP TABLE IF EXISTS `prof`;
CREATE TABLE IF NOT EXISTS `prof` (
  `prof_id` int(11) NOT NULL,
  `classe_primaire` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `genre` char(1) NOT NULL,
  `mot_de_passe` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`prof_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table myclassroom.prof : ~1 rows (environ)
INSERT INTO `prof` (`prof_id`, `classe_primaire`, `email`, `genre`, `mot_de_passe`, `nom`, `prenom`) VALUES
	(1, 3, 'maindy@gmail.com', 'M', '1234', 'Goue', 'Maindy');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
