import { RepositoryProps } from '../../App';

import { ItemsWrapper } from './styles';

type RepositoryItemProps = {
  repoProps: RepositoryProps;
};

export function RepositoryItem(props: RepositoryItemProps): JSX.Element {
  const { repoProps } = props;
  const { name, description, html_url: url } = repoProps;

  return (
    <ItemsWrapper>
      <strong>{name}</strong>
      <p>{description}</p>
      <a href={url}>Repository Link</a>
    </ItemsWrapper>
  );
}
