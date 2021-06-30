import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { api } from '../../services/api';
import { SearchBarWrapper } from './styles';

import { RepositoryProps } from '../../App';

export type SearchBarProps = {
  setRepositories: Dispatch<SetStateAction<RepositoryProps[]>>;
};

export function SearchBar({ setRepositories }: SearchBarProps): JSX.Element {
  const [user, setUser] = useState('');

  async function handleSearch(event: FormEvent) {
    event.preventDefault();
    const result = await api.get(`${user}/repos`);
    setRepositories(result.data);
  }

  return (
    <SearchBarWrapper onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Digite o nome do usuário"
        value={user}
        onChange={event => setUser(event.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </SearchBarWrapper>
  );
}
