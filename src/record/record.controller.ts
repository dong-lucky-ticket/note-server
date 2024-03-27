import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { RecordService } from './record.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { Record } from './schemas/record.schema';
import { GetAllRecord } from './dto/get-all-record.dto';

@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Post('input')
  async create(@Body() createRecordDto: CreateRecordDto) {
    return this.recordService.create(createRecordDto);
  }

  @Get('get_all')
  async findAll(): Promise<Record[]> {
    return this.recordService.findAll();
  }

  @Get('get_all_record')
  async findByDate(@Query() getAllRecord: GetAllRecord) {
    return this.recordService.findByDate(getAllRecord);
  }

  @Delete('delete_record/:id')
  async delete(@Param(':id') id: string) {
    return this.recordService.delete(id);
  }
  
}
