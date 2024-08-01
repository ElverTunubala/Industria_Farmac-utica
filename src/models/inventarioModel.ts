// import pool from '../config/db';
import pool from '../config/db';

interface Medicamento {
    id: string;
    nombre: string;
    cantidad: number;
    fechaDeCaducidad: Date;
    precio: number;
}

class InventarioModel {
    static async agregarMedicamento(medicamento: Medicamento): Promise<void> {
        const query = 'INSERT INTO medicamentos SET ?';
        await pool.query(query, medicamento);
    }

    static async actualizarCantidad(id: string, cantidad: number): Promise<void> {
        const query = 'UPDATE medicamentos SET cantidad = ? WHERE id = ?';
        await pool.query(query, [cantidad, id]);
    }

    static async eliminarMedicamentosCaducados(): Promise<void> {
        const query = 'DELETE FROM medicamentos WHERE fechaDeCaducidad < NOW()';
        await pool.query(query);
    }

    static async listarMedicamentos(): Promise<Medicamento[]> {
        const [rows] = await pool.query('SELECT * FROM medicamentos');
        
        return rows as Medicamento[];
    }
}

export default InventarioModel;
