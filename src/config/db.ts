import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Rlwl2023.',
    database: 'inventario_medico',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
