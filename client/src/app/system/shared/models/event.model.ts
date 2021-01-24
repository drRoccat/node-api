export class HistoryEvent {

  // tslint:disable-next-line:variable-name
  public _id?: string;
  public type: string;
  public amount: number;
  public project: string;
  public category: string;
  public date: Date;
  public bill: string;
  public description: string;
  public userId: string;

  constructor(item?) {
    if (item != null) {
      this._id = item._id;
      this.type = item.type;
      this.amount = item.amount;
      this.project = item.project;
      this.category = item.category;
      this.date = item.date;
      this.bill = item.bill;
      this.description = item.description;
      this.userId = item.userId;
    }
  }
}
