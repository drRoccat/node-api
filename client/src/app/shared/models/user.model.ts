export class User {
  constructor(
    public email: string,
    public password: string,
    public name: string,
    // tslint:disable-next-line:variable-name
    public _id?: string
  ) { }

}
