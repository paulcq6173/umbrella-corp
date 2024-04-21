import { useState } from 'react';

const useField = (type: string) => {
  const [value, setValue] = useState<string>('');

  const onChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    setValue(target.value);
  const onReset = () => setValue('');

  return {
    type,
    value,
    onChange,
    onReset,
  };
};

export default useField;
