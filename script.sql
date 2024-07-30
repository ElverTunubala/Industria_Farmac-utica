CREATE DATABASE inventario_medico;

USE inventario_medico;

CREATE TABLE medicamentos (
    id VARCHAR(255) PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    cantidad INT NOT NULL,
    fechaDeCaducidad DATE NOT NULL,
    precio DECIMAL(10, 2) NOT NULL
);

CREATE TABLE pacientes (
    id VARCHAR(255) PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    edad INT NOT NULL,
    historialMedico TEXT
);

CREATE TABLE prescripciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pacienteId VARCHAR(255),
    medicamentoId VARCHAR(255),
    dosis VARCHAR(255),
    frecuencia VARCHAR(255),
    duracion VARCHAR(255),
    FOREIGN KEY (pacienteId) REFERENCES pacientes(id),
    FOREIGN KEY (medicamentoId) REFERENCES medicamentos(id)
);
