CREATE DATABASE aula_add2;
USE aula_add2;

CREATE TABLE usuarios(
id int not null auto_increment primary key,
nome varchar(60),
email varchar(60),
senha varchar(60)
);

INSERT INTO usuarios VALUES
(1, "Guilherme", "guilherme@gmail.com", "123456"),
(default, "Giovana", "gica@gmail.com", "123456"),
(default, "Henrique", "henrique@gmail.com", "123456");

SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE id = 1;
