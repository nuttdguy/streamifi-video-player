DROP DATABASE IF EXISTS streamifi;

CREATE DATABASE streamifi;

USE streamifi;

CREATE TABLE Streams (
    stream_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    token TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    title TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    audience VARCHAR(40) NOT NULL,
    subheading TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    url TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    created_at DATE NOT NULL
);


CREATE TABLE Redeemables (
    redeemables_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    img VARCHAR(64) NOT NULL,
    price INT NOT NULL,
    price_category VARCHAR(64),
    price_category_url VARCHAR(64) NOT NULL
);
