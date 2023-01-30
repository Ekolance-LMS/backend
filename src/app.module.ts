import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';
import { TutorModule } from './tutor/tutor.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      port: 3306,
      database: 'ekolance-lms',
      entities: [],
      synchronize: true,
    }),
    AdminModule,
    StudentModule,
    TutorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
