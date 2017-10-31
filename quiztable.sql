-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 31 Oct 2017 la 22:25
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
(1, 'Cine a descoperit polii magnetici?', '[\"Piere de Maricourt\", \"Matei\", \"Costel\"]', '2', 'history'),
(2, 'Cand s-a impartit pamantul?', '[\"Pe vremea lui Peret\", \"Cand m-am nascut eu\", \"nerver\"]', '0', 'history'),
(3, 'Cat costa Iphone 8?', '[\"100 de lei\", \"4000 de lei\", \"1400 de lei\"]', '1', 'math'),
(6, 'Cat face 5x25?', '[\"100\", \"125\", \"75\"]', '1', 'math'),
(10, 'Ce inseamna CSS', '[\"Cascade Style Sheet\", \"Cascade Sheet Style\"]', '0', 'it'),
(11, 'JSON este:', '[\"librarie\", \"obiect\", \"framework\"]', '1', 'it');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
