import styled from 'styled-components';

export const SearchBarWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  input {
    display: flex;
    height: 40px;
    width: 260px;

    border: 1px solid #00cce3;
    border-radius: 8px 0 0 8px;
    border-right: 0;

    outline: none;
    padding: 0 10px;

    caret-color: #00bee3;
  }

  button {
    height: 40px;

    border-radius: 0 8px 8px 0;
    border: 1px solid #00cce3;
    border-left: 0;

    font: 600 16px 'Roboto';
    color: #fff;
    background: #00cce3;

    padding: 0 5px;

    cursor: pointer;

    &:hover {
      filter: brightness(0.86);
    }
  }
`;
