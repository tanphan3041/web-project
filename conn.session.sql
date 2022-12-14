CREATE DATABASE `ct313h_labs`;

USE ct313h_labs

CREATE TABLE `contacts` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci',
    `email` TEXT NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
    `address` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
    `phone` TINYTEXT NOT NULL COLLATE 'utf8mb4_general_ci',
    `favorite` TINYINT(1) UNSIGNED NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB;