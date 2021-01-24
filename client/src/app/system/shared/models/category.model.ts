export class Category {

  // tslint:disable-next-line:variable-name
  public _id?: string;
  public name: string;
  public income: number;
  public outcome: number;
  public projectId: string;
  public userId: string;


  constructor(item?) {
    if (item != null) {
      this._id = item._id;
      this.name = item.name;
      this.income = item.income;
      this.outcome = item.outcome;
      this.projectId = item.projectId;
      this.userId = item.userId;
    }
  }
}

export class ChartCategory {

  public name: string;
  public value: number;

  constructor(category: Category, type: string) {
    if (category != null) {
      if (type === 'income') {
        this.name = category.name;
        this.value = category.income;
      } else if (type === 'outcome') {
        this.name = category.name;
        this.value = category.outcome;
      } else
        {
          return null;
        }
    }
  }
}
