import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px;

    h1 {
      font: 700 32px 'Poppins';
      margin-bottom: 16px;
    }

    ul {
      display: grid;
      max-width: 990px;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px 15px;
    }
  }
`;
