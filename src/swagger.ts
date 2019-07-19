import './custom.env';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {INestApplication} from '@nestjs/common/interfaces/nest-application.interface';
export class Swagger {
    private static options;
    private static document;

    /**
     * Swagger configuration
     */
    private static configure() {
        Swagger.options = new DocumentBuilder()
            .setSchemes('http', 'https')
            .setTitle('Log Manager Testing APIs')
            .setDescription('APIs documentation for Log Manager')
            .setVersion('1.0.0')
            .setBasePath(process.env.API_VERSION as string)
            .setContactEmail('kezyolanipekun@gmail.com')
            .addTag('*', 'Maps all routes')
            .build();
    }

    /**
     * Swagger setup initialization
     * @param {INestApplication} app
     */
    public static setup(app: INestApplication) {
        Swagger.configure();
        Swagger.document = SwaggerModule.createDocument(app, Swagger.options);
        SwaggerModule.setup( '/api', app, Swagger.document);
    }
}
