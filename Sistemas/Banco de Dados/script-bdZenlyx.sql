USE bdZenlyx;
SHOW TABLES;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nickname VARCHAR(45) UNIQUE NOT NULL,
nome VARCHAR(45),
sobrenome VARCHAR(45),
dtNasc DATE,
email VARCHAR(320),
senha VARCHAR(45),
dtCadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE mensagem (
idMensagem INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(320),
telefone CHAR(15),
tema VARCHAR(45),
mensagem VARCHAR(500),
dtMensagem DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contaFaitimentos (
idContaFaitimentos INT UNIQUE NOT NULL,
fkUsuario INT UNIQUE NOT NULL,
nivel INT,
faixaNivel INT,
xp INT,
dano INT,
defesa INT,
vida INT,
velocidade INT,
critico INT,
chanceCritico DECIMAL(5,2),
classe VARCHAR(45),
PRIMARY KEY (fkUsuario, idContaFaitimentos),
CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

SELECT * FROM usuario;
SELECT * FROM mensagem;
SELECT * FROM contaFaitimentos;

TRUNCATE TABLE contaFaitimentos;

INSERT INTO contaFaitimentos (idContaFaitimentos, fkUsuario)
SELECT IFNULL(MAX(idContaFaitimentos), 0) + 1, 1
FROM (SELECT * FROM contaFaitimentos) AS temp;
    
    
SELECT idContaFaitimentos, fkUsuario, nivel, faixaNivel, xp, dano, defesa, vida, velocidade, critico, chanceCritico, classe FROM contaFaitimentos WHERE fkUsuario = fkUsuario