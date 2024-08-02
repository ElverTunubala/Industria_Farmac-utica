// import pool from '../config/db';
// import Joi from 'joi';
import pool from '../config/db';


interface Medicamento {
    id: number;
    nombre: string;
    cantidad: number;
    fechaDeCaducidad: Date;
    precio: number;
}

//en el metodo agregarMedicamneto no agregue Promise<void> por que ya con el async await es de tipo promesa.
class InventarioModel {
    static async agregarMedicamento(medicamento: Medicamento){
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

    static async listarMedicamentos() {
        const [rows] = await pool.query('SELECT * FROM medicamentos');
        return rows as Medicamento[];
    }
}

export default InventarioModel;
