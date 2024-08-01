import { Request, Response } from 'express';
import InventarioModel from '../models/inventarioModel';

class InventarioController {
    static async agregarMedicamento(req: Request, res: Response) {
        try {
            await InventarioModel.agregarMedicamento(req.body);
            res.status(201).send('Medicamento agregado');
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            } else {
                res.status(500).send('An unknown error occurred.');
            }
        }
    }

    static async actualizarCantidad(req: Request, res: Response) {
        try {
            const { id, cantidad } = req.body;
            await InventarioModel.actualizarCantidad(id, cantidad);
            res.status(200).send('Cantidad actualizada');
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            } else {
                res.status(500).send('An unknown error occurred.');
            }
        } // Asegúrate de cerrar el bloque try-catch aquí
    } // Aquí se cierra el método actualizarCantidad

    static async eliminarMedicamentosCaducados(_req: Request, res: Response) {
        try {
            await InventarioModel.eliminarMedicamentosCaducados();
            res.status(200).send('Medicamentos caducados eliminados');
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            } else {
                res.status(500).send('An unknown error occurred.');
            }
        }
    }

    static async listarMedicamentos(_req: Request, res: Response) {
        try {
            const medicamentos = await InventarioModel.listarMedicamentos();
            res.status(200).json(medicamentos);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            } else {
                res.status(500).send('An unknown error occurred.');
            }
        }
    }
}

export default InventarioController;
