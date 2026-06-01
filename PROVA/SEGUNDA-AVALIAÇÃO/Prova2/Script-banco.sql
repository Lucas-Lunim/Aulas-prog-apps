create database empresa;
use empresa;

create table funcionarios(
id int not null auto_increment primary key,
nome varchar(50) not null,
sobrenome varchar(50) not null,
setor varchar(50) not null,
funcao varchar(50) not null
);

select * from funcionarios;