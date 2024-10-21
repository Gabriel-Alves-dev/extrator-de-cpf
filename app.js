const express = require('express');
const authenticateToken = require('./auth');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware para interpretar JSON
app.use(express.json());

// Função para remover caracteres especiais e validar CPF/CNPJ
const cleanCpfCnpj = (value) => {
    // Remove qualquer traço, ponto ou barra
    return value.replace(/[^\d]/g, '');
}

// Rota protegida que captura CPF ou CNPJ e retorna os dois últimos dígitos
app.post('/api/cpf', authenticateToken, (req, res) => {
    const { cpfCnpj } = req.body;

    if (!cpfCnpj) {
        return res.status(400).json({ error: 'CPF ou CNPJ não fornecido' });
    }

    const cleanedCpfCnpj = cleanCpfCnpj(cpfCnpj);

    if (cleanedCpfCnpj.length !== 11 && cleanedCpfCnpj.length !== 14) {
        return res.status(400).json({ error: 'CPF ou CNPJ inválido' });
    }

    const lastTwoDigits = cleanedCpfCnpj.slice(-2);

    res.json({ lastTwoDigits });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`API rodando no domínio ${process.env.DOMAIN}, porta ${port}`);
});
