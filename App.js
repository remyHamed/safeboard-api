const express = require('express');
const app = express();
const port = 3000;
const authRoutes = require('./route/authRoute');
app.use(express.json());

app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
