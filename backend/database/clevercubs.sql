/* ====================================== */
/* KG2Grow Database */
/* Full Database Structure */
/* ====================================== */


/* ✅ CREATE DATABASE */

CREATE DATABASE clevercubs;


/* ✅ USE DATABASE */

USE clevercubs;


/* ====================================== */
/* USERS TABLE */
/* Store parent/admin accounts */
/* ====================================== */

CREATE TABLE users (

    /* unique user id */

    id INT AUTO_INCREMENT PRIMARY KEY,


    /* full name */

    name VARCHAR(100) NOT NULL,


    /* unique email */

    email VARCHAR(100) UNIQUE NOT NULL,


    /* encrypted password */

    password VARCHAR(255) NOT NULL,


    /* account role */

    role ENUM('parent','admin')

    DEFAULT 'parent',


    /* account created date */

    created_at TIMESTAMP

    DEFAULT CURRENT_TIMESTAMP

);


/* ====================================== */
/* PROGRESS TABLE */
/* Store completed games/activities */
/* ====================================== */

CREATE TABLE progress (

    /* unique progress id */

    id INT AUTO_INCREMENT PRIMARY KEY,


    /* connected user */

    user_id INT NOT NULL,


    /* game/activity name */

    activity VARCHAR(100) NOT NULL,


    /* game level */

    level_name VARCHAR(100),


    /* user score */

    score INT DEFAULT 0,


    /* completion status */

    status ENUM('completed','in-progress')

    DEFAULT 'completed',


    /* completion date */

    completed_at TIMESTAMP

    DEFAULT CURRENT_TIMESTAMP,


    /* foreign key */

    FOREIGN KEY (user_id)

    REFERENCES users(id)

    ON DELETE CASCADE

);


/* ====================================== */
/* ACHIEVEMENTS TABLE */
/* Store stars/badges */
/* ====================================== */

CREATE TABLE achievements (

    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    badge_name VARCHAR(100),

    stars INT DEFAULT 0,

    earned_at TIMESTAMP

    DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)

    REFERENCES users(id)

    ON DELETE CASCADE

);


/* ====================================== */
/* SAMPLE ADMIN ACCOUNT */
/* ====================================== */

INSERT INTO users (

    name,
    email,
    password,
    role

)

VALUES (

    'Admin User',

    'admin@kg2grow.com',

    'admin123',

    'admin'

);