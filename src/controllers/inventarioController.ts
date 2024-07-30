import { Request, Response } from 'express';
import InventarioModel from '../models/inventarioModel';

class InventarioController {
    static async agregarMedicamento(req: Request, res: Response) {
        try {
            await InventarioModel.agregarMedicamento(req.body);
            res.status(201).send('Medicamento agregado');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async actualizarCantidad(req: Request, res: Response) {
        try {
            const { id, cantidad } = req.body;
            await InventarioModel.actualizarCantidad(id, cantidad);
            res.status(200).send('Cantidad actualizada');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async eliminarMedicamentosCaducados(req: Request, res: Response) {
        try {
            await InventarioModel.eliminarMedicamentosCaducados();
            res.status(200).send('Medicamentos caducados eliminados');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async listarMedicamentos(req: Request, res: Response) {
        try {
            const medicamentos = await InventarioModel.listarMedicamentos();
            res.status(200).json(medicamentos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

export default InventarioController;
