import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ClientesModule } from './modulos/clientes/clientes.module';
import { AutoresModule } from './modulos/autores/autores.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // SeedModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true
    }),
    AutoresModule,
    ClientesModule
  ],
 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
