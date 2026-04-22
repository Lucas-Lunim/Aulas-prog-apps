create database alunos;
use alunos;

CREATE TABLE aprendiz(
id int not null auto_increment primary key,
nome varchar(60),
setor varchar(60),
idade varchar(60)
);

insert into aprendiz values
(1, "rafa", "BPS", "20"),
(default, "caiuq", "crin", "25"),
(default, "henrico", "QMM", "2");

select * from aprendiz;