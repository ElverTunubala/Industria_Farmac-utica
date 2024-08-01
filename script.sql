CREATE DATABASE inventario_medico;

USE inventario_medico;

CREATE TABLE medicamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    cantidad INT NOT NULL,
    fechaDeCaducidad DATE NOT NULL,
    precio DECIMAL(10, 2) NOT NULL
);

CREATE TABLE pacientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    edad INT NOT NULL,
    historialMedico TEXT
);

CREATE TABLE prescripciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pacienteId INT,
    medicamentoId INT,
    dosis VARCHAR(255),
    frecuencia VARCHAR(255),
    duracion VARCHAR(255),
    FOREIGN KEY (pacienteId) REFERENCES pacientes(id),
    FOREIGN KEY (medicamentoId) REFERENCES medicamentos(id)
);
