require('dotenv').config();

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Token de acesso não fornecido' });
    }

    if (token !== process.env.ACCESS_TOKEN) {
        return res.status(403).json({ error: 'Token inválido' });
    }

    next();
};

module.exports = authenticateToken;
