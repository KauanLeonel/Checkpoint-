import { gerarPDF } from '../services/pdfService.js';

export default async function gerarPDFController(req, res) {
    const dados = req.body;

    try {
        await gerarPDF(dados);
        res.json({ message: 'PDF gerado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
