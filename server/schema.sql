CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (

  dateCreate DATE, messages VARCHAR(128), userName VARCHAR(32), id int AUTO_INCREMENT primary key, roomName VARCHAR(10)
);
CREATE TABLE users (

  userName VARCHAR(32), id int AUTO_INCREMENT primary key
);
CREATE TABLE rooms (

  roomName VARCHAR(10), id int AUTO_INCREMENT primary key
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

