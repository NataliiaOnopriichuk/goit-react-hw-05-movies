// import PropTypes from 'prop-types';
import css from './SearchForm.module.css';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [input, setInput] = useState('');
  const [setSearch] = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();
    setSearch({ query: input });
    setInput('');
  };

  return (
    <form className={css.formSubmit} onSubmit={handleSubmit}>
      <input
        className={css.input}
        value={input}
        onChange={event => setInput(event.target.value)}
        type="text"
        placeholder="Search"
      />
      <button className={css.button} type="submit">
        <BiSearch className={css.icon} />
      </button>
    </form>
  );
};
