import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Record } from './schemas/record.schema';
import { Model } from 'mongoose';
import { CreateRecordDto } from './dto/create-record.dto';
import { GetAllRecord } from './dto/get-all-record.dto';

@Injectable()
export class RecordService {
  constructor(@InjectModel(Record.name) private readonly recordModel: Model<Record>) {}

  async create(createRecordDto: CreateRecordDto): Promise<Record> {
    const createdRecord = await this.recordModel.create(createRecordDto);
    return createdRecord;
  }

  async findAll(): Promise<Record[]> {
    return this.recordModel.find().sort({ date: 'desc' }).exec();
  }

  async findByDate(getAllRecord: GetAllRecord): Promise<Record[]> {
    const allRecords = await this.recordModel
      .find({ user_id: getAllRecord.user_id })
      .where({ date: { $lte: getAllRecord.date } })
      .sort({ date: 'desc' })
      .limit(15)
      .exec();
    return allRecords.slice(0, 10);
  }
  
  async delete(id: string) {
    const deletedRecord = await this.recordModel.findByIdAndDelete({ _id: id }).exec();
    return deletedRecord;
  }
}
