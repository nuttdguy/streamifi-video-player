DROP DATABASE IF EXISTS Streamifi;

CREATE DATABASE Streamifi;

USE Streamifi;

CREATE TABLE Streams (
    stream_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    stream_token TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    stream_title TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    stream_audience VARCHAR(40) NOT NULL,
    stream_subheading TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    stream_url TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    stream_created_at DATE NOT NULL
);


CREATE TABLE Redeemables (
    redeemables_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    redeemables_img VARCHAR(64) NOT NULL,
    redeemables_price INT NOT NULL,
    redeemables_price_category VARCHAR(64)
);
