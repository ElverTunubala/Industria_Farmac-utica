import { Request, Response } from 'express';
import PacienteModel from '../models/pacienteModel';

class PacienteController {
    static async registrarPaciente(req: Request, res: Response) {
        try {
            await PacienteModel.registrarPaciente(req.body);
            res.status(201).send('Paciente registrado');
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            } else {
                res.status(500).send('An unknown error occurred.');
            }
        }
    }

    static async agregarPrescripcion(req: Request, res: Response) {
        try {
            await PacienteModel.agregarPrescripcion(req.body);
            res.status(201).send('Prescripción agregada');
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            } else {
                res.status(500).send('An unknown error occurred.');
            }
        }
    }

    static async listarPrescripciones(req: Request, res: Response) {
        try {
            const { pacienteId } = req.params;
            const prescripciones = await PacienteModel.listarPrescripciones(pacienteId);
            res.status(200).json(prescripciones);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            } else {
                res.status(500).send('An unknown error occurred.');
            }
        }
    }
}

export default PacienteController;
