-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 06 Noi 2017 la 15:35
-- Versiune server: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quizradar`
--

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `quiztable`
--

CREATE TABLE `quiztable` (
  `id` int(11) NOT NULL,
  `question` varchar(100) NOT NULL,
  `answers` varchar(1000) NOT NULL,
  `correct` text NOT NULL,
  `category` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Salvarea datelor din tabel `quiztable`
--

INSERT INTO `quiztable` (`id`, `question`, `answers`, `correct`, `category`) VALUES
(1, 'In ce an se instituie primul impozit pe teren din China?', '[\"294 i.Hr.\", \"594 i.Hr.\", \"423 i.Hr\"]', '1', 'Istorie'),
(2, 'In ce perioada regele Ezechia amenajeaza la Ierusalim sistemul de alimentare cu apa?', '[\"cca 710 i.H\", \"cca 810 i.H\", \"cca 610 i.H\"]', '0', 'Istorie'),
(6, 'Razboiul de treizeci de ani (1618-1648) are loc pe teren:', '[\"francez\", \"german\", \"austriac\"]', '1', 'Istorie'),
(10, 'Care sintaxa CSS este corecta?', '[\"body {color:blue;}\", \"{body:color=blue;}\",\"body:color=blue;\"]', '0', 'IT'),
(11, 'JSON este:', '[\"librarie\", \"obiect\", \"framework\"]', '1', 'IT'),
(13, 'Ce imparat a comandat constructia Colosseumului in anul 80 d.Hr. ?', '[\"Titus\", \"Nero\", \"Vespasian\"]', '2', 'Istorie'),
(14, 'In ce an hunii sunt invinsi de alianta trupelor germanice si ale imperiului roman de Apus', '[\"451 d.Hr.\", \"387d.Hr.\", \"528 d.Hr\"]', '0', 'Istorie'),
(15, 'Cum se creaza o functie in JavaScript?', '[\"function:myFunction()\", \"function = myFunction()\", \"function myFunction()\"]', '1', 'IT'),
(16, 'In SQL, cum se selecteaza coloana \"Prenume\" din tabelul numit \"Agenda\" ?', '[\"SELECT Agenda.Prenume\", \"SELECT Prenume FROM Agenda\", \"MARK Prenume FROM Agenda\"]', '1', 'IT'),
(17, 'Care simbol este folosit ca o scurtatura pentru jQuery', '[\"simbolul ?\", \"simbolul $\", \"simbolul %\"]', '1', 'IT'),
(18, 'Binomul lui Newton este denumirea formulei pentru ridicarea la o anumitÄƒ putere naturalÄƒ a unui bi', '[\"Fals\", \"Adevarat\"]', '1', 'Matematica'),
(19, 'In orice triunghi, o paralelÄƒ la o latura, imparte celelalte doua laturi in:', '[\"segmente proportionale\", \"segmente egale\", \"segmente inversproportionale\"]', '0', 'Matematica'),
(20, 'Care este rezultatul (4*7/2)^2=', '[\"216\", \"196\", \"188\"]', '1', 'Matematica'),
(21, 'Radical din 1048576', '[\"1024\", \"1048\", \"1204\"]', '1', 'Matematica'),
(22, '40x4-17', '[\"154\", \"168\". \"143\"]', '2', 'Matematica');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `quiztable`
--
ALTER TABLE `quiztable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `quiztable`
--
ALTER TABLE `quiztable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
