DROP TABLE IF EXISTS habits;
-- DROP TABLE IF EXISTS users;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    name varchar(50) NOT NULL,
    count INTEGER DEFAULT 0,
    frequency INTEGER
);

-- CREATE TABLE users (
--     id serial PRIMARY KEY,
--     username varchar(50) NOT NULL,
--     password varchar(100) NOT NULL
-- );

INSERT INTO habits (name, frequency)
VALUES ('Exercise', 20);