-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.3.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
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


-- Dumping database structure for workout
CREATE DATABASE IF NOT EXISTS `workout` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `workout`;

-- Dumping structure for table workout.exercises
CREATE TABLE IF NOT EXISTS `exercises` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `workout` varchar(50) DEFAULT NULL,
  `reps` varchar(50) DEFAULT NULL,
  `sets` varchar(50) DEFAULT NULL,
  `weight` varchar(50) DEFAULT NULL,
  `lastupdate` varchar(50) DEFAULT NULL,
  `setday` varchar(50) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table workout.exercises: ~30 rows (approximately)
REPLACE INTO `exercises` (`id`, `workout`, `reps`, `sets`, `weight`, `lastupdate`, `setday`, `image`) VALUES
	(2, 'Leg press', '12', '3', '230ib', '10/20/22', 'Monday', 'LegPress.jpg'),
	(5, 'rear delts', '12', '3', '50lb', '10/22/23', 'Wednesday', NULL),
	(6, 'bench press', '12', '3', '50lb', '10/21/21', 'Thursday', 'BenchPress.jpg'),
	(7, 'calf Machine', '12', '3', '110ib', '10/21/21', 'Friday', NULL),
	(8, 'crunches', '50', '2', 'body weight', '10/21/21', 'monday', NULL),
	(9, 'push-ups', '20', '3', 'body weight', '10/21/21', 'Monday', NULL),
	(10, 'lunges', '15', '4', 'body weight', '10/21/21', 'Wednesday', NULL),
	(11, 'planks', '1 minute', '3', 'body weight', '10/21/21', 'Friday', NULL),
	(12, 'bicep curls', '12', '4', '30ib', '10/21/21', 'Tuesday', NULL),
	(13, 'squats', '25', '3', 'body weight', '10/21/21', 'Thursday', NULL),
	(14, 'pull-ups', '10', '4', 'body weight', '10/21/21', 'Saturday', NULL),
	(15, 'burpees', '15', '3', 'body weight', '10/21/21', 'Sunday', NULL),
	(16, 'leg raises', '20', '3', 'body weight', '10/21/21', 'Thursday', NULL),
	(17, 'dips', '12', '3', 'body weight', '10/21/21', 'Monday', NULL),
	(18, 'Russian twists', '20', '3', 'body weight', '10/21/21', 'Wednesday', NULL),
	(19, 'Mountain climbers', '30 seconds', '4', 'body weight', '10/21/21', 'Friday', NULL),
	(20, 'Deadlifts', '8', '3', '170lb', '10/21/21', 'Sunday', NULL),
	(21, 'Seated leg curls', '12', '3', '90lb', '10/21/21', 'Thursday', NULL),
	(22, 'Shoulder presses', '10', '4', '25lb', '10/21/21', 'Wednesday', NULL),
	(23, 'Chin-ups', '8', '3', 'body weight', '10/21/21', 'Saturday', NULL),
	(25, 'Incline bench press', '10', '4', '155lb', '10/21/21', 'Sunday', NULL),
	(27, 'Barbell Shrugs', '15', '3', 'barbell', '10/21/21', 'Friday', NULL),
	(28, 'Front Raises', '12', '3', 'dumbbells', '10/21/21', 'Monday', NULL),
	(29, 'Side Leg Raises', '15', '4', 'body weight', '10/21/21', 'Sunday', NULL),
	(30, 'Step-ups', '12', '3', 'body weight', '10/21/21', 'Saturday', NULL),
	(31, 'Hammer Curls', '10', '3', '33lb', '10/21/21', 'Thursday', NULL),
	(32, 'Bicycle Crunches', '30', '4', 'body weight', '10/21/21', 'Tuesday', NULL),
	(33, 'Tricep Dips', '15', '3', 'body weight', '10/21/21', 'Friday', NULL),
	(34, 'Typing', '200', '1', 'hands', '10/22/23', 'monday', NULL),
	(38, 'test', '5', '3', '20lb', '12/12/23', 'monday', NULL);

-- Dumping structure for table workout.exercisetable
CREATE TABLE IF NOT EXISTS `exercisetable` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `workout` varchar(50) NOT NULL,
  `reps` tinyint(4) NOT NULL DEFAULT 0,
  `time` tinyint(4) NOT NULL DEFAULT 0,
  `sets` tinyint(4) NOT NULL DEFAULT 0,
  `weight` tinyint(4) NOT NULL DEFAULT 0,
  `createdDate` date NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table workout.exercisetable: ~1 rows (approximately)
REPLACE INTO `exercisetable` (`id`, `workout`, `reps`, `time`, `sets`, `weight`, `createdDate`, `image`) VALUES
	(1, 'dumbells', 1, 0, 1, 1, '2024-12-29', NULL);

-- Dumping structure for table workout.prevuserexercisedata
CREATE TABLE IF NOT EXISTS `prevuserexercisedata` (
  `workoutid` bigint(20) NOT NULL,
  `userid` varchar(50) DEFAULT NULL,
  `prevsets` varchar(50) DEFAULT NULL,
  `prevweight` varchar(50) DEFAULT NULL,
  `prevtime` varchar(50) DEFAULT NULL,
  `prevreps` varchar(50) DEFAULT NULL,
  `lastupdate` date DEFAULT NULL,
  KEY `workoutid` (`workoutid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table workout.prevuserexercisedata: ~1 rows (approximately)
REPLACE INTO `prevuserexercisedata` (`workoutid`, `userid`, `prevsets`, `prevweight`, `prevtime`, `prevreps`, `lastupdate`) VALUES
	(1, '1', '4', '15,12.5,12.5,10', NULL, '12,12,12,12', '2024-12-29');

-- Dumping structure for table workout.userexercisedata
CREATE TABLE IF NOT EXISTS `userexercisedata` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `workoutid` bigint(20) NOT NULL,
  `userid` bigint(20) NOT NULL,
  `plansets` varchar(50) DEFAULT NULL,
  `plantime` varchar(50) DEFAULT NULL,
  `planweight` varchar(50) DEFAULT NULL,
  `planreps` varchar(50) DEFAULT NULL,
  `setday` varchar(50) DEFAULT NULL,
  `lastupdate` date DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table workout.userexercisedata: ~1 rows (approximately)
REPLACE INTO `userexercisedata` (`id`, `workoutid`, `userid`, `plansets`, `plantime`, `planweight`, `planreps`, `setday`, `lastupdate`) VALUES
	(1, 1, 1, '4', '', '20,30,30,20', '12,12,12,12', 'monday', '2024-12-29');

-- Dumping structure for table workout.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL DEFAULT 0,
  `username` varchar(50) NOT NULL DEFAULT '',
  `password` varchar(50) NOT NULL DEFAULT '',
  `role` varchar(50) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table workout.users: ~1 rows (approximately)
REPLACE INTO `users` (`id`, `username`, `password`, `role`) VALUES
	(1, 'admin', 'admin', 'user');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
