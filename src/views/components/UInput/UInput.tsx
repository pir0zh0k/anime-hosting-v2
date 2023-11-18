import { ChangeEventHandler } from 'react';
import styles from './UInput.module.scss';

type PropsType = {
    value: string|number,
    placeholder: string,
    type: string,
    handleSearch: ChangeEventHandler<HTMLInputElement>
}

const SearchInput = ({ value, placeholder, type, handleSearch }: PropsType) => {
  return (
    <div>
      <input
        type={type}
        className={styles.input}
        value={value}
        onChange={handleSearch}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
