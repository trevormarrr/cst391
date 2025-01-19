DROP DATABASE IF EXISTS music;
CREATE DATABASE  IF NOT EXISTS `music` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `music`;
-- MySQL dump 10.13  Distrib 5.7.26, for osx10.10 (x86_64)
--
-- Host: localhost    Database: music
-- ------------------------------------------------------
-- Server version	5.7.26

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
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `albums` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `artist` varchar(100) NOT NULL,
  `year` int(11) NOT NULL,
  `image` varchar(300) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES 
	(1,'Revolver','The Beatles',1966,'https://m.media-amazon.com/images/I/91ffeWzPNpL._SL1500_.jpg','Revolver is the seventh studio albums by the English rock band the Beatles. Released on 5 August 1966, it was the Beatles\' final recording project before their retirement as live performers and marked the group\'s most overt use of studio technology up to that time, building on the advances of their late 1965 release Rubber Soul.'),
	(3,'Rubber Soul','The Beatles',1965,'https://m.media-amazon.com/images/I/81EF5zXRFdL._SL1500_.jpg','Rubber Soul is the sixth studio albums by the English rock band the Beatles. It was released on 3 December 1965 in the United Kingdom, on EMI\'s Parlophone label, accompanied by the non-albums double A-side single \"Day Tripper\" / \"We Can Work It Out\".'),
    (4,'Please Please Me','The Beatles',1963,'https://m.media-amazon.com/images/I/61LdKbic+wL.jpg','Please Please Me is the debut studio albums by the English rock band the Beatles.'),
    (5,'With the Beatles','The Beatles',1963,'https://upload.wikimedia.org/wikipedia/en/0/0a/Withthebeatlescover.jpg','With the Beatles is the second studio albums by the English rock band the Beatles.'),
    (6,'A Hard Day\'s Night','The Beatles',1964,'https://upload.wikimedia.org/wikipedia/en/e/e6/HardDayUK.jpg','A Hard Day\'s Night is the third studio albums by the English rock band the Beatles, released on 10 July 1964, with side one containing songs from the soundtracks to their film of the same name.'),
    (7,'Help!','The Beatles',1965,'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Help%21_%28The_Beatles_album_-_cover_art%29.jpg/220px-Help%21_%28The_Beatles_album_-_cover_art%29.jpg','Help! is the fifth studio albums by English rock band the Beatles and the soundtracks from their film Help!. It was released on 6 August 1965.'),
    (8,'Sgt. Pepper\'s Lonely Hearts Club Band','The Beatles',1967,'https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg?20210405225837','Sgt. Pepper\'s Lonely Hearts Club Band is the eighth studio albums by the English rock band the Beatles. Released on 26 May 1967 in the United Kingdom[nb 1] and 2 June 1967 in the United States, it spent 27 weeks at number one on the UK albumss Chart and 15 weeks at number one in the US.'),
    (9,'Magical Mystery Tour','The Beatles',1967,'https://upload.wikimedia.org/wikipedia/en/e/e8/MagicalMysteryTourDoubleEPcover.jpg','Magical Mystery Tour is an albums by the English rock band the Beatles that was released as a double EP in the United Kingdom and an LP in the United States.'),
    (10,'The Beatles (White albums)','The Beatles',1968,'https://upload.wikimedia.org/wikipedia/commons/2/20/TheBeatles68LP.jpg','The Beatles, also known as \"The White albums\", is the ninth studio albums by the English rock band the Beatles, released on 22 November 1968.'),
    (11,'Yellow Submarine','The Beatles',1969,'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/TheBeatles-YellowSubmarinealbumcover.jpg/220px-TheBeatles-YellowSubmarinealbumcover.jpg','Yellow Submarine is the tenth studio albums by English rock band the Beatles, released on 13 January 1969 in the United States and on 17 January 1969 in the United Kingdom.'),
    (12,'Abbey Road','The Beatles',1969,'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg','Abbey Road is the eleventh studio albums by English rock band the Beatles, released on 26 September 1969 by Apple Records. The recording sessions for the albums were the last in which all four Beatles participated.'),
    (13,'Let It Be','The Beatles',1970,'https://upload.wikimedia.org/wikipedia/en/2/25/LetItBe.jpg?20210101011032','Let It Be is the twelfth and final studio albums by the English rock band the Beatles. It was released on 8 May 1970, almost a month after the group\'s break-up.');
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tracks`
--

DROP TABLE IF EXISTS `tracks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tracks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `album_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `number` int(11) NOT NULL,
  `video_url` varchar(250) DEFAULT NULL,
  `lyrics` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `album_id_FK_idx` (`album_id`),
  CONSTRAINT `albums_id_FK` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=190 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tracks`
--

LOCK TABLES `tracks` WRITE;
/*!40000 ALTER TABLE `tracks` DISABLE KEYS */;
INSERT INTO `tracks` VALUES (1,1,'Taxman',1,NULL,NULL),(2,1,'Eleanor Rigby',2,NULL,NULL),(3,1,'I\'m Only Sleeping',3,NULL,NULL),(4,1,'Love You To',4,NULL,NULL),(5,1,'Here, There and Everywhere',5,NULL,NULL),(6,1,'Yellow Submarine',6,NULL,NULL),(7,1,'She Said She Said',7,NULL,NULL),(8,1,'Good Day Sunshine',8,NULL,NULL),(9,1,'And Your Bird Can Sing',9,NULL,NULL),(10,1,'For No One',10,NULL,NULL),(11,1,'Doctor Robert',11,NULL,NULL),(12,1,'I Want to Tell You',12,NULL,NULL),(13,1,'Got to Get You into My Life',13,NULL,NULL),(14,1,'Tomorrow Never Knows',14,NULL,NULL),(27,3,'I\'ve Just Seen a Face',1,NULL,NULL),(28,3,'Norwegian Wood (This Bird Has Flown)',2,NULL,NULL),(29,3,'You Won\'t See Me',3,NULL,NULL),(30,3,'Think for Yourself',4,NULL,NULL),(31,3,'The Word',5,NULL,NULL),(32,3,'Michelle',6,NULL,NULL),(33,3,'It\'s Only Love',7,NULL,NULL),(34,3,'Girl',8,NULL,NULL),(35,3,'I\'m Looking Through You',9,NULL,NULL),(36,3,'In My Life',10,NULL,NULL),(37,3,'Wait',11,NULL,NULL),(38,3,'Run for Your Life',12,NULL,NULL),(39,4,'I Saw Her Standing There',1,NULL,''),(40,4,'Misery',2,NULL,''),(41,4,'Anna (Go to Him)',3,NULL,''),(42,4,'Chains',4,NULL,''),(43,4,'Boys',5,NULL,''),(44,4,'Ask Me Why',6,NULL,''),(45,4,'Please Please M',7,NULL,''),(46,4,'Love Me Do',8,NULL,''),(47,4,'P.S. I Love You',9,NULL,''),(48,4,'Baby It\'s You',10,NULL,''),(49,4,'Do You Want to Know a Secret',11,NULL,''),(50,4,'A Taste of Honey',12,NULL,''),(51,4,'There\'s a Place',13,NULL,''),(52,4,'Twist and Shout',14,NULL,''),(53,5,'It Won\'t Be Long',1,NULL,''),(54,5,'All I\'ve Got to Do',2,NULL,''),(55,5,'All My Loving',3,NULL,''),(56,5,'Don\'t Bother Me',4,NULL,''),(57,5,'Little Child',5,NULL,''),(58,5,'Till There Was You',6,NULL,''),(59,5,'Please Mr. Postman',7,NULL,''),(60,5,'Roll Over Beethoven',8,NULL,''),(61,5,'Hold Me Tight',9,NULL,''),(62,5,'You Really Got a Hold on Me',10,NULL,''),(63,5,'I Wanna Be Your Man',11,NULL,''),(64,5,'Devil in Her Heart',12,NULL,''),(65,5,'Not a Second Time',13,NULL,''),(66,5,'Money (That\'s What I Want)',14,NULL,''),(67,6,'A Hard Day\'s Night',1,NULL,''),(68,6,'I Should Have Known Better',2,NULL,''),(69,6,'If I Fell',3,NULL,''),(70,6,'I\'m Happy Just to Dance with You',4,NULL,''),(71,6,'And I Love Her',5,NULL,''),(72,6,'Tell Me Why',6,NULL,''),(73,6,'Can\'t Buy Me Love',7,NULL,''),(74,6,'Any Time at All',8,NULL,''),(75,6,'I\'ll Cry Instead',9,NULL,''),(76,6,'Things We Said Today',10,NULL,''),(77,6,'When I Get Home',11,NULL,''),(78,6,'You Can\'t Do That',12,NULL,''),(79,6,'I\'ll Be Back',13,NULL,''),(80,7,'Help!',1,NULL,''),(81,7,'The Night Before',2,NULL,''),(82,7,'You\'ve Got to Hide Your Love Away',3,NULL,''),(83,7,'I Need You',4,NULL,''),(84,7,'Another Girl',5,NULL,''),(85,7,'You\'re Going to Lose That Girl',6,NULL,''),(86,7,'Ticket to Ride',7,NULL,''),(87,7,'Act Naturally',8,NULL,''),(88,7,'It\'s Only Love',9,NULL,''),(89,7,'You Like Me Too Much',10,NULL,''),(90,7,'Tell Me What You See',11,NULL,''),(91,7,'I\'ve Just Seen a Face',12,NULL,''),(92,7,'Yesterday',13,NULL,''),(93,7,'Dizzy Miss Lizzy',14,NULL,''),(94,8,'Sgt. Pepper\'s Lonely Hearts Club Band',1,NULL,''),(95,8,'With a Little Help from My Friends',2,NULL,''),(96,8,'Lucy in the Sky with Diamonds',3,NULL,''),(97,8,'Getting Better',4,NULL,''),(98,8,'Fixing a Hole',5,NULL,''),(99,8,'She\'s Leaving Home',6,NULL,''),(100,8,'Being for the Benefit of Mr. Kite!',7,NULL,''),(101,8,'Within You Without You',8,NULL,''),(102,8,'When I\'m Sixty-Four',9,NULL,''),(103,8,'Lovely Rita',10,NULL,''),(104,8,'Good Morning Good Morning',11,NULL,''),(105,8,'Sgt. Pepper\'s Lonely Hearts Club Band (Reprise)',12,NULL,''),(106,8,'A Day in the Life',13,NULL,''),(107,9,'Magical Mystery Tour',1,NULL,''),(108,9,'The Fool on the Hill',2,NULL,''),(109,9,'Flying',3,NULL,''),(110,9,'Blue Jay Way',4,NULL,''),(111,9,'Your Mother Should Know',5,NULL,''),(112,9,'I Am the Walrus',6,NULL,''),(113,9,'Hello, Goodbye',7,NULL,''),(114,9,'Strawberry Fields Forever',8,NULL,''),(115,9,'Penny Lane',9,NULL,''),(116,9,'Baby, You\'re a Rich Man',10,NULL,''),(117,9,'All You Need Is Love',11,NULL,''),(118,10,'Back in the U.S.S.R.',1,NULL,''),(119,10,'Dear Prudence',2,NULL,''),(120,10,'Glass Onion',3,NULL,''),(121,10,'Ob-La-Di, Ob-La-Da',4,NULL,''),(122,10,'Wild Honey Pie',5,NULL,''),(123,10,'The Continuing Story of Bungalow Bill',6,NULL,''),(124,10,'While My Guitar Gently Weeps',7,NULL,''),(125,10,'Happiness Is a Warm Gun',8,NULL,''),(126,10,'Martha My Dear',9,NULL,''),(127,10,'I\'m So Tired',10,NULL,''),(128,10,'Blackbird',11,NULL,''),(129,10,'Piggies',12,NULL,''),(130,10,'Rocky Raccoon',13,NULL,''),(131,10,'Don\'t Pass Me By',14,NULL,''),(132,10,'Why Don\'t We Do It in the Road?',15,NULL,''),(133,10,'I Will',16,NULL,''),(134,10,'Julia',17,NULL,''),(135,10,'Birthday',18,NULL,''),(136,10,'Yer Blues',19,NULL,''),(137,10,'Mother Nature\'s Son',20,NULL,''),(138,10,'Everybody\'s Got Something to Hide Except Me and My Monkey',21,NULL,''),(139,10,'Sexy Sadie',22,NULL,''),(140,10,'Helter Skelter',23,NULL,''),(141,10,'Long, Long, Long',24,NULL,''),(142,10,'Revolution 1',25,NULL,''),(143,10,'Honey Pie',26,NULL,''),(144,10,'Savoy Truffle',27,NULL,''),(145,10,'Cry Baby Cry',28,NULL,''),(146,10,'Revolution 9',29,NULL,''),(147,10,'Good Night',30,NULL,''),(148,11,'Yellow Submarine',1,NULL,''),(149,11,'Only a Northern Song',2,NULL,''),(150,11,'All Together Now',3,NULL,''),(151,11,'Hey Bulldog',4,NULL,''),(152,11,'It\'s All Too Much',5,NULL,''),(153,11,'All You Need Is Love',6,NULL,''),(154,11,'Pepperland',7,NULL,''),(155,11,'Sea of Time',8,NULL,''),(156,11,'Sea of Holes',9,NULL,''),(157,11,'Sea of Monsters',10,NULL,''),(158,11,'March of the Meanies',11,NULL,''),(159,11,'Pepperland Laid Waste',12,NULL,''),(160,11,'Yellow Submarine in Pepperland',13,NULL,''),(161,12,'Come Together',1,NULL,''),(162,12,'Something',2,NULL,''),(163,12,'Maxwell\'s Silver Hammer',3,NULL,''),(164,12,'Oh! Darling',4,NULL,''),(165,12,'Octopus\'s Garden',5,NULL,''),(166,12,'I Want You (She\'s So Heavy)',6,NULL,''),(167,12,'Here Comes the Sun',7,NULL,''),(168,12,'Because',8,NULL,''),(169,12,'You Never Give Me Your Money',9,NULL,''),(170,12,'Sun King',10,NULL,''),(171,12,'Mean Mr. Mustard',11,NULL,''),(172,12,'Polythene Pam',12,NULL,''),(173,12,'She Came In Through the Bathroom Window',13,NULL,''),(174,12,'Golden Slumbers',14,NULL,''),(175,12,'Carry That Weight',15,NULL,''),(176,12,'The End\"',16,NULL,''),(177,12,'Her Majesty',17,NULL,''),(178,13,'Two of Us',1,NULL,''),(179,13,'Dig a Pony',2,NULL,''),(180,13,'Across the Universe',3,NULL,''),(181,13,'I Me Mine',4,NULL,''),(182,13,'Dig It',5,NULL,''),(183,13,'Let It Be',6,NULL,''),(184,13,'Maggie Mae',7,NULL,''),(185,13,'I\'ve Got a Feeling',8,NULL,''),(186,13,'One After 909',9,NULL,''),(187,13,'The Long and Winding Road',10,NULL,''),(188,13,'For You Blue',11,NULL,''),(189,13,'Get Back',12,NULL,'');
/*!40000 ALTER TABLE `tracks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-21 12:48:15
