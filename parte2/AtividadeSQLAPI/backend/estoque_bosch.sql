create database estoque_bosch;
use estoque_bosch;

use aula_add;

create table estoque(
id int primary key not null auto_increment,
nome_peca varchar(100) not null,
codigo_peca varchar(100) not null,
fornecedor varchar(100) not null,
quantidade int not null,
preco_unitario float(10.2) not null,
estoque int not null
);

select * from estoque;