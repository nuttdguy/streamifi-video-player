module.exports = {

    DROP_STREAMIFI: 'DROP DATABASE IF EXISTS streamifi_player;',
    CREATE_STREAMIFI: 'CREATE DATABASE IF NOT EXISTS streamifi_player DEFAULT CHARACTER SET utf8mb4;',
    USE_STREAMIFI: 'USE streamifi_player;',

    CREATE_STREAMS: `CREATE TABLE IF NOT EXISTS Streams (
        stream_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        token TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
        title TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
        audience VARCHAR(40) NOT NULL,
        subheading TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
        viewers_total INT NOT NULL,
        viewers_current INT NOT NULL,
        url TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
        created_at DATE NOT NULL
    );`,

    CREATE_REDEEMABLE: `CREATE TABLE IF NOT EXISTS Redeemables (
        redeemable_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        img VARCHAR(64) NOT NULL,
        price INT NOT NULL,
        price_category VARCHAR(64),
        price_category_url VARCHAR(64) NOT NULL
    );`,

    CREATE_EMBERS: `CREATE TABLE IF NOT EXISTS Embers (
        ember_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        label VARCHAR(144) NOT NULL,
        alt VARCHAR(144) NOT NULL,
        offer_title VARCHAR(40) NOT NULL,
        amount VARCHAR(20) NOT NULL,
        offer_img_url VARCHAR(255) NOT NULL,
        promotion VARCHAR(40) NOT NULL,
        cost VARCHAR(20) NOT NULL
    );`,

    CREATE_WALLETS: `CREATE TABLE IF NOT EXISTS Wallets (
        wallet_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        sparks_balance INT NOT NULL,
        sparks_img_src VARCHAR(255) NOT NULL,
        embers_balance INT NOT NULL,
        embers_img_src VARCHAR(255) NOT NULL,
        level INT NOT NULL
    );`
}