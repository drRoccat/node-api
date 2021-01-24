export class Project {

  // tslint:disable-next-line:variable-name
  public _id?: string;
  public name: string;
  public earnings: number;
  public consumption: number;
  public profit: number;
  public plannedProfit: number;
  public relevance: number;
  public currency: string;
  public active: boolean;
  public userId: string;

  constructor(item?) {
    if (item != null) {
      this._id = item._id;
      this.name = item.name;
      this.earnings = item.earnings;
      this.consumption = item.consumption;
      this.profit = item.profit;
      this.plannedProfit = item.plannedProfit;
      this.relevance = item.relevance;
      this.currency = item.currency;
      this.active = item.active;
      this.userId = item.userId;
    }
  }
}
