import styled from 'styled-components';

export const ItemsWrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;

  overflow: hidden;

  animation: expand 0.3s;
  @keyframes expand {
    from {
      height: 0%;
    }

    to {
      height: 100%;
    }
  }

  background: #404040;

  padding: 20px;

  border-radius: 10px;

  list-style: none;

  strong {
    font-weight: 600;
    font-size: 17px;
    text-decoration: underline;
  }

  p {
    height: 100%;
    font-size: 14px;
    text-align: justify;
    margin-top: 8px;
  }

  a {
    display: flex;
    width: fit-content;
    margin-top: 16px;
    text-decoration: none;
    color: #00cce3;

    justify-self: flex-end;
  }
`;
