const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API for Instagram Application',
        version: '1.0.0',
        description:
          'These all are dummmy APIs ',
        license: {
          name: 'Licensed Under MIT',
          url: 'https://spdx.org/licenses/MIT.html',
        },
      },
      servers: [
        {
          url: 'http://localhost:3000/',
          description: 'Development server',
        },
      ],
    }

export {swaggerDefinition};

