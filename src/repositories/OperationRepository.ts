import Operation from '../models/Operation';
import getRealm from '../services/realm';

export default class OperationRepository {
  public GetAll = async (filter: string): Promise<Realm.Results<Operation>> => {
    const realm = await getRealm();

    let data = realm.objects<Operation>('Client');

    if (filter) {
      data = data.filtered(`name contains[c] "${filter}"`);
    }

    return data.sorted('name');
  };

  public GetById = (id: string): boolean => {
    return true;
  };

  public SaveClient = async (
    client: Operation,
    update?: boolean,
  ): Promise<boolean> => {
    const realm = await getRealm();

    try {
      if (!update) {
        realm.write(() => {
          realm.create('Client', client);
        });
      } else {
        realm.write(() => {
          realm.create('Client', client, true);
        });
      }
    } catch {
      return false;
    }

    return true;
  };

  public DeleteClient = async (id: string): Promise<boolean> => {
    const realm = await getRealm();

    try {
      const toDelete = realm
        .objects<Operation>('Client')
        .filtered(`id == "${id}"`);

      realm.write(() => {
        realm.delete(toDelete);
      });
    } catch {
      return false;
    }

    return true;
  };
}
