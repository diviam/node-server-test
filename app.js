const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// SQL Server configuration
const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

// Test SQL connection
sql.connect(sqlConfig)
    .then(() => console.log('Connected to SQL Server'))
    .catch((err) => console.error('SQL Connection Error:', err));

// Sample route
app.get('/', (req, res) => {
    res.send('Node.js server is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
