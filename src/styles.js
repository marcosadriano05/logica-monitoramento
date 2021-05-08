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
  max-height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  h1 {
    padding: 1rem 0;
  }

  .change-chart {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #338fff;
      color: #fff;
      font-size: 1.5rem;
      padding: 0.5rem;
      border: none;
      border-radius: 5px;
      outline: 0;
      transition: background 0.2s;

      &:nth-child(n+2) {
        margin-left: 0.5rem;
      }

      &:hover {
        background: #005ed1;
      }

      &:focus {
        transform: scale(1.05);
        box-shadow: 0 0 10px 0 rgba(0, 94, 209, 0.5);
      }
    }
  }

  .chart {
    width: 30rem;
    height: 18rem;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    .chart {
      width: 25rem;
      height: 15rem;
    }
  }
`