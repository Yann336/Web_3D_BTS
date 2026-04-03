import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './src/config/swagger';

const app = express(); // La création de l'app
const PORT = 3000; // numéro de port sur lequel le serveur va écouter.

//  lis le contenue des requetes
app.use(express.json());

// Route documentation Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Lance le serveur sur le port 3000
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

// Exporte l'app pour pouvoir l'utiliser dans d'autres fichiers
export default app;
