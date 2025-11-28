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

CREATE TABLE conquista (
idConquista INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
descricao VARCHAR(45)
);

CREATE TABLE conquistadas (
idConquistadas INT AUTO_INCREMENT,
fkContaFaitimentos INT,
fkUsuario INT,
fkConquista INT,
realizado INT,
CONSTRAINT realizadoSimOuNao CHECK (realizado = 1 OR realizado = 0),
dtRegistro DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fkCTConquistadas FOREIGN KEY (fkContaFaitimentos) REFERENCES contaFaitimentos(idContaFaitimentos),
CONSTRAINT fkUConquistadas FOREIGN KEY (fkUsuario) REFERENCES contaFaitimentos(fkUsuario),
CONSTRAINT fkCConquistadas FOREIGN KEY (fkConquista) REFERENCES conquista(idConquista),
PRIMARY KEY (idConquistadas, fkContaFaitimentos, fkUsuario, fkConquista)
);

SELECT * FROM usuario;
SELECT * FROM mensagem;
SELECT * FROM contaFaitimentos;

-- INSERT INTO contaFaitimentos (idContaFaitimentos, fkUsuario, tagJogador, nickname, nivel, faixaNivel, 
-- 	totalUpgrades, totalXp, xp, dano, defesa, vida, velocidade, critico, chanceCritico, classe)
-- 	SELECT IFNULL(MAX(idContaFaitimentos), 0) + 1, 1, CONCAT((IFNULL(MAX(idContaFaitimentos), 0) + 1), '1'), 'Zduardo',
--     0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 'Rank D'
-- FROM (SELECT * FROM contaFaitimentos) AS temp;
    
    
SELECT idContaFaitimentos, fkUsuario, tagJogador, nickname, nivel, faixaNivel, totalUpgrades, totalXp, xp, 
	dano, defesa, vida, velocidade, critico, chanceCritico, classe, dtCadastro 
FROM contaFaitimentos WHERE fkUsuario = fkUsuario;

-- UPDATE contaFaitimentos SET nivel = 0 WHERE idContaFaitimentos = 1 AND fkUsuario = 1;
    
-- INSERT INTO conquista (nome, descricao) VALUES
-- 	('Escudo de Madeira', 'Rank D'),
-- 	('Escudo de Ferro', 'Rank C'),
-- 	('Escudo de Prata', 'Rank B'),
-- 	('Escudo de Ouro', 'Rank A'),
-- 	('Escudo de Diamante', 'Rank S'),
-- 	('Medalha Fraca', '15 Upgrades'),
-- 	('Medalha Média', '30 Upgrades'),
-- 	('Medalha Grande', '70 Upgrades'),
-- 	('Medalha Giga', '100 Upgrades'),
-- 	('Medalha Extra', '150 Upgrades'),
-- 	('Estrela Simples', 'Nível 1'),
-- 	('Estrela Média', 'Nível 3'),
-- 	('Estrela Grande', 'Nível 5'),
-- 	('Estrela MegaGrande', 'Nível 8'),
-- 	('Estrela ExtraGrande', 'Nível 10'),
-- 	('Martelo de Bronze', '5 Conquistas'),
-- 	('Martelo de Prata', '10 Conquistas'),
-- 	('Martelo de Ouro', '15 Conquistas'),
-- 	('Martelo de Diamante', '20 Conquistas'),
-- 	('Martelo de Ruby', '25 Conquistas');
    
SELECT * FROM conquista;

SELECT * FROM conquistadas;

-- INSERT INTO conquistadas (idConquistadas, fkContaFaitimentos, fkUsuario, fkConquista, realizado) VALUES
-- 	(1, 1, 1, 1, 0),
-- 	(2, 1, 1, 2, 0),
-- 	(3, 1, 1, 3, 0),
-- 	(4, 1, 1, 4, 0),
-- 	(5, 1, 1, 5, 0),
-- 	(6, 1, 1, 6, 0),
-- 	(7, 1, 1, 7, 0),
-- 	(8, 1, 1, 8, 0),
-- 	(9, 1, 1, 9, 0),
-- 	(10, 1, 1, 10, 0),
-- 	(11, 1, 1, 11, 0),
-- 	(12, 1, 1, 12, 0),
-- 	(13, 1, 1, 13, 0),
-- 	(14, 1, 1, 14, 0),
-- 	(15, 1, 1, 15, 0),
-- 	(16, 1, 1, 16, 0),
-- 	(17, 1, 1, 17, 0),
-- 	(18, 1, 1, 18, 0),
-- 	(19, 1, 1, 19, 0),
-- 	(20, 1, 1, 20, 0);
    
SELECT realizado, fkConquista FROM conquistadas WHERE realizado = 1 AND fkContaFaitimentos = 1 AND fkUsuario = 1;