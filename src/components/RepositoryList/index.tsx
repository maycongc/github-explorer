import { RepositoryItem } from '../RepositoryItem';
import { RepositoryProps } from '../../App';

import { Wrapper } from './styles';

type RepositoryListProps = {
  repositories: RepositoryProps[];
};

export function RepositoryList({
  repositories,
}: RepositoryListProps): JSX.Element {
  return (
    <Wrapper>
      <section>
        <h1>Lista de repositórios</h1>
        <ul>
          {repositories.map(repository => {
            return (
              <RepositoryItem key={repository.id} repoProps={repository} />
            );
          })}
        </ul>
      </section>
    </Wrapper>
  );
}
