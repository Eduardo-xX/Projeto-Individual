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
tagJogador INT,
nickname VARCHAR(60),
nivel INT,
faixaNivel INT,
totalUpgrades INT,
totalXp INT,
xp INT,
dano INT,
defesa INT,
vida INT,
velocidade INT,
critico INT,
chanceCritico INT,
classe VARCHAR(45),
dtCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (fkUsuario, idContaFaitimentos),
CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

SELECT * FROM usuario;
SELECT * FROM mensagem;
SELECT * FROM contaFaitimentos;

TRUNCATE TABLE contaFaitimentos;

INSERT INTO contaFaitimentos (idContaFaitimentos, fkUsuario, tagJogador, nickname, nivel, faixaNivel, 
	totalUpgrades, totalXp, xp, dano, defesa, vida, velocidade, critico, chanceCritico, classe)
	SELECT IFNULL(MAX(idContaFaitimentos), 0) + 1, 1, CONCAT((IFNULL(MAX(idContaFaitimentos), 0) + 1), '1'), 'Zduardo',
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 'Rank D'
FROM (SELECT * FROM contaFaitimentos) AS temp;
    
    
SELECT idContaFaitimentos, fkUsuario, tagJogador, nickname, nivel, faixaNivel, totalUpgrades, totalXp, xp, 
	dano, defesa, vida, velocidade, critico, chanceCritico, classe, dtCadastro 
FROM contaFaitimentos WHERE fkUsuario = fkUsuario;

UPDATE contaFaitimentos SET nivel = 0 WHERE idContaFaitimentos = 1 AND fkUsuario = 1;

UPDATE contaFaitimentos SET 
	nivel = 0,
    faixaNivel = 30,
    totalUpgrades = 6,
    totalXp = 150,
    xp = 80,
    dano = 3,
    defesa = 2,
    vida = 3,
    velocidade = 2,
    critico = 1,
    chanceCritico = 2,
    classe = 'Rank D'
    WHERE idContaFaitimentos = 1 AND fkUsuario = 1;