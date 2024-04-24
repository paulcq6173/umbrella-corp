import { TUser } from '@/reducers/loginSlice';

const loadStorage = (key: string) => {
  let foundItem;

  try {
    switch (key) {
      case 'loggedUser':
        foundItem = window.localStorage.getItem('loggedUser');
        if (!foundItem) {
          return undefined;
        }
        return JSON.parse(foundItem);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    console.error('Unexpected error get caught.', error);
  }
};

const saveUser = (user: TUser) => {
  try {
    window.localStorage.setItem('loggedUser', JSON.stringify(user));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    console.error('Unexpected error get caught.', error);
  }
};

export default { loadStorage, saveUser };
