const express = require('express');
const router = express.Router();
const path = require('path');

/**
 * @swagger
 * /:
 *  get:
 *       description: Correr el servicio de Angular
 *       responses:
 *          200:
 *              description: success OK!
 */
router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'..','..','/dist','la-vaca-voladora','index.html'));
    });

 module.exports = router;