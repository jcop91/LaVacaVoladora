const express = require('express');
const port = process.env.PORT || 8080;
const path = require('path');
const cors = require('cors');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./Backend/src/services/swagger.config');

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const routes = require('./Backend/routes');
const apiRoutes = require('./Backend/routes/api');
require('dotenv').config();
const app = express();

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api', cors());
apiRoutes(app);
app.use(express.static(path.join(__dirname,'dist','LaVacaVoladora')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'dist','LaVacaVoladora','index.html'));
    });


app.listen(port, () => {
console.log('app is running in '+`${process.env.APP_PATH}:${port}`);
});