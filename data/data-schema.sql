--
-- Table Users
--
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(60) NOT NULL,
    PASSWORD VARCHAR(60) NOT NULL,
    is_active BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

--
-- Table Profiles
--
CREATE TABLE profiles (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(60) NOT NULL,
    lastname VARCHAR(60) NOT NULL,
    address VARCHAR(100),
    phone VARCHAR(20),
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT users_profiles_user_id_uq UNIQUE (user_id),
    CONSTRAINT users_profiles_user_id_pk FOREIGN KEY (user_id) REFERENCES users (id)
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_unicode_ci;
