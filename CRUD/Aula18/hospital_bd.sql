CREATE DATABASE hospital;
USE hospital;

CREATE TABLE paciente(
id_paciente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50) NOT NULL,
data_nascimento DATE NOT NULL,
email VARCHAR(100) NOT NULL
);

CREATE TABLE tb_especialidade(
id_especialidade INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome_especialidade VARCHAR(100) NOT NULL
);

CREATE TABLE medico(
id_medico INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50) NOT NULL,
fk_especialidade INT NOT NULL,

FOREIGN KEY(fk_especialidade) REFERENCES tb_especialidade(id_especialidade)
ON DELETE RESTRICT
ON UPDATE RESTRICT
);

CREATE TABLE atendimento(
id_atendimento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
status_consulta VARCHAR(20) NOT NULL
);

CREATE TABLE consulta(
id_consulta INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
data_consulta DATE NOT NULL,
observacoes TEXT,
fk_paciente INT NOT NULL,
fk_medico INT NOT NULL,
fk_atendimento INT NOT NULL,

FOREIGN KEY (fk_atendimento) REFERENCES atendimento(id_atendimento),
FOREIGN KEY (fk_paciente) REFERENCES paciente(id_paciente),
FOREIGN KEY (fk_medico) REFERENCES medico(id_medico)
ON DELETE RESTRICT
ON UPDATE RESTRICT
);

ALTER TABLE paciente
ADD cpf CHAR(11) NOT NULL UNIQUE,
ADD telefone CHAR(13) NOT NULL,
ADD status_ativo TINYINT DEFAULT 1 NOT NULL,
MODIFY nome VARCHAR(100) NOT NULL,
RENAME TO nome_paciente;

DESCRIBE nome_paciente;

ALTER TABLE medico
MODIFY nome VARCHAR(100) NOT NULL,
RENAME TO nome_medico;

DESCRIBE nome_medico;

ALTER TABLE consulta
CHANGE data_consulta data_atendimento DATE NOT NULL;

ALTER TABLE consulta
ADD hora_consulta DATETIME NOT NULL,
ADD status_consulta VARCHAR(20) NOT NULL;

ALTER TABLE consulta
MODIFY observacoes VARCHAR(500);

ALTER TABLE nome_paciente
MODIFY cpf CHAR(11) NOT NULL;

ALTER TABLE nome_medico
ADD crm CHAR(13) NOT NULL;

CREATE TABLE tb_email(
id_email INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(80) NOT NULL
);

ALTER TABLE nome_paciente
drop column email,
add fk_email int not null,
add foreign key (fk_email)
references tb_email(id_email)
ON DELETE RESTRICT
ON UPDATE RESTRICT;

	