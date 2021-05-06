import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`

export const Main = styled.main`
  display: flex;
  flex-direction: row;
`

export const Dashboard = styled.section`
  width: 100%;
  min-height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding: 1rem 0;
  }

  .chart {
    width: 30rem;
    height: 18rem;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    .chart {
      width: 25rem;
      height: 15rem;
    }
  }
`