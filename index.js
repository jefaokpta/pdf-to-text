const fs = require('fs');
const pdf = require('pdf-parse');

// Ler o PDF
const caminhoPdf = 'pdfs/minuta2.pdf';
const dataBuffer = fs.readFileSync(caminhoPdf);

pdf(dataBuffer).then(data => {
    fs.writeFileSync('txts/minuta-contrato.txt', data.text, 'utf-8');
    console.log("Texto extraído com sucesso!");
});
