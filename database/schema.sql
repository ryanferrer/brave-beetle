CREATE DATABASE IF NOT EXISTS UB;

\c UB;

CREATE TABLE weapons VALUES(
  id INT PRIMARY KEY,
  itemName VARCHAR(30),
  imgURL VARCHAR(255)
);

CREATE TABLE boots VALUES(
  id INTEGER PRIMARY KEY,
  itemName VARCHAR(30),
  imgURL VARCHAR(255)
)

-- Need a copy process from .csv file found in temp_assets

