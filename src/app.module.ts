import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categorias/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: {
    rejectUnauthorized: false,
  },
  autoLoadEntities: true,
  synchronize: true,
}),
    CategoriaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
