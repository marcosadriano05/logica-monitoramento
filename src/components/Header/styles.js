import styled from 'styled-components';

export const Wrapper = styled.header`
  left: 0;
  width: 100%;
  height: 5rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #333;
  z-index: 1000;

  @media (max-width: 600px) {
    padding-left: 3.5rem;
  }
`

export const Logo = styled.div`
  font-size: 2rem;
  color: #fff;
  font-weight: bold;

  span {
    color: #338fff;
  }
`