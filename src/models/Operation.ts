export default class operationModel {
  paper: string;

  date: Date;

  operation: number | undefined;

  quantity: number | undefined;

  price: number;

  charge: number;

  constructor() {
    this.paper = '';
    this.date = new Date();
    this.operation = 0;
    this.quantity = 0;
    this.price = 0;
    this.charge = 0;
  }
}
