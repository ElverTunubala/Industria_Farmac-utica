import { Request, Response } from 'express';
import pool from '../config/db';
import { Parser } from 'json2csv';

class AnalisisController {
    static async filtrarTratamientos(req: Request, res: Response) {
        try {
            const { medicamentoId, frecuencia, duracion } = req.query;
            let query = 'SELECT * FROM prescripciones WHERE 1=1';
            const params: string[] = [];

            if (medicamentoId) {
                query += ' AND medicamentoId = ?';
                params.push(medicamentoId as string);
            }
            if (frecuencia) {
                query += ' AND frecuencia = ?';
                params.push(frecuencia as string);
            }
            if (duracion) {
                query += ' AND duracion = ?';
                params.push(duracion as string);
            }

            const [rows] = await pool.query(query, params);
            res.status(200).json(rows);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            } else {
                res.status(500).send('An unknown error occurred.');
            }
        }
    }

    static async generarEstadisticas(_req: Request, res: Response) {
        try {
            const query = `
                SELECT medicamentoId, 
                       SUM(CAST(dosis AS SIGNED)) AS totalDosis, 
                       frecuencia, 
                       COUNT(*) AS frecuenciaUso 
                FROM prescripciones 
                GROUP BY medicamentoId, frecuencia
            `;
            const [rows] = await pool.query(query);
            res.status(200).json(rows);
        } catch (error: unknown ) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            } else {
                res.status(500).send('An unknown error occurred.');
            }
        }
    }

    static async exportarDatosCSV(req: Request, res: Response) {
        try {
            const { medicamentoId, frecuencia, duracion } = req.query;
            let query = 'SELECT * FROM prescripciones WHERE 1=1';
            const params: string[] = [];

            if (medicamentoId) {
                query += ' AND medicamentoId = ?';
                params.push(medicamentoId as string);
            }
            if (frecuencia) {
                query += ' AND frecuencia = ?';
                params.push(frecuencia as string);
            }
            if (duracion) {
                query += ' AND duracion = ?';
                params.push(duracion as string);
            }

            const [rows] = await pool.query(query, params);
            const json2csvParser = new Parser();
            const csv = json2csvParser.parse(rows);
            res.header('Content-Type', 'text/csv');
            res.attachment('datos.csv');
            res.send(csv);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            } else {
                res.status(500).send('An unknown error occurred.');
            }
        }
    }
}

export default AnalisisController;
