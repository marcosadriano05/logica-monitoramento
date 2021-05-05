import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 15rem;
  height: calc(100vh - 5rem);
  background: #091a30;
  transition: all 0.2s;

  a {
    padding: 1rem 1rem;
    color: #fff;
    display: flex;
    align-items: center;
    transition: all 0.2s;

    &:hover {
      background: #204169;
    }

    .icon {
      font-size: 1.5rem;
    }

    span {
      margin-left: 1rem;
      font-size: 1.2rem;
    }
  }

  &:hover {
    width: 15rem;
    
    a {
      width: 100%;
      justify-content: flex-start;

      span {
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    width: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all 0.2s;
    overflow: hidden;

    a {
      justify-content: flex-start;
      transition: all 0.2s;

      span {
        opacity: 0;
        transition: all 0.5s;
      }
    }
  }
`