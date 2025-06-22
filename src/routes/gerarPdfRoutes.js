import express from 'express';
import gerarPDFController from '../controllers/gerarPDFController.js';

const router = express.Router();

router.post('/', gerarPDFController);

export default router;
