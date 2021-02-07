export default class OperationSchema {
  static schema = {
    name: 'Operation',
    primaryKey: 'id',
    properties: {
      id: { type: 'string' },
      paper: { type: 'string', indexed: true },
      date: 'date',
      operation: { type: 'int', indexed: true },
      quantity: 'int',
      price: 'float',
      charge: 'float',
    },
  };
}
