-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2019 at 05:26 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jobthbid`
--

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `phone` varchar(225) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `company` varchar(225) NOT NULL,
  `website` varchar(225) NOT NULL,
  `location` varchar(225) NOT NULL,
  `bio` varchar(225) NOT NULL,
  `status` varchar(225) NOT NULL,
  `skills` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id`, `user_id`, `phone`, `address`, `created_at`, `updated_at`, `company`, `website`, `location`, `bio`, `status`, `skills`) VALUES
(1, 52, '7894561230', 'demo', '2019-12-17 17:48:48', '2019-12-17 18:48:48', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` tinyint(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `email`, `status`, `date`) VALUES
(46, 'ajeet test email', '$2a$10$w0z6KKRdiaUoMXFAnVOvYuhv4T0F1uvrlNy2AgfBxaLeA686JBGb6', 'rlepp@solomonsinnovation.com', 1, '2019-12-17 16:32:25'),
(52, 'ajeet', '$2a$10$D6C0q8JmshlCDQySm0yTkOLcfYGsjI76KRaplLxwnp6KzzgLxZJVa', 'akumar78@gmail.com', 1, '2019-12-17 16:32:25'),
(53, 'ajeet', '$2a$10$SkppGPNuHWJEEhV0ljR8T.Ijit1rKyDRohZMJntbaoAzPcFiJVf9a', 'akumar80@gmail.com', 1, '2019-12-17 16:33:15'),
(54, 'ajeet', '$2a$10$LFVrSzEIr2s5KKPlgRmNNuHxVM4LeMRj4lWDP3os9K16.Q/f7oZ/y', 'abc77@gmail.com', 1, '2019-12-17 19:46:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
