import { Module } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordController } from './record.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Record, RecordSchema } from './schemas/record.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Record.name, schema: RecordSchema }])],
  providers: [RecordService],
  controllers: [RecordController]
})
export class RecordModule {}
