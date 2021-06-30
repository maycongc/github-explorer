import React, { useState } from 'react';

import { RepositoryList } from './components/RepositoryList';
import { SearchBar } from './components/SearchBar';

import { GlobalStyles } from './styles/global';

export type RepositoryProps = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

function App(): JSX.Element {
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

  return (
    <>
      <GlobalStyles />
      <SearchBar setRepositories={setRepositories} />
      <RepositoryList repositories={repositories} />
    </>
  );
}

export default App;
