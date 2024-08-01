// import pool from '../config/db';
import pool from '../config/db';

interface Paciente {
    id: string;
    nombre: string;
    edad: number;
    historialMedico: string[];
}

interface Prescripcion {
    id?: number;
    pacienteId: string;
    medicamentoId: string;
    dosis: string;
    frecuencia: string;
    duracion: string;
}

class PacienteModel {
    static async registrarPaciente(paciente: Paciente): Promise<void> {
        const query = 'INSERT INTO pacientes SET ?';
        await pool.query(query, paciente);
    }

    static async agregarPrescripcion(prescripcion: Prescripcion): Promise<void> {
        const query = 'INSERT INTO prescripciones SET ?';
        await pool.query(query, prescripcion);
    }

    static async listarPrescripciones(pacienteId: string): Promise<Prescripcion[]> {
        const query = 'SELECT * FROM prescripciones WHERE pacienteId = ?';
        const [rows] = await pool.query(query, [pacienteId]);
        return rows as Prescripcion[];
    }
}

export default PacienteModel;
