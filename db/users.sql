-- Adminer 4.7.7 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `assignee` varchar(255) NOT NULL,
  `assigneeID` varchar(255) NOT NULL,
  `summary` varchar(255) NOT NULL,
  `summaryID` int(11) NOT NULL,
  `summaryStatus` varchar(255) NOT NULL,
  `boardName` varchar(255) NOT NULL,
  `boardID` varchar(255) NOT NULL,
  `created_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`id`, `assignee`, `assigneeID`, `summary`, `summaryID`, `summaryStatus`, `boardName`, `boardID`, `created_at`) VALUES
(1,	'Viktorya Scherba',	'6061ba3695acf800717923bf',	'Issues like this one that are marked as fixed in a released version do not show up in Work mode but are included in the reports',	10002,	'Done',	'SKP',	'10048',	'2021-04-04'),
(2,	'Viktorya Scherba',	'6061ba3695acf800717923bf',	'Issues like this one that are marked as fixed in a released version do not show up in Work mode but are included in the reports',	10002,	'Done',	'SKP',	'10046',	'2021-04-04'),
(3,	'Viktorya Scherba',	'6061ba3695acf800717923bf',	'Issues like this one that are marked as fixed in a released version do not show up in Work mode but are included in the reports',	10002,	'Done',	'SKP',	'10047',	'2021-04-04'),
(4,	'Viktorya Scherba',	'6061ba3695acf800717923bf',	'Issues like this one that are marked as fixed in a released version do not show up in Work mode but are included in the reports',	10002,	'Done',	'SKP',	'10044',	'2021-04-04'),
(5,	'Viktorya Scherba',	'6061ba3695acf800717923bf',	'Issues like this one that are marked as fixed in a released version do not show up in Work mode but are included in the reports',	10002,	'Done',	'SKP',	'10043',	'2021-04-04'),
(6,	'Viktorya Scherba',	'6061ba3695acf800717923bf',	'Issues like this one that are marked as fixed in a released version do not show up in Work mode but are included in the reports',	10002,	'Done',	'SKP',	'10045',	'2021-04-04'),
(7,	'Viktorya Scherba',	'6061ba3695acf800717923bf',	'Instructions for deleting this sample board and project are in the description for this issue >> Click the \"SKP-10\" link and read the description tab of the detail view for more',	10002,	'Done',	'SKP',	'10042',	'2021-04-04'),
(8,	'Viktorya Scherba',	'6061ba3695acf800717923bf',	'As teams develop with Kanban they get better at reducing average resolution time (aka Cycle time). The Control Chart in the Reports shows this information',	10002,	'Done',	'SKP',	'10041',	'2021-04-04'),
(9,	'Viktorya Scherba',	'6061ba3695acf800717923bf',	'Filters at the top of the board allow you to quickly cut down the shown items >> Try clicking the \"Recently Updated\" to hide work items not updated in the past day',	10002,	'Done',	'SKP',	'10040',	'2021-04-04'),
(10,	'Viktorya Scherba',	'6061ba3695acf800717923bf',	'... so 2 work items violate the limit and cause the column to be highlighted',	3,	'In Progress',	'SKP',	'10039',	'2021-04-04'),
(11,	'Viktorya Scherba',	'6061ba3695acf800717923bf',	'Work In Progress (WIP) limits highlight delays. This column\'s limit is 1...',	3,	'In Progress',	'SKP',	'10038',	'2021-04-04'),
(12,	'Viktorya Scherba',	'6061ba3695acf800717923bf',	'Add work items with \"+ Create Issue\" at the top right of the screen >> Try adding a new card now',	10000,	'Backlog',	'SKP',	'10035',	'2021-04-04'),
(13,	'Viktorya Scherba',	'6061ba3695acf800717923bf',	'Work items are ranked in priority order (from top to bottom) >> Try dragging this card over the card below to rank its priority lower',	10000,	'Backlog',	'SKP',	'10036',	'2021-04-04'),
(14,	'Viktorya Scherba',	'6061ba3695acf800717923bf',	'Work items flow through different stages from left to right >> Try dragging this card to \"Selected for Development\"',	10000,	'Backlog',	'SKP',	'10037',	'2021-04-04'),
(15,	'Viktorya Scherba',	'6061ba3695acf800717923bf',	'Kanban boards are often divided into streams of work, aka Swimlanes. By default, Kanban boards include an \"Expedite\" swimlane for items marked with the highest priority (like this one)',	10001,	'Selected for Development',	'SKP',	'10034',	'2021-04-04');

-- 2021-04-04 21:06:56
