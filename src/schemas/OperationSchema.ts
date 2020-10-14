export default class OperationSchema {
  static schema = {
    name: 'Operation',
    primaryKey: 'paper',
    properties: {
      paper: { type: 'string', indexed: true },
      date: 'date',
      operation: { type: 'int', indexed: true },
      Quantity: 'int',
      price: 'float',
      charge: 'float',
    },
  };
}
