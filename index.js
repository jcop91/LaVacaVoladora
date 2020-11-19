const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./Backend/src/services/swagger.config');

const swaggerDocs = swaggerJsDoc(swaggerOptions);

//const routes = require('./Backend/routes');
const apiRoutes = require('./Backend/routes/api');
require('dotenv').config();
const app = express();

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.static(path.join(__dirname,'dist','la-vaca-voladora')));
app.use('/api', cors());
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'/dist','la-vaca-voladora','index.html'));
    });
apiRoutes(app);

app.listen(port, () => {
console.log('app is running in '+`${process.env.APP_PATH}:${port}`);
});