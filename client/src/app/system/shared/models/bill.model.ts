export class Bill {
  constructor(
    public value: number,
    public currency: string,
    public userId: string,
    // tslint:disable-next-line:variable-name
    public _id?: string
  ) {}
}
