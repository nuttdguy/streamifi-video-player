DROP DATABASE IF EXISTS Streamifi;

CREATE DATABASE Streamifi;

USE Streamifi;

CREATE TABLE Streams (
    stream_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    stream_url VARCHAR(64) NOT NULL,
    stream_title VARCHAR(120) NOT NULL,
    stream_subheading VARCHAR(120) NOT NULL
);


CREATE TABLE Redeemables (
    redeemables_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    redeemables_img VARCHAR(64) NOT NULL,
    redeemables_price INT NOT NULL
    redeemables_price_category VARCHAR(64)
);

