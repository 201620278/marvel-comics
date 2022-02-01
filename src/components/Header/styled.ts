import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  background: #ee171f;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

    img {
      height: 80px;
      margin-right: 5px;
    }

    div {
      display: flex;
    flex-direction: row;

    }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: #000;
    background: gray;
    height: 40px;
    margin: 15px;
    padding: 10px 10px;
    border-radius: 5px;
    font-weight: 700;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.3);

    svg {
      margin-right: 5px;
      color: #000;
    }
  }
`;
