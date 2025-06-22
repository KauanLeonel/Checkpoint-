import puppeteer from 'puppeteer';
import fs from 'fs';

export async function gerarPDF(dados) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const html = `
        <html>
        <head>
            <style>
                body { font-family: Arial; margin: 20px; }
                h1 { color: blue; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid #000; padding: 8px; }
            </style>
        </head>
        <body>
            <h1>Relatório de Pedido</h1>
            <p><strong>Usuário:</strong> ${dados.nome}</p>
            <p><strong>Email:</strong> ${dados.email}</p>
            <h2>Pedidos:</h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Quantidade</th>
                </tr>
                ${dados.pedidos.map(p => `
                    <tr>
                        <td>${p.id}</td>
                        <td>${p.quant_request}</td>
                    </tr>
                `).join('')}
            </table>
        </body>
        </html>
    `;

    await page.setContent(html);
    const pdf = await page.pdf({ format: 'A4', path: `./pdfs/relatorio-${dados.nome}.pdf` });

    await browser.close();

    return pdf;
}
