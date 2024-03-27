import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RecordDocument = HydratedDocument<Record>;

@Schema()
export class Record {
  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true, enum: [ 'expend', 'obtain'] })
  type: string;

  @Prop()
  subtype: string;

  @Prop({ required: true })
  bill: string;

  @Prop()
  date: string;

  @Prop()
  time: string;

  @Prop()
  money: number;

  @Prop()
  froms: string;

  @Prop()
  value: string;
}

export const RecordSchema = SchemaFactory.createForClass(Record);
