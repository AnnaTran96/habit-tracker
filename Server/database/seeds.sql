DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    name varchar(50) NOT NULL,
    count int DEFAULT 0
);

INSERT INTO habits (name)
VALUES ('Exercise');