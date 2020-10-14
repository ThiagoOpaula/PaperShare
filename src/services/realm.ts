import Realm from 'realm';

import OperationSchema from '../schemas/OperationSchema';

export default function getRealm() {
  return Realm.open({
    schema: [OperationSchema],
  });
}
