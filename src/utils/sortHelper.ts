import { IProject } from '@/@types/types';

const OrderedByOption = (
  array: Array<IProject>,
  option: string
): Array<IProject> => {
  let sortedArray;

  if (option === 'DATE_DESC') {
    sortedArray = array.sort(
      (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
    );
  } else {
    sortedArray = array.sort(
      (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
    );
  }
  return sortedArray;
};

export default OrderedByOption;
