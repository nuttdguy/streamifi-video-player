DROP DATABASE IF EXISTS streamifi;

CREATE DATABASE streamifi;

USE streamifi;

CREATE TABLE Streams (
    stream_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    token TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    title TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    audience VARCHAR(40) NOT NULL,
    subheading TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    viewers_total INT NOT NULL,
    viewers_current INT NOT NULL,
    url TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    created_at DATE NOT NULL
);


CREATE TABLE Redeemables (
    redeemable_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    img VARCHAR(64) NOT NULL,
    price INT NOT NULL,
    price_category VARCHAR(64),
    price_category_url VARCHAR(64) NOT NULL
);


CREATE TABLE Embers (
    ember_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    label VARCHAR(144) NOT NULL,
    alt VARCHAR(144) NOT NULL,
    offer_title VARCHAR(40) NOT NULL,
    amount VARCHAR(20) NOT NULL,
    offer_img_url VARCHAR(255) NOT NULL,
    promotion VARCHAR(40) NOT NULL,
    cost VARCHAR(20) NOT NULL
);


CREATE TABLE Wallets (
    wallet_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sparks_balance INT NOT NULL,
    sparks_img_src VARCHAR(255) NOT NULL,
    embers_balance INT NOT NULL,
    embers_img_src VARCHAR(255) NOT NULL,
    level INT NOT NULL
);

