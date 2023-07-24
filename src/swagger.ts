import {Express} from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
const detail={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'my insta db',
            version:'1.0.0',
            description:'this is my db api',
        },
        servers:[
            {
                api:'http://localhost:8080/'
            }

        ]
    },
    apis:['./src/routes/*.ts'],
};
export const setupSwagger = (app: Express) => {
    const doc = swaggerJSDoc(detail);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(doc));
  };