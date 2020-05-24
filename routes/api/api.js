const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('swagger/swagger.yaml');


router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


module.exports = router;