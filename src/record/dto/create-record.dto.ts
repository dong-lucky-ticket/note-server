export class CreateRecordDto {
  readonly user_id: string;
  readonly type: string;
  readonly subtype: string;
  readonly bill: string;
  readonly date: string;
  readonly time: string;
  readonly money: number;
  readonly froms: string;
  readonly value: string;
}