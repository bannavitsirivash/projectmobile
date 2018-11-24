-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2018 at 12:20 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quizgame`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

CREATE TABLE `answer` (
  `id` int(11) NOT NULL,
  `data_id` int(10) NOT NULL,
  `answer` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `answer`
--

INSERT INTO `answer` (`id`, `data_id`, `answer`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 4),
(4, 4, 3),
(5, 5, 4),
(6, 6, 3),
(7, 7, 2),
(8, 8, 1),
(9, 9, 4),
(10, 10, 1),
(11, 11, 2),
(12, 12, 4),
(13, 13, 1),
(14, 14, 2),
(15, 15, 2),
(16, 16, 4),
(17, 17, 3),
(18, 18, 1),
(19, 19, 4),
(20, 20, 4);

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE `data` (
  `id` int(11) NOT NULL,
  `proposition_game` varchar(256) NOT NULL,
  `choice_1` varchar(128) NOT NULL,
  `choice_2` varchar(128) NOT NULL,
  `choice_3` varchar(128) NOT NULL,
  `choice_4` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`id`, `proposition_game`, `choice_1`, `choice_2`, `choice_3`, `choice_4`) VALUES
(1, 'ประเทศไทยมีกี่จังหวัด', '77 จังหวัด', '70 จังหวัด', '76 จังหวัด', '75 จังหวัด '),
(2, 'แหล่งข้อมูลใดที่ให้ข้อมูลเป็นปัจจุบันมากที่สุด', 'อินเทอร์เน็ต', 'ห้องสมุด', 'หนังสือพิมพ์', 'หนังสือเรียน'),
(3, 'ถ้าต้องการคัดลอกข้อมูลบางส่วนของเว็บเพจไว้ใช้งาน ต้องใช้คำสั่งใด', 'Paste', 'Cut', 'Print', 'Copy'),
(4, 'ภาคใต้มีกี่จังหวัด', '13 จังหวัด', '10 จังหวัด', '14 จังหวัด', '15 จังหวัด'),
(5, 'ภาคเหนือมีกี่จังหวัด', '8จังหวัด', '7 จังหวัด', '10 จังหวัด', '9 จังหวัด'),
(6, 'กีฬาประเภทใดที่ใช้ในการแตะ', 'เปตอง ', 'บาส ', 'ฟุตบอล', 'ปิงปอง'),
(7, 'เพลง เยาวราช ใครเป็นคนร้อง', 'กวาง AB ', 'แมว จิรศักดิ์', 'ตูน Bodyslam', 'GTK'),
(8, 'ภาคอีสานมีกี่จังหวัด', '20 จังหวัด', '19 จังหวัด', '16 จังหวัด', '15 จังหวัด'),
(9, 'สถานที่ท่องเที่ยวใดอยู่ในจังหวัดสงขลา', 'ทะเลน้อย', 'แหลมสมิหลา', 'เขาตังกวน', 'ถูกทั้งข้อ 2 และ 3 '),
(10, 'อักษรย่อของมหาวิทยาลัยสงขลานครินทร์ ข้อใดถูกต้อง', 'ม.อ.', 'มอ', 'ม.อ', 'มอ.'),
(11, 'นก ภาษาอังกฤษข้อใดเขียนถูกต้อง', 'brid', 'bird', 'birt', 'bite'),
(12, 'ชาวประมง ภาษาอังกฤษข้อใดถูกต้อง', 'fishmen', 'fitherman', 'fishman', 'fisherman'),
(13, 'ตำรวจ ภาษาอังกฤษข้อใดถูกต้อง', 'police', 'polic', 'polis', 'polist'),
(14, 'ประเทศอังกฤษเขียนเป็นภาษาอังกฤษว่าอะไร', 'English', 'England', 'Englend', 'Englent'),
(15, 'นกมีกี่ขา ', '3 ขา ', '2 ขา ', '4 ขา', 'ไม่มีสักขา'),
(16, '2+5  ได้เท่าไหร่', '8', '3', '6', '7'),
(17, '6+4+3', '11', '16', '13', '15'),
(18, 'ใบไม้มีสีอะไร', 'สีเขียว', 'สีแดง', 'สีดำ', 'สีส้ม'),
(19, 'ทำ-มะ-ชาด ข้อใดเขียนถูกต้อง', 'ธรรมะชาด', 'ธัมมะชาต', 'ธัมมชาติ', 'ธรรมชาติ'),
(20, 'ข้อใดมีชีวิต', 'ก้อนหิน', 'ขนนก', 'แม่น้ำ', 'นก');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answer`
--
ALTER TABLE `answer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `data`
--
ALTER TABLE `data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
