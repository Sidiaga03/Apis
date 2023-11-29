import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ClientesModule } from './modulos/clientes/clientes.module';
import { AutoresModule } from './modulos/autores/autores.module';
import { SeedModule } from './modulos/seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SeedModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "192.168.8.68",
      port: 5433,
      database: "Picasso",
      username: "postgress",
      password: "pswPicasso",
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
