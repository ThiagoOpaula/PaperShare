import Operation from '../models/Operation';
import getRealm from '../services/realm';

export default class OperationRepository {
  public GetAll = async (): Promise<Realm.Results<Operation>> => {
    const realm = await getRealm();

    const data = realm.objects<Operation>('Operation');

    /* if (filter) {
      data = data.filtered(`name contains[c] "${filter}"`);
    } */
    return data;
  };

  public SaveClient = async (action: Operation): Promise<boolean> => {
    const realm = await getRealm();

    try {
      realm.write(() => {
        realm.create('Operation', action);
      });
    } catch (error) {
      console.log('erro ao salvar');
      console.log(error);
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
