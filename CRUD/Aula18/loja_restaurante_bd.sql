create database loja;
use loja;

create table restaurante(
id int not null auto_increment primary key,
produto varchar(50) not null,
categoria varchar(50) not null,
quantidade int not null,
preco decimal(10,2) not null,
valor_total decimal(10,2) not null,
data_venda date not null,
forma_pagamento varchar(20) not null,
nome_vendedor varchar(30) not null
);

insert into restaurante values
(1, "garfo", "utensílio", 2, 5.99, 11.98, "2026-04-29", "Pix", "caquy");

select * from restaurante;

