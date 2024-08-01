// import { Router } from 'express';
import { Router } from "express";

import InventarioController from '../controllers/inventarioController';
import PacienteController from '../controllers/pacienteController';
import AnalisisController from '../controllers/analisisController';

const router = Router();

// Rutas de inventario
router.post('/inventarios', InventarioController.agregarMedicamento);
router.put('/inventarios', InventarioController.actualizarCantidad);
router.delete('/inventarios/caducados', InventarioController.eliminarMedicamentosCaducados);
router.get('/inventarios', InventarioController.listarMedicamentos);



// Rutas de pacientes
router.post('/pacientes', PacienteController.registrarPaciente);
router.post('/prescripciones', PacienteController.agregarPrescripcion);
router.get('/prescripciones/:pacienteId', PacienteController.listarPrescripciones);

// Rutas de análisis de datos
router.get('/analisis/tratamientos', AnalisisController.filtrarTratamientos);
router.get('/analisis/estadisticas', AnalisisController.generarEstadisticas);
router.get('/analisis/exportar', AnalisisController.exportarDatosCSV);

export default router;
