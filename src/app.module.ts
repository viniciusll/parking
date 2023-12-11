import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('HOST_DB'),
        port: parseInt(configService.get('PORT_DB')),
        username: configService.get('USER_DB'),
        password: configService.get('PASS_DB'),
        database: configService.get('NAME_DB'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        migrations: ['dist/database/migrations/*.{js, ts}'],
        cli: {
          migrationsDir: 'src/database/migrations',
        },
        synchronize: false,
        logging: configService.get('NODE_ENV') === 'local' ? true : false,
      }),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
