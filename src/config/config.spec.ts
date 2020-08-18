import { ConfigService } from './config.service';

describe('ConfigModule', () => {
    let configService: ConfigService;

    beforeAll(() => {
        configService = new ConfigService();
    });

    it('Debería retornar el nombre de usuario de base de datos basado en el valor del campo USERNAME del archivo .env ==> USERNAME="sanders"', () => {
        expect('sanders').toBe(configService.get('USERNAME'));
    });
});
