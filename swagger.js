const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/shared/infra/http/routes/index.ts']

swaggerAutogen(outputFile, endpointsFiles)